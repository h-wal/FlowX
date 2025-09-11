"use client"
import personalIcon from "../../../icons/personalIcon"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./header/header"
import Flow from "./flow/flow"

interface workFlowPanelProps{
    params: any
}

export default function WorkFlowPanel(props: workFlowPanelProps){

    const [workFlow, setWorkFlow] = useState<any>({})
    const id = props.params.id

    useEffect(() => {
        
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3030/api/v1/workflow/singleworkflow?flowId=${id}`, {
                withCredentials: true
            })

            setWorkFlow(res.data)
            console.log(workFlow)
        }

        fetchData()
    }, [])

    
    return (
        <div className="flex flex-col h-screen w-[85%]">
            <Header workFlow={workFlow}></Header>
            <Flow workFlow={workFlow}></Flow>
        </div>
    )
}