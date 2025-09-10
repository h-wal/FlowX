interface workFlowTabsProps{
    title: string,
    lastUpdated?: number,
    creationDate?: String,
}

export default function WorkFlowtabs(props: workFlowTabsProps){
    return(
        <div className="p-5 w-full bg-[#414243] border border-gray-500 rounded-md">
            <div className=" text-xl">
                {props.title}
            </div>
            <div className="text-md text-gray-400 flex flex-row gap-5">
                <div className="">
                    Last updated {props.lastUpdated} minutes ago   |   Created {props.creationDate}
                </div>
            </div>
        </div>
    )
}