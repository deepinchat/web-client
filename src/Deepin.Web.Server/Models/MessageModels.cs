using Deepin.Internal.SDK.Enums;
using Deepin.Internal.SDK.Models;

namespace Deepin.Web.Server.Models;

public class MessageMention
{
    public MentionType Type { get; set; }
    public Guid? UserId { get; set; }
    public string? UserName { get; set; }
    public int StartIndex { get; set; }
    public int EndIndex { get; set; }
}
public class Message
{
    public Guid Id { get; set; }
    public MessageType Type { get; set; }
    public Guid ChatId { get; set; }
    public Guid? ParentId { get; set; }
    public Guid? ReplyToId { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
    public string? Content { get; set; }
    public string? Metadata { get; set; }
    public bool IsDeleted { get; set; }
    public bool IsRead { get; set; }
    public bool IsEdited { get; set; }
    public bool IsPinned { get; set; }
    public UserProfile? Sender { get; set; }
    public List<MessageAttachmentDto> Attachments { get; set; } = [];
    public IEnumerable<MessageMention> Mentions { get; set; } = [];
}