import { userWindowCardInterface } from "../../../types/types"
import SearchBar from "./searchbar"
import UserList from "./userlist"

interface LeftBarProps {
    setSelectedUser : React.Dispatch<React.SetStateAction<userWindowCardInterface | undefined>> 
}

export default function LeftBar({setSelectedUser}: LeftBarProps){

    return(
        <div className="bg-white basis-4/12 rounded-3xl m-4 shadow-2xl flex p-4 flex-col">
            <div className="text-2xl font-sans text-gray-800 font-bold my-4">
                Chat
            </div>
            <SearchBar />
            <UserList setSelectedUser={setSelectedUser} />
        </div>
    )
} 
