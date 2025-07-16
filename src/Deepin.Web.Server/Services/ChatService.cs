using Deepin.Internal.SDK.Clients;
using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IChatService
{
    Task<Chat?> CreateGroupChatAsync(CreateGroupChatRequest request, CancellationToken cancellationToken);
    Task<List<ChatSummary>> GetAllChatsAsync(CancellationToken cancellationToken);
    Task<Chat?> GetGroupChatAsync(Guid id, CancellationToken cancellationToken);
    Task<List<Chat>> GetGroupChatsAsync(CancellationToken cancellationToken);
    Task<List<Chat>> GetDirectChatsAsync(CancellationToken cancellationToken);
    Task<Chat> GetDirectChatAsync(Guid id, CancellationToken cancellationToken);
    Task<IPagedResult<Chat>> SearchGroupChatsAsync(SearchChatRequest request, CancellationToken cancellationToken);
}

public class ChatService(IUserContext userContext, IDeepinApiClient deepinApiClient, IMessageService messageService) : IChatService
{
    public async Task<List<ChatSummary>> GetAllChatsAsync(CancellationToken cancellationToken)
    {
        var groupChats = await GetGroupChatsAsync(cancellationToken);
        var directChats = await GetDirectChatsAsync(cancellationToken);
        var allChats = groupChats.Concat(directChats).ToList();
        if (allChats is null || !allChats.Any())
        {
            return [];
        }
        var lastMessages = await messageService.GetLastMessagesAsync(new GetLastMessagesRequest
        {
            ChatIds = allChats.Select(c => c.Id).ToList(),
        }, cancellationToken);
        var lastMessageMap = lastMessages
            .ToDictionary(m => m.ChatId, m => m);
        var unreadCounts = await deepinApiClient.Chats.GetUnreadCounts(cancellationToken);
        var unreadMap = unreadCounts.ToDictionary(uc => uc.ChatId, uc => uc.UnreadCount);
        return allChats.Select(chat =>
        {
            return new ChatSummary
            {
                Chat = chat,
                UnreadCount = unreadMap.TryGetValue(chat.Id, out var count) ? count : 0,
                LastMessage = lastMessageMap.TryGetValue(chat.Id, out var lastMessage) ? lastMessage : null
            };
        }).ToList();
    }
    public async Task<List<Chat>> GetGroupChatsAsync(CancellationToken cancellationToken)
    {
        var chats = await deepinApiClient.Chats.GetGroupChatsAsync(cancellationToken);
        if (chats is null || !chats.Any())
        {
            return [];
        }
        return chats.Select(c => c.ToModel()).ToList();
    }
    public async Task<List<Chat>> GetDirectChatsAsync(CancellationToken cancellationToken)
    {
        var directChats = await deepinApiClient.Chats.GetDirectChatsAsync(cancellationToken);
        if (directChats is null || !directChats.Any())
        {
            return [];
        }
        var userIds = directChats.
            SelectMany(c => c.Members)
            .Select(m => m.UserId)
            .Where(u => u != userContext.UserId)
            .Distinct()
            .ToList();

        var users = await deepinApiClient.Users.BatchGetUsersAsync(new BatchGetUsersRequest
        {
            Ids = userIds
        }, cancellationToken);
        if (users is null || !users.Any())
        {
            return [];
        }
        return directChats
            .Select(c =>
            {
                var member = c.Members.FirstOrDefault(m => m.UserId != userContext.UserId);
                if (member is null)
                {
                    return null;
                }
                var user = users.FirstOrDefault(u => u.Id == member.UserId);
                if (user is null)
                {
                    return null;
                }
                return c.ToModel(user.ToModel());
            })
            .Where(c => c is not null)
            .Select(c => c!)
            .ToList();
    }
    public async Task<Chat?> GetGroupChatAsync(Guid id, CancellationToken cancellationToken)
    {
        var chat = await deepinApiClient.Chats.GetGroupChatAsync(id, cancellationToken);
        return chat?.ToModel();
    }
    public async Task<Chat?> CreateGroupChatAsync(CreateGroupChatRequest request, CancellationToken cancellationToken)
    {
        var chat = await deepinApiClient.Chats.CreateGroupChatAsync(request, cancellationToken);
        return chat?.ToModel();
    }

    public async Task<IPagedResult<Chat>> SearchGroupChatsAsync(SearchChatRequest request, CancellationToken cancellationToken)
    {
        var result = await deepinApiClient.Chats.SearchChatsAsync(request, cancellationToken);
        if (result is null || !result.Items.Any())
        {
            return new PagedResult<Chat>
            {
                Items = [],
                TotalCount = 0,
                Offset = 0,
                Limit = request.Limit
            };
        }
        var chats = result.Items.Select(c => c.ToModel()).ToList();
        return new PagedResult<Chat>
        {
            Items = chats,
            TotalCount = result.TotalCount,
            Offset = result.Offset,
            Limit = result.Limit
        };
    }

    public async Task<Chat> GetDirectChatAsync(Guid id, CancellationToken cancellationToken)
    {
        var chat = await deepinApiClient.Chats.GetDirectChatAsync(id, cancellationToken);
        if (chat is null)
        {
            return null!;
        }
        var userId = chat.Members.FirstOrDefault(m => m.UserId != userContext.UserId)?.UserId;
        if (userId is null)
        {
            return null!;
        }
        var user = await deepinApiClient.Users.GetUserAsync(userId.Value, cancellationToken);
        if (user is null)
        {
            return null!;
        }
        return chat.ToModel(user.ToModel());
    }
}
