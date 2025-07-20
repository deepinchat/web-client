import { PagedQuery } from "./pagination.model";
import { UserProfile } from "./user.model";

export interface AddContactRequest {
    userIdentity: string;
}

export interface UpdateContactRequest {
    name?: string;
    notes?: string;
}

export interface ContactModel {
    id: string;
    name: string;
    isBlocked?: string;
    isStarred?: string;
    notes?: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    profile: UserProfile;
}

export interface ContactQuery extends PagedQuery {

}