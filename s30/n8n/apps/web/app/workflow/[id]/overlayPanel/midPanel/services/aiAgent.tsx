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
import { useCredAddedStore } from "../../../stores/uiStores/credentialAdded"
import { FaRobot } from "react-icons/fa"

export default function AiMidPanel(){

    const {setPanelOpen, panelOpen, node}  = usePanelStore()
    const {credentials, setCredentials} = useCredentialsStore()
    const {nodes, setNodes} = useNodeStore()
    const {isExcecuteButtonPressed, setIsExcecuteButtonPressed} = useExcecuteButtonStore()
    const {setTriggerSave, setSaved} = useSaveStore()
    const {selectedCredentialTitle, setSelectedCredentialTitle} = useSelectedCredentialStore()


    //@ts-ignore
    // const [credentialTitle , setCredentialTitle] = useState(node.data.credentialTitle || credentials.title || "")
    const [Resource, setResource] = useState(node.data.Resource || "Message")
    const [Operation, setOperation] = useState(node.data.Operation || "Send Message")
    const [ChatId, setChatId] = useState(node.data.ChatId || "")
    const [Prompt, setPrompt] = useState(node.data.Prompt || "")
    const {newCredentialAdded, setNewCredentialAdded} = useCredAddedStore()


    useEffect((() => {

        if(!isExcecuteButtonPressed){
            return
        }
        console.log("exec presseed", node)
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
                        Resource,
                        Operation,
                        ChatId,
                        Prompt
                        } 
                    }
                    : n
                )
            );
            setSaved(false)
            setTriggerSave(true)

            return true
        };

        if(isExcecuteButtonPressed){
            (async () => {
                const resposne = await saveDetailsToNode()
                console.log(node)
                if(resposne){
                    setIsExcecuteButtonPressed(false)
                }
            })()
        }
    }), [isExcecuteButtonPressed])

    // useEffect(() => {
    //     console.log("nodes changed:", nodes);
    // }, [nodes]);

    return (
        <div className="h-full w-full">
            <div className="h-[11%] bg-[#525355] flex flex-col justify-between">
                <MidTopPanel icon={FaRobot} heading="AI Agent"></MidTopPanel>
                <MidTopToggle></MidTopToggle>
            </div>
            <div className="h-[89%] bg-[#414244] p-2">
                <CredentialTabBar type={node.type} placeholder={"Telegram Account"}></CredentialTabBar>
                <BottomPanelTab value={Prompt} setValue={setPrompt} heading={"Prompt"} placeholder={"Prompt"} size={"large"} />
            </div>
        </div>
    )
}