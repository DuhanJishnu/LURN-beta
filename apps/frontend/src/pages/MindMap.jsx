import React, { useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";

const mindMapData = [
  { id: '1', title: 'Root Node', children: ['2', '3'] },
  { id: '2', title: 'Child Node 1', children: ['4', '5'] },
  { id: '3', title: 'Child Node 2', children: [] },
  { id: '4', title: 'Leaf Node 1', children: [] },
  { id: '5', title: 'Leaf Node 2', children: [] },
];

const MindMap = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const generateMindMap = (data, parentId = null, level = 0, pos = { x: 0, y: 0 }) => {
    let nodes = [];
    let edges = [];

    data.forEach((item, index) => {
      // Calculate position for nodes in a radial layout
      const angle = (index / data.length) * 2 * Math.PI; // Angle for the radial position
      const radius = 150; // Radius from the parent node
      const position = {
        x: pos.x + radius * Math.cos(angle),
        y: pos.y + radius * Math.sin(angle),
      };

      // Add node to nodes array
      nodes.push({
        id: item.id,
        data: { label: item.title },
        position,
        style: {
          color: 'white',
          background: hoveredNode === item.id ? '#555' : '#333',
          padding: '10px',
          borderRadius: '8px',
        },
      });

      // Add edge if there is a parent node
      if (parentId) {
        edges.push({
          id: `e${parentId}-${item.id}`,
          source: parentId,
          target: item.id,
          style: { stroke: 'white' },
          animated: true,
        });
      }

      // Recursively generate child nodes and edges
      if (item.children && item.children.length > 0) {
        const childNodesAndEdges = generateMindMap(
          mindMapData.filter(node => item.children.includes(node.id)),
          item.id,
          level + 1,
          position // Use current node's position as the new center
        );

        nodes = nodes.concat(childNodesAndEdges.nodes);
        edges = edges.concat(childNodesAndEdges.edges);
      }
    });

    return { nodes, edges };
  };

  const { nodes, edges } = generateMindMap(mindMapData);

  return (
    <div className="h-screen p-10" style={{ backgroundColor: 'black' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{ background: 'black' }}
        onNodeMouseEnter={(event, node) => setHoveredNode(node.id)}
        onNodeMouseLeave={() => setHoveredNode(null)}
      >
        <MiniMap style={{ backgroundColor: 'black' }} nodeColor={() => 'gray'} maskColor="#333" />
        <Controls className="custom-controls" />
        <Background color="#333" gap={20} />
      </ReactFlow>

      <style jsx>{`
        .custom-controls button {
          background-color: #444 !important;  /* Dark gray for visibility */
          color: white !important;
          border: 1px solid white !important;
        }
        .custom-controls button:hover {
          background-color: #666 !important; /* Slightly lighter on hover */
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default MindMap;
