import { useEffect, useState } from "react"
import AiAssistant from "../rightPanel/aiAssistant"
import NeedHelp from "../rightPanel/needHelp"
import RightPanelTabs from "../rightPanel/rightPanelTabs"
import axios from "axios"
import { useCredPanelSaveButtonStore } from "../../../stores/credSaveStore"

export default function RightPanelEmailContent(){

    const {saveButtonPressed, setSaveButtonPressed} = useCredPanelSaveButtonStore()

    const [email, setEmail] = useState("h@gmail.com")
    const [password, setPassword] = useState("harsh")
    const [host, setHost] = useState("kajhsdf")
    const [port, setPort] = useState("jaksdlf")
    const [hostName, setHostName] = useState("asdhflk")
    const [protocol, setProtocol] = useState("ahsldfk")

    useEffect(() => {
        if(saveButtonPressed){
            const saveCredentails = async() => {
                try{
                    const response = await axios.post("http://localhost:300/api/v1/excecution", {
                        email,
                        password,
                        host,
                        port,
                        hostName,
                        protocol
                    })

                    if (response) {
                        console.log("Credentials saved:", response)
                    }
                } catch(e){
                    console.log("Error Saving Credentials to DB", e)
                } finally {
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