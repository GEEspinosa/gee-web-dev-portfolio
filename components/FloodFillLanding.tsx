"use client"

import { useEffect, useRef, useState } from "react";
import { createFloodFill } from "@/utils/flood-fill";

export default function FloodFillLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const animateRef = useRef<(() => void) | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const [grid, setGrid] = useState<{
    cols: number;
    rows: number;
    cellWidth: number;
    cellHeight: number;
  } | null>(null);

  function measureCellSize(preEl: HTMLPreElement) {
    const span = document.createElement("span");
    span.textContent = "[";
    span.style.fontFamily = "'DejaVu Sans Mono', 'Courier New', monospace";
    span.style.fontSize = getComputedStyle(preEl).fontSize;
    span.style.position = "absolute";
    span.style.visibility = "hidden";
    preEl.appendChild(span);
    const rect = span.getBoundingClientRect();
    preEl.removeChild(span);
    return { width: rect.width, height: rect.height };
  }

  function initFloodFill(originX?: number, originY?: number) {
    if (!containerRef.current || !preRef.current) return;

    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    const preEl = preRef.current;
    const containerRect = containerRef.current.getBoundingClientRect();

    const cellSize = measureCellSize(preEl);

    const cols = Math.floor(containerRect.width / cellSize.width);
    const rows = Math.floor(containerRect.height / cellSize.height);

    setGrid({
      cols,
      rows,
      cellWidth: cellSize.width,
      cellHeight: cellSize.height,
    });

    animateRef.current = createFloodFill(
      preEl,
      cols,
      rows,
      cellSize.width,
      cellSize.height,
      originX,
      originY,
      (id: number) => {
        animationFrameId.current = id;
      }
    );
    animateRef.current();
  }

  useEffect(() => {
    initFloodFill();

    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      initFloodFill();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  function handleClick(e: React.MouseEvent<HTMLPreElement>) {
    if (!preRef.current || !grid || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cellX = Math.floor(x / grid.cellWidth);
    const cellY = Math.floor(y / grid.cellHeight);

    initFloodFill(cellX, cellY);
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <pre
        ref={preRef}
        onClick={handleClick}
        style={{
          
          color: "gray",
          fontFamily: "'DejaVu Sans Mono', 'Courier New', monospace",
          whiteSpace: "pre",
        
          lineHeight: `${grid?.cellHeight ?? 18}px`,
          overflowWrap: "normal",
          wordBreak: "normal",
          margin: 0,
          padding: 0,
          userSelect: "none",
          width: grid ? `${grid.cols * grid.cellWidth}px` : "100%",
          height: grid ? `${grid.rows * grid.cellHeight}px` : "100%",
          letterSpacing: "0",
          
          fontVariantLigatures: "none",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
           textRendering: "optimizeLegibility", // add this
          zIndex: 0,
          overflow: "hidden",
          textAlign: "left",
        }}
        className="select-none font-mono leading-none"
      />
    </div>
  );
}
