import ChriscoursesPerlinNoise from "https://esm.sh/@chriscourses/perlin-noise";

// Editable values
let showFPS = true;
let MAX_FPS = 0; // 0 = uncapped
let thresholdIncrement = 5; // Cells range from 0-100, draw line for every step of this increment
let thickLineThresholdMultiple = 1; // Every x steps draw a thicker line
let res = 2; // Divide canvas width/height by this, lower number means more cells to calculate/draw lines for
let baseZOffset = 0.00005; // How quickly the noise should move
let lineColor = '#3b3b3b';
// ----

let canvas, ctx;
let fpsCount = document.getElementById("fps-count");
let frameValues = [];
let inputValues = [];

let currentThreshold = 0;
let cols = 0;
let rows = 0;
let zOffset = 0;
let zBoostValues = [];
let noiseMin = 100;
let noiseMax = 0;

let mousePos = { x: -99, y: -99 }; // Initialize offscreen
let mouseDown = true;

// Function to set up the canvas
export function setupCanvas() {
  let canvasElement = document.getElementById('res-canvas');
  let canvasCtx = canvasElement.getContext('2d');

  if (!canvasCtx) return;

  canvas = canvasElement;
  ctx = canvasCtx;
  
  canvasSize();

  window.addEventListener('resize', () => canvasSize());

  canvas.addEventListener('mousemove', (e) => {
    mousePos = { x: e.offsetX, y: e.offsetY };
  });
}

function canvasSize() {
  const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  cols = Math.floor(canvas.width / res) + 1;
  rows = Math.floor(canvas.height / res) + 1;
  
  // Initialize zBoostValues
  for (let y = 0; y < rows; y++) {
    zBoostValues[y] = [];
    for (let x = 0; x <= cols; x++) {
      zBoostValues[y][x] = 0;
    }
  }
}

// Exporting animate function
export function animate() {
  const startTime = performance.now();
  setTimeout(() => {
    const endTime = performance.now();
    const frameDuration = endTime - startTime;
    frameValues.push(Math.round(1000 / frameDuration));
    if (frameValues.length > 60 && showFPS) {
      fpsCount.innerText = Math.round(frameValues.reduce((a, b) => a + b) / frameValues.length);
      frameValues = [];
    }
    requestAnimationFrame(animate);
  }, 1000 / MAX_FPS);
  
  if (mouseDown) mouseOffset();
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  zOffset += baseZOffset;
  generateNoise();

  const roundedNoiseMin = Math.floor(noiseMin / thresholdIncrement) * thresholdIncrement;
  const roundedNoiseMax = Math.ceil(noiseMax / thresholdIncrement) * thresholdIncrement;
  
  for (let threshold = roundedNoiseMin; threshold < roundedNoiseMax; threshold += thresholdIncrement) {
    currentThreshold = threshold;
    renderAtThreshold();
  }
  
  noiseMin = 100;
  noiseMax = 0;
}

function mouseOffset() {
  let x = Math.floor(mousePos.x / res);
  let y = Math.floor(mousePos.y / res);
  if (!inputValues[y] || !inputValues[y][x]) return;

  const incrementValue = 0.0025; 
  const radius = 5; 
  for (let i = -radius; i <= radius; i++) {
    for (let j = -radius; j <= radius; j++) {
      const distanceSquared = i * i + j * j;
      const radiusSquared = radius * radius;
      if (distanceSquared <= radiusSquared && zBoostValues[y + i]?.[x + j] !== undefined) {
        zBoostValues[y + i][x + j] += incrementValue * (1 - distanceSquared / radiusSquared);
      }
    }
  }
}

