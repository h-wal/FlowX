"use client"

import { Handle, Position, NodeProps } from "@xyflow/react"
import { useState } from "react"
import { Settings, Trash2, Edit3 } from "lucide-react"

export default function SquareNode({ data }: NodeProps) {
  const [showControls, setShowControls] = useState(false)

  return (
    <div
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className="relative w-24 h-24 bg-white border-2 border-gray-300 rounded-md shadow-md flex items-center justify-center"
    >
      {/* Control Panel (top) */}
      {showControls && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2 bg-white border border-gray-200 shadow-md px-2 py-1 rounded-lg">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Edit3 size={16} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Settings size={16} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded text-red-500">
            <Trash2 size={16} />
          </button>
        </div>
      )}

      {/* Center Icon */}
      <div className="text-blue-500">
        {data.icon ? data.icon : <Settings size={28} />}
      </div>

      {/* Handles for connections */}
      <Handle type="target" position={Position.Top} className="!bg-gray-500" />
      <Handle type="source" position={Position.Bottom} className="!bg-gray-500" />
    </div>
  )
}
