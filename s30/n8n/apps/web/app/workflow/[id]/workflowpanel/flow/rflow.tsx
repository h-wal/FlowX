import { useState, useCallback, useRef } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls, MiniMap, useNodesState, useEdgesState, Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TextUpdaterNode } from './customNodes/textupdater';
import { Node } from "@xyflow/react";
import PanelButton from './ui/rightpanelbutton';
import { pointer } from './icons/pointer';
import { webhook } from './icons/webhook';

const nodeTypes = {
  textUpdater: TextUpdaterNode
}
const initialNodes = [
  { 
    id: '1', 
    type: 'textUpdater',
    position: { x: 0, y: 0 }, 
    data: { label: 'Node 1' } 
  }
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
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => setShowPanel((prev) => !prev);


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

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds: any) => [...nds, newNode]);
  }, [nodes]);
 
  return (
      <ReactFlow 
        style={{background: "#2e2e2e"}}
        panOnDrag={false}
        selectionOnDrag={true}
        panOnScroll={true}
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
        {showPanel && (
          <div className="overlay" onClick={() => setShowPanel(false)}>
            <div className="right-panel" onClick={(e) => e.stopPropagation()}>
              <div className="p-2 text-xl">Add Nodes to the Work Flow :</div>
              <PanelButton icon={pointer} title="Trigger manually" description='Runs the flow on clicking a button on n8n'></PanelButton>
              <PanelButton icon={webhook} title='On webhook call' description='Runs the flow on receiving a http request'></PanelButton>
            </div>
          </div>
        )}
        <div className="second-controls">
          <button onClick={togglePanel}>➕</button>
          {/* <button onClick={() => customAction("Action 1")}>⚡</button> */}
          {/* <button onClick={() => customAction("Action 2")}>🔄</button>
          <button onClick={() => customAction("Action 3")}>🗑️</button> */}
        </div>
      </ReactFlow> 
  );
}