function generateNoise() {
  for (let y = 0; y < rows; y++) {
    inputValues[y] = [];
    for (let x = 0; x <= cols; x++) {
      inputValues[y][x] = ChriscoursesPerlinNoise.noise(x * 0.02, y * 0.02, zOffset + zBoostValues[y]?.[x]) * 100;
      if (inputValues[y][x] < noiseMin) noiseMin = inputValues[y][x];
      if (inputValues[y][x] > noiseMax) noiseMax = inputValues[y][x];
      if (zBoostValues[y]?.[x] > 0) zBoostValues[y][x] *= 0.99;
    }
  }
}

function renderAtThreshold() {
  ctx.beginPath();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = currentThreshold % (thresholdIncrement * thickLineThresholdMultiple) === 0 ? 2 : 1;

  for (let y = 0; y < inputValues.length - 1; y++) {
    for (let x = 0; x < inputValues[y].length - 1; x++) {
      if (inputValues[y][x] > currentThreshold && inputValues[y][x + 1] > currentThreshold && 
          inputValues[y + 1][x + 1] > currentThreshold && inputValues[y + 1][x] > currentThreshold) continue;
      if (inputValues[y][x] < currentThreshold && inputValues[y][x + 1] < currentThreshold && 
          inputValues[y + 1][x + 1] < currentThreshold && inputValues[y + 1][x] < currentThreshold) continue;

      let gridValue = binaryToType(
        inputValues[y][x] > currentThreshold ? 1 : 0,
        inputValues[y][x + 1] > currentThreshold ? 1 : 0,
        inputValues[y + 1][x + 1] > currentThreshold ? 1 : 0,
        inputValues[y + 1][x] > currentThreshold ? 1 : 0
      );

      placeLines(gridValue, x, y);
    }
  }
  ctx.stroke();
}

function placeLines(gridValue, x, y) {
  let nw = inputValues[y][x];
  let ne = inputValues[y][x + 1];
  let se = inputValues[y + 1][x + 1];
  let sw = inputValues[y + 1][x];
  let a, b, c, d;

  switch (gridValue) {
    case 1:
    case 14:
      c = [x * res + res * linInterpolate(sw, se), y * res + res];
      d = [x * res, y * res + res * linInterpolate(nw, sw)];
      line(d, c);
      break;
    case 2:
    case 13:
      b = [x * res + res, y * res + res * linInterpolate(ne, se)];
      c = [x * res + res * linInterpolate(sw, se), y * res + res];
      line(b, c);
      break;
    case 3:
    case 12:
      b = [x * res + res, y * res + res * linInterpolate(ne, se)];
      d = [x * res, y * res + res * linInterpolate(nw, sw)];
      line(d, b);
      break;
    case 4:
    case 11:
      a = [x * res + res * linInterpolate(nw, ne), y * res];
      b = [x * res + res, y * res + res * linInterpolate(ne, se)];
      line(a, b);
      break;
    case 5:
      a = [x * res + res * linInterpolate(nw, ne), y * res];
      b = [x * res + res, y * res + res * linInterpolate(ne, se)];
      c = [x * res + res * linInterpolate(sw, se), y * res + res];
      d = [x * res, y * res + res * linInterpolate(nw, sw)];
      line(d, a);
      line(c, b);
      break;
    case 6:
    case 9:
      a = [x * res + res * linInterpolate(nw, ne), y * res];
      c = [x * res + res * linInterpolate(sw, se), y * res + res];
      line(c, a);
      break;
    case 7:
    case 8:
      a = [x * res + res * linInterpolate(nw, ne), y * res];
      d = [x * res, y * res + res * linInterpolate(nw, sw)];
      line(d, a);
      break;
    case 10:
      a = [x * res + res * linInterpolate(nw, ne), y * res];
      b = [x * res + res, y * res + res * linInterpolate(ne, se)];
      c = [x * res + res * linInterpolate(sw, se), y * res + res];
      d = [x * res, y * res + res * linInterpolate(nw, sw)];
      line(d, a);
      line(c, b);
      break;
  }
}

function linInterpolate(min, max) {
  return (currentThreshold - min) / (max - min);
}

function binaryToType(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}

function line(start, end) {
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(end[0], end[1]);
}


