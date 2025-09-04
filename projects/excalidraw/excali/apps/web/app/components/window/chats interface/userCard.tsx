import { userWindowCardInterface } from "../../../types/types"
interface CardProps {
    uname: string,
    lastActive?: number,
    proflieUrl?: string
    setSelectedUser: React.Dispatch<React.SetStateAction<userWindowCardInterface | undefined>> 
}


export default function UserCard({uname, lastActive, proflieUrl, setSelectedUser}: CardProps){

    return(
        //@ts-ignore
        <div className="flex flex-row  border-b-2 p-4 cursor-pointer hover:bg-gray-300" onClick={() => (console.log(uname), setSelectedUser(uname))}>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="flex flex-col g-1 px-3">
                <div className="object-cover flex align-center text-black text-bold">
                    {uname}
                </div>
                <div className="text-gray-400 text-[11px]">
                    {lastActive? (<p>{lastActive > 60 ? `${Math.floor(lastActive/60)} hour ago` : `${lastActive} mins ago`} </p>) : (<p></p>)}
                </div>
            </div>
        </div>
    )
}