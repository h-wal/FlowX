import { RoomtypeInterface } from "../../../types/types"
import RoomInputBar from "./roomchatinpbar"
import RoomChatwindow from "./roomchatwindow"
import useSocket from "../../../hooks/useSocket"
import { useEffect, useState } from "react"

interface userProp{
    selectedRoom: RoomtypeInterface | undefined
}

export default function RoomChatBox(prop: userProp){
    const [username, setUsername] = useState<string>("ankit"); // TODO: Get from auth session
    const {socket, loading, error} = useSocket(username);
    const {selectedRoom} = prop

    useEffect(() => {
        if(!socket){
            if (error) {
                console.error("WebSocket error:", error);
            } else {
                console.log("Unable to connect to websocket");
            }
            return;
        }
        
        if (!loading && socket.readyState === WebSocket.OPEN){
            console.log(`${username} has successfully connected to websocket`);
            console.log(`${username} is trying to connect to room ${selectedRoom?.id}`);
            
            // Join the room
            socket.send(JSON.stringify({
                type: 'join_room',
                roomId: selectedRoom?.id,
                username: username
            }));
        }
    }, [socket, loading, selectedRoom?.id, username, error])

     if(!selectedRoom){
        return (
            <div className="basis-8/12 rounded-3xl m-2 shadow-xl flex flex-col items-center justify-center">
                <div className="text-gray-500 text-lg">
                    Kindly Select a Room to Chat
                </div>
            </div>
        )
    }

    return(
        <div className="basis-8/12 rounded-3xl m-2 shadow-xl flex flex-col">
            <div className="basis-11/12 flex flex-col">
                {/*this is the heading of the room chatwindow */}
                <div id="header" className="basis-1/7 text-black flex flex-row items-center p-5 gap-3 bg-white rounded-t-3xl">
                    {(prop.selectedRoom?.slug) && <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>}
                    <div className="text-black flex items-center">
                        { (prop.selectedRoom?.slug) ? (prop.selectedRoom?.slug): 'Kindly Select a Room to Chat'}
                    </div>
                    {error && (
                        <div className="ml-auto text-red-500 text-sm">
                            Connection Error
                        </div>
                    )}
                    {loading && (
                        <div className="ml-auto text-blue-500 text-sm">
                            Connecting...
                        </div>
                    )}
                </div>
                <RoomChatwindow room={prop.selectedRoom}/>         
            </div>
            <RoomInputBar room={prop.selectedRoom} />
        </div>
    )
}