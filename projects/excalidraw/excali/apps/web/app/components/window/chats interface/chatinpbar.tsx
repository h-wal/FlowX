import { userWindowCardInterface } from "../../../types/types"

interface inputBarProps{
    user: userWindowCardInterface
}

export default function InputBar(props: inputBarProps){
    return(
        <div className="bg-white basis-1/12 rounded-3xl text-gray-700 text-m flex flex-row items-center justify-between px-8">
            <div className="ml-10">
                <input type="text" name="" placeholder="Type a message here..." id="" />
            </div>
            <button>
                Send
            </button>
        </div>
    )
}