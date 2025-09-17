export default function BottomPanelTab(props: {
    heading: string,
    placeholder: string
}){
    return(
        <div className="p-2 flex flex-col gap-1">
            <div className="text-xs text-gray-300">
                {props.heading}
            </div>
            <div className="text-xs">
                <input className="border border-[#fe6f5b] rounded-sm px-2 p-1 bg-[#2e2e2e] w-full" type="text" placeholder={props.placeholder} />
            </div>
        </div>
    )
}