using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Deepin.Web.Server.Controllers
{
    public class UsersController(IUserContext userContext, IUserService userService) : ApiControllerBase
    {
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser(CancellationToken cancellationToken)
        {
            var myProfile = await userService.GetUserProfileAsync(userContext.UserId, cancellationToken);
            if (myProfile is null)
            {
                return NotFound();
            }
            return Ok(myProfile);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserProfile(Guid id, CancellationToken cancellationToken)
        {
            if (id == Guid.Empty)
            {
                return BadRequest("User ID cannot be empty.");
            }
            var userProfile = await userService.GetUserProfileAsync(id, cancellationToken);
            if (userProfile is null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
    }
}
