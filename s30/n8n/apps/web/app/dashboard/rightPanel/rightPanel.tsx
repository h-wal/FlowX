import OverViewPanel from "./overviewPanel/overviewpanel"
import PersonalPanel from "./personalPanel/personalPanel"

interface rightPanelProps{
    selectedMenu: string
}

export default function RightPanel(props: rightPanelProps){
    return(
        <div className="w-[85%] h-full">
            {props.selectedMenu === "Overview" ? <OverViewPanel></OverViewPanel> : null}
            {props.selectedMenu == "Personal" ? <PersonalPanel></PersonalPanel> : null}
        </div>
        
    )
}