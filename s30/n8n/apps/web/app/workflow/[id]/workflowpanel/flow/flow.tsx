import RFlow from "./rflow"

interface flowProps{
    workFlow: any
    saved: any
    setSaved: any
}

export default function Flow(props: flowProps){
    return(
        <div className="bg-[#2e2e2e] h-[92%] w-full text-white">
            <RFlow saved={props.saved} setSaved={props.setSaved}></RFlow>
            {/* {props.workFlow.title} */}
        </div>
    )
}