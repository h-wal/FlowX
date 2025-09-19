import { useCredPanelSaveButtonStore } from "../../../stores/credSaveStore"

export default function RigtPanelTabs({title, setValue, value}: {title: string, setValue: any, value: any}){

    const {setSaveButtonPressed, setSaved, saved } = useCredPanelSaveButtonStore()

    return(
        <div className={`cursor-pointer py-2 text-[#a4aab6] text-sm rounded-sm `}>
            <div className="flex flex-col gap-2">
                <div>
                    {title}
                </div>
                <div>
                    <input type="text" onChange={(e) => {setValue(e.target.value); setSaved(false)}} className={` ${( value == "") ? `border-[#fe6f5b]` : `border-gray-400` } w-full rounded-md p-2 border bg-[#2e2e2e]`}/>
                </div>
            </div>
        </div>
    )
}