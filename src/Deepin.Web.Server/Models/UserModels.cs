namespace Deepin.Web.Server.Models;

public class UserProfile
{
    public Guid Id { get; set; }
    public string? UserName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
    public string? Name { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? PictureId { get; set; }
    public string? BirthDate { get; set; }
    public string? ZoneInfo { get; set; }
    public string? Locale { get; set; }
    public string? Bio { get; set; }
}