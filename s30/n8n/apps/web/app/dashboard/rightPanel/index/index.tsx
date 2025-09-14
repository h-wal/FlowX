"use client"
import { useState } from "react"
import TopPanel from "./toppanel/toppanel"
import Excecutions from "./excecutions/excecutions"
import WorkFlow from "./workflows/workflows"
import Credentials from "./credentials/credentials"

export default function Index(){

    const [selectedTab, setSelectedTab] = useState("Workflows")
    console.log(selectedTab)

    return(
        <div className="flex flex-col h-full w-full">
            <div className="my-1">
                <TopPanel selectedTab={selectedTab} setSelectedTab={setSelectedTab}></TopPanel>
            </div>
            <div className="text-white">
                {selectedTab == "Excecutions" ? <Excecutions /> : null} 
                {selectedTab == "Workflows" ? <WorkFlow setSelectedTab={setSelectedTab}/> : null} 
                {selectedTab == "Credentials" ? <Credentials /> : null} 
                {selectedTab == "Workflow"}
            </div>
        </div>
    )
}