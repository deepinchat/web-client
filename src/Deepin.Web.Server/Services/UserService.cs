using System;
using Deepin.Internal.SDK.Clients;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IUserService
{
    Task<UserProfile?> GetUserProfileAsync(Guid userId, CancellationToken cancellationToken = default);
}

public class UserService(IDeepinApiClient deepinApiClient) : IUserService
{
    public async Task<UserProfile?> GetUserProfileAsync(Guid userId, CancellationToken cancellationToken = default)
    {
        if (userId == Guid.Empty)
        {
            throw new ArgumentException("User ID cannot be empty.", nameof(userId));
        }

        var user = await deepinApiClient.Users.GetUserAsync(userId, cancellationToken);
        return user?.ToModel();
    }
}
