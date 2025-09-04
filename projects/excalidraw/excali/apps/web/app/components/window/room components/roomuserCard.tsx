import { RoomtypeInterface } from "../../../types/types"

interface CardProps {
    room: RoomtypeInterface
    setSelectedRoom: React.Dispatch<React.SetStateAction<RoomtypeInterface | undefined>>
}


export default function RoomUserCard(props: CardProps){

    return(
        //@ts-ignore
        <div className="flex flex-row  border-b-2 p-4 cursor-pointer hover:bg-gray-300" onClick={() => (console.log(props.room.id), props.setSelectedRoom(props.room))}>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <div className="flex flex-col g-1 px-3">
                <div className="object-cover flex align-center text-black text-bold">
                    {props.room.slug}
                </div>
            </div>
        </div>
    )
}