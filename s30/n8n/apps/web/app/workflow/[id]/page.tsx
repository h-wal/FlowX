"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import LeftWorkFlowPanel from "./leftworkflowpanel/leftworkflowpanel"
import WorkFlowPanel from "./workflowpanel/workflowpanel"

export default function WorkFlow(){
    
    const [selectedMenu, setSelectedMenu] = useState("Personal")
    const [workFlow , setWorkFlow] = useState<any>({})
    const params = useParams() 
    const id = params.id

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3030/api/v1/workflow/singleworkflow?flowId=${id}`, {
                withCredentials: true
            });
            setWorkFlow(res.data);
            console.log(res.data)
        };
       
        fetchData();
    }, [])

    return(
        <div className="flex flex-row h-screen w-screen">
            <LeftWorkFlowPanel setSelectedMenu={setSelectedMenu} ></LeftWorkFlowPanel>
            <WorkFlowPanel params={params}></WorkFlowPanel>
        </div>
        
    )
}