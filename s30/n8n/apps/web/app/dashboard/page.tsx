"use client"
import axios from "axios";
import { useEffect, useState} from "react";
import LeftPanel from "./leftPanel/leftpanel";
import RightPanel from "./rightPanel/rightPanel";


export default function Dashboard() {
    const [userId, setUserId] = useState<string | null>()
    const [username, setUsername] = useState<string | null>()
    const [email, setEmail] = useState<string | null>()
    const [laoding, setLoading] = useState<string | null>()
    
    const [selectedMenu, setSelectedMenu] = useState("overview")

    useEffect(() => {
      axios
          .get("http://localhost:3030/api/v1/dashboard", {withCredentials: true})
          .then(res => {console.log(res); setUserId(res.data.user.id); setEmail(res.data.user.email)})
          .catch(err => {
              console.log("axios Error" + err)
          })
    }, [])
  

  return (
    <div className="flex flex-row h-screen w-screen ">
      <LeftPanel setSelectedMenu={setSelectedMenu} ></LeftPanel>
      <RightPanel selectedMenu={selectedMenu} ></RightPanel>
    </div>
  );
}
