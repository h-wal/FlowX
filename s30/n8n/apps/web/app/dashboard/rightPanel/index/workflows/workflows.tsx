import { Dispatch, SetStateAction } from "react"
import axios from "axios"
import { useState, useEffect } from "react"

import WorkFlowtabs from "./workflowtabs"
interface workflowprops{
    setSelectedTab: Dispatch<SetStateAction<string>>
}
export default function WorkFlow(props: workflowprops){

    const [loading, setLoading] = useState(true)
    const [workFlows, setWorkFlows] = useState<any>([])

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:3030/api/v1/workflow/", {
            withCredentials:true
        })
        .then((res) => {setWorkFlows(res.data); setLoading(false); console.log(res)}) 
        .catch((err) => console.log("error fetching flows from db"+ err))
    }, [])

    function formatDate(dateStr: string) {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });

        return `${day} ${month}`;
    }
        
    return(
        <div>
            <div>
                
            </div>

            <div className="flex flex-col gap-3">
                {Array.isArray(workFlows) && workFlows.map((flow: any) => (
                    <WorkFlowtabs 
                        setSelectedTab={props.setSelectedTab}
                        key={flow.id} 
                        id={flow.id}
                        title={flow.title} 
                        lastUpdated={flow.lastUpdated} 
                        creationDate={((flow.creationDate))} 
                    />
                ))}
            </div>
        </div>
    )
}