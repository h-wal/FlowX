export interface userWindowCardInterface{
    uname: string,
    lastActive?: number,
    proflieUrl?: string 
}

export interface RoomtypeInterface{
    id: number
    slug: string,
    adminId?: string
    admin?: {
        name: string
    }
}

export interface RoomChatTypeInterface{
    id: number,
    message: string,
    createdAt: string
    roomid : number
    userId: string
    user: {
        name: string
    }
}