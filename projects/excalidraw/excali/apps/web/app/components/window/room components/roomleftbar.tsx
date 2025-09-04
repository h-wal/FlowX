import { RoomtypeInterface } from "../../../types/types"
import RoomSearchBar from "./roomsearchbar"
import RoomUserList from "./roomlist"

interface LeftBarProps {
    setSelectedRoom : React.Dispatch<React.SetStateAction<RoomtypeInterface | undefined>> 
}

export default function RoomLeftBar({setSelectedRoom}: LeftBarProps){

    return(
        <div className="bg-white basis-4/12 rounded-3xl m-4 shadow-2xl flex p-4 flex-col">
            <div className="text-2xl font-sans text-gray-800 font-bold my-4">
                Rooms
            </div>
            <RoomSearchBar />
            <RoomUserList setSelectedRoom={setSelectedRoom} />
        </div>
    )
} 

