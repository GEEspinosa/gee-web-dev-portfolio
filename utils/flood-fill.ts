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


interface Cell {
  x: number;
  y: number;
  filled: boolean;
  distance: number;
}

export function createFloodFill(preEl: HTMLPreElement) {
  function getCellSize(preEl: HTMLPreElement) {
    const span = document.createElement('span');
    span.textContent = 'M'; // typical wide char
    span.style.fontFamily = getComputedStyle(preEl).fontFamily;
    span.style.fontSize = getComputedStyle(preEl).fontSize;
    span.style.position = 'absolute';
    span.style.visibility = 'hidden';
    preEl.appendChild(span);
    const rect = span.getBoundingClientRect();
    preEl.removeChild(span);
    return { width: rect.width, height: rect.height };
  }

  const { width: cellWidth, height: cellHeight } = getCellSize(preEl);

  const rect = preEl.getBoundingClientRect();

  const cols = Math.floor(rect.width / cellWidth);
  const rows = Math.floor(rect.height / cellHeight);

  // Grid for rendering — coordinate order
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

  // Create a separate sorted grid for fill animation
  const sortedGrid = [...grid];

  const originX = Math.floor(cols / 2);
  const originY = Math.floor(rows / 2);

  for (const cell of sortedGrid) {
    cell.distance = Math.hypot(cell.x - originX, cell.y - originY);
  }

  sortedGrid.sort((a, b) => a.distance - b.distance);

  let fillIndex = 0;
  let startTime: number | null = null;

  function easeOutQuad(t: number) {
    return t * (2 - t);
  }

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

  function animateFill(timestamp?: number) {
    if (!startTime) startTime = timestamp ?? performance.now();
    const elapsed = (timestamp ?? performance.now()) - startTime;

    const duration = 2000; // animation duration in ms
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);

    const cellsToFill = Math.floor(easedProgress * sortedGrid.length);

    while (fillIndex < cellsToFill) {
      const cellToFill = sortedGrid[fillIndex];
      // Mark filled in the render grid by coordinates
      const gridIndex = cellToFill.y * cols + cellToFill.x;
      grid[gridIndex].filled = true;

      fillIndex++;
    }

    render();

    if (fillIndex < sortedGrid.length) {
      requestAnimationFrame(animateFill);
    }
  }

  // Return a function to start animation manually
  return () => {
    fillIndex = 0;
    startTime = null;
    requestAnimationFrame(animateFill);
  };
}
