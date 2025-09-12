import personalIcon from "../../../../icons/personalIcon"

interface headerprops{
    workFlow: any
}

export default function Header(props: headerprops) {
    return(
        <div className="bg-[#414243] flex flex-row h-[8%] border-b border-gray-500 items-center p-4 px-12">
            <div className="text-sm text-gray-400 flex flex-row gap-2">
                <div>
                    {personalIcon}
                </div>
                <div>
                    Personal
                </div>
                <div className="text-md">
                    /
                </div>
                <div className="text-white">
                    {props.workFlow.title}
                </div>
            </div>
        </div>
    )
}