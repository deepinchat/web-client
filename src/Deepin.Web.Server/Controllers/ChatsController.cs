using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Models;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Deepin.Web.Server.Controllers
{
    public class ChatsController(IChatService chatService) : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<ChatSummary>>> GetAll(CancellationToken cancellationToken = default)
        {
            var chats = await chatService.GetAllChatsAsync(cancellationToken);
            return Ok(chats);
        }

        [HttpGet("group/{id}")]
        public async Task<ActionResult<Chat>> GetGroupChat(Guid id, CancellationToken cancellationToken = default)
        {
            var chat = await chatService.GetGroupChatAsync(id, cancellationToken);
            if (chat is null)
            {
                return NotFound();
            }
            return Ok(chat);
        }

        [HttpPost("group")]
        public async Task<ActionResult<Chat>> CreateGroupChat([FromBody] CreateGroupChatRequest request, CancellationToken cancellationToken = default)
        {
            var chat = await chatService.CreateGroupChatAsync(request, cancellationToken);
            if (chat is null)
            {
                return BadRequest("Failed to create group chat.");
            }
            return CreatedAtAction(nameof(GetGroupChat), new { id = chat.Id }, chat);
        }

        [HttpGet("direct/{id}")]
        public async Task<ActionResult<Chat>> GetDirectChat(Guid id, CancellationToken cancellationToken = default)
        {
            var chat = await chatService.GetDirectChatAsync(id, cancellationToken);
            if (chat is null)
            {
                return NotFound();
            }
            return Ok(chat);
        }

        [HttpGet("search")]
        public async Task<ActionResult<Chat>> Search([FromQuery] SearchChatRequest request, CancellationToken cancellationToken = default)
        {
            var result = await chatService.SearchGroupChatsAsync(request, cancellationToken);
            return Ok(result);
        }
    }
}
