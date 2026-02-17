import CreateWorkFlowButton from "../buttons/createWorkFlow"
import Index from "../index"

export default function OverViewPanel(){
    return(
        <div className="h-screen flex flex-col">
            <div className="bg-[#2e2e2e] h-full w-full">
                <div className="mx-10 mt-5">
                    <div className="flex flex-row justify-between">
                        <div className="text-xl text-white">
                            Overview
                        </div>
                        <CreateWorkFlowButton></CreateWorkFlowButton>

                    </div>
                    <div className="text-gray-400 text-md">
                        All the workflows, credentials and executions you have access to
                    </div> 
                    <Index></Index>
                </div>
            </div>
        </div>
    )
}
