import { ReactElement } from "react"
import { FlaskConicalIcon } from "lucide-react"
import { useExcecuteButtonStore } from "../../stores/excecuteStore"
import { RotatingLines } from "react-loader-spinner"

export default function MidTopPanel(props: {
    size?: any
    icon: any
    heading: string
}){

    const {isExcecuteButtonPressed, setIsExcecuteButtonPressed} = useExcecuteButtonStore()

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
            <div onClick={() => {setIsExcecuteButtonPressed(true)}} className="flex flex-row gap-2 bg-[#fe6f5b] hover:bg-[#EF4E39] p-1 rounded-md px-3 cursor-pointer">
                <div className="flex items-center">
                    { isExcecuteButtonPressed ?  <RotatingLines
                        visible={true}
                        width="17"
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="1"
                        ariaLabel="rotating-lines-loading"
                    /> : <FlaskConicalIcon className="size-3"></FlaskConicalIcon> }
                </div>
                <div className="text-[12px]">
                    { isExcecuteButtonPressed ? "Excecuting" : "Excecute step" }
                </div>
            </div>
        </div>
    )
}