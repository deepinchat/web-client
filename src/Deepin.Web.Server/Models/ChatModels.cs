namespace Deepin.Web.Server.Models;

public enum ChatType
{
    Group,
    Direct
}
public class ChatSummary
{
    public Chat Chat { get; set; } = null!;
    public Message? LastMessage { get; set; }
    public long UnreadCount { get; set; }
}
public class Chat
{
    public Guid Id { get; set; }
    public ChatType Type { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? UserName { get; set; }
    public string? Description { get; set; }
    public Guid? AvatarFileId { get; set; }
    public bool IsPublic { get; set; }
}