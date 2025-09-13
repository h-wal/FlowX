"use client"

import { Plus } from "lucide-react"

interface addNodeProps{
    data: any
}
export default function AddNode(props: addNodeProps) {
  return (
    <div
      onClick={() => props.data.onAdd?.()}
      className="w-24 h-24 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md cursor-pointer hover:bg-blue-600"
    >
      <Plus size={28} />
    </div>
  )
}
