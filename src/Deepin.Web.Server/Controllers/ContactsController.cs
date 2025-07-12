using Deepin.Internal.SDK.DTOs;
using Deepin.Web.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Deepin.Web.Server.Controllers
{
    public class ContactsController(IContactService contactService) : ApiControllerBase
    {
        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetContactAsync(Guid id, CancellationToken cancellationToken = default)
        {
            var contact = await contactService.GetContactAsync(id, cancellationToken);
            return Ok(contact);
        }

        [HttpPost]
        public async Task<IActionResult> CreateContactAsync([FromBody] ContactRequest contact, CancellationToken cancellationToken = default)
        {
            var createdContact = await contactService.CreateContactAsync(contact, cancellationToken);
            return CreatedAtAction(nameof(GetContactAsync), new { id = createdContact.Id }, createdContact);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateContactAsync(Guid id, [FromBody] ContactRequest contact, CancellationToken cancellationToken = default)
        {
            var updatedContact = await contactService.UpdateContactAsync(id, contact, cancellationToken);
            return Ok(updatedContact);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteContactAsync(Guid id, CancellationToken cancellationToken = default)
        {
            await contactService.DeleteContactAsync(id, cancellationToken);
            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> GetPagedContactsAsync([FromQuery] SearchContactRequest request, CancellationToken cancellationToken = default)
        {
            var pagedContacts = await contactService.GetPagedContactsAsync(request, cancellationToken);
            return Ok(pagedContacts);
        }
    }
}
