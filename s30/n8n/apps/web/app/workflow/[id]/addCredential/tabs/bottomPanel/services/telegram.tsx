import { useEffect, useState } from "react"
import AiAssistant from "../rightPanel/aiAssistant"
import NeedHelp from "../rightPanel/needHelp"
import RightPanelTabs from "../rightPanel/rightPanelTabs"
import axios from "axios"
import { useCredPanelSaveButtonStore } from "../../../stores/credSaveStore"
import { useCredPanelTitleStore } from "../../../stores/credCredPanelTitle"
import { useSelectedCredentialStore } from "../../../../overlayPanel/stores/selectedCredentialStore"
import { useCredAddedStore } from "../../../../stores/uiStores/credentialAdded"

export default function RightPanelTelegramContent(){

    const {saved ,setSaved, saveButtonPressed, setSaveButtonPressed} = useCredPanelSaveButtonStore()
    const {CredTitle, setCredTitle} = useCredPanelTitleStore()

    const [accessToken, setAccessToken] = useState("")
    const [baseUrl, setBaseUrl] = useState("https://api.telegram.org")
    const {setSelectedCredentialTitle, selectedCredentialTitle} = useSelectedCredentialStore()
    const {setNewCredentialAdded, newCredentialAdded} = useCredAddedStore()

    useEffect(() => {
        if(saveButtonPressed){
            const saveCredentails = async() => {
                try{
                    const response = await axios.post("http://localhost:3030/api/v1/credentials", {
                        type: "telegram",
                        title: CredTitle,
                        credential: 
                        {
                            accessToken,
                            baseUrl
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
                <RightPanelTabs value={accessToken} setValue={setAccessToken} title={"Acceas token"}></RightPanelTabs>
                <RightPanelTabs value={baseUrl} setValue={setBaseUrl} title={"Base Url"}></RightPanelTabs>
            </div>
        </div>
    )
}