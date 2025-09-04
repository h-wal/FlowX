import { userWindowCardInterface } from "../../../types/types" 
import InputBar from "./chatinpbar"
import Chatwindow from "./chatwindow"
import Chat from "./chat"

interface userProp{
    user?: userWindowCardInterface
}


export default function ChatBox(prop: userProp){
    return(
        <div className="basis-8/12 rounded-3xl m-2 shadow-xl flex flex-col">
            <div className="basis-11/12 flex flex-col">
                <div id="header " className="basis-1/7 text-black flex flex-row items-center p-5 gap-3 bg">
                    {(prop.user) && <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>}
                    <div className="text-black flex items-center">
                        { (prop.user) ? JSON.stringify(prop.user): 'Kindly Select a User to Chat'}
                    </div>
                </div>
                <Chatwindow  selectedUser={JSON.stringify(prop.user)}/>         
            </div>
            <InputBar user={{ uname: "harhs" }} />
        </div>
    )
}