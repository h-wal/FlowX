"use client"
import { SetStateAction, Dispatch, FC} from "react"
import { useRouter } from "next/navigation"

interface leftPanelTabsProps{
    name: string
    icon: any
    setSelectedMenu: Dispatch<SetStateAction<string>>
}

export default function LeftWorkFlowPanelTabs(props: leftPanelTabsProps){

    const router = useRouter();

    return(
        <div className="p-3 py-3 mx-3 rounded-sm text-sm text-gray-300 hover:bg-[#535456] transition delay-50 cursor-pointer flex flex-row gap-4"
            onClick={() => {router.push("/dashboard")}}>
            {props.icon}
            {props.name}
        </div>
        
    )
}