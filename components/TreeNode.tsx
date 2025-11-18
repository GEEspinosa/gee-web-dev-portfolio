"use client";
import { useState, useEffect } from "react";

export interface TreeNodeProps {
  node: {
    id: number;
    name: string;
    type: "file" | "folder";
    children?: TreeNodeProps["node"][];
  };
  level?: number;
  isLast?: boolean;
  ancestorsLast?: boolean[]; // track ancestors' last sibling status
}
const indentPx = 16;
const arrowWidth = 20; // px - adjust to arrow actual width + margin

export default function TreeNode({
  node,
  level = 0,
  isLast = true,
  ancestorsLast = [],
}: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === "folder";

  // Determine if vertical line should show for children container:
  // Show if any ancestor is NOT last sibling OR this node itself is NOT last sibling
  const hasVerticalLine = ancestorsLast.includes(false) || !isLast;

  // Prepare new ancestorsLast for children: add this node's isLast
  const newAncestorsLast = [...ancestorsLast, isLast];

  // Debug log to track state and props
  useEffect(() => {
    console.log({
      nodeName: node.name,
      level,
      isLast,
      ancestorsLast,
      hasVerticalLine,
      newAncestorsLast,
      isOpen,
      childrenCount: node.children?.length ?? 0,
    });
  }, [node.name, level, isLast, ancestorsLast, hasVerticalLine, isOpen, node.children]);

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
              left: level * indentPx + arrowWidth - 50, // adjust as needed
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
            position: "relative", // needed for absolutely positioned vertical line
            borderLeft:
              hasVerticalLine && node.children.length > 0
                ? "1px solid black"
                : "none",
            marginLeft: `${level * indentPx + 32}px`,
            paddingLeft: `${arrowWidth + 8}px`,
            minHeight: "1em", // ensure container has height for absolute children
            backgroundColor: "rgba(255, 0, 0, 0.05)", // TEMP visible background for debugging
          }}
        >
          {/* TEMP: Vertical line debug element */}
          {hasVerticalLine && node.children.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                borderLeft: "2px solid red",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
          )}

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
