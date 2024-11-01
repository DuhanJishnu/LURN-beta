import React, { useState, useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, Position } from "react-flow-renderer";

// Mind map data
const mindMapData = [
  { id: "1", label: "Creativity", branch: "Root" },
  { id: "2", label: "Brainstorming", parentId: "1", branch: "Right" },
  { id: "3", label: "Complementing", parentId: "1", branch: "Left" },
  { id: "4", label: "Sessions", parentId: "2", branch: "subRight" },
  { id: "5", label: "Generate", parentId: "2", branch: "subRight" },
  { id: "6", label: "Local", parentId: "4", branch: "subRight" },
  { id: "7", label: "Remote", parentId: "4", branch: "subRight" },
  { id: "8", label: "Individual", parentId: "4", branch: "subRight" },
  { id: "9", label: "Teams", parentId: "4", branch: "subRight" },
  { id: "10", label: "Ideas", parentId: "5", branch: "subRight" },
  { id: "11", label: "Engagement", parentId: "5", branch: "subRight" },
  { id: "12", label: "Product", parentId: "10", branch: "subRight" },
  { id: "13", label: "Service", parentId: "10", branch: "subRight" },
  { id: "14", label: "Business Direction", parentId: "10", branch: "subRight" },
  { id: "15", label: "Empowering", parentId: "11", branch: "subRight" },
  { id: "16", label: "Ownership", parentId: "11", branch: "subRight" },
  { id: "17", label: "Information", parentId: "3", branch: "subLeft" },
  { id: "18", label: "Expectations", parentId: "3", branch: "subLeft" },
  { id: "19", label: "Competitors", parentId: "17", branch: "subLeft" },
  { id: "20", label: "Products", parentId: "17", branch: "subLeft" },
  { id: "21", label: "Features", parentId: "17", branch: "subLeft" },
  { id: "22", label: "Other Data", parentId: "17", branch: "subLeft" },
  { id: "23", label: "Organization", parentId: "18", branch: "subLeft" },
  { id: "24", label: "Customer", parentId: "18", branch: "subLeft" },
  { id: "25", label: "Staff", parentId: "18", branch: "subLeft" },
  { id: "26", label: "Stakeholders", parentId: "18", branch: "subLeft" },
];

// Custom styling for nodes based on branch type
const getNodeStyle = (branch) => {
  if (branch === "Root") return { background: "#E74C3C", color: "white" };
  if (branch === "Left" || branch === "subLeft") return { background: "#3498DB", color: "white" };
  if (branch === "Right" || branch === "subRight") return { background: "#8E44AD", color: "white" };
  return { background: "#F39C12", color: "white" };
};

// Custom layout function to arrange nodes
const layoutNodes = (data) => {
  const nodes = [];
  const edges = [];
  const spacingX = 200; // Horizontal spacing between nodes
  const spacingY = 100; // Vertical spacing between levels

  const addNode = (item, level = 0, xOffset = 0) => {
    const nodeStyle = getNodeStyle(item.branch);

    nodes.push({
      id: item.id,
      data: { label: item.label },
      position: { x: xOffset, y: level * spacingY },
      style: { ...nodeStyle, width: 110, height: 40, padding: "10px", borderRadius: "8px" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    });

    const children = data.filter((child) => child.parentId === item.id);
    const offsetX = children.length * spacingX;

    children.forEach((child, index) => {
      edges.push({
        id: `e${item.id}-${child.id}`,
        source: item.id,
        target: child.id,
        style: { strokeWidth: 3, stroke: child.branch.includes("Left") ? "#3498DB" : "#8E44AD" },
      });
      addNode(child, level + 1, xOffset + (index - children.length / 2) * spacingX);
    });
  };

  // Initialize layout with the root node
  const rootNode = data.find((node) => node.branch === "Root");
  if (rootNode) addNode(rootNode);

  return { nodes, edges };
};

function MindMaps() {
  const { nodes, edges } = layoutNodes(mindMapData);
  const [flowNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [flowEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  return (
    <div style={{ height: "720px", background: "black" }}>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={{ background: "black" }}
      >
        <MiniMap style={{ backgroundColor: "black" }} nodeColor={() => "gray"} maskColor="#333" />
        <Controls />
        <Background color="#333" gap={20} />
      </ReactFlow>
    </div>
  );
}

export default MindMaps;
