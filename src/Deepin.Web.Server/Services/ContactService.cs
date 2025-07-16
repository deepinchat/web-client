using Deepin.Internal.SDK.Clients;
using Deepin.Internal.SDK.DTOs;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IContactService
{
    Task<ContactModel> GetContactAsync(Guid id, CancellationToken cancellationToken = default);
    Task<ContactModel> CreateContactAsync(ContactRequest contact, CancellationToken cancellationToken = default);
    Task<ContactModel> UpdateContactAsync(Guid id, ContactRequest contact, CancellationToken cancellationToken = default);
    Task DeleteContactAsync(Guid id, CancellationToken cancellationToken = default);
    Task<IPagedResult<ContactModel>> GetPagedContactsAsync(SearchContactRequest request, CancellationToken cancellationToken = default);
}
public class ContactService(IDeepinApiClient deepinApiClient, IUserService userService) : IContactService
{
    public async Task<ContactModel> CreateContactAsync(ContactRequest contact, CancellationToken cancellationToken = default)
    {
        var createdContact = await deepinApiClient.Contacts.CreateContactAsync(contact, cancellationToken);
        if (createdContact == null)
        {
            throw new InvalidOperationException("Failed to create contact.");
        }
        UserProfile? contactProfie = null;
        if (createdContact.UserId.HasValue)
        {
            contactProfie = await userService.GetProfileAsync(createdContact.UserId.Value, cancellationToken);
        }
        return createdContact.ToModel(contactProfie);
    }

    public async Task DeleteContactAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var result = await deepinApiClient.Contacts.DeleteContactAsync(id, cancellationToken);
        if (!result)
        {
            throw new InvalidOperationException($"Failed to delete contact with ID {id}.");
        }
    }

    public async Task<ContactModel> GetContactAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var contact = await deepinApiClient.Contacts.GetContactAsync(id, cancellationToken);
        if (contact == null)
        {
            throw new KeyNotFoundException($"Contact with ID {id} not found.");
        }
        UserProfile? contactProfile = null;
        if (contact.UserId.HasValue)
        {
            contactProfile = await userService.GetProfileAsync(contact.UserId.Value, cancellationToken);
        }
        return contact.ToModel(contactProfile);
    }

    public async Task<IPagedResult<ContactModel>> GetPagedContactsAsync(SearchContactRequest request, CancellationToken cancellationToken = default)
    {
        var pagedContacts = await deepinApiClient.Contacts.SearchContactsAsync(request, cancellationToken);
        if (pagedContacts == null || !pagedContacts.Items.Any())
        {
            return new PagedResult<ContactModel>([], request.Offset, request.Limit, 0);
        }
        var userIds = pagedContacts.Items.Where(c => c.UserId.HasValue).Select(c => c.UserId!.Value).ToList();

        IEnumerable<UserProfile> userProfiles = [];
        if (userIds.Any())
        {
            userProfiles = await userService.BatchGetProfilesAsync(userIds, cancellationToken) ?? [];
        }

        return new PagedResult<ContactModel>(pagedContacts.Items.Select(x => x.ToModel(userProfiles.FirstOrDefault(u => u.Id == x.UserId))), pagedContacts.TotalCount, pagedContacts.Offset, pagedContacts.Limit);
    }

    public async Task<ContactModel> UpdateContactAsync(Guid id, ContactRequest contact, CancellationToken cancellationToken = default)
    {
        var updatedContact = await deepinApiClient.Contacts.UpdateContactAsync(id, contact, cancellationToken);
        if (updatedContact == null)
        {
            throw new InvalidOperationException($"Failed to update contact with ID {id}.");
        }
        UserProfile? contactProfile = null;
        if (updatedContact.UserId.HasValue)
        {
            contactProfile = await userService.GetProfileAsync(updatedContact.UserId.Value, cancellationToken);
        }
        return updatedContact.ToModel(contactProfile);
    }
}
