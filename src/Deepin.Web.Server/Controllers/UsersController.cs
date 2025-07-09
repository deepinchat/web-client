using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Models;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Deepin.Web.Server.Controllers
{
    public class UsersController(IUserContext userContext, IUserService userService) : ApiControllerBase
    {
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser(CancellationToken cancellationToken)
        {
            var myProfile = await userService.GetProfileAsync(userContext.UserId, cancellationToken);
            if (myProfile is null)
            {
                return NotFound();
            }
            return Ok(myProfile);
        }

        [HttpPut("me")]
        public async Task<IActionResult> UpdateCurrentUserProfile([FromBody] UserProfileRequest request, CancellationToken cancellationToken)
        {
            var updatedProfile = await userService.UpdateProfileAsync(userContext.UserId, request, cancellationToken);
            if (updatedProfile is null)
            {
                return NotFound();
            }
            return Ok(updatedProfile);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(Guid id, CancellationToken cancellationToken)
        {
            if (id == Guid.Empty)
            {
                return BadRequest("User ID cannot be empty.");
            }
            var userProfile = await userService.GetProfileAsync(id, cancellationToken);
            if (userProfile is null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
        [HttpGet("search")]
        public async Task<IActionResult> SearchUsers([FromQuery] SearchUsersRequest request, CancellationToken cancellationToken)
        {
            if (request == null)
            {
                return BadRequest("Search request cannot be null.");
            }
            var result = await userService.SearchUsersAsync(request, cancellationToken);
            return Ok(result);
        }

    }
}
