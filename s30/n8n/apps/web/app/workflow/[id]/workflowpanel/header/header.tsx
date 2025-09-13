import { useState } from "react"
import personalIcon from "../../../../icons/personalIcon"

interface headerprops{
    workFlow: any
}

export default function Header(props: headerprops) {

    const saveButtonPressed = {

    }

    const [saved, setSaved] = useState(false)
    return(
        <div className="bg-[#414243] flex flex-row h-[8%] border-b border-gray-500 items-center p-4 px-12">
            <div className="text-sm text-gray-400 w-full flex flex-row gap-2 justify-between">
                <div className="flex flex-row gap-4">
                    <div>
                    {personalIcon}
                    </div>
                    <div>
                        Personal
                    </div>
                    <div className="text-md">
                        /
                    </div>
                    <div className="text-white">
                        {props.workFlow.title}
                    </div>
                </div>
                <div>
                    <div onClick={() => saveButtonPressed} className={`text-xs ${saved ? "bg-[#ea6857] p-1.5 px-4 rounded-md text-white cursor-pointer hover:bg-[#ff6843]" : "text-md"}`}>
                        {saved ? "Save" : "Saved"}
                    </div>
                </div>
            </div>
        </div>
    )
}