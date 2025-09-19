import React, { useState } from "react";
import { EdgeProps, getBezierPath, MarkerType } from "@xyflow/react";

const HoverEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  style,
  markerEnd,
}) => {
  const [hovered, setHovered] = useState(false);

  // Generate default Bezier path
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath} // default shape
      style={{
        ...style,
        stroke: hovered ? "#fe6f5b" : style?.stroke || "#c2c8d5",
        strokeWidth: 3
      }}
      markerEnd={markerEnd || MarkerType.ArrowClosed} // keep arrow
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default HoverEdge;
