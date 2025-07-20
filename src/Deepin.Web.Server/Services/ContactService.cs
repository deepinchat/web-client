using Deepin.Internal.SDK.Clients;
using Deepin.Internal.SDK.DTOs;
using Deepin.Web.Server.Exceptions;
using Deepin.Web.Server.Extensions;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Services;

public interface IContactService
{
    Task<ContactModel> GetContactAsync(Guid id, CancellationToken cancellationToken = default);
    Task<ContactModel> CreateContactAsync(AddContactRequest request, CancellationToken cancellationToken = default);
    Task<ContactModel> UpdateContactAsync(Guid id, UpdateContactRequest contact, CancellationToken cancellationToken = default);
    Task DeleteContactAsync(Guid id, CancellationToken cancellationToken = default);
    Task<IPagedResult<ContactModel>> GetPagedContactsAsync(SearchContactRequest request, CancellationToken cancellationToken = default);
}
public class ContactService(IDeepinApiClient deepinApiClient, IUserService userService) : IContactService
{
    public async Task<ContactModel> CreateContactAsync(AddContactRequest contact, CancellationToken cancellationToken = default)
    {
        var user = await userService.GetUserByIdentityAsync(contact.UserIdentity, cancellationToken);
        if (user == null)
        {
            throw new InvalidInputException($"User with identity '{contact.UserIdentity}' not found.");
        }
        var createdContact = await deepinApiClient.Contacts.CreateContactAsync(new CreateContactRequest(user.Id, null, null), cancellationToken);
        if (createdContact == null)
        {
            throw new InvalidOperationException("Failed to create contact.");
        }
        return createdContact.ToModel(user);
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
        var contactProfile = await userService.GetProfileAsync(contact.UserId, cancellationToken);
        if (contactProfile == null)
        {
            throw new KeyNotFoundException($"User profile for contact with ID {id} not found.");
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
        var userIds = pagedContacts.Items.Select(c => c.UserId).ToList();

        var userProfiles = await userService.BatchGetUsersAsync(userIds, cancellationToken) ?? [];

        return new PagedResult<ContactModel>(pagedContacts.Items.Select(x => x.ToModel(userProfiles.First(u => u.Id == x.UserId))), pagedContacts.TotalCount, pagedContacts.Offset, pagedContacts.Limit);
    }

    public async Task<ContactModel> UpdateContactAsync(Guid id, UpdateContactRequest contact, CancellationToken cancellationToken = default)
    {
        var updatedContact = await deepinApiClient.Contacts.UpdateContactAsync(id, contact, cancellationToken);
        if (updatedContact == null)
        {
            throw new InvalidOperationException($"Failed to update contact with ID {id}.");
        }
        var contactProfile = await userService.GetProfileAsync(updatedContact.UserId, cancellationToken);
        if (contactProfile == null)
        {
            throw new KeyNotFoundException($"User profile for contact with ID {id} not found.");
        }
        return updatedContact.ToModel(contactProfile);
    }
}
