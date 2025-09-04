
interface chatProps{
    message?: string | "this is the message",
    profile?: string,
    time?: string
    sent: boolean
}
export default function Chat(props: chatProps){
    
    return(
        <div className={`${ props.sent ? "bg-pink-400" : "bg-white" } rounded-3xl p-4 mx-10 my-2 ${props.sent ? "text-white" : "text-gray-700"} text-sm shadow-lg ${props.sent ? "ml-auto" : "mr-auto"}`}>
            {props.message}
        </div>
    )
}