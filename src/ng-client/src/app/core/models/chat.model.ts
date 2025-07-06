import { Message } from "./message.model";
import { UserProfile } from "./user.model";

export type ChatType = 'group' | 'direct';
export type ChatMemberRole = 'admin' | 'member' | 'guest' | 'owner' | 'banned' | 'muted';

export interface ChatSummary {
    chat: Chat;
    unreadCount: number;
    lastMessage?: Message;
}
export interface ChatRequest {
    name: string;
    description: string;
    avatarFileId: string;
    isPublic: boolean;
}

export interface Chat {
    id: string;
    type: ChatType;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    name: string;
    userName: string;
    description: string;
    avatarFileId: string;
    isPublic: boolean;
}

export interface ChatMember {
    userId: string;
    displayName: string;
    joinedAt: string;
    updatedAt: Date;
    role: ChatMemberRole;
    profile: UserProfile;
}