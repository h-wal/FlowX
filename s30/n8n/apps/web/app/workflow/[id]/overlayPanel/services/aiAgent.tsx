import MidTopPanel from "../TopPanelTabs/midTopPanel"
import MidTopToggle from "../TopPanelTabs/midTopToggle"
import MidBottomPanel from "../TopPanelTabs/midBottomPanel"
import { FaRobot } from "react-icons/fa"


export default function AiMidPanel(){
    return (
        <div className="h-full w-full">
            <div className="h-[11%] bg-[#525355] flex flex-col justify-between">
                <MidTopPanel icon={FaRobot} heading="Send a text message"></MidTopPanel>
                <MidTopToggle></MidTopToggle>
            </div>
            <div className="h-[89%] bg-[#414244] p-2">
                <MidBottomPanel></MidBottomPanel>
            </div>
        </div>
    )
}