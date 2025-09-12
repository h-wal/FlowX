import { dropDownMenu } from "../../../icons/dropdownmenu"
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
                        <div className="bg-[#fe6f5b] text-white flex flex-row rounded-md">
                            <div className="p-1 px-2 border-r border-white hover:bg-orange-700 hover:rounded-md cursor-pointer">
                                Create WorkFlow
                            </div>
                            <div className="p-2 px-4 ">
                                {dropDownMenu}
                            </div>   
                        </div>  
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
