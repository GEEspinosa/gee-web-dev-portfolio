///okay version!!!!!
interface Cell {
  x: number;
  y: number;
  filled: boolean;
  distance: number;
}

export function createFloodFill(
  preEl: HTMLPreElement,
  cols: number,
  rows: number,
  cellWidth: number,
  cellHeight: number,
  originX?: number,
  originY?: number,
  onRequestFrame?: (id: number) => void
) {
  // const densityChars = ["⠂", "⠆", "⠇", "⠏", "⠟", "⠿"];
  const densityChars = ["["];
  // const densityCharsFlipped = [" ", "⠂", "⠆", "⠇", "⠏", "⠟", "⠿"]; // Use same chars both sides for symmetry

  // Fudge factor to adjust horizontal distance for cell aspect ratio
  const fudgeFactor = cellWidth / cellHeight;

  // Use floating point origin centered between cells for better symmetry
  const centerX = (originX !== undefined ? originX : cols / 2);
  const centerY = originY !== undefined ? originY : rows / 2;

  const grid: Cell[] = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Weighted Euclidean distance to approximate circle in rectangular grid
      const dx = (x - centerX) * fudgeFactor;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      grid.push({
        x,
        y,
        filled: false,
        distance: dist,
      });
    }
  }

  const maxDistance = Math.max(...grid.map(c => c.distance));

  let startTime: number | null = null;

  function easeOutQuad(t: number) {
    return t * (2 - t);
  }

  function render() {
    let output = "";

    function getCharForProgress(progress: number) {
      progress = Math.min(Math.max(progress, 0), 1);
      const index = Math.floor(progress * (densityChars.length - 1));

      // Use same chars on both sides for perfect symmetry
      return densityChars[index];
    }

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cell = grid[y * cols + x];
        if (cell.filled) {
          const progress = cell.distance / maxDistance;
          output += getCharForProgress(progress);
        } else {
          output += "\u00A0";
        }
      }
      output += "\n";
    }

    preEl.textContent = output;
  }

  //mirror hemisphere type render

// function render() {
//   let output = "";

//   for (let y = 0; y < rows; y++) {
//     const lineArr = new Array(cols).fill("\u00A0");

//     for (let x = 0; x <= Math.floor(cols / 2); x++) {
//       const leftCell = grid[y * cols + x];
//       const rightX = cols - 1 - x;
//       const rightCell = grid[y * cols + rightX];

//       if (leftCell.filled || rightCell.filled) {
//         lineArr[x] = densityChars[0];
//         lineArr[rightX] = densityChars[0];
//       }
//     }

//     output += lineArr.join("") + "\n";
//   }

//   preEl.textContent = output;
// }


  function animateFill(timestamp?: number) {
    if (!startTime) startTime = timestamp ?? performance.now();
    const elapsed = (timestamp ?? performance.now()) - startTime;

    const duration = 2000;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);

    const fillRadius = easedProgress * maxDistance;

    for (const cell of grid) {
      if (!cell.filled && cell.distance <= fillRadius) {
        cell.filled = true;
      }
    }

    render();

    if (progress < 1) {
      const id = requestAnimationFrame(animateFill);
      if (onRequestFrame) onRequestFrame(id);
    }
  }

  return () => {
    for (const cell of grid) cell.filled = false;
    startTime = null;
    requestAnimationFrame(animateFill);
  };
}

