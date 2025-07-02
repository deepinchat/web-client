using Deepin.Internal.SDK.Clients;
using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IMessageService
{
    Task<List<Message>> GetLastMessagesAsync(GetLastMessagesRequest request, CancellationToken cancellationToken = default);
    Task<List<Message>> BatchGetMessagesAsync(List<Guid> ids, CancellationToken cancellationToken = default);
    Task<Message?> GetMessageAsync(Guid id, CancellationToken cancellationToken = default);
    Task<IPagedResult<Message>> GetPagedMessagesAsync(SearchMessagesRequest request, CancellationToken cancellationToken = default);
    Task<Message?> SendAsync(MessageRequest request, CancellationToken cancellationToken = default);
}

public class MessageService(IUserContext userContext, IDeepinApiClient deepinApiClient) : IMessageService
{
    public async Task<Message?> GetMessageAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var message = await deepinApiClient.Messages.GetMessageAsync(id, cancellationToken);
        if (message is null)
        {
            return null;
        }
        if (message.UserId == null || message.UserId == Guid.Empty)
        {
            return message.ToModel();
        }
        var sender = await deepinApiClient.Users.GetUserAsync(message.UserId.Value, cancellationToken);
        return message.ToModel(sender?.ToModel());
    }
    public async Task<List<Message>> GetLastMessagesAsync(GetLastMessagesRequest request, CancellationToken cancellationToken = default)
    {
        var lastMessages = await deepinApiClient.Messages.GetLastMessagesAsync(request, cancellationToken);
        if (lastMessages is null || lastMessages.Count == 0)
        {
            return [];
        }
        var messageIds = lastMessages.Select(m => m.MessageId).ToList();
        return await BatchGetMessagesAsync(messageIds, cancellationToken);
    }
    public async Task<List<Message>> BatchGetMessagesAsync(List<Guid> ids, CancellationToken cancellationToken = default)
    {
        if (ids is null || ids.Count == 0)
        {
            return [];
        }
        var messages = await deepinApiClient.Messages.BatchGetMessagesAsync(new BatchGetMessageRequest
        {
            Ids = ids
        }, cancellationToken);
        if (messages is null || messages.Count == 0)
        {
            return [];
        }
        var userIds = messages.Select(m => m.UserId).Distinct().ToList();
        var users = await deepinApiClient.Users.BatchGetUsersAsync(new BatchGetUsersRequest
        {
            Ids = userIds.Where(id => id.HasValue && id.Value != Guid.Empty).Select(id => id.Value).ToList()
        }, cancellationToken);
        var userMap = users.ToDictionary(u => u.Id, u => u.ToModel());
        return messages.Select(m => m.ToModel(m.UserId.HasValue ? (userMap.TryGetValue(m.UserId.Value, out var profile) ? profile : null) : null)).ToList();
    }
    public async Task<IPagedResult<Message>> GetPagedMessagesAsync(SearchMessagesRequest request, CancellationToken cancellationToken = default(CancellationToken))
    {
        var response = await deepinApiClient.Messages.GetPagedMessagesAsync(request, cancellationToken);
        if (response is null || response.TotalCount == 0)
        {
            return new PagedResult<Message>();
        }
        var userIds = response.Items.Select(m => m.UserId).Distinct().ToList();
        var users = await deepinApiClient.Users.BatchGetUsersAsync(new BatchGetUsersRequest
        {
            Ids = userIds.Where(id => id.HasValue && id.Value != Guid.Empty).Select(id => id.Value).ToList()
        }, cancellationToken);
        var userMap = users.ToDictionary(u => u.Id, u => u.ToModel());
        var items = response.Items.Select(m => m.ToModel(m.UserId.HasValue ? (userMap.TryGetValue(m.UserId.Value, out var profile) ? profile : null) : null)).ToList();
        return new PagedResult<Message>
        {
            Items = items,
            TotalCount = response.TotalCount,
            HasMore = response.HasMore,
            Limit = response.Limit,
            Offset = response.Offset
        };
    }
    public async Task<Message?> SendAsync(MessageRequest request, CancellationToken cancellationToken = default)
    {
        if (request is null)
        {
            throw new ArgumentNullException(nameof(request), "Message request cannot be null.");
        }
        if (request.ChatId == Guid.Empty)
        {
            throw new ArgumentException("Chat ID cannot be empty.", nameof(request.ChatId));
        }
        var message = await deepinApiClient.Messages.SendMessageAsync(request, cancellationToken);
        if (message is null)
        {
            return null;
        }
        var sender = await deepinApiClient.Users.GetUserAsync(userContext.UserId, cancellationToken);
        return message.ToModel(sender?.ToModel());
    }
}