import { usePanelStore } from "../stores/uiStores/dataPanel"
import MidTopPanel from "./midPanel/TopPanelTabs/midTopPanel"
import MidTopToggle from "./midPanel/TopPanelTabs/midTopToggle"
import MidBottomPanel from "./midPanel/TopPanelTabs/midBottomPanel"
import { FaTelegramPlane } from "react-icons/fa"
import MidPanel from "./midPanel/midPanel"

export default function OverlayPanel(){
    
    const {setPanelOpen, panelOpen, node}  = usePanelStore()
    
    return(
        <div>
            <div id="panelOverlay"  className="h-screen fixed inset-0 bg-[#454450]/90 z-1 text-white">
                    <div onClick={() => {setPanelOpen(false)}} className="px-8 py-3 text-sm cursor-pointer">
                        Back to canvas
                    </div>
                    <div className="h-screen flex flex-row px-6 pt-2">
                        <div className="w-4/11 h-9/11 bg-[#2e2e2e] mt-6 rounded-l-md p-4">
                            Input
                        </div>
                        <MidPanel></MidPanel>
                        <div className="w-4/11 h-9/11 bg-[#2e2e2e] mt-6 rounded-r-md p-4">
                            Output
                        </div>
                    </div>
                </div>
        </div>
    )
}