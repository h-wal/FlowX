"use client";

interface rflowInnerProps{
  workFlow: any
}

import React, { useState, useCallback, useRef, useEffect } from "react";
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
  Edge, 
  MarkerType
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { TextUpdaterNode } from "./customNodes/textupdater";
import SquareNode from "./customNodes/manualTriggerNode";
import WebHookNode from "./customNodes/webhookTriggerNode";
import PanelButton from "./ui/rightpanelbutton";
import { pointer } from "./icons/pointer";
import { webhook } from "./icons/webhook";
import { FaRobot, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { Mail } from "lucide-react";
import TelegramNode from "./customNodes/telegramNode";
import EmailNode from "./customNodes/EmailNode";
import AiAgentNode from "./customNodes/aiAgentNode";
import { useSaveStore } from "../stores/saveStore";
import axios from "axios";
import { useTriggerStore } from "../stores/triggerStore";
import ExcecuteFlowButton from "./buttons/excecuteFlowButton";
import { usePanelStore } from "../../stores/uiStores/dataPanel";
import HoverEdge from "./hoverEdge";
import { useNodeStore } from "../../stores/workflowStores/nodeStore";



const nodeTypes = {
  textUpdater: TextUpdaterNode,
  manualTrigger: SquareNode,
  webHookTigger: WebHookNode,
  emailNode: EmailNode,
  telegramNode: TelegramNode,
  aiAgentNode: AiAgentNode
};

// const initialNodes: any = [];
const initialEdges: any = [];

function RFlowInner(props: rflowInnerProps) {

  const {triggerSave, setTriggerSave, saved, setSaved, saving, setSaving} = useSaveStore()
  const {excecuting, setExcecuting, triggerPressed, setTriggerPressed} = useTriggerStore()
  const { panelOpen, setPanelOpen,  setNode} = usePanelStore()

  const reactFlowInstance = useReactFlow();

  const {nodes, setNodes} = useNodeStore();
  const [edges, setEdges] = useState(initialEdges);
  const [showMiniMap, setShowMiniMap] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [triggerAdded, setTriggerAdded] = useState(false);
  const { toObject } = useReactFlow();

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

  const onNodesChange = useCallback((changes: any) => {
    setNodes((nds: any) => applyNodeChanges(changes, nds));
    setSaved(false);
  }, [setSaved])

  const onEdgesChange = useCallback(
    (changes: any) => { setEdges((eds: any) => applyEdgeChanges(changes, eds)); setSaved(false)}, 
    [setSaved]);
  
  const onConnect = useCallback(
    (params: any) => { setEdges((eds: any) => addEdge(params, eds)); setSaved(false);},
    [setSaved]);

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

  const onNodeDoubleClickHandler = useCallback((event: React.MouseEvent, node: any) => {
    event.preventDefault();
    setPanelOpen(true)
    setNode(node)
    console.log(node)
  }, [setPanelOpen])

  const handleSave = async () => {
    const flow = JSON.stringify(toObject());
    console.log(flow);

    try {
      setSaving(true);
      const res = await axios.put("http://localhost:3030/api/v1/workflow", {
        workFlowId: props.workFlow.id,
        flow: flow
      }, { withCredentials: true });

      if (res) {
        console.log("Saved Successfully");
        setSaved(true);   // ✅ reset saved flag
        setSaving(false);
        setTriggerSave(false)
      }
    } catch (e) {
      alert("Error saving");
      setTriggerSave(false)
      setSaving(false);
      setSaved(false); // stay dirty
    }
  };

  const excecuteWorkflow = async () => {
    try{
      console.log("workflow Excecution called")

      setExcecuting(true);
      axios.post("http://localhost:3030/api/v1/excecution", {
        workFlowId: props.workFlow.id
      },{
        withCredentials: true
      }) 

      setTimeout(() => setTriggerPressed(false), 500)
    } catch{
      console.log("Error fetching workflow")
    }
  }

  const edgeTypes = {
    default: HoverEdge, // all edges will now use HoverEdge
  };

  useEffect(() => {
    reactFlowInstance.fitView({ padding: 0.2 });
  }, [reactFlowInstance]);

  useEffect(() => {
    if(triggerSave){
      handleSave()
    }
  }, [triggerSave])

  useEffect(() => {
    if (props.workFlow?.flow) {
      try {
        const parsed = JSON.parse(props.workFlow.flow);
        setNodes(parsed.nodes || []);
        setEdges(parsed.edges || []);

        if (parsed.viewport) {
          reactFlowInstance.setViewport(parsed.viewport);
        }
        
        setTriggerAdded(true)
      } catch (err) {
        console.error("Failed to parse flow:", err);
      }
    }
  }, [props.workFlow, reactFlowInstance]);

  useEffect(() => {
    if(triggerPressed && !saving){
      excecuteWorkflow()
    }
  }, [triggerPressed, saving])

  return (
    <ReactFlow
      style={{ background: "#2e2e2e" }}
      panOnDrag={false}
      selectionOnDrag
      panOnScroll
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onMoveStart={handleMoveStart}
      onMoveEnd={handleMoveEnd}
      onNodesDelete={onNodeDeleteHandler}
      onNodeDoubleClick={onNodeDoubleClickHandler}
      fitView={false}
      defaultEdgeOptions={{
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      }}
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

      <ExcecuteFlowButton></ExcecuteFlowButton>

      <div className="second-controls">
        <button onClick={togglePanel}>➕</button>
      </div>
      </ReactFlow>
  );
}

interface rflowprops{
  workFlow: any
}

export default function RFlow(props: rflowprops) {
  return (
    <ReactFlowProvider>
      <RFlowInner workFlow={props.workFlow}/>
    </ReactFlowProvider>
  );
}
