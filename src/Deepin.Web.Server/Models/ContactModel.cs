namespace Deepin.Web.Server.Models;

public class ContactModel
{
    public Guid Id { get; set; }

    public required string Name { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Company { get; set; }

    public string? Birthday { get; set; }

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public DateTimeOffset CreatedAt { get; set; }

    public DateTimeOffset UpdatedAt { get; set; }

    public bool IsBlocked { get; set; }

    public bool IsStarred { get; set; }

    public string? Address { get; set; }

    public string? Notes { get; set; }

    public Guid CreatedBy { get; set; }

    public UserProfile? Profile { get; set; }
}