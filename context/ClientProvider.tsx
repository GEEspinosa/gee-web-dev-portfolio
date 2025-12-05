"use client";

import React, { useState } from "react";
import DirectoryToggleContext from "@/context/DirectoryToggleContext";
import { TreeNodeProps } from "@/components/TreeNode";

export function ClientProvider({
  children,
  tree,
}: {
  children: React.ReactNode;
  tree: TreeNodeProps["node"][];
}) {
  const [colorToggle, setColorToggle] = useState(true);
  const [highlightColor, setHighlightColor] = useState("rgba(255, 0, 0, 0.22)");
  const [verticalToggle, setVerticalToggle] = useState(true);
  const [horizontalToggle, setHorizontalToggle] = useState(true);
  const [selectedNode, setSelectedNode] = useState<
    TreeNodeProps["node"] | null
  >(null);

  //openFolders state and toggle functions
  const [openFolders, setOpenFolders] = useState<Record<number, boolean>>({});

  function toggleFolder(id: number) {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  // function setFolderOpen(id: number, value: boolean) {
  //   setOpenFolders((prev) => ({ ...prev, [id]: value }));
  // }

  function collectFolderIds(nodes: TreeNodeProps["node"][]): number[] {
    const ids: number[] = [];

    function walk(node: TreeNodeProps["node"]) {
      if (node.type === "folder") {
        ids.push(node.id);
        node.children?.forEach(walk);
      }
    }

    nodes.forEach(walk);
    return ids;
  }

  function openAllFolders() {
    const ids = collectFolderIds(tree);
    const all: Record<number, boolean> = {};
    ids.forEach((id) => (all[id] = true));
    setOpenFolders(all);
  }

  function closeAllFolders() {
    setOpenFolders({});
  }

  return (
    <DirectoryToggleContext.Provider
      value={{
        colorToggle,
        setColorToggle,
        highlightColor,
        setHighlightColor,
        verticalToggle,
        setVerticalToggle,
        horizontalToggle,
        setHorizontalToggle,
        selectedNode,
        setSelectedNode,
        openFolders,
        toggleFolder,
        openAllFolders,
        closeAllFolders,
      }}
    >
      {children}
    </DirectoryToggleContext.Provider>
  );
}
