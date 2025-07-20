using Deepin.Internal.SDK.DTOs;
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
    public static IEnumerable<UserCliamRequest> ToClaims(this UserProfileRequest request)
    {
        var claims = new List<UserCliamRequest>();
        if (!string.IsNullOrEmpty(request.FirstName))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.FirstName, request.FirstName));
        }
        if (!string.IsNullOrEmpty(request.LastName))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.LastName, request.LastName));
        }
        if (!string.IsNullOrEmpty(request.Name))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.Name, request.Name));
        }
        if (!string.IsNullOrEmpty(request.PictureId))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.PictureId, request.PictureId));
        }
        if (!string.IsNullOrEmpty(request.BirthDate))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.BirthDate, request.BirthDate));
        }
        if (!string.IsNullOrEmpty(request.ZoneInfo))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.ZoneInfo, request.ZoneInfo));
        }
        if (!string.IsNullOrEmpty(request.Locale))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.Locale, request.Locale));
        }
        if (!string.IsNullOrEmpty(request.Bio))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.Bio, request.Bio));
        }
        if (!string.IsNullOrEmpty(request.Location))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.Location, request.Location));
        }
        if (!string.IsNullOrEmpty(request.Company))
        {
            claims.Add(new UserCliamRequest(DeepinClaimTypes.Company, request.Company));
        }
        return claims;
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
                    case DeepinClaimTypes.PictureId:
                        profile.PictureId = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.Picture:
                        profile.PictureUrl = claim.ClaimValue;
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
                    case DeepinClaimTypes.Location:
                        profile.Location = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.Bio:
                        profile.Bio = claim.ClaimValue;
                        break;
                    case DeepinClaimTypes.Company:
                        profile.Company = claim.ClaimValue;
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
    public static ContactModel ToModel(this ContactDto contact, UserProfile profile)
    {
        return new ContactModel
        {
            Id = contact.Id,
            Name = contact.Name ?? profile.Name ?? "Unknown",
            Notes = contact.Notes,
            CreatedAt = contact.CreatedAt,
            UpdatedAt = contact.UpdatedAt,
            IsBlocked = contact.IsBlocked,
            IsStarred = contact.IsStarred,
            CreatedBy = contact.CreatedBy,
            Profile = profile
        };
    }
}
