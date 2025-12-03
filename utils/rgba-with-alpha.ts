export function toRGBAWithAlpha(color: string, alpha = 0.22): string {
  // Already rgba() → just replace alpha
  if (color.startsWith("rgba")) {
    const parts = color
      .replace("rgba(", "")
      .replace(")", "")
      .split(",")
      .map((p) => p.trim());
    return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
  }

  // rgb() → add alpha
  if (color.startsWith("rgb(")) {
    const parts = color
      .replace("rgb(", "")
      .replace(")", "")
      .split(",")
      .map((p) => p.trim());
    return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
  }

  // HEX
  let hex = color.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
