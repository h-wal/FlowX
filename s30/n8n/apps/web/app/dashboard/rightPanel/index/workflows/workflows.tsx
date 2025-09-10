import axios from "axios"
import { useState, useEffect } from "react"

import WorkFlowtabs from "./workflowtabs"

export default function WorkFlow(){

    useEffect(() => {
        axios.get
    })
    return(
        <div>
            <div>
                
            </div>
            <div className="flex flex-col gap-3">
                <WorkFlowtabs title="workflow1" lastUpdated={20} creationDate={"10 September"}></WorkFlowtabs>
                <WorkFlowtabs title="secondOne" lastUpdated={2} creationDate={"3 September"}></WorkFlowtabs>
                <WorkFlowtabs title="Wf3" lastUpdated={89} creationDate={"1 September"}></WorkFlowtabs>
            </div>
        </div>
    )
}