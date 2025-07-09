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
}

export interface UserProfile extends UserProfileRequest {
    id: string;
    username?: string;
    email?: string;
    phoneNumber?: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserPresence {
    userId: string;
    status: PresenceStatus;
    lastSeen: Date;
    customStatus: string;
    customStatusExpiresAt?: Date;
}
export type PresenceStatus = 'online' | 'offline' | 'away' | 'busy' | 'doNotDisturb' | 'custom';