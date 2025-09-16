import { ReactElement } from "react"
import { FlaskConicalIcon } from "lucide-react"

export default function MidTopPanel(props: {
    icon: any
    heading: string
}){
    return(
        <div className="flex flex-row justify-between pt-4 pl-4 pr-4">
            <div className="flex flex-row gap-3">
                <div className="pt-1">
                    <props.icon />
                </div>
                <div>
                    {props.heading}
                </div>
            </div>
            <div onClick={() => {}} className="flex flex-row gap-2 bg-[#fe6f5b] hover:bg-[#EF4E39] p-1 rounded-md px-3 cursor-pointer">
                <div className="pt-0.75">
                    <FlaskConicalIcon className="size-3"></FlaskConicalIcon>
                </div>
                <div className="text-[12px]">
                    Excecute step
                </div>
            </div>
        </div>
    )
}