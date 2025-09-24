import { useEdges } from "@xyflow/react";
import { AnimatePresence , motion} from "framer-motion";
import { Handle , Position} from "@xyflow/react";
import { Plus } from "lucide-react";

export function SourceHandle({ nodeId }: any){
    const edges = useEdges();

    // Check if *this node's source* is connected
    const isSourceConnected = edges.some(e => e.source === nodeId);

    return (
        <Handle 
            type="source" 
            position={Position.Right} 
            className="!bg-white !w-4 !h-4  fill-green-500"
        >
            <AnimatePresence>
                {!isSourceConnected && (
                    <motion.div
                    className="absolute left-full top-1/2 -translate-y-1/2 overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 100, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                    <div className="relative h-8 ">
                        {/* Line centered */}
                        <svg
                            className="absolute top-1/2 -translate-y-1/2 pointer-events-none "
                            width="100"
                            height="2"
                        >
                        <motion.line
                            x1="0"
                            y1="1"
                            x2="60"
                            y2="1"
                            stroke="#fff"
                            strokeWidth="2"
                            initial={{ x2: 0 }}
                            animate={{ x2: 60 }}
                            exit={{ x2: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                        </svg>

                        {/* Button aligned with line */}
                        <motion.button
                            onClick={() => {}}
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: -20 }}
                            transition={{ duration: 0.15, ease: "easeInOut" }}
                            className="absolute left-[60px] top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#2e2e2e] border border-gray-600 text-white rounded-md shadow cursor-pointer hover:bg-[#3a3a3a]"
                        >
                            <Plus size={18} />
                        </motion.button>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Handle>
    );
}