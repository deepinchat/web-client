using Deepin.Internal.SDK.Models;
using Deepin.Web.Server.Constants;
using Deepin.Web.Server.Models;

namespace Deepin.Web.Server.Extensions;

public static class ModelExtensions
{
    public static Chat ToModel(this DirectChatDto chat, UserProfile userProfile)
    {
        return new Chat
        {
            Id = chat.Id,
            Type = ChatType.Direct,
            IsPublic = false,
            CreatedAt = chat.CreatedAt,
            UpdatedAt = chat.UpdatedAt,
            CreatedBy = chat.CreatedBy,
            Name = userProfile.UserName ?? $"{userProfile.FirstName} {userProfile.LastName}",
            AvatarFileId = string.IsNullOrEmpty(userProfile.PictureId) ? null : Guid.Parse(userProfile.PictureId),
            UserName = userProfile.UserName,
            Description = userProfile.Bio
        };
    }
    public static Chat ToModel(this GroupChatDto chat)
    {
        return new Chat
        {
            Id = chat.Id,
            Type = ChatType.Group,
            Name = chat.Name,
            AvatarFileId = chat.AvatarFileId,
            IsPublic = chat.IsPublic,
            CreatedAt = chat.CreatedAt,
            UpdatedAt = chat.UpdatedAt,
            CreatedBy = chat.CreatedBy,
            UserName = chat.UserName,
            Description = chat.Description
        };
    }
    public static UserProfile ToModel(this UserDto user)
    {
        var profile = new UserProfile
        {
            Id = user.Id,
            UserName = user.UserName,
            CreatedAt = user.CreatedAt,
            UpdatedAt = user.UpdatedAt,
            Email = user.Email
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
        var displayName = profile.Name ?? profile.FirstName ?? user.UserName;
        profile.Name = displayName;
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
            Content = message.Content,
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
