import MidTopPanel from "../TopPanelTabs/midTopPanel"
import MidTopToggle from "../TopPanelTabs/midTopToggle"
import BottomPanelTab from "../bottomPanel/BottomPanelTabs/bottomPanelTabs"
import { MdEmail } from "react-icons/md"
import CredentialTabBar from "../bottomPanel/BottomPanelTabs/credentialPanel"
import { usePanelStore} from "../../../stores/uiStores/dataPanel"
import { useExcecuteButtonStore } from "../../stores/excecuteStore"
import { useEffect, useState } from "react"
import { useNodeStore } from "../../../stores/workflowStores/nodeStore"
import { useCredentialsStore } from "../../stores/credentialsStore"
import { useSaveStore } from "../../../workflowpanel/stores/saveStore"
import { useSelectedCredentialStore } from "../../stores/selectedCredentialStore"

export default function EmailMidPanel(){

    const {setPanelOpen, panelOpen, node}  = usePanelStore()
    const {credentials, setCredentials} = useCredentialsStore()
    const {nodes, setNodes} = useNodeStore()
    const {isExcecuteButtonPressed, setIsExcecuteButtonPressed} = useExcecuteButtonStore()
    const {setTriggerSave} = useSaveStore()
    const {selectedCredentialTitle, setSelectedCredentialTitle} = useSelectedCredentialStore()


    //@ts-ignore
    // const [credentialTitle , setCredentialTitle] = useState(node.data.credentialTitle || credentials.title || "")
    const [operation, setOperation] = useState("Send")
    const [fromEmail, setFromEmail] = useState(node.data.fromEmail || "")
    const [toEmail, setToEmail] = useState(node.data.toEmail || "")
    const [subject, setSubject] = useState(node.data.subject || "")
    const [emailFormat, setEmailFormat] = useState(node.data.emailFormat || "")
    const [text, setText] = useState(node.data.text || "")


    useEffect((() => {
        const saveDetailsToNode = async () => {
            if (!node) return; // make sure a node is selected

            setNodes((prevNodes) => 
                prevNodes.map((n) =>
                n.id === node.id 
                    ? { 
                        ...n, 
                        data: {
                        ...n.data,
                        selectedCredentialTitle,       // keep existing data
                        operation,
                        fromEmail,
                        toEmail,
                        subject,
                        emailFormat,
                        text
                        } 
                    }
                    : n
                )
            );

            setTriggerSave(true)

            return true
        };

        if(isExcecuteButtonPressed){
            (async () => {
                const resposne = await saveDetailsToNode()
                if(resposne){
                    setIsExcecuteButtonPressed(false)
                }
            })()
        }
    }), [isExcecuteButtonPressed])

    useEffect(() => {
        console.log("nodes changed:", nodes);
    }, [nodes]);

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
                <BottomPanelTab value={text} setValue={setText} heading={"Text"} placeholder={"text"} size={"large"} />
            </div>
        </div>
    )
}