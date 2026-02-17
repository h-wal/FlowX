import { Dispatch, SetStateAction } from "react"
import TopPanelTabs from "./toppaneltabs/topPanelTabs"

interface topPanelProps{
    setSelectedTab: Dispatch<SetStateAction<string>>
    selectedTab: string
}

export default function TopPanel(props: topPanelProps){
    return(
        <div className="flex flex-row text-gray-300 h-[10%] gap-4">
            <TopPanelTabs selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} name="Workflows"></TopPanelTabs>
            <TopPanelTabs selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} name="Credentials"></TopPanelTabs>
            <TopPanelTabs selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} name="Excecutions"></TopPanelTabs>
        </div>
    )
}