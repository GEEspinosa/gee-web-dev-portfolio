// interface Cell {
//   x: number;
//   y: number;
//   filled: boolean;
//   distance: number;
// }

// export function createFloodFill(preEl: HTMLPreElement) {


//   function getCellSize(preEl: HTMLPreElement) {
//   const span = document.createElement('span');
//   span.textContent = 'M'; // typical wide char
//   span.style.fontFamily = getComputedStyle(preEl).fontFamily;
//   span.style.fontSize = getComputedStyle(preEl).fontSize;
//   span.style.position = 'absolute';
//   span.style.visibility = 'hidden';
//   preEl.appendChild(span);
//   const rect = span.getBoundingClientRect();
//   preEl.removeChild(span);
//   return { width: rect.width, height: rect.height };
// }

  

//   const { width: cellWidth, height: cellHeight } = getCellSize(preEl);

//   const rect = preEl.getBoundingClientRect();

//   const cols = Math.floor(rect.width / cellWidth);
//   const rows = Math.floor(rect.height / cellHeight);

//   const grid: Cell[] = [];

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid.push({
//         x,
//         y,
//         filled: false,
//         distance: 0,
//       });
//     }
//   }

//   const originX = Math.floor(cols / 2);
//   const originY = Math.floor(rows / 2);

//   for (const cell of grid) {
//     cell.distance = Math.hypot(cell.x - originX, cell.y - originY);
//   }

//   grid.sort((a, b) => a.distance - b.distance);

//   let fillIndex = 0;
//   const FILL_SPEED = 40;

//   function render() {
//     let output = "";

//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < cols; x++) {
//         const cell = grid[y * cols + x];
//         output += cell.filled ? "░" : " ";
//       }
//       output += "\n";
//     }

//     preEl.textContent = output;
//   }

//   function animateFill() {
//     for (let i = 0; i < FILL_SPEED && fillIndex < grid.length; i++) {
//       grid[fillIndex].filled = true;
//       fillIndex++;
//     }

//     render();

//     if (fillIndex < grid.length) {
//       requestAnimationFrame(animateFill);
//     }
//   }

//   return animateFill;
// }

// interface Cell {
//   x: number;
//   y: number;
//   filled: boolean;
//   distance: number;
// }

// export function createFloodFill(preEl: HTMLPreElement) {
//   function getCellSize(preEl: HTMLPreElement) {
//     const span = document.createElement('span');
//     span.textContent = 'M'; // typical wide char
//     span.style.fontFamily = getComputedStyle(preEl).fontFamily;
//     span.style.fontSize = getComputedStyle(preEl).fontSize;
//     span.style.position = 'absolute';
//     span.style.visibility = 'hidden';
//     preEl.appendChild(span);
//     const rect = span.getBoundingClientRect();
//     preEl.removeChild(span);
//     return { width: rect.width, height: rect.height };
//   }

//   const { width: cellWidth, height: cellHeight } = getCellSize(preEl);

//   const rect = preEl.getBoundingClientRect();

//   const cols = Math.floor(rect.width / cellWidth);
//   const rows = Math.floor(rect.height / cellHeight);

//   const grid: Cell[] = [];

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid.push({
//         x,
//         y,
//         filled: false,
//         distance: 0,
//       });
//     }
//   }

//   const originX = Math.floor(cols / 2);
//   const originY = Math.floor(rows / 2);

//   for (const cell of grid) {
//     cell.distance = Math.hypot(cell.x - originX, cell.y - originY);
//   }

//   grid.sort((a, b) => a.distance - b.distance);

//   let fillIndex = 0;
//   let startTime: number | null = null;

//   function easeOutQuad(t: number) {
//     return t * (2 - t);
//   }

//   function render() {
//     let output = "";

//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < cols; x++) {
//         const cell = grid[y * cols + x];
//         output += cell.filled ? "░" : " ";
//       }
//       output += "\n";
//     }

//     preEl.textContent = output;
//   }

//   function animateFill(timestamp?: number) {
//     if (!startTime) startTime = timestamp ?? performance.now();
//     const elapsed = (timestamp ?? performance.now()) - startTime;

//     const duration = 2000; // animation duration in ms
//     const progress = Math.min(elapsed / duration, 1);
//     const easedProgress = easeOutQuad(progress);

//     const cellsToFill = Math.floor(easedProgress * grid.length);

//     while (fillIndex < cellsToFill) {
//       grid[fillIndex].filled = true;
//       fillIndex++;
//     }

//     render();

//     if (fillIndex < grid.length) {
//       requestAnimationFrame(animateFill);
//     }
//   }

//   // Return a function to start the animation manually if needed
//   return () => {
//     fillIndex = 0;
//     startTime = null;
//     requestAnimationFrame(animateFill);
//   };
// }


// interface Cell {
//   x: number;
//   y: number;
//   filled: boolean;
//   distance: number;
// }

// export function createFloodFill(preEl: HTMLPreElement, cols: number, rows: number) {
//   const densityChars = [' ', '⠂', '⠆', '⠇', '⠏', '⠟', '⠿'];

//   const grid: Cell[] = [];
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       grid.push({
//         x,
//         y,
//         filled: false,
//         distance: 0,
//       });
//     }
//   }

//   const originX = Math.floor(cols / 2);
//   const originY = Math.floor(rows / 2);

//   for (const cell of grid) {
//     cell.distance = Math.hypot(cell.x - originX, cell.y - originY);
//   }

//   const sortedGrid = [...grid].sort((a, b) => a.distance - b.distance);

//   let fillIndex = 0;
//   let startTime: number | null = null;

//   function easeOutQuad(t: number) {
//     return t * (2 - t);
//   }

//   function render() {
//     let output = "";
//     const maxDistance = sortedGrid[sortedGrid.length - 1].distance;

//     function getCharForProgress(progress: number) {
//       progress = Math.min(Math.max(progress, 0), 1);
//       const index = Math.floor(progress * (densityChars.length - 1));
//       return densityChars[index];
//     }

//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < cols; x++) {
//         const cell = grid[y * cols + x];
//         if (cell.filled) {
//           const progress = cell.distance / maxDistance;
//           output += getCharForProgress(progress);
//         } else {
//           output += " ";
//         }
//       }
//       output += "\n";
//     }

//     preEl.textContent = output;
//   }

//   function animateFill(timestamp?: number) {
//     if (!startTime) startTime = timestamp ?? performance.now();
//     const elapsed = (timestamp ?? performance.now()) - startTime;

//     const duration = 2000;
//     const progress = Math.min(elapsed / duration, 1);
//     const easedProgress = easeOutQuad(progress);

//     const cellsToFill = Math.floor(easedProgress * sortedGrid.length);

//     while (fillIndex < cellsToFill) {
//       const cellToFill = sortedGrid[fillIndex];
//       const gridIndex = cellToFill.y * cols + cellToFill.x;
//       grid[gridIndex].filled = true;
//       fillIndex++;
//     }

//     render();

//     if (fillIndex < sortedGrid.length) {
//       requestAnimationFrame(animateFill);
//     }
//   }

//   return () => {
//     fillIndex = 0;
//     startTime = null;
//     requestAnimationFrame(animateFill);
//   };
// }


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
  originX?: number,
  originY?: number
) {
  const densityChars = [' ', '⠂', '⠆', '⠇', '⠏', '⠟', '⠿'];
  

  const grid: Cell[] = [];
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

  const centerX = originX ?? Math.floor(cols / 2);
  const centerY = originY ?? Math.floor(rows / 2);

  for (const cell of grid) {
    cell.distance = Math.hypot(cell.x - centerX, cell.y - centerY);
  }

  const sortedGrid = [...grid].sort((a, b) => a.distance - b.distance);

  let fillIndex = 0;
  let startTime: number | null = null;

  function easeOutQuad(t: number) {
    return t * (2 - t);
  }

  function render() {
    let output = "";
    const maxDistance = sortedGrid[sortedGrid.length - 1].distance;

    function getCharForProgress(progress: number) {
      progress = Math.min(Math.max(progress, 0), 1);
      const index = Math.floor(progress * (densityChars.length - 1));
      return densityChars[index];
    }

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cell = grid[y * cols + x];
        if (cell.filled) {
          const progress = cell.distance / maxDistance;
          output += getCharForProgress(progress);
        } else {
          output += " ";
        }
      }
      output += "\n";
    }

    preEl.textContent = output;
  }

  function animateFill(timestamp?: number) {
    if (!startTime) startTime = timestamp ?? performance.now();
    const elapsed = (timestamp ?? performance.now()) - startTime;

    const duration = 2000;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);

    const cellsToFill = Math.floor(easedProgress * sortedGrid.length);

    while (fillIndex < cellsToFill) {
      const cellToFill = sortedGrid[fillIndex];
      const gridIndex = cellToFill.y * cols + cellToFill.x;
      grid[gridIndex].filled = true;
      fillIndex++;
    }

    render();

    if (fillIndex < sortedGrid.length) {
      requestAnimationFrame(animateFill);
    }
  }

  return () => {
    fillIndex = 0;
    startTime = null;
    requestAnimationFrame(animateFill);
  };
}
