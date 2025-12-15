"use client";

import { useEffect, useRef } from "react";
import { createFloodFill } from "@/utils/flood-fill";

export default function FloodFillLanding() {
  const preRef = useRef<HTMLPreElement | null>(null);
  const animateRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!preRef.current) return;

    animateRef.current = createFloodFill(preRef.current);
  }, []);

  return (
    <pre
      ref={preRef}
      id="ascii-layer"
      onClick={() => animateRef.current?.()}
      className="pointer-events-auto absolute inset-0 z-0 font-mono text-green-800 leading-none whitespace-pre select-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
