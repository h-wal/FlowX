"use client"
import { useEffect, useState, useRef } from "react"
import RoomChat from "./roomchat"
import { getSession } from "next-auth/react"
import { RoomtypeInterface, RoomChatTypeInterface } from "../../../types/types"
import useSocket from "../../../hooks/useSocket"
import { WebSocketMessageTypes } from "../../../types/websocket"
import { chatAPI } from "../../../lib/api"

interface RoomChatWindowProps{
    room: RoomtypeInterface | undefined
}

export default function RoomChatwindow(props: RoomChatWindowProps){
    const [messages, setMessages] = useState<RoomChatTypeInterface[]>([])
    const [username, setUsername] = useState<string | null>(null)
    const [userId, setUserId] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const { socket, loading: socketLoading } = useSocket(username)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        if(!props.room){
            return
        }
        
        async function getPrevMessages(){
            setIsLoading(true)
            setError(null)
            
            try {
                console.log("Fetching messages for room:", props.room?.id)

                const res = await chatAPI.getChat(props.room?.id);

                setMessages(res.message || [])
            } catch(e) {
                console.error("Error fetching messages:", e)
                setError("Failed to load messages")
            } finally {
                setIsLoading(false)
            }
        } 

        getPrevMessages()
    }, [props.room])

    useEffect(() => {
        async function getSessionUsername(){
            try {
                const session = await getSession()
                console.log("Session user:", session?.user.name)
                setUsername(session?.user.name || null)
            } catch (err) {
                console.error("Error getting session:", err)
                setError("Failed to get user session")
            }
        }

        getSessionUsername()
    }, [])

    // Handle WebSocket messages
    useEffect(() => {
        if (!socket || socketLoading) return

        const handleMessage = (event: MessageEvent) => {
            try {
                const data: WebSocketMessageTypes = JSON.parse(event.data)
                console.log("Received WebSocket message:", data)

                switch (data.type) {
                    case 'chat_message':
                        // Add new message to the list
                        const newMessage: RoomChatTypeInterface = {
                            id: Date.now(), // Temporary ID
                            message: data.message,
                            createdAt: data.timestamp,
                            roomid: data.roomId,
                            userId: data.userId,
                            user: {
                                name: data.username || 'Unknown User'
                            }
                        }
                        setMessages(prev => [...prev, newMessage])
                        break
                    
                    case 'user_joined':
                        console.log(`${data.username} joined the room`)
                        break
                    
                    case 'user_left':
                        console.log(`${data.username} left the room`)
                        break
                    
                    default:
                        console.log("Unknown message type:", data.type)
                }
            } catch (err) {
                console.error("Error parsing WebSocket message:", err)
            }
        }

        socket.addEventListener('message', handleMessage)

        return () => {
            socket.removeEventListener('message', handleMessage)
        }
    }, [socket, socketLoading])

    if (isLoading) {
        return (
            <div className="h-143 flex items-center justify-center">
                <div className="text-gray-500">Loading messages...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="h-143 flex items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        )
    }

    return(
        <div className="h-143 overflow-y-auto flex flex-col space-y-reverse p-4">
            {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                    No messages yet. Start the conversation!
                </div>
            ) : (
                messages.slice().reverse().map((message, index) => (
                    <RoomChat 
                        id={message.id}
                        key={`${message.id}-${index}`}
                        sent={username === message.user.name}
                        message={message.message}
                        userName={message.user.name}
                    />
                ))
            )}
            <div ref={messagesEndRef} />
        </div>
    )
}