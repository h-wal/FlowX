"use client"

const addToolNode = (agentId: string, toolName: string) => {
  const newToolId = `tool-${Date.now()}`;

  // setNodes((nds) => [
  //   ...nds,
  //   {
  //     id: newToolId,
  //     type: "toolNode",
  //     position: { x: 300, y: 200 }, // adjust dynamically
  //     data: { label: toolName },
  //   },
  // ]);

  // setEdges((eds) => [
  //   ...eds,
  //   { id: `e-${agentId}-${newToolId}`, source: agentId, target: newToolId },
  // ]);
};