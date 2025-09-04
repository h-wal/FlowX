"use client"
import RoomLeftBar from "../room components/roomleftbar"
import RoomChatBox from "../room components/roomchatbox"
import { useState } from "react"
import { RoomtypeInterface } from "../../../types/types"

export default function RoomWindow () {

    const [selectedRoom, setSelectedRoom] = useState<RoomtypeInterface | undefined>()

    return(
        <div className="flex flex-row w-full">
            <RoomLeftBar setSelectedRoom={setSelectedRoom}></RoomLeftBar>
            <RoomChatBox selectedRoom={selectedRoom}></RoomChatBox>
        </div>
    )
}