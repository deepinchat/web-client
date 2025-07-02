using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Constants;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Extensions;

public static class ModelExtensions
{
    public static ChatListItem? ToChatListItemModel(this DirectChatDto chat, UserProfile? userProfile = null)
    {
        if (userProfile is null)
        {
            return null;
        }
        return new ChatListItem
        {
            Id = chat.Id,
            Type = ChatType.Direct,
            Name = userProfile.UserName ?? $"{userProfile.FirstName} {userProfile.LastName}",
            AvatarFileId = string.IsNullOrEmpty(userProfile.PictureId) ? null : Guid.Parse(userProfile.PictureId),
            IsPublic = false
        };
    }
    public static ChatListItem ToChatListItemModel(this GroupChatDto chat)
    {
        return new ChatListItem
        {
            Id = chat.Id,
            Type = ChatType.Group,
            Name = chat.Name,
            AvatarFileId = chat.AvatarFileId,
            IsPublic = chat.IsPublic
        };
    }
    public static Chat ToModel(this GroupChatDto chat)
    {
        var model = new Chat
        {
            Id = chat.Id,
            Type = ChatType.Group,
            CreatedBy = chat.CreatedBy,
            CreatedAt = chat.CreatedAt,
            UpdatedAt = chat.UpdatedAt,
            Name = chat.Name,
            UserName = chat.UserName,
            Description = chat.Description,
            AvatarFileId = chat.AvatarFileId,
            IsPublic = chat.IsPublic
        };
        return model;
    }
    public static UserProfile ToModel(this UserDto user)
    {
        var profile = new UserProfile
        {
            Id = user.Id,
            UserName = user.UserName,
            CreatedAt = user.CreatedAt,
            UpdatedAt = user.UpdatedAt
        };
        if (user.Claims is not null)
        {
            foreach (var claim in user.Claims)
            {
                switch (claim.ClaimType)
                {
                    case DeepinClaimTypes.FirstName:
                        profile.FirstName = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.LastName:
                        profile.LastName = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.Name:
                        profile.Name = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.Picture:
                        profile.PictureId = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.BirthDate:
                        profile.BirthDate = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.ZoneInfo:
                        profile.ZoneInfo = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.Locale:
                        profile.Locale = claim.ClaimValue;
                        break;
                    case "bio":
                        profile.Bio = claim.ClaimValue;
                        break;
                }
            }
        }
        return profile;
    }
    public static Message ToModel(this MessageDto message, UserProfile? sender = null)
    {
        return new Message
        {
            Id = message.Id,
            Type = message.Type,
            ChatId = message.ChatId,
            ParentId = message.ParentId,
            ReplyToId = message.ReplyToId,
            CreatedAt = message.CreatedAt,
            UpdatedAt = message.UpdatedAt,
            Text = message.Text,
            Metadata = message.Metadata,
            IsDeleted = message.IsDeleted,
            IsRead = message.IsRead,
            IsEdited = message.IsEdited,
            IsPinned = message.IsPinned,
            Sender = sender,
            Attachments = message.Attachments,
            Mentions = message.Mentions?.Select(m => new MessageMention
            {
                Type = m.Type,
                UserId = m.UserId,
                StartIndex = m.StartIndex,
                EndIndex = m.EndIndex
            }) ?? []
        };
    }
}
