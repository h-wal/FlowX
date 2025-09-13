"use client"
import { Handle, Position, useEdges } from "@xyflow/react"
import { useState, useEffect, useRef } from "react"
import { Trash2, Power, Play, Zap, Plus } from "lucide-react"
import { WebhookIcon } from "lucide-react"

interface NodeProps {
  icon?: any
  onAdd?: (id: string) => void // callback for adding new node
  id: string
}

export default function WebHookNode(data: NodeProps) {
  const [showControls, setShowControls] = useState(false)
  const edges = useEdges()
  const [isConnected, setIsConnected] = useState(false)

  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const connected = edges.some(
      (e) => e.source === data.id || e.target === data.id
    )
    setIsConnected(connected)
  }, [edges, data.id])

  return (
    <div className="flex flex-col items-center relative" ref={nodeRef}>
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
          <WebhookIcon size={48} />
        </div>

        {/* Handle */}
        <Handle
          type="source"
          position={Position.Right}
          className="!bg-white !w-4 !h-4"
        />
      </div>

      {/* Labels */}
      <div className="mt-2">Webhook</div>

      {/* Dummy button + connecting line */}
      {!isConnected && (
        <>
          {/* SVG line from node source to dummy */}
          <svg
            className="absolute pointer-events-none"
            style={{ left: "96px", top: "36%", width: "40px", height: "2px" }}
          >
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              stroke="#fff"
              strokeWidth="4"
            />
          </svg>

          {/* Dummy button */}
          <button
            onClick={() => data.onAdd?.(data.id)}
            className="absolute left-[136px] top-[37%] -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#2e2e2e] border border-gray-600 text-white rounded-md shadow cursor-pointer hover:bg-[#3a3a3a]"
          >
            <Plus size={18} />
          </button>
        </>
      )}
    </div>
  )
}
