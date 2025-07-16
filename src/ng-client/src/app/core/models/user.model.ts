import { PagedQuery } from "./pagination.model";

export interface UserProfileRequest {
    name?: string;
    firstName?: string;
    lastName?: string;
    pictureId?: string;
    birthDate?: string;
    bio?: string;
    locale?: string;
    location?: string;
    zoneInfo?: string;
    company?: string;
}

export interface UserProfile extends UserProfileRequest {
    id: string;
    userName?: string;
    email?: string;
    phoneNumber?: string;
    createdAt: string;
    updatedAt: string;
    pictureUrl?: string;
}

export interface UserPresence {
    userId: string;
    status: PresenceStatus;
    lastSeen: Date;
    customStatus: string;
    customStatusExpiresAt?: Date;
}
export type PresenceStatus = 'online' | 'offline' | 'away' | 'busy' | 'doNotDisturb' | 'custom';

export interface UserSearchRequest extends PagedQuery {

}