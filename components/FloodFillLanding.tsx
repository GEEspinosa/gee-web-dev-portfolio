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
    <section>
      <pre
        ref={preRef}
        id="ascii-layer"
        onClick={() => animateRef.current?.()}
        className="fixed inset-0 font-mono leading-none select-none"
      />

      <div className="min-h-screen flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-4xl font-semibold mb-4 font-sans">
          Gabriel Eduardo Espinosa
        </h1>

        <p className="text-lg mb-6 font-mono">
          Audio Engineer | Web Developer
        </p>

        <p className="max-w-xl font-mono text-gray-700">
          I’m a recording engineer and web developer exploring creative tools
          inspired by audio, sound, and community-driven arts
        </p>
      </div>
    </section>
  );
}