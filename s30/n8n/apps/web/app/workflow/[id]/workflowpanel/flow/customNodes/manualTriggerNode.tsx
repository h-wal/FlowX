"use client"
import { Handle, Position, useEdges } from "@xyflow/react"
import { useState, useEffect } from "react"
import { Settings, Trash2, Power, Play, MousePointer2Icon, Zap, Plus } from "lucide-react"
import { SourceHandle } from "./commonFeatures/sourceHandle"

interface NodeProps {
  icon?: any
  onAdd?: (id: string) => void // callback for adding new node
  id: string
  
}

export default function SquareNode(props: NodeProps) {
  const [showControls, setShowControls] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className="relative w-24 h-24 bg-[#3e3e3e] border-2 border-gray-500 rounded-md rounded-l-4xl shadow shadow-gray-500 flex items-center justify-center"
      >
        {/* Left-side button */}
        <button
          onClick={() => alert("Left button clicked")}
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-[#ea6857] p-2"
        >
          <Zap size={20} />
        </button>

        {/* Top control panel */}
        {showControls && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2 bg-[#2e2e2e] shadow-md px-2 py-1 rounded-lg">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Power size={12} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Play size={12} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Trash2 size={12} />
            </button>
          </div>
        )}

        {/* Icon */}
        <div className="text-white">
          <MousePointer2Icon size={48} />
        </div>

        {/* Handles */}

        <SourceHandle nodeId={props.id}></SourceHandle>
      </div>

      <div className="mt-2">When clicking</div>
      <div>"Execute Workflow"</div>
    </div>
  )
}
