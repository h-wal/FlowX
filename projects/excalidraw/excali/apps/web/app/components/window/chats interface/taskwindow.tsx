"use client"
import LeftBar from "./leftbar";
import ChatBox from "./chatbox";
import { useState } from "react";
import { userWindowCardInterface } from "../../../types/types";

export default function TaskWindow(){
    const [selectedUser, setSelectedUser] = useState<userWindowCardInterface | undefined>()
    
    return(
        <div className="flex flex-row w-full">
            <LeftBar setSelectedUser={setSelectedUser} />
            <ChatBox user={selectedUser} />
        </div>
    )
}