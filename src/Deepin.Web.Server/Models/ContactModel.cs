namespace Deepin.Web.Server.Models;

public class ContactModel
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public bool IsBlocked { get; set; }
    public bool IsStarred { get; set; }
    public string? Notes { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
    public required UserProfile Profile { get; set; }
}

public class AddContactRequest
{
    public required string UserIdentity { get; set; }
}