export interface WebSocketMessage {
    type: string;
    [key: string]: any;
}

export interface JoinRoomMessage extends WebSocketMessage {
    type: 'join_room';
    roomId: number;
    username: string;
}

export interface ChatMessage extends WebSocketMessage {
    type: 'chat_message';
    roomId: number;
    userId: string;
    message: string;
    timestamp: string;
}

export interface LeaveRoomMessage extends WebSocketMessage {
    type: 'leave_room';
    roomId: number;
    username: string;
}

export interface UserJoinedMessage extends WebSocketMessage {
    type: 'user_joined';
    roomId: number;
    username: string;
    timestamp: string;
}

export interface UserLeftMessage extends WebSocketMessage {
    type: 'user_left';
    roomId: number;
    username: string;
    timestamp: string;
}

export type WebSocketMessageTypes = 
    | JoinRoomMessage 
    | ChatMessage 
    | LeaveRoomMessage 
    | UserJoinedMessage 
    | UserLeftMessage;
