import { create } from "zustand";
import { Node } from "@xyflow/react"; // use correct Node type from reactflow

type NodeStore = {
  nodes: Node[];
  setNodes: (updater: Node[] | ((prev: Node[]) => Node[])) => void;
};

export const useNodeStore = create<NodeStore>((set) => ({
  nodes: [],
  setNodes: (updater) =>
    set((state) => ({
      nodes: typeof updater === "function" 
        ? (updater as (prev: Node[]) => Node[])(state.nodes) 
        : updater,
    })),
}));

