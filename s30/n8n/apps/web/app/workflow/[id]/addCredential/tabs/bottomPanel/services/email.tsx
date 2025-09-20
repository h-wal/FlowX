import { useEffect, useState } from "react"
import AiAssistant from "../rightPanel/aiAssistant"
import NeedHelp from "../rightPanel/needHelp"
import RightPanelTabs from "../rightPanel/rightPanelTabs"
import axios from "axios"
import { useCredPanelSaveButtonStore } from "../../../stores/credSaveStore"
import { useCredPanelTitleStore } from "../../../stores/credCredPanelTitle"
import { useSelectedCredentialStore } from "../../../../overlayPanel/stores/selectedCredentialStore"
import { useCredAddedStore } from "../../../../stores/uiStores/credentialAdded"

export default function RightPanelEmailContent(){

    const {saved ,setSaved, saveButtonPressed, setSaveButtonPressed} = useCredPanelSaveButtonStore()
    const {CredTitle, setCredTitle} = useCredPanelTitleStore()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [host, setHost] = useState("")
    const [port, setPort] = useState("")
    const [hostName, setHostName] = useState("")
    const [protocol, setProtocol] = useState("")
    const {setSelectedCredentialTitle, selectedCredentialTitle} = useSelectedCredentialStore()
    const {setNewCredentialAdded, newCredentialAdded} = useCredAddedStore()

    useEffect(() => {
        if(saveButtonPressed){
            const saveCredentails = async() => {
                try{
                    const response = await axios.post("http://localhost:3030/api/v1/credentials", {
                        type: "email",
                        title: CredTitle,
                        credential: 
                        {
                            email,
                            password,
                            host,
                            port,
                            hostName,
                            protocol
                        }
                    }, {
                        withCredentials: true
                    })

                    if (response) {
                        console.log("Credentials saved:", response)
                    }

                    setSaved(true)

                } catch(e){
                    console.log("Error Saving Credentials to DB", e)
                    alert("Credentials with this title or these details already exists !")
                } finally {
                    
                    setNewCredentialAdded(true)
                    setSelectedCredentialTitle(CredTitle)
                    setSaveButtonPressed(false)
                }
            }

            saveCredentails()
        }
    }, [saveButtonPressed])

    return(
        <div>
            <div className="flex flex-col p-2 pr-4 gap-4">
                <NeedHelp></NeedHelp> 
                <AiAssistant></AiAssistant>
                <RightPanelTabs value={email} setValue={setEmail} title={"User"}></RightPanelTabs>
                <RightPanelTabs value={password} setValue={setPassword} title={"Password"}></RightPanelTabs>
                <RightPanelTabs value={host} setValue={setHost} title={"Host"}></RightPanelTabs>
                <RightPanelTabs value={port} setValue={setPort} title={"Port"}></RightPanelTabs>
                <RightPanelTabs value={hostName} setValue={setHostName} title={"Client Host Name"}></RightPanelTabs>
                <RightPanelTabs value={protocol} setValue={setProtocol} title={"SSL/TLS"}></RightPanelTabs>
            </div>
        </div>
    )
}