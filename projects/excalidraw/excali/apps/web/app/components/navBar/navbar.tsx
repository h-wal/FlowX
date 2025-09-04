import { SetStateAction, Dispatch, FC} from "react"
import  ChatIcon  from "../icons/navbar/chaticon"
import LiveChatIcon from "../icons/navbar/livechat"


function ButtonWrapper(props: {Comp: FC, setter: string, setSelectedMenu: Dispatch<SetStateAction<string>>}){
    return(
        <div className="cursor-pointer hover:scale-150 transition-transform duration-400" onClick={() => {console.log(props.setter), props.setSelectedMenu(props.setter)}}>
            <props.Comp></props.Comp>
        </div>
    )
}

interface navBarProps{
    setSelectedMenu: Dispatch<SetStateAction<string>>
}
export default function NavBar({setSelectedMenu}: navBarProps){

    return(
        <div id="navbar" className=" rounded-3xl p-4 basis-1/12 mx-4 my-4 flex justify-center items-center ">
            <div className="flex flex-col gap-15">
                <ButtonWrapper Comp={LiveChatIcon} setter={"room"} setSelectedMenu={setSelectedMenu}/>
                <ButtonWrapper Comp={ChatIcon} setter={"chat"} setSelectedMenu={setSelectedMenu}/>
            </div>
        </div>
    )

}