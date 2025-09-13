"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import {
  useReactFlow,
  ReactFlowProvider,
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { TextUpdaterNode } from "./customNodes/textupdater";
import SquareNode from "./customNodes/manualTriggerNode";
import WebHookNode from "./customNodes/webhookTriggerNode";
import PanelButton from "./ui/rightpanelbutton";
import { pointer } from "./icons/pointer";
import { webhook } from "./icons/webhook";
import { telegramIcon } from "./icons/telegram";
import { FaRobot, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { Mail } from "lucide-react";
import TelegramNode from "./customNodes/telegramNode";
import EmailNode from "./customNodes/EmailNode";
import AiAgentNode from "./customNodes/aiAgentNode";

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  manualTrigger: SquareNode,
  webHookTigger: WebHookNode,
  emailNode: EmailNode,
  telegramNode: TelegramNode,
  aiAgentNode: AiAgentNode
};

const initialNodes: any = [];
const initialEdges: any = [];

function RFlowInner() {
  const reactFlowInstance = useReactFlow(); // ✅ now inside provider

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [showMiniMap, setShowMiniMap] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [triggerAdded, setTriggerAdded] = useState(false);

  const togglePanel = () => setShowPanel((prev) => !prev);

  const handleMoveStart = () => {
    setShowMiniMap(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMoveEnd = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMiniMap(false);
    }, 2000);
  };

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: any) => setEdges((eds: any) => addEdge(params, eds)),
    []
  );

  const addTriggerNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: "manualTrigger",
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds: any) => [...nds, newNode]);
    setTriggerAdded(true);
  }, [nodes]);

  const addWebHookNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: "webHookTigger",
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds: any) => [...nds, newNode]);
    setTriggerAdded(true);
  }, [nodes]);

  const addTelegramNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: "telegramNode",
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds: any) => [...nds, newNode]);
    setTriggerAdded(true);
  }, [nodes]);

  const addEmailNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: "emailNode",
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds: any) => [...nds, newNode]);
    setTriggerAdded(true);
  }, [nodes]);

  const addAiAgentNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: "aiAgentNode",
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds: any) => [...nds, newNode]);
    setTriggerAdded(true);
  }, [nodes]);

  const onNodeDeleteHandler = useCallback(
    (deletedNodes: any) => {
      if (deletedNodes.some((n: any) => n.type === "manualTrigger" || n.type === "webHookTigger" )) {
        setTriggerAdded(false);
      }
    },
    []
  );

  useEffect(() => {
    reactFlowInstance.fitView({ padding: 0.2 });
  }, [reactFlowInstance]);

  return (
    <ReactFlow
      style={{ background: "#2e2e2e" }}
      panOnDrag={false}
      selectionOnDrag
      panOnScroll
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onMoveStart={handleMoveStart}
      onMoveEnd={handleMoveEnd}
      onNodesDelete={onNodeDeleteHandler}
      fitView={false}
    >
      <Background />
      <Controls className="custom-controls" />
      {showMiniMap && (
        <MiniMap
          style={{
            background: "#2e2e2e",
            bottom: 60,
            right: 1000,
            width: 200,
            height: 125,
            padding: 6,
            borderRadius: 30,
            opacity: showMiniMap ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            pointerEvents: "none",
          }}
        />
      )}

      {!triggerAdded && showPanel && (
        <div id="TriggerPanel" className="overlay" onClick={() => setShowPanel(false)}>
          <div className="right-panel" onClick={(e) => e.stopPropagation()}>
            <div className="p-2 text-xl">Add Nodes to the Work Flow :</div>
            <PanelButton
              onClick={addTriggerNode}
              icon={pointer}
              title="Trigger manually"
              description="Runs the flow on clicking a button"
            />
            <PanelButton
              onClick={addWebHookNode}
              icon={webhook}
              title="On webhook call"
              description="Runs the flow on receiving a http request"
            />
          </div>
        </div>
      )}

      {triggerAdded && showPanel && (
        <div id="ActionsPanel" className="overlay" onClick={() => setShowPanel(false)}>
          <div className="right-panel" onClick={(e) => e.stopPropagation()}>
            <div className="p-2 text-xl">What Happens Next ? :</div>
            <PanelButton 
              icon={<FaTelegramPlane className="text-blue-400 mb-2 "/>} 
              title="Telegram" 
              description="Add a telegram Bot" 
              onClick={addTelegramNode}
            />
            <PanelButton 
              icon={<Mail />} 
              title="Send Email" 
              description="Send an Email" 
              onClick={addEmailNode}
            />
            <PanelButton 
              icon={<FaRobot />} 
              title="AI Agent" 
              description="Deploy an Agent" 
              onClick={addAiAgentNode}
            />
          </div>
        </div>
      )}

      <div className="second-controls">
        <button onClick={togglePanel}>➕</button>
      </div>
    </ReactFlow>
  );
}

export default function RFlow() {
  return (
    <ReactFlowProvider>
      <RFlowInner />
    </ReactFlowProvider>
  );
}
