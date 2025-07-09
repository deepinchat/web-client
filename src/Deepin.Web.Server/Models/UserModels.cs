namespace Deepin.Web.Server.Models;

public class UserProfile : UserProfileRequest
{
    public Guid Id { get; set; }
    public string? UserName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
}
public class UserProfileRequest
{
    public string? Name { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? PictureId { get; set; }
    public string? BirthDate { get; set; }
    public string? ZoneInfo { get; set; }
    /// <summary>
    /// Locale is a string representing the user's locale, such as "en-US" or "fr-FR".
    /// It is used to determine the language and regional settings for the user.
    /// This property is optional and can be null if the user has not set a locale.
    /// For example, "en-US" represents English as spoken in the United States.
    /// </summary>
    public string? Locale { get; set; }
    public string? Location { get; set; }
    public string? Bio { get; set; }
}