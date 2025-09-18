export default function RigtPanelTabs({title}: {title: string}){

    return(
        <div className={`cursor-pointer py-2 text-[#a4aab6] text-sm rounded-sm `}>
            <div className="flex flex-col gap-2">
                <div>
                    {title}
                </div>
                <div>
                    <input type="text" className="w-full rounded-md p-2 border border-[#525355] bg-[#2e2e2e]"/>
                </div>
            </div>
        </div>
    )
}