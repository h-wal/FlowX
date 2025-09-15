import { useState, useEffect } from "react"
import personalIcon from "../../../../icons/personalIcon"
import { useSaveStore } from "../stores/saveStore"
import axios from "axios"

interface HeaderProps {
  workFlow: { id: string; title: string } | null
}

export default function Header(props: HeaderProps) {
  const { triggerSave, setTriggerSave, saving, saved, setSaved } = useSaveStore()

  const saveButtonPressed = () => {
    setTriggerSave(true)
  }

  // state should be declared before effects
  const [value, setValue] = useState(props.workFlow?.title || "")

  useEffect(() => {
    setValue(props.workFlow?.title || "")
  }, [props.workFlow?.title])

  
  let timeout: NodeJS.Timeout
  async function changeTitle(title: string) {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      try {
        await axios.put(
          "http://localhost:3030/api/v1/workflow",
          {
            workFlowId: props.workFlow?.id,
            title,
          },
          { withCredentials: true }
        )
      } catch (err) {
        console.error("Failed to update title", err)
      }
    }, 500) // wait 500ms after typing
  }

  return (
    <div className="bg-[#414243] flex flex-row h-[8%] border-b border-gray-500 items-center p-4 px-12">
      <div className="text-sm text-gray-400 w-full flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-4">
          <div className="cursor-pointer flex flex-row gap-4">
            <div>{personalIcon}</div>
            <div>Personal</div>
          </div>
          <div className="text-md">/</div>
          <div className="text-white pointer-cursor px-3">
            <input
              type="text"
              className="!pointer-cursor bg-transparent outline-none"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                changeTitle(e.target.value)
              }}
            />
          </div>
        </div>
        <div>
          <div
            onClick={saveButtonPressed}
            className={`text-xs ${
              !saved
                ? "bg-[#ea6857] p-1.5 px-4 rounded-md text-white cursor-pointer hover:bg-[#ff6843]"
                : "text-md"
            }`}
          >
            {saved ? "Saved" : "Save"}
          </div>
        </div>
      </div>
    </div>
  )
}
