import { MdEmail } from "react-icons/md"
import { X } from "lucide-react"
import { useState } from "react"
import { useCredPanelSaveButtonStore } from "../../stores/credSaveStore"
import { useCredPanelStore } from "../../../stores/credentialPanel"

export default function TopPanel(){

    const [title, setTitle] = useState("New title")
    const {saveButtonPressed, setSaveButtonPressed} = useCredPanelSaveButtonStore()
    const {credPanelOpen, setCredPanelOpen, type} = useCredPanelStore()

    return(
        <div className="flex flex-row h-[15%] border-b border-[#525355] justify-between p-6">
            <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center">
                    <MdEmail className="text-gray-400 size-8"></MdEmail>
                </div>
                <div className="flex flex-col itmes-center ">
                    <div className="text-md text[#f0f4fa]">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="cursor-pointer hover:bg-[#2e2e2e] p-1/2 px-1 rounded-md border border-[#333334] hover:border-gray-500" />
                    </div>
                    <div className=" px-1 text-sm text-[#a4aab6]">
                        SMTP
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-4">
                    <div onClick={() => {setSaveButtonPressed(true)}} className="bg-[#fe6f5b] hover:bg-[#EF4E39] px-4 py-2 rounded-md cursor-pointer">
                        <div className="text-[12px]">
                            Save
                        </div>
                    </div>
                    <div onClick={() => setCredPanelOpen(false)} className="flex cursor-pointer">
                        <X className="size-5 text-[#a4aab6]"></X>
                    </div>
                </div>
            </div>
        </div>
    )
}