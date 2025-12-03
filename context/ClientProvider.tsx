"use client";

import React, { useState } from "react";
import DirectoryToggleContext from "@/context/DirectoryToggleContext";
import { TreeNodeProps } from "@/components/TreeNode";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [colorToggle, setColorToggle] = useState(true);
  const [highlightColor, setHighlightColor] = useState("rgba(255, 0, 0, 0.22)");
  const [verticalToggle, setVerticalToggle] = useState(true);
  const [horizontalToggle, setHorizontalToggle] = useState(true);
  const [selectedNode, setSelectedNode] = useState<TreeNodeProps["node"] | null>(null);

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
      }}
    >
      {children}
    </DirectoryToggleContext.Provider>
  );
}
