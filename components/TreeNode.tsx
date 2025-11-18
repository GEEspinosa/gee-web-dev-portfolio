"use client";
import { useState } from "react";

export interface TreeNodeProps {
  node: {
    id: number;
    name: string;
    type: "file" | "folder";
    children?: TreeNodeProps["node"][];
  };
  level?: number;
  isLast?: boolean;
  ancestorsLast?: boolean[]; // new prop to track ancestors' last sibling status
}

const indentPx = 16;
const arrowWidth = 20;

export default function TreeNode({ node, level = 0, isLast = true, ancestorsLast = [] }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === "folder";

  // Determine if vertical line should show for children container:
  // Show if any ancestor is NOT last sibling OR this node itself is NOT last sibling
  const hasVerticalLine = ancestorsLast.includes(false) || !isLast;

  // Prepare new ancestorsLast for children: add this node's isLast
  const newAncestorsLast = [...ancestorsLast, isLast];

  return (
    <div>
      <div
        className="flex items-center font-mono text-black select-none relative"
        style={{
          paddingLeft: `${level * indentPx}px`,
          lineHeight: "1.5rem",
          position: "relative",
        }}
      >
        {isFolder ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Collapse folder" : "Expand folder"}
            className="mr-2"
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "1.25rem",
              lineHeight: "1",
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              width: arrowWidth,
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            ▶
          </button>
        ) : (
          <span style={{ display: "inline-block", width: arrowWidth }} />
        )}
        <span>{node.name}</span>

        {/* Horizontal line for all siblings */}
        {level > 0 && (
          <span
            style={{
              position: "absolute",
              left: level * indentPx + arrowWidth - 50,
              top: "57.5%",
              width: 28,
              borderBottom: "1px solid black",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
        )}
      </div>

      {isFolder && isOpen && node.children && (
        <div
          style={{
            borderLeft: hasVerticalLine ? "1px solid black" : "none",
            marginLeft: `${level * indentPx + 32}px`,
            paddingLeft: `${arrowWidth + 8}px`,
          }}
        >
          {node.children.map((child, index) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              isLast={index === node.children!.length - 1}
              ancestorsLast={newAncestorsLast} // pass updated ancestorsLast down
            />
          ))}
        </div>
      )}
    </div>
  );
}
