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
}
const indentPx = 16;
const arrowWidth = 20; // px - adjust to arrow actual width + margin

export default function TreeNode({ node, level = 0, isLast }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === "folder";

  // Draw vertical line if NOT last sibling
  // Also, folders will have vertical lines to their children
  const showVerticalLine = !isLast;

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

        {/* Always draw horizontal line for every sibling, including last */}
        {level > 0 && (
          <span
            style={{
              position: "absolute",
              left: level * indentPx + arrowWidth - 50, // slightly adjust to line up nicely
              top: "57.5%",
              width: 28, // length of horizontal line
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
            borderLeft: isFolder && node.children && node.children.length > 0 ? "1px solid black" : "none",
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
            />
          ))}
        </div>
      )}
    </div>
  );
}
