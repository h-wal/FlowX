import { useState, useCallback, useRef } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls, MiniMap, useNodesState, useEdgesState, Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TextUpdaterNode } from './customNodes/textupdater';
 

const nodeTypes = {
  textUpdater: TextUpdaterNode
}
const initialNodes = [
  { 
    id: '1', 
    type: 'textUpdater',
    position: { x: 0, y: 0 }, 
    data: { label: 'Node 1' } 
  },
  { id: '2', 
    position: { x: 100, y: 100 }, 
    data: { label: 'Node 2' } 
  },
  { id: '3', 
    position: { x: 200, y: 200 }, 
    data: { label: 'Node 3' } 
  },
];

const initialEdges = [
  { 
  id: '1-2', 
  source: '1', 
  target: '2' 
  }
]; 
 
export default function RFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [showMiniMap, setShowMiniMap] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMoveStart = () => {
    setShowMiniMap(true);

    // clear any pending hide timers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

    const handleMoveEnd = () => {
    // hide minimap after 2s of no movement
    timeoutRef.current = setTimeout(() => {
      setShowMiniMap(false);
    }, 2000);
  };
 
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
      <ReactFlow 
        style={{background: "#2e2e2e"}}
        panOnDrag={false}
        selectionOnDrag={true}
        panOnScroll={true}
        // colorMode='dark'
        nodes={nodes} 
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onMoveStart={handleMoveStart}
        onMoveEnd={handleMoveEnd}
        fitView>
        <Background />
        <Controls className="custom-controls"/>
        { showMiniMap && <MiniMap   
        style={{  
          background:"#2e2e2e", 
          bottom:60, 
          right:1000, 
          width:200, 
          height:125, 
          padding:6, 
          borderRadius: 30, 
          opacity: showMiniMap ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: "none",  
        }} />}
      </ReactFlow> 
  );
}