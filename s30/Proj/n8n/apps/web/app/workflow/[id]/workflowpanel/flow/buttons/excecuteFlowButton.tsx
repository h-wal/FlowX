import { Panel } from "@xyflow/react";
import { useTriggerStore } from "../../stores/triggerStore";
import { useSaveStore } from "../../stores/saveStore";
import { RotatingLines } from "react-loader-spinner";
import { IoFlaskOutline } from "react-icons/io5";

export default function ExcecuteFlowButton(){
    
    const {setTriggerPressed, triggerPressed} = useTriggerStore()
    const {setSaved, setTriggerSave} = useSaveStore()


    return(
        <Panel onClick={() => {setSaved(false); setTriggerSave(true); setTriggerPressed(true)}} position="bottom-center" className="cursor-pointer bg-[#fe6f5b] text-xs p-3 px-5 rounded-md my-250 hover:bg-[#EF4E39]">
            
            <div className="flex flex-row gap-2">
            <div className="flex justify-center items-center">
                {triggerPressed ? <RotatingLines
                visible={true}
                width="20"
                strokeColor="white"
                strokeWidth="5"
                animationDuration="1"
                ariaLabel="rotating-lines-loading"
            /> : <IoFlaskOutline className="size-5"/> }
            </div>
            <div className="text-[14px]">
                {triggerPressed ? "Excecuting Workflow" : "Excecute Workflow"}
            </div>
            </div>
      </Panel>
    )
}