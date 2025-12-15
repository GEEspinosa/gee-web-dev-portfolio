interface Cell {
  x: number;
  y: number;
  filled: boolean;
  distance: number;
}

export function createFloodFill(preEl: HTMLPreElement) {
  const CELL_SIZE = 12;
  const cols = Math.floor(window.innerWidth / CELL_SIZE);
  const rows = Math.floor(window.innerHeight / CELL_SIZE);

  const grid:Cell[] = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push({
        x,
        y,
        filled: false,
        distance: 0,
      });
    }
  }

  const originX = Math.floor(cols / 2);
  const originY = Math.floor(rows / 2);

  for (const cell of grid) {
    cell.distance = Math.hypot(cell.x - originX, cell.y - originY);
  }

  grid.sort((a, b) => a.distance - b.distance);

  let fillIndex = 0;
  const FILL_SPEED = 40;

  function render() {
    let output = "";

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cell = grid[y * cols + x];
        output += cell.filled ? "░" : " ";
      }
      output += "\n";
    }

    preEl.textContent = output;
  }

  function animateFill() {
    for (let i = 0; i < FILL_SPEED && fillIndex < grid.length; i++) {
      grid[fillIndex].filled = true;
      fillIndex++;
    }

    render();

    if (fillIndex < grid.length) {
      requestAnimationFrame(animateFill);
    }
  }

  return animateFill;
}