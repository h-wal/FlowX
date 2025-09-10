import { SetStateAction, Dispatch, FC} from "react"

interface leftPanelTabsProps{
    name: string
    icon: any
    setSelectedMenu: Dispatch<SetStateAction<string>>
}

export default function LeftPanelTabs(props: leftPanelTabsProps){
    return(
        <div className="p-3 py-3 mx-3 rounded-sm text-xl text-gray-300 hover:bg-[#535456] transition delay-50 cursor-pointer flex flex-row gap-4"
            onClick={() => {props.setSelectedMenu(props.name)}}>
            {props.icon}
            {props.name}
        </div>
        
    )
}