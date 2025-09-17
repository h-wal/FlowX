import MidTopPanel from "../TopPanelTabs/midTopPanel"
import MidTopToggle from "../TopPanelTabs/midTopToggle"
import MidBottomPanel from "../TopPanelTabs/midBottomPanel"
import { FaTelegram } from "react-icons/fa"
import { PiTelegramLogo } from "react-icons/pi"


export default function TelegramMidPanel(){
    return (
        <div className="h-full w-full">
            <div className="h-[11%] bg-[#525355] flex flex-col justify-between">
                <MidTopPanel icon={PiTelegramLogo} heading="Send a Telegram Chat"></MidTopPanel>
                <MidTopToggle></MidTopToggle>
            </div>
            <div className="h-[89%] bg-[#414244] p-2">
                <MidBottomPanel></MidBottomPanel>
            </div>
        </div>
    )
}