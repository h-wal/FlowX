import BottomPanel from "../bottomPanel/bottomPanel"
import TopPanel from "../topPanel/topPanel"
import { useCredPanelStore } from "../../../stores/uiStores/credentialPanel"

export default function AddCrendentialPanelTelegram(){
    
    const {credPanelType, setCredPanelType} = useCredPanelStore()
    
    return(

        <div>
            <div id="panelOverlay"  className="h-screen w-screen fixed inset-0 bg-[#454450]/90 z-2 text-white">
                <div className="h-full w-full flex justify-center items-center">
                    <div className=" h-[80%] w-[70%] bg-[#333334] rounded-md border border-[#525355]">
                        <TopPanel></TopPanel>
                        <BottomPanel></BottomPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}