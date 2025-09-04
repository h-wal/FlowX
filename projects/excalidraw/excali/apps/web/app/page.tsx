"use client"
import { useState } from "react";

export default function Home() {

  const [roomId, setroomId] = useState("")
  return (
    <div className="bg-black h-screen"> 
      <input type="text" placeholder="roomid" />
      <div className="text-white">
        hi there
      </div>
    </div>
  );
}
