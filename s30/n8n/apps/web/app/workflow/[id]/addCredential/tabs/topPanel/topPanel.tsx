import { MdEmail } from "react-icons/md"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useCredPanelSaveButtonStore } from "../../stores/credSaveStore"
import { useCredPanelStore } from "../../../stores/uiStores/credentialPanel"
import { useCredPanelTitleStore } from "../../stores/credCredPanelTitle"
import { useSelectedCredentialStore } from "../../../overlayPanel/stores/selectedCredentialStore"
import { FaTelegramPlane } from "react-icons/fa"


export default function TopPanel(){

    const {saved, setSaved, saveButtonPressed, setSaveButtonPressed} = useCredPanelSaveButtonStore()
    const {credPanelOpen, setCredPanelOpen, credPanelType} = useCredPanelStore()
    const {CredTitle, setCredTitle} = useCredPanelTitleStore()
    const {selectedCredentialTitle, setSelectedCredentialTitle} = useSelectedCredentialStore()

    function generateTitle() {
        if (!CredTitle || CredTitle.trim() === "") {
            const timestamp = new Date(Date.now()).toLocaleString(); // base36 for shortness
            const newTitle = ((credPanelType == "emailNode") ? `Smtp cred - ${timestamp}` : (credPanelType == "telegramNode") ? `Telegram cred - ${timestamp}` : null);
            setCredTitle(newTitle as string);
            return newTitle;
        }
        return CredTitle;
    }

    useEffect((() => {generateTitle()}), [])

    return(
        <div className="flex flex-row h-[15%] border-b border-[#525355] justify-between p-6">
            <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center">
                    { ( credPanelType == "emailNode" ) ? <MdEmail className="text-gray-400 size-8"></MdEmail> : ( credPanelType == "telegramNode" ) ? <FaTelegramPlane className="size-6"/> : null}
                    
                </div>
                <div className="flex flex-col ">
                    <div className="text-md text-[#f0f4fa]">
                        <input type="text" value={CredTitle} onChange={(e) => {setCredTitle(e.target.value) ; setSaved(false)}} className="w-68 cursor-pointer hover:bg-[#2e2e2e] p-0.5 px-1 rounded-md border border-[#333334] hover:border-gray-500" />
                    </div>
                    <div className=" px-1 text-sm text-[#a4aab6]">
                        { ( credPanelType == "emailNode" ) ? `SMTP` : ( credPanelType == "telegramNode" ) ? `Telegram credentials` : null}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-4">
                    <div onClick={() => {setSaveButtonPressed(true)}} className={`${ saved ? null : `bg-[#fe6f5b] hover:bg-[#EF4E39]`} px-4 py-2 rounded-md cursor-pointer`}>
                        <div className="text-[12px]">
                            {saved ? "Saved" : "Save"}
                        </div>
                    </div>
                    <div onClick={() => {setCredPanelOpen(false); setCredTitle("")}} className="flex cursor-pointer">
                        <X className="size-5 text-[#a4aab6]"></X>
                    </div>
                </div>
            </div>
        </div>
    )
}