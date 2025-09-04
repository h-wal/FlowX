"use client"

interface chatProps{
    id: number,
    message: string,
    createdAt?: string
    userName: string
    sent: boolean
}

export default function RoomChat(props: chatProps){


    
    return(
        <div className={`${ props.sent ? "bg-pink-400" : "bg-white" } rounded-3xl p-4 mx-10 my-2 ${props.sent ? "text-white" : "text-gray-700"} text-sm shadow-lg ${props.sent ? "ml-auto" : "mr-auto"} gap-4`}>
            { (props.sent) ?
                null : 
                <div className="text-xs text-blue-800 mb-1">
                    ~{props.userName}
                </div>   
            }
            <div>
                {props.message}
            </div>
        </div>
    )
}