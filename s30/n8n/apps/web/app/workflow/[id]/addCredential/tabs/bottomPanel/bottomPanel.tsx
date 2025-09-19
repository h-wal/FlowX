import LeftPanelTabs from "./leftPanel/leftPanelTabs"
import RightPanelEmailContent from "./services/email"
import { useCredPanelStore } from "../../../stores/uiStores/credentialPanel"

export default function BottomPanel(){

    const {credPanelOpen, setCredPanelOpen, type} = useCredPanelStore()

    return(
        <div className="h-[85%] w-full flex flex-row">
            <div className="h-full w-[20%] flex flex-col p-4 gap-2">
                <LeftPanelTabs text="Connection"></LeftPanelTabs>
                <LeftPanelTabs text="Sharing"></LeftPanelTabs>
                <LeftPanelTabs text="Details"></LeftPanelTabs>
            </div>
            <div className="overflow-y-auto flex flex-col h-full w-[80%] p-2 gap-3">
                {type == "emailNode" ? <RightPanelEmailContent></RightPanelEmailContent> : null}
            </div>
        </div>
    )
}