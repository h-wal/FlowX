interface bottomPanelTabsProps{
    value: string,
    setValue: any,
    heading: string,
    placeholder: string
    size?: "large" | "medium"
}

export default function BottomPanelTab({
    value, 
    setValue,
    heading,
    placeholder,
    size = "medium"
}: bottomPanelTabsProps){
    return(
        <div className="p-2 flex flex-col gap-1">
            <div className="text-xs text-gray-300">
                {heading}
            </div>
            <div className="text-xs">
                <input value={value} onChange={(e) => {setValue(e.target.value)}} className={`border border-gray-600 rounded-sm px-2 p-1 bg-[#2e2e2e] w-full ${size == "large" ? `pb-18` : ``}`} type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}