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
    const [saved, setSaved] = useState(true)

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
            <Header saved={saved} setSaved={setSaved} workFlow={workFlow}></Header>
            <Flow saved={saved} setSaved={setSaved} workFlow={workFlow}></Flow>
        </div>
    )
}