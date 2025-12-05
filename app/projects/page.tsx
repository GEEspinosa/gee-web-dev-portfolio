"use client";

import { useState, useRef, useEffect } from "react";

import TreeNode from "@/components/TreeNode";
import { useDirectoryToggle } from "@/context/DirectoryToggleContext";
import ContentViewer from "../../components/ContentViewer";
import ColorPicker from "@/components/ColorPicker";
import { treeData } from "@/lib/treeData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(500);
  const [resizing, setResizing] = useState(false);
  const resizerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!isResizing.current || !containerRef.current) return;

      // Calculate new sidebar width relative to container's left edge
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      let newWidth = e.clientX - containerLeft;

      // Set min/max width limits
      if (newWidth < 300) newWidth = 300;
      if (newWidth > 800) newWidth = 800;

      setSidebarWidth(newWidth);
    }

    function handleMouseUp() {
      isResizing.current = false;
      setResizing(false);
      document.body.style.pointerEvents = "auto";
      document.body.style.cursor = "auto";
    }

    function handleMouseDown() {
      isResizing.current = true;
      setResizing(true);
      document.body.style.pointerEvents = "none";
      document.body.style.cursor = "col-resize";
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Attach mousedown handler to resizer div via ref in effect
    const resizer = resizerRef.current;
    if (resizer) {
      resizer.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (resizer) {
        resizer.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);

  const {
    // colorToggle,
    setColorToggle,
    highlightColor,
    setHighlightColor,
    // verticalToggle,
    setVerticalToggle,
    // horizontalToggle,
    setHorizontalToggle,
    // selectedNode,
    // setSelectedNode,
    openAllFolders,
    closeAllFolders,
  } = useDirectoryToggle();

  function toggleColorHandler() {
    setColorToggle((prev) => !prev);
  }

  function toggleVerticalHandler() {
    setVerticalToggle((prev) => !prev);
  }

  function toggleHorizontalHandler() {
    setHorizontalToggle((prev) => !prev);
  }

  return (
    <main
      ref={containerRef}
      className="flex h-screen overflow-hidden select-none"
    >
      {/* left sidebar column */}
      <aside
        style={{
          width: sidebarCollapse ? 48 : sidebarWidth,
          transition: !resizing ? "width 0.25s ease" : "none",
          overflow: "hidden",
          // Optional: reduce right padding when expanded to let button move closer
          paddingRight: sidebarCollapse ? "2rem" : "1rem",
        }}
        className="p-8 bg-white min-h-screen sticky top-0 h-screen overflow-y-auto border-r border-gray-200 flex-shrink-0"
      >
        <div
          className={`flex items-center mb-4 ${
            sidebarCollapse ? "justify-center" : "justify-between"
          } h-10`}
        >
          {!sidebarCollapse && (
            <h1
              className="font-mono text-xl"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Projects Directory
            </h1>
          )}

          <button
            onClick={() => setSidebarCollapse((prev) => !prev)}
            className={`h-8 w-8 min-w-[2rem] flex items-center justify-center rounded ${
              sidebarCollapse
                ? "bg-gray-800 hover:bg-gray-400"
                : "hover:bg-gray-200 " // negative margin-right only when expanded
            } text-sm`}
          >
            {sidebarCollapse ? (
              <ChevronRight size={24} color={"white"} />
            ) : (
              <ChevronLeft size={24} color={"black"} />
            )}
          </button>
        </div>

        {!sidebarCollapse && (
          <>
            <div className="flex flex-row items-center space-x-3 mb-4">
              <button onClick={toggleColorHandler}>color</button>
              <ColorPicker
                value={highlightColor}
                onChange={setHighlightColor}
              />
              <button onClick={toggleVerticalHandler}>vertical</button>
              <button onClick={toggleHorizontalHandler}>horizontal</button>
              <button onClick={openAllFolders} className="btn-toggle">
                Exp
              </button>
              <button onClick={closeAllFolders} className="btn-toggle">
                Col
              </button>
            </div>
            <div
              style={{
                paddingLeft: 2,
                overflowY: "auto",
                overflowX: "auto",
                minWidth: 0,
              }}
            >
              {treeData.map((node, index) => (
                <TreeNode
                  key={node.id}
                  node={node}
                  isLast={index === treeData.length - 1}
                />
              ))}
            </div>
          </>
        )}
      </aside>

      {/* Resizer bar */}
      <div
        ref={resizerRef}
        className="w-1 cursor-col-resize hover:bg-gray-400"
        style={{ userSelect: "none" }}
      />

      {/* right column content viewer */}
      <section className="p-8 flex-1 overflow-y-auto">
        <ContentViewer />
      </section>
    </main>
  );
}
