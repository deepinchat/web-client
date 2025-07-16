import { PagedQuery } from "./pagination.model";
import { UserProfile } from "./user.model";

export interface ContactRequest {
    name: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    birthday?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    notes?: string;
}

export interface ContactModel {
    id: string;
    name: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    birthday?: string;
    email?: string;
    phoneNumber?: string;
    createdAt: Date;
    updatedAt: Date;
    isBlocked: boolean;
    isStarred: boolean;
    address?: string;
    notes?: string;
    createdBy: string;
    profile?: UserProfile;
}

export interface ContactQuery extends PagedQuery {

}
// public class ContactModel
// {
//     public Guid Id { get; set; }

//     public required string Name { get; set; }

//     public string? FirstName { get; set; }

//     public string? LastName { get; set; }

//     public string? Company { get; set; }

//     public string? Birthday { get; set; }

//     public string? Email { get; set; }

//     public string? PhoneNumber { get; set; }

//     public DateTimeOffset CreatedAt { get; set; }

//     public DateTimeOffset UpdatedAt { get; set; }

//     public bool IsBlocked { get; set; }

//     public bool IsStarred { get; set; }

//     public string? Address { get; set; }

//     public string? Notes { get; set; }

//     public Guid CreatedBy { get; set; }

//     public UserProfile? Profile { get; set; }
// }