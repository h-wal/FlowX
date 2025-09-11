"use client"
import { Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"

interface workFlowTabsProps{
    id: string
    title: string,
    lastUpdated?: number,
    creationDate?: String,
    setSelectedTab: Dispatch<SetStateAction<string>>
}

export default function WorkFlowtabs(props: workFlowTabsProps){
    const router = useRouter()
    return(
        <div onClick={() => (console.log(router.push(`/workflow/${props.id}`)))}className="p-5 w-full bg-[#414243] border border-gray-500 rounded-md cursor-pointer hover:scale-101 transition delay-75">
            <div className=" text-xl">
                {props.title}
            </div>
            <div className="text-md text-gray-400 flex flex-row gap-5">
                <div className="">
                    Last updated {props.lastUpdated} minutes ago   |   Created {props.creationDate}
                </div>
            </div>
        </div>
    )
}