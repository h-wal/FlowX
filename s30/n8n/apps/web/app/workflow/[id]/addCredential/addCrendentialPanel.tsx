import BottomPanel from "./tabs/bottomPanel/bottomPanel"
import TopPanel from "./tabs/topPanel/topPanel"
import { useCredPanelStore } from "../stores/uiStores/credentialPanel"
import AddCrendentialPanelEmail from "./tabs/services/addCredentialPanelEmail"
import AddCrendentialPanelTelegram from "./tabs/services/addCredentialPanelTelegram"

export default function AddCrendentialPanel(){
    
    const {credPanelType, setCredPanelType} = useCredPanelStore()
    
    return(

        <div>
            { (credPanelType == "emailNode" ) ? <AddCrendentialPanelEmail></AddCrendentialPanelEmail> : null }
            { (credPanelType == "telegramNode" ) ? <AddCrendentialPanelTelegram></AddCrendentialPanelTelegram> : null }
        </div>

        // <div>
        //     <div id="panelOverlay"  className="h-screen w-screen fixed inset-0 bg-[#454450]/90 z-2 text-white">
        //         <div className="h-full w-full flex justify-center items-center">
        //             <div className=" h-[80%] w-[70%] bg-[#333334] rounded-md border border-[#525355]">
        //                 <TopPanel></TopPanel>
        //                 <BottomPanel></BottomPanel>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}