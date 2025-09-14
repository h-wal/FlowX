import { dropDownMenu } from "../../../icons/dropdownmenu"
import CreateWorkFlowButton from "../buttons/createWorkFlow"
import Index from "../index"

export default function PersonalPanel(){
    return(
            <div className="h-screen flex flex-col">
                <div className="bg-[#2e2e2e] h-full w-full">
                    <div className="mx-10 my-5">
                        <div className="flex flex-row justify-between">
                            <div className="text-xl text-white">
                                Personal
                            </div>
                            <CreateWorkFlowButton></CreateWorkFlowButton>
                        </div>
                        <div className="text-gray-400 text-md">
                            Workflows and credentials owned by you
                        </div> 
                        <Index></Index>
                    </div>
                </div>
            </div>
        )
}
