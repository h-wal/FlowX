import { usePanelStore } from "../stores/dataPanel"
import { FaTelegramPlane } from "react-icons/fa"
// import EmailMidPanel from "./services/email"
// import AiMidPanel from "./services/aiAgent"
// import TelegramMidPanel from "./services/telegram"
import { MdEmail } from "react-icons/md"
import { X } from "lucide-react"
import LeftPanelTabs from "./tabs/leftPanelTabs"
import { usecredPanelLeftStore } from "./stores/credPanelLeft"
import RightPanelTabs from "./tabs/rightPanelTabs"
import NeedHelp from "./tabs/needHelp"

export default function AddCrendentialPanel(){
    
    const {setPanelOpen, panelOpen, node}  = usePanelStore()
    const {tab, setTab} = usecredPanelLeftStore()
    
    return(
        <div>
            <div id="panelOverlay"  className="h-screen w-screen fixed inset-0 bg-[#454450]/90 z-50 text-white">
                    {/* <div onClick={() => {setPanelOpen(false)}} className="px-8 py-3 text-sm cursor-pointer">
                        Back to canva
                    </div> */}
                    <div className="h-full w-full flex justify-center items-center">
                        <div className=" h-[80%] w-[70%] bg-[#333334] rounded-md border border-[#525355]">
                            <div className="flex flex-row h-[15%] border-b border-[#525355] justify-between p-6">
                                <div className="flex flex-row gap-3">
                                    <div className="flex justify-center items-center">
                                        <MdEmail className="text-gray-400 size-8"></MdEmail>
                                    </div>
                                    <div className="flex flex-col itmes-center gap-1">
                                        <div className="text-md text[#f0f4fa]">
                                            SMTP account 4
                                        </div>
                                        <div className="text-sm text-[#a4aab6]">
                                            SMTP
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row gap-4">
                                        <div onClick={() => {}} className="bg-[#fe6f5b] hover:bg-[#EF4E39] px-4 py-2 rounded-md cursor-pointer">
                                            <div className="text-[12px]">
                                                Save
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <X className="size-5 text-[#a4aab6]"></X>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[85%] w-full flex flex-row">
                                <div className="h-full w-[20%] flex flex-col p-4 gap-2">
                                    <LeftPanelTabs text="Connection"></LeftPanelTabs>
                                    <LeftPanelTabs text="Sharing"></LeftPanelTabs>
                                    <LeftPanelTabs text="Details"></LeftPanelTabs>
                                </div>
                                <div className=" overflow-y-auto flex flex-col h-full w-[80%] p-2 gap-3">

                                    <div className="flex flex-col p-2 pr-4 gap-4">
                                        <NeedHelp></NeedHelp> 
                                        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#8c8ef1] to-[#e97795] bg-clip-text text-transparent">
  Ask Assistant
</h1> 
                                        <RightPanelTabs title={"User"}></RightPanelTabs>
                                        <RightPanelTabs title={"Password"}></RightPanelTabs>
                                        <RightPanelTabs title={"Host"}></RightPanelTabs>
                                        <RightPanelTabs title={"Port"}></RightPanelTabs>
                                        <RightPanelTabs title={"Client Host Name"}></RightPanelTabs>
                                        <RightPanelTabs title={"SSL/TLS"}></RightPanelTabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}