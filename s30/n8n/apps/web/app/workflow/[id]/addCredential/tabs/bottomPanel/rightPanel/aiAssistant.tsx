import GradientIcon from "./aiIcon"
import { useAiPanelStore } from "../../../../stores/uiStores/useAiPanelStore"

export default function AiAssistant(){

    const {aiPanelOpen, setAiPanelOpen} = useAiPanelStore()
    
    return(
        <div className="flex flex-row">
            <div className="p-[1px] rounded-md bg-gradient-to-r from-[#8c8ef1] to-[#e97795] w-32">
                <div className={`cursor-pointer flex flex-row gap-1 rounded-md ${aiPanelOpen ? `bg-[#2e2e2e]` : `bg-[#333334]`} hover:bg-[#333334] p-1.5 px-3`}>
                    <div className="flex justify-center items-center">
                        <GradientIcon></GradientIcon>
                    </div>
                    <div className="text-xs font-bold bg-gradient-to-r from-[#8c8ef1] to-[#e97795] bg-clip-text text-transparent">
                        Ask Assistant
                    </div>
                </div>
            </div> 
            <div className="flex items-center text-sm px-2 text-gray-400">
                for setup instuctions
            </div>
        </div>
    )
}