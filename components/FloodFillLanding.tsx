// "use client";

// import { useEffect, useRef, useState } from "react";
// import { createFloodFill } from "@/utils/flood-fill";

// export default function FloodFillLanding() {
//   const preRef = useRef<HTMLPreElement | null>(null);
//   const animateRef = useRef<(() => void) | null>(null);

//   const [grid, setGrid] = useState<{ cols: number; rows: number; cellWidth: number; cellHeight: number } | null>(null);

//   function measureCellSize(preEl: HTMLPreElement) {
//     const span = document.createElement("span");
//     span.textContent = "⠿";
//     span.style.fontFamily = "'DejaVu Sans Mono', 'Courier New', monospace";
//     span.style.fontSize = getComputedStyle(preEl).fontSize;
//     span.style.position = "absolute";
//     span.style.visibility = "hidden";
//     preEl.appendChild(span);
//     const rect = span.getBoundingClientRect();
//     preEl.removeChild(span);
//     return { width: rect.width, height: rect.height };
//   }

//   function initFloodFill(originX?: number, originY?: number) {
//     if (!preRef.current) return;
//     const preEl = preRef.current;

//     const cellSize = measureCellSize(preEl);
//     const rect = preEl.getBoundingClientRect();

//     const cols = Math.floor(rect.width / cellSize.width);
//     const rows = Math.floor(rect.height / cellSize.height);

//     setGrid({ cols, rows, cellWidth: cellSize.width, cellHeight: cellSize.height });

//     animateRef.current = createFloodFill(preEl, cols, rows, originX, originY);
//     animateRef.current();
//   }

//   useEffect(() => {
//     initFloodFill();

//     window.addEventListener("resize", () => initFloodFill());
//     return () => window.removeEventListener("resize", () => initFloodFill());
//   }, []);

//   // Handle clicks: map click position to grid cell coordinates
//   function handleClick(e: React.MouseEvent<HTMLPreElement>) {
//     if (!preRef.current || !grid) return;

//     const rect = preRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const cellX = Math.floor(x / grid.cellWidth);
//     const cellY = Math.floor(y / grid.cellHeight);

//     initFloodFill(cellX, cellY);
//   }

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <pre
//         ref={preRef}
//         onClick={handleClick}
//         style={{
//           fontFamily: "'DejaVu Sans Mono', 'Courier New', monospace",
//           whiteSpace: "pre",
//           lineHeight: 1,
//           overflowWrap: "normal",
//           wordBreak: "normal",
//           margin: 0,
//           padding: 0,
//           userSelect: "none",
//           width: grid ? `${grid.cols * grid.cellWidth}px` : "100%",
//           height: grid ? `${grid.rows * grid.cellHeight}px` : "100%",
//         }}
//         className="select-none font-mono leading-none"
//       />
//     </div>
//   );
// }






// "use client";

// import { useEffect, useRef, useState } from "react";
// import { createFloodFill } from "@/utils/flood-fill";

// export default function FloodFillLanding() {
//   const preRef = useRef<HTMLPreElement | null>(null);
//   const animateRef = useRef<(() => void) | null>(null);

//   const [grid, setGrid] = useState<{
//     cols: number;
//     rows: number;
//     cellWidth: number;
//     cellHeight: number;
//   } | null>(null);

//   function measureCellSize(preEl: HTMLPreElement) {
//     const span = document.createElement("span");
//     span.textContent = "⠿";
//     span.style.fontFamily =
//       "'DejaVu Sans Mono', 'Courier New', monospace";
//     span.style.fontSize = getComputedStyle(preEl).fontSize;
//     span.style.position = "absolute";
//     span.style.visibility = "hidden";
//     preEl.appendChild(span);
//     const rect = span.getBoundingClientRect();
//     preEl.removeChild(span);
//     return { width: rect.width, height: rect.height };
//   }

//   function initFloodFill(originX?: number, originY?: number) {
//     if (!preRef.current) return;
//     const preEl = preRef.current;

//     const cellSize = measureCellSize(preEl);
//     const rect = preEl.getBoundingClientRect();

//     const cols = Math.floor(rect.width / cellSize.width);
//     const rows = Math.floor(rect.height / cellSize.height);

//     setGrid({ cols, rows, cellWidth: cellSize.width, cellHeight: cellSize.height });

//     animateRef.current = createFloodFill(preEl, cols, rows, originX, originY);
//     animateRef.current();
//   }

//   useEffect(() => {
//     initFloodFill();

//     const handleResize = () => initFloodFill();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   function handleClick(e: React.MouseEvent<HTMLPreElement>) {
//     if (!preRef.current || !grid) return;

//     const rect = preRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const cellX = Math.floor(x / grid.cellWidth);
//     const cellY = Math.floor(y / grid.cellHeight);

//     initFloodFill(cellX, cellY);
//   }

//   return (
//     <pre
//       ref={preRef}
//       onClick={handleClick}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         fontFamily: "'DejaVu Sans Mono', 'Courier New', monospace",
//         whiteSpace: "pre",
//         lineHeight: 1,
//         overflowWrap: "normal",
//         wordBreak: "normal",
//         margin: 0,
//         padding: 0,
//         userSelect: "none",
//         width: grid ? `${grid.cols * grid.cellWidth}px` : "100%",
//         height: grid ? `${grid.rows * grid.cellHeight}px` : "100%",
//         zIndex: 0,
//       }}
//       className="select-none font-mono leading-none"
//     />
//   );
// }





"use client";

import { useEffect, useRef, useState } from "react";
import { createFloodFill } from "@/utils/flood-fill";

export default function FloodFillLanding() {
  const preRef = useRef<HTMLPreElement | null>(null);
  const animateRef = useRef<(() => void) | null>(null);

  const [grid, setGrid] = useState<{
    cols: number;
    rows: number;
    cellWidth: number;
    cellHeight: number;
  } | null>(null);

  function measureCellSize(preEl: HTMLPreElement) {
    const span = document.createElement("span");
    span.textContent = "⠿";
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
    if (!preRef.current) return;
    const preEl = preRef.current;

    const cellSize = measureCellSize(preEl);
    const rect = preEl.getBoundingClientRect();

    const cols = Math.floor(rect.width / cellSize.width);
    const rows = Math.floor(rect.height / cellSize.height);

    setGrid({ cols, rows, cellWidth: cellSize.width, cellHeight: cellSize.height });

    animateRef.current = createFloodFill(
      preEl,
      cols,
      rows,
      cellSize.width,
      cellSize.height,
      originX,
      originY
    );
    animateRef.current();
  }

  useEffect(() => {
    initFloodFill();

    const handleResize = () => initFloodFill();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLPreElement>) {
    if (!preRef.current || !grid) return;

    const rect = preRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cellX = Math.floor(x / grid.cellWidth);
    const cellY = Math.floor(y / grid.cellHeight);

    initFloodFill(cellX, cellY);
  }

  return (
    <pre
      ref={preRef}
      onClick={handleClick}
      style={{
  position: "absolute",
  top: 0,
  left: 0,
  fontFamily: "'DejaVu Sans Mono', 'Courier New', monospace",
  whiteSpace: "pre",
  lineHeight: `${grid?.cellHeight ?? 18}px`, // explicit pixel line height
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
  zIndex: 0,
  // optional debugging colors:
  // backgroundColor: '#111',
  // border: '1px solid lime',
}}
      className="select-none font-mono leading-none"
    />
  );
}

