import { useState, useEffect, useRef } from "react";
import { toRGBAWithAlpha } from "@/utils/rgba-with-alpha";

const PRESET_COLORS = [
  "rgba(255, 0, 0, 0.22)",
  "rgba(0, 128, 255, 0.22)",
  "rgba(0, 255, 0, 0.22)",
  "rgba(255, 165, 0, 0.22)",
  "rgba(128, 0, 128, 0.22)",
];

export default function ColorPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (color: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectColor = (color: string) => {
    const rgba = toRGBAWithAlpha(color, 0.22);
    onChange(rgba);
    setOpen(false);
  };

  return (
    <div 
    ref={dropdownRef}
    style={{ position: "relative", display: "inline-block" }}>
      {/* BUTTON */}
      <div
        onClick={toggleMenu}
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          backgroundColor: value,
          border: "1px solid #999",
          cursor: "pointer",
        }}
      />

      {/* DROPDOWN MENU */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 0,
            background: "#fff",
            padding: "10px",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 50,
          }}
        >
          <div style={{ marginBottom: 6, fontSize: 12 }}>Presets:</div>

          {/* PRESET SWATCHES */}
          <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
            {PRESET_COLORS.map((c) => (
              <div
                key={c}
                onClick={() => selectColor(c)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: c,
                  border: "1px solid #aaa",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* CUSTOM INPUT */}
          <label style={{ fontSize: 12 }}>Custom:</label>
          <input
            type="color"
            value={value}
            onChange={(e) => selectColor(e.target.value)}
            style={{
              marginTop: 4,
              width: "100%",
              cursor: "pointer",
            }}
          />
        </div>
      )}
    </div>
  );
}
