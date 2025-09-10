import { dropDownMenu } from "../../../icons/dropdownmenu"
import Index from "../index"

export default function PersonalPanel(){
    return(
            <div className="h-screen flex flex-col">
                <div className="bg-[#2e2e2e] h-full w-full">
                    <div className="mx-15 my-10">
                        <div className="flex flex-row justify-between">
                            <div className="text-3xl text-white">
                                Personal
                            </div>
                            <div className="bg-[#fe6f5b] text-white flex flex-row rounded-md">
                                <div className="p-2 px-4 border-r border-white hover:bg-orange-700 hover:rounded-md cursor-pointer">
                                    Create WorkFlow
                                </div>
                                <div className="p-2 px-4  hover:bg-orange-700 hover:rounded-md cursor-pointer">
                                    {dropDownMenu}
                                </div>   
                            </div>  
                        </div>
                        <div className="text-gray-400 text-lg">
                            Workflows and credentials owned by you
                        </div> 
                        <Index></Index>
                    </div>
                </div>
            </div>
        )
}
