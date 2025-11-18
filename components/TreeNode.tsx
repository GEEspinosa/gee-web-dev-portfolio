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

  const hasNextSibling = !isLast;

  return (
    <div>
      <div
        className="flex items-center font-mono text-black select-none"
        style={{ paddingLeft: `${level * indentPx}px`, lineHeight: "1.5rem" }}
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
              width: arrowWidth, // fixed width container for arrow
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            ▶
          </button>
        ) : (
          // placeholder to keep text aligned with files (no arrow)
          <span style={{ display: "inline-block", width: arrowWidth }} />
        )}
        <span>{node.name}</span>
        {/* {!isLast && (
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              width: arrowWidth + 8,
              borderBottom: "1px solid black",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
        )} */}
      </div>

      {isFolder && isOpen && node.children && (
        <div
          style={{
            borderLeft: !isLast ? "1px solid black" : "none",
            marginLeft: `${level * indentPx + 32}px`,
            paddingLeft: `${arrowWidth + 8}px`, // push content to right to avoid overlapping line
          }}
        >
          {node.children.map((child, index) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              isLast={index === (node.children?.length ?? 0) - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
