"use client"

import { dropDownMenu } from "../../../icons/dropdownmenu"
import axios from "axios"
import { useRouter } from "next/navigation"
import { API_BASE_URL } from "../../../lib/api"

export default function CreateWorkFlowButton() {
    const router = useRouter()

    async function addWorkFlow() {
        const { data: workflowId } = await axios.post(
            `${API_BASE_URL}/api/v1/workflow/`,
            {},
            { withCredentials: true }
        )
        router.push(`/workflow/${workflowId}`)
    }
    return(
        <div className="bg-[#fe6f5b] text-white flex flex-row rounded-md items-center justify-center">
            <div onClick={addWorkFlow} className=" border-r h-full text-xs px-2 border-white hover:bg-orange-700 hover:rounded-md cursor-pointer flex items-center justify-center">
                <div>
                    Create Workflow    
                </div>
            </div>
            <div className="h-full flex justify-center items-center cursor-pointer hover:bg-orange-700 hover:rounded-md">
                <div className="p-1">
                    {dropDownMenu}
                </div>
            </div>   
        </div>
    )
}
