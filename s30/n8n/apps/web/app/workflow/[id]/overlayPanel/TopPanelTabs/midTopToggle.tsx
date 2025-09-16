import { useToggleStore } from "./stores/midPannelToggleStore"

export default function MidTopToggle(){
    const {panel, setPanel} = useToggleStore()
    
    return(
        <div className="flex flex-row text-sm  text-gray-300">   
            <div onClick={() => setPanel("parameters")} className={`p-2 px-4  hover:text-[#fe6f5b] cursor-pointer ${(panel == "parameters") ? `text-[#fe6f5b] border-b-2 border-[#fe6f5b]` : null}`}>
                Parameters
            </div>
            <div onClick={() => setPanel("settings")} className={`p-2 px-4 hover:text-[#fe6f5b] cursor-pointer ${(panel == "settings") ? `text-[#fe6f5b] border-b-2 border-[#fe6f5b]` : null}`}>
                Settings
            </div>
        </div>
    )
}