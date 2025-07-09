using Deepin.Internal.SDK.Clients;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IUserService
{
    Task<UserProfile?> GetProfileAsync(Guid userId, CancellationToken cancellationToken = default);
    Task<UserProfile?> UpdateProfileAsync(Guid userId, UserProfileRequest request, CancellationToken cancellationToken = default);
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
}
