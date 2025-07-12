using Deepin.Internal.SDK.Clients;
using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IUserService
{
    Task<UserProfile?> GetProfileAsync(Guid userId, CancellationToken cancellationToken = default);
    Task<IEnumerable<UserProfile>?> BatchGetProfilesAsync(IEnumerable<Guid> userIds, CancellationToken cancellationToken = default);
    Task<UserProfile?> UpdateProfileAsync(Guid userId, UserProfileRequest request, CancellationToken cancellationToken = default);
    Task<IPagedResult<UserProfile>> SearchUsersAsync(SearchUsersRequest request, CancellationToken cancellationToken = default);
}

public class UserService(IDeepinApiClient deepinApiClient) : IUserService
{
    public async Task<UserProfile?> GetProfileAsync(Guid userId, CancellationToken cancellationToken = default)
    {
        if (userId == Guid.Empty)
        {
            throw new ArgumentException("User ID cannot be empty.", nameof(userId));
        }

        var user = await deepinApiClient.Users.GetUserAsync(userId, cancellationToken);
        return user?.ToModel();
    }
    public async Task<UserProfile?> UpdateProfileAsync(Guid userId, UserProfileRequest request, CancellationToken cancellationToken = default)
    {
        if (userId == Guid.Empty)
        {
            throw new ArgumentException("User ID cannot be empty.", nameof(userId));
        }

        if (request == null)
        {
            throw new ArgumentNullException(nameof(request), "User profile cannot be null.");
        }

        var updatedUser = await deepinApiClient.Users.UpdateUserClaimsAsync(userId, request.ToClaims(), cancellationToken);
        return updatedUser?.ToModel();
    }
    public async Task<IPagedResult<UserProfile>> SearchUsersAsync(SearchUsersRequest request, CancellationToken cancellationToken = default)
    {
        if (request == null)
        {
            throw new ArgumentNullException(nameof(request), "Search request cannot be null.");
        }

        var users = await deepinApiClient.Users.SearchUsersAsync(request, cancellationToken);
        if (users == null)
        {
            return new PagedResult<UserProfile>([], request.Offset, request.Limit, 0);
        }
        var items = users.Items.Select(u => u.ToModel()).ToArray();
        return new PagedResult<UserProfile>(items, request.Offset, request.Limit, users.TotalCount);
    }

    public async Task<IEnumerable<UserProfile>?> BatchGetProfilesAsync(IEnumerable<Guid> userIds, CancellationToken cancellationToken = default)
    {
        if (userIds == null || !userIds.Any())
        {
            return [];
        }

        var users = await deepinApiClient.Users.BatchGetUsersAsync(new BatchGetUsersRequest
        {
            Ids = userIds.ToList()
        }, cancellationToken);
        if (users == null || !users.Any())
        {
            return [];
        }
        return users.Select(u => u.ToModel());
    }
}
