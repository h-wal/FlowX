import { SetStateAction, Dispatch, FC} from "react"
import LeftWorkFlowPanelTabs from "./leftworkflowpaneltabs"
import overviewIcon from "../../../icons/overviewicon"
import personalIcon from "../../../icons/personalIcon"

interface leftPanelProps{
    setSelectedMenu: Dispatch<SetStateAction<string>>
}

export default function LeftWorkFlowPanel(props: leftPanelProps){
    return(
        <div className="w-[15%] h-screen bg-[#414243] border-r border-gray-500 text-white justify-center">
            <div className=" h-[10%] flex justify-center text-xl items-center">
                FlowX
            </div>
            <div className="h-[90%] flex flex-col gap-2">
                <LeftWorkFlowPanelTabs setSelectedMenu={props.setSelectedMenu} icon={overviewIcon} name="Overview"></LeftWorkFlowPanelTabs>
                <LeftWorkFlowPanelTabs setSelectedMenu={props.setSelectedMenu} icon={personalIcon} name="Personal"></LeftWorkFlowPanelTabs>
            </div>
      </div>
    )
}