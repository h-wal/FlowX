import AiAssistant from "./aiAssistant"
import NeedHelp from "./needHelp"
import RightPanelTabs from "./rightPanelTabs"

export default function RightPanelContent(){

    return(
        <div>
            <div className="flex flex-col p-2 pr-4 gap-4">
                <NeedHelp></NeedHelp> 
                <AiAssistant></AiAssistant>
                <RightPanelTabs title={"User"}></RightPanelTabs>
                <RightPanelTabs title={"Password"}></RightPanelTabs>
                <RightPanelTabs title={"Host"}></RightPanelTabs>
                <RightPanelTabs title={"Port"}></RightPanelTabs>
                <RightPanelTabs title={"Client Host Name"}></RightPanelTabs>
                <RightPanelTabs title={"SSL/TLS"}></RightPanelTabs>
            </div>
        </div>
    )
}