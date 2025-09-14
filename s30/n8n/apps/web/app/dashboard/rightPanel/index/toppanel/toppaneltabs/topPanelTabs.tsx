import { Dispatch, SetStateAction } from "react"

interface topPanelTabsProps{
    name: string
    setSelectedTab: Dispatch<SetStateAction<string>>
    selectedTab: string
}

export default function TopPanelTabs(props: topPanelTabsProps){

    return(
        <div className={`text-gray-300 px-4 py-2 text-sm mt-5 hover:text-[#fe6f5b] ${(props.selectedTab == props.name) ? `border-b-3 border-[#fe6f5b]` : null} cursor-pointer`}
             onClick={() => {props.setSelectedTab(props.name)}}>
            {props.name}
        </div>
    )
}