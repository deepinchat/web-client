using Deepin.Internal.SDK.Clients;
using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IChatService
{
    Task<Chat?> CreateGroupChatAsync(CreateGroupChatRequest request, CancellationToken cancellationToken);
    Task<List<ChatListItem>> GetAllChatsAsync(CancellationToken cancellationToken);
    Task<Chat?> GetGroupChatAsync(Guid id, CancellationToken cancellationToken);
    Task<List<ChatListItem>> GetDirectChatsAsync(CancellationToken cancellationToken);
    Task<List<ChatListItem>> GetGroupChatsAsync(CancellationToken cancellationToken);
    Task<IPagedResult<Chat>> SearchGroupChatsAsync(SearchChatRequest request, CancellationToken cancellationToken);
}

public class ChatService(IUserContext userContext, IDeepinApiClient deepinApiClient, IMessageService messageService) : IChatService
{
    public async Task<List<ChatListItem>> GetAllChatsAsync(CancellationToken cancellationToken)
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
            chat.UnreadCount = unreadMap.TryGetValue(chat.Id, out var count) ? count : 0;
            chat.LastMessage = lastMessageMap.TryGetValue(chat.Id, out var lastMessage) ? lastMessage : null;
            return chat;
        }).ToList();
    }
    public async Task<List<ChatListItem>> GetGroupChatsAsync(CancellationToken cancellationToken)
    {
        var chats = await deepinApiClient.Chats.GetGroupChatsAsync(cancellationToken);
        if (chats is null || !chats.Any())
        {
            return [];
        }
        return chats.Select(c => c.ToChatListItemModel()).ToList();
    }
    public async Task<List<ChatListItem>> GetDirectChatsAsync(CancellationToken cancellationToken)
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
        return [.. directChats
            .Select(c => c.ToChatListItemModel(users.FirstOrDefault(u => u.Id == c.Members.FirstOrDefault(m => m.UserId != userContext.UserId)?.UserId)?.ToModel()))
            .Where(c => c is not null)];
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
}
