"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import RoomUserCard from "./roomuserCard";
import { RoomtypeInterface } from "../../../types/types";


interface UserListProps{
    setSelectedRoom: React.Dispatch<React.SetStateAction<RoomtypeInterface | undefined>> 
}

export default function RoomList({setSelectedRoom}: UserListProps) {

    const [rooms, setRooms] = useState<RoomtypeInterface[]>([])
    // const [currentUser, setCurrentUser] = useState<User>()

    useEffect(() => {
        axios.get("http://localhost:3008/getRooms/")
            .then((res) => {console.log(res.data) , setRooms(res.data)})
            .catch((err) => console.log("Error Fetchin Data", err))
    }, []);


    return(
        <div className="bg-gray-100 rounded-2xl h-screen my-2 overflow-y-auto"> 
            {rooms.map((room,index) => (
                <RoomUserCard
                    key={index}
                    room={room}
                    setSelectedRoom={setSelectedRoom}
                    >
                </RoomUserCard>
            ))}           
        </div>
    )
}

