import { dropDownMenu } from "../../../icons/dropdownmenu"

export default function OverViewPanel(){
    return(
        <div className="h-screen flex flex-col">
            <div className="bg-[#2e2e2e] h-full w-full">
                <div className="mx-15 my-10">
                    <div className="flex flex-row justify-between">
                        <div className="text-3xl text-white">
                            OverView
                        </div>
                        <div className="bg-[#fe6f5b] text-white flex flex-row rounded-md">
                            <div className="p-2 px-4 border-r border-white hover:bg-orange-700 hover:rounded-md cursor-pointer">
                                Create WorkFlow
                            </div>
                            <div className="p-2 px-4 ">
                                {dropDownMenu}
                            </div>   
                        </div>  
                    </div>
                    <div className="text-gray-400 text-lg">
                        All the workflows, credentials and executions you have access to
                    </div> 
                </div>
            </div>
        </div>
    )
}
