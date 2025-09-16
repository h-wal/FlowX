import { usePanelStore } from "../stores/dataPanel"
import MidTopPanel from "./TopPanelTabs/midTopPanel"
import MidTopToggle from "./TopPanelTabs/midTopToggle"
import MidBottomPanel from "./TopPanelTabs/midBottomPanel"
import { FaTelegramPlane } from "react-icons/fa"
export default function OverlayPanel(){
    
    const {setPanelOpen, panelOpen}  = usePanelStore()
    
    return(
        <div>
            <div id="panelOverlay"  className="h-screen fixed inset-0 bg-[#454450]/90 z-50 text-white">
                    <div onClick={() => {setPanelOpen(false)}} className="px-8 py-3 text-sm cursor-pointer">
                        Back to canvas
                    </div>
                    <div className="h-screen flex flex-row px-6 pt-2">
                        <div className="w-4/11 h-9/11 bg-[#2e2e2e] mt-6 rounded-l-md p-4">
                            Input
                        </div>
                        <div className="w-3/11 h-11/12 bg-[#3e3e3e] rounded-xl border border-gray-500 overflow-hidden">
                            <div className="h-full w-full">
                                <div className="h-[11%] bg-[#525355] flex flex-col justify-between">
                                    <MidTopPanel icon={FaTelegramPlane} heading="Send a text message"></MidTopPanel>
                                    <MidTopToggle></MidTopToggle>
                                </div>
                                <div className="h-[89%] bg-[#414244] p-2">
                                    <MidBottomPanel></MidBottomPanel>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/11 h-9/11 bg-[#2e2e2e] mt-6 rounded-r-md p-4">
                            Output
                        </div>
                    </div>
                </div>
        </div>
    )
}