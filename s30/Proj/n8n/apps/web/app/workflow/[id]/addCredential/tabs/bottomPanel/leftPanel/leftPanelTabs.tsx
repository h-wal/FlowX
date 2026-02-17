import { usecredPanelLeftStore } from "../../../stores/credPanelLeft"

export default function LeftPanelTabs({text}: {text: string}){

    const {tab, setTab} = usecredPanelLeftStore()

    return(
        <div className={` hover:bg-[#525355] transition duration-250 cursor-pointer px-3 py-2 text-[#a4aab6] text-sm rounded-sm ${(tab == text )? `bg-[#525355]` : ``}`} onClick={() => setTab(text)}>
            {text}
        </div>
    )
}