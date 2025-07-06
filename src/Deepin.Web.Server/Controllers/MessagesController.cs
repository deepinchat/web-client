using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Deepin.Web.Server.Controllers
{
    public class MessagesController(IMessageService messageService) : ApiControllerBase
    {
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id, CancellationToken cancellationToken = default)
        {
            if (id == Guid.Empty)
            {
                return BadRequest("Message ID cannot be empty.");
            }

            var message = await messageService.GetMessageAsync(id, cancellationToken);
            if (message is null)
            {
                return NotFound();
            }

            return Ok(message);
        }
        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] MessageRequest request, CancellationToken cancellationToken = default)
        {

            var createdMessage = await messageService.SendAsync(request, cancellationToken);
            if (createdMessage is null)
            {
                return BadRequest("Failed to create message.");
            }
            return CreatedAtAction(nameof(Get), new { id = createdMessage.Id }, createdMessage);
        }
        [HttpGet]
        public async Task<IActionResult> GetPagedAsync([FromQuery] SearchMessagesRequest request, CancellationToken cancellationToken = default)
        {
            if (request is null)
            {
                return BadRequest("Search request cannot be null.");
            }

            var response = await messageService.GetPagedMessagesAsync(request, cancellationToken);

            return Ok(response);
        }
    }
}
