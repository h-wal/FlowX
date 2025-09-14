import { dropDownMenu } from "../../../icons/dropdownmenu"
import axios from "axios"

export default function CreateWorkFlowButton() {

    function addWorkFlow(){
        axios.post("http://localhost:3000/", {
            withCredentails: true
        })
    }
    return(
        <div className="bg-[#fe6f5b] text-white flex flex-row rounded-md items-center justify-center">
            <div onClick={addWorkFlow} className=" border-r h-full text-xs px-2 border-white hover:bg-orange-700 hover:rounded-md cursor-pointer flex items-center justify-center">
                <div>
                    Create Workflow    
                </div>
            </div>
            <div className="h-full flex justify-center items-center cursor-pointer hover:bg-orange-700 hover:rounded-md">
                <div className="p-1">
                    {dropDownMenu}
                </div>
            </div>   
        </div>
    )
}