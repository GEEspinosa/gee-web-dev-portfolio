"use client";
import { useState, useRef, useEffect } from "react";
import { useDirectoryToggle } from "../context/DirectoryToggleContext";

type FileType = 'github-repo' | 'live-demo' | 'readme' | 'component' | 'album-file'  

export interface TreeNodeProps {
  node: {
    id: number;
    name: string;
    type: "file" | "folder";
    fileType?: FileType
    children?: TreeNodeProps["node"][];
    content?: string,
    url?: string,
  };
  level?: number;
  isLast?: boolean; // is this node the last among its siblings?
  ancestorsLast?: boolean[]; // list tracking which ancestors were last siblings
  colorToggle?: boolean;
}

//
// CONSTANTS — indentation, toggle arrow width, and tuning offset
//
const indentPx = 16;
const arrowWidth = 20;

// Global horizontal offset aligning vertical/horizontal connector lines
const lineLeftOffset = -38;

export default function TreeNode({
  node,
  level = 0,
  isLast = true,
  ancestorsLast = [],
}: TreeNodeProps) {
  const { colorToggle, verticalToggle, horizontalToggle, setSelectedNode, selectedNode } =
    useDirectoryToggle();
  //
  // FOLDER STATE
  //
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === "folder";
  const hasChildren = isFolder && node.children && node.children.length > 0;

  //
  // ANCESTRY TRACKING (used for drawing vertical ancestor lines — not currently active)
  //
  const newAncestorsLast = level === 0 ? [] : [...ancestorsLast, isLast];

  //
  // DYNAMIC VERTICAL LINE POSITIONING
  // The vertical trunk line sits to the left of this node’s children
  //
  const trunkLeft = level * indentPx + arrowWidth - 12;

  //
  // REF: contains *only* the immediate child TreeNode roots
  // (NOT the entire subtree)
  //
  const directChildrenRef = useRef<HTMLDivElement | null>(null);

  //
  // State that stores the dynamically computed height of the vertical trunk line
  //
  const [trunkHeight, setTrunkHeight] = useState(0);

  //
  // EFFECT: Measure the vertical distance between the first and last direct child row.
  // This ensures the trunk line:
  //    ✔ connects perfectly from the parent horizontal line
  //    ✔ ends exactly at the last first-order child
  //    ✔ never extends into grandchildren
  //    ✔ dynamically adjusts as children expand/collapse
  //
  useEffect(() => {
    //
    // Re-measure the trunk height
    //
    function recompute() {
      const container = directChildrenRef.current;
      if (!container) {
        setTrunkHeight(0);
        return;
      }

      const children = Array.from(container.children) as HTMLElement[];
      if (children.length === 0) {
        setTrunkHeight(0);
        return;
      }

      //
      // We only care about the .tree-node-row inside each first-level child
      //
      const firstRow = children[0].querySelector<HTMLElement>(".tree-node-row");
      const lastRow =
        children[children.length - 1].querySelector<HTMLElement>(
          ".tree-node-row"
        );

      if (!firstRow || !lastRow) {
        setTrunkHeight(0);
        return;
      }

      //
      // Compute absolute vertical distance:
      // bottom_of_last_row - top_of_first_row
      //
      const firstTop = firstRow.getBoundingClientRect().top;
      const lastTop = lastRow.getBoundingClientRect().top;
      const lastHeight = lastRow.getBoundingClientRect().height;

      const distance = lastTop + lastHeight - firstTop;

      //
      // Apply the tuning offset (-10) that makes your L-shapes perfect
      //
      setTrunkHeight(Math.max(0, Math.round(distance) - 10));
    }

    //
    // If closed, trunk disappears
    //
    if (!isOpen || !directChildrenRef.current) {
      queueMicrotask(() => setTrunkHeight(0));
      return;
    }

    // Initial measurement
    recompute();

    //
    // ResizeObserver: re-run measurement if children resize
    //
    const ro = new ResizeObserver(recompute);
    ro.observe(directChildrenRef.current);

    //
    // MutationObserver: re-run measurement if first-order children are added/removed
    //
    const mo = new MutationObserver(() => {
      recompute();
    });
    mo.observe(directChildrenRef.current, { childList: true, subtree: false });

    //
    // Cleanup
    //
    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [isOpen, node.children]);

  //
  // RENDER
  //
  return (
    <div style={{ position: "relative" }}>
      {/* ─────────────────────────────
          NODE ROW (label + arrow)
         ───────────────────────────── */}
      <div
        className="tree-node-row flex items-center font-mono text-black select-none relative"
        style={{
          paddingLeft: `${level * indentPx + 0.25}px`,
          lineHeight: "1.5rem",
          minHeight: "1.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* FOLDER TOGGLE */}
        {isFolder ? (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "1.25rem",
              width: arrowWidth,
              display: "inline-flex",
              justifyContent: "center",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
            aria-label={isOpen ? "Collapse folder" : "Expand folder"}
          >
            ▶
          </button>
        ) : (
          // Placeholder: ensures file nodes align with folder nodes
          <span style={{ width: arrowWidth, display: "inline-block" }} />
        )}

        {/* LABEL */}
       
          <span
            onClick={
              node.type === "file" ? () => setSelectedNode(node) : undefined
            }
            className={`
              ${node.type === "file"
                ? "cursor-pointer hover:underline "
                : "cursor-default"} ${selectedNode?.id === node.id? " underline" : "" }
            `}
          >
            {node.name}
          </span>
       

        {/* HORIZONTAL LINE (connects to parent’s vertical trunk) */}
        {horizontalToggle && level > 0 && (
          <span
            style={{
              position: "absolute",
              left: indentPx * level + arrowWidth / 2 + lineLeftOffset - 16,
              top: "58%",
              width: arrowWidth + 11,
              borderBottom: "1px solid black",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          />
        )}
      </div>

      {/* ─────────────────────────────
          CHILDREN
         ───────────────────────────── */}
      {isFolder && isOpen && hasChildren && (
        <div
          style={{
            position: "relative",
            paddingLeft: indentPx + arrowWidth,
            backgroundColor: colorToggle
              ? "rgba(255, 0, 0, 0.22)"
              : "transparent", // TEMP visible background for debugging
          }}
        >
          {/* VERTICAL TRUNK LINE (computed height) */}
          {verticalToggle && trunkHeight > 0 && (
            <span
              style={{
                position: "absolute",
                top: 0,
                left: trunkLeft,
                width: 1,
                height: trunkHeight,
                backgroundColor: "black",
                zIndex: 0,
              }}
            />
          )}

          {/* First-order child wrapper (VERY important: 
              only children of this folder — not entire subtrees)
          */}
          <div ref={directChildrenRef}>
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
        </div>
      )}
    </div>
  );
}
