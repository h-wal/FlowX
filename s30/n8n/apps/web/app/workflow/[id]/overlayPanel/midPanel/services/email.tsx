import MidTopPanel from "../TopPanelTabs/midTopPanel"
import MidTopToggle from "../TopPanelTabs/midTopToggle"
import BottomPanelTab from "../bottomPanel/BottomPanelTabs/bottomPanelTabs"
import { MdEmail } from "react-icons/md"
import CredentialTabBar from "../bottomPanel/BottomPanelTabs/credentialPanel"
import { usePanelStore} from "../../../stores/uiStores/dataPanel"
import { useExcecuteButtonStore } from "../../stores/excecuteStore"
import { useState } from "react"

export default function EmailMidPanel(){

    const [operation, setOperation] = useState("Send")
    const [fromEmail, setFromEmail] = useState("")
    const [toEmail, setToEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [emailFormat, setEmailFormat] = useState("")
    const [Text, setText] = useState("")

    const {setPanelOpen, panelOpen, node}  = usePanelStore()
    const {isExcecuteButtonPressed, setIsExcecuteButtonPressed} = useExcecuteButtonStore()

    return (
        <div className="h-full w-full">
            <div className="h-[11%] bg-[#525355] flex flex-col justify-between">
                <MidTopPanel icon={MdEmail} heading="Send a text message"></MidTopPanel>
                <MidTopToggle></MidTopToggle>
            </div>
            <div className="h-[89%] bg-[#414244] p-2">
                <CredentialTabBar type={node.type} placeholder={"SMTP account"}></CredentialTabBar>
                <BottomPanelTab value={operation} setValue={setOperation} heading={"Operation"} placeholder={"Send"} />
                <BottomPanelTab value={fromEmail} setValue={setFromEmail} heading={"From Email"} placeholder={"admin@example.com"} />
                <BottomPanelTab value={toEmail} setValue={setToEmail} heading={"To Email"} placeholder={"to@example.com"} />
                <BottomPanelTab value={subject} setValue={setSubject} heading={"Subject"} placeholder={"My subject line"} />
                <BottomPanelTab value={emailFormat} setValue={setEmailFormat} heading={"Email Format"} placeholder={"Text"} />
                <BottomPanelTab value={Text} setValue={setText} heading={"Text"} placeholder={"text"} size={"large"} />
            </div>
        </div>
    )
}