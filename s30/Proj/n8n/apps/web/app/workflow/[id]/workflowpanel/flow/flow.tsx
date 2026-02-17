import RFlow from "./rflow"

interface flowProps{
    workFlow: any
}

export default function Flow(props: flowProps){
    return(
        <div className="bg-[#2e2e2e] h-[92%] w-full text-white">
            <RFlow workFlow={props.workFlow} ></RFlow>
            {/* {props.workFlow.title} */}
        </div>
    )
}