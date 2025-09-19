import EmailMidPanel from "./services/email"
import AiMidPanel from "./services/aiAgent"
import TelegramMidPanel from "./services/telegram"
import { usePanelStore } from "../../stores/uiStores/dataPanel"


export default function MidPanel(){

    const {setPanelOpen, panelOpen, node}  = usePanelStore()

    return(
        <div className="w-3/11 h-11/12 bg-[#3e3e3e] rounded-xl border border-gray-600 overflow-hidden">
            {(node.type == "emailNode") ? <EmailMidPanel></EmailMidPanel> : null}
            {(node.type == "aiAgentNode") ? <AiMidPanel></AiMidPanel> : null}
            {(node.type == "telegramNode") ? <TelegramMidPanel></TelegramMidPanel> : null}
        </div>
    )
}