"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import UserCard from "./userCard";
import { userWindowCardInterface } from "../../../types/types";

interface User {
    name: string,
    lastActive?: number,
    profileUrl?: string
}

interface UserListProps{
    setSelectedUser: React.Dispatch<React.SetStateAction<userWindowCardInterface | undefined>> 
}

export default function UserList({setSelectedUser}: UserListProps) {

    const [users, setUsers] = useState<User[]>([])
    const [currentUser, setCurrentUser] = useState<User>()

    useEffect(() => {
        axios.get("http://localhost:3008/getUsers/")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log("Error Fetchind Data", err))
    }, []);


    return(
        <div className="bg-gray-100 rounded-2xl h-screen my-2 overflow-y-auto"> 
            {users.map((user,index) => (
                <UserCard
                    key={index}
                    uname={user.name}
                    setSelectedUser={setSelectedUser}
                    >
                </UserCard>
            ))}           
        </div>
    )
}

