"use client";
import { useState, useRef, useEffect } from "react";

export interface TreeNodeProps {
  node: {
    id: number;
    name: string;
    type: "file" | "folder";
    children?: TreeNodeProps["node"][];
  };
  level?: number;
  isLast?: boolean;
  ancestorsLast?: boolean[];
}

const indentPx = 16;
const arrowWidth = 20;
const lineLeftOffset = -38;

export default function TreeNode({
  node,
  level = 0,
  isLast = true,
  ancestorsLast = [],
}: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === "folder";

  const newAncestorsLast = level === 0 ? [] : [...ancestorsLast, isLast];
  const trunkLeft = level * indentPx + arrowWidth - 12;
  const hasChildren = isFolder && node.children && node.children.length > 0;
 
  // Ref for children container div
  const childrenContainerRef = useRef<HTMLDivElement>(null);
  // State for dynamic height of children container
  const [childrenHeight, setChildrenHeight] = useState(0);
  

  // Measure the container height on every render when open state or children change
  useEffect(() => {
    if (isOpen && childrenContainerRef.current) {
      const rect = childrenContainerRef.current.getBoundingClientRect();
      setChildrenHeight(rect.height);
    } else {
      setChildrenHeight(0);
    }
  }, [isOpen, node.children]);

  return (
    <div style={{ position: "relative" }}>
      {/* NODE ROW */}
      <div
        className="flex items-center font-mono text-black select-none relative"
        style={{
          paddingLeft: `${level * indentPx + 0.25}px`,
          lineHeight: "1.5rem",
          position: "relative",
          minHeight: "1.5rem",
        }}
      >
        {/* TOGGLE */}
        {isFolder ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-1"
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "1.25rem",
              top: "8",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              width: arrowWidth,
              display: "inline-flex",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            aria-label={isOpen ? "Collapse folder" : "Expand folder"}
          >
            ▶
          </button>
        ) : (
          <span style={{ display: "inline-block", width: arrowWidth }} />
        )}

        {/* LABEL */}
        <span>{node.name}</span>

        {/* HORIZONTAL LINE */}
        {level > 0 && (
          <span
            style={{
              position: "absolute",
              left: indentPx * level + arrowWidth / 2 + lineLeftOffset - 16,
              top: "58%",
              width: arrowWidth + 11,
              borderBottom: "1px solid black",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
        )}
      </div>

      {/* CHILDREN */}
      {isFolder && isOpen && hasChildren && (
        <div
          ref={childrenContainerRef}
          style={{
            position: "relative",
            paddingLeft: indentPx + arrowWidth,
          }}
        >
          {/* VERTICAL TRUNK LINE */}
          {childrenHeight > 0 && (
            <span
              style={{
                position: "absolute",
                top: 0,
                left: trunkLeft,
                width: 1,
                height: childrenHeight - 10,
                backgroundColor: "black",
                zIndex: 0,
              }}
            />
          )}

          {/* CHILD NODES */}
          {node.children!.map((child, index) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              isLast={index === node.children!.length - 1}
              ancestorsLast={newAncestorsLast}
            />
          ))}
        </div>
      )}
    </div>
  );
}
