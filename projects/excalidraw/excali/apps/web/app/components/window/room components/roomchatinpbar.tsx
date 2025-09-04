"use client"
import { RoomtypeInterface } from "../../../types/types"
import SendIcon from "../../icons/sendicon"
import { useState, useEffect, useRef } from "react"
import { getSession } from "next-auth/react"
import { chatAPI } from "../../../lib/api"

interface inputBarProps{
    room: RoomtypeInterface | undefined
}

export default function RoomInputBar(props: inputBarProps){
    const user = useRef<any>(null)
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getUserDetails(){
            try {
                const session = await getSession()
                user.current = session?.user

                if (!user.current?.name || !user.current?.email) {
                    setError("User session not found");
                    return;
                }

                console.log("User session:", user.current)

                const response = await chatAPI.getUserId(user.current.name, user.current.email)

                user.current = response.id
                console.log("User ID:", user.current)
                setError(null)
            } catch (err) {
                console.error("Error getting user details:", err)
                setError("Failed to get user details")
            }
        }
        
        getUserDetails()
    }, [])

    async function sendMessage(messageText: string) {
        if (!messageText.trim() || !user.current || !props.room?.id) {
            return;
        }

        setIsLoading(true)
        setError(null)

        try {
            console.log("Sending message:", {
                chat: messageText,
                userId: user.current, 
                roomId: props.room.id
            })

            await chatAPI.addChat(messageText, user.current, props.room.id)

            setMessage("")
        } catch (err) {
            console.error("Error sending message:", err)
            setError("Failed to send message")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSendMessage = () => {
        if (message.trim() && !isLoading) {
            sendMessage(message)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return(
        <div className="bg-white basis-1/12 rounded-3xl text-gray-700 text-m flex flex-row items-center justify-between p-2">
            <div className="w-full h-full rounded-3xl relative flex items-center">
                <input 
                    value={message} 
                    className="absolute w-full h-full rounded-3xl px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none" 
                    type="text" 
                    placeholder="Type a message here..." 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                />
                <button 
                    className={`absolute right-2 text-blue-700 border-2 border-blue-700 p-2 rounded-full cursor-pointer transition-colors ${
                        isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:text-white'
                    }`}
                    onClick={handleSendMessage}
                    disabled={isLoading || !message.trim()}
                >
                    <SendIcon />
                </button>
            </div>
            {error && (
                <div className="absolute -top-8 left-0 text-red-500 text-sm">
                    {error}
                </div>
            )}
        </div>
    )
}