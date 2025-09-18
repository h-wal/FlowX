import { Pencil } from "lucide-react"
import { useCredPanelStore } from "../../stores/credentialPanel"

interface bottomPanelTabsProps{
    type?: string
    heading?: string,
    placeholder?: string
    size?: "large" | "medium"
}

export default function CredentialTabBar({
    type,
    heading,
    placeholder,
    size = "medium"
}: bottomPanelTabsProps){

    const { setCredPanelOpen, setType } = useCredPanelStore()

    if(!type){
        return(<div> Problem Loading Form! Kindly Retry</div>)
    }

    return(
        <div className="p-2 flex flex-col gap-1">
            <div className="text-xs text-gray-300">
                Credential to connect with
            </div>
            <div className="text-xs flex flex-row">
                <input className={`border border-gray-600 rounded-sm px-2 p-1 bg-[#2e2e2e] w-[90%] ${size == "large" ? `pb-18` : ``}`} type="text" placeholder={placeholder} />
                <div onClick={() => {setType(type) ; setCredPanelOpen(true)}} className="cursor-pointer w-[10%] flex justify-center items-center">
                    <Pencil className="size-4 text-gray-400"></Pencil>
                </div>
            </div>
        </div>
    )
}