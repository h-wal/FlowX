"use client"
import { Handle, Position, useEdges } from "@xyflow/react"
import { useState, useEffect } from "react"
import { Settings, Trash2, Power, Play, MousePointer2Icon, Zap, Plus } from "lucide-react"
import { FaTelegramPlane } from "react-icons/fa";


interface NodeProps {
  icon?: any
  onAdd?: (id: string) => void // callback for adding new node
  id: string
  
}

export default function TelegramNode(data: NodeProps) {
  const [showControls, setShowControls] = useState(false)
  const [showDummy, setShowDummy] = useState(true) // dummy node visible until replaced
  const [isConnected, setIsConnected] = useState(false)
    const edges = useEdges()
  
    useEffect(() => {
        const connected = edges.some(
          (e) => e.source === data.id || e.target === data.id
        )
        setIsConnected(connected)
      }, [edges, data.id])

  return (
    <div className="flex flex-col items-center">
      <div
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className="relative w-24 h-24 bg-[#3e3e3e] border-2 border-gray-500 rounded-md shadow shadow-gray-500 flex items-center justify-center"
      >

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
            <FaTelegramPlane className="h-10 w-10 text-blue-400 "/>
        </div>

        {/* Handles */}
        <Handle 
            type="source" 
            position={Position.Right} 
            className="!bg-white !w-4 !h-4" 
        />

        <Handle 
            type="target" 
            position={Position.Left} 
            className="!bg-white !w-2 !h-4 !rounded-none" 
        />

    </div>

      {/* Labels */}
      <div className="mt-2">Telegram Action</div>

      {/* Dummy node on the right */}
      {!isConnected && (
        <>
          {/* SVG line from node source to dummy */}
          <svg
            className="absolute pointer-events-none"
            style={{ left: "110px", top: "36%", width: "40px", height: "2px" }}
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
            className="absolute left-[150px] top-[36%] -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#2e2e2e] border border-gray-600 text-white rounded-md shadow cursor-pointer hover:bg-[#3a3a3a]"
          >
            <Plus size={18} />
          </button>
        </>
      )}
    </div>
  )
}
