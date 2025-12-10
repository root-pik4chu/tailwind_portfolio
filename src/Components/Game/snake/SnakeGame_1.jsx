import React, { useEffect, useRef, useState } from "react";

export default function SnakeGame_1() {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);

  // Base grid size (logical)
  const baseRows = 10;
  const baseCols = 40;

  const snakeRef = useRef([{ x: Math.floor(baseCols / 2), y: Math.floor(baseRows / 2) }]);
  const dirRef = useRef({ x: 1, y: 0 });
  const foodRef = useRef(null);
  const obstaclesRef = useRef([]);
  const intervalRef = useRef(null);

  const [cellSize, setCellSize] = useState(10);

  // Responsive resize
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth * 0.57;
      const h = window.innerHeight * 0.9;
      const newCell = Math.floor(Math.min(w / baseCols, h / baseRows));
      setCellSize(newCell);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = baseCols * cellSize;
  const height = baseRows * cellSize;

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function placeFood(snake, obstacles) {
    const taken = new Set([
      ...snake.map((p) => `${p.x},${p.y}`),
      ...obstacles.map((p) => `${p.x},${p.y}`),
    ]);
    while (true) {
      const fx = randomInt(baseCols);
      const fy = randomInt(baseRows);
      if (!taken.has(`${fx},${fy}`)) return { x: fx, y: fy };
    }
  }

  function generateObstacles() {
    const shapes = [
      [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }], // L
      [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }], // T
      [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }], // I
      [{ x: 0, y: 0 }, { x: 1, y: 0 }], // _
      [{ x: 0, y: 0 }, { x: 0, y: 1 }], // -
    ];

    const obs = [];
    for (let i = 0; i < 8; i++) {
      const shape = shapes[randomInt(shapes.length)];
      const offsetX = randomInt(baseCols - 5);
      const offsetY = randomInt(baseRows - 3);
      shape.forEach((b) => {
        const x = b.x + offsetX;
        const y = b.y + offsetY;
        obs.push({ x, y });
      });
    }
    return obs;
  }

  function reset() {
    const snake = [{ x: Math.floor(baseCols / 2), y: Math.floor(baseRows / 2) }];
    const obstacles = generateObstacles();
    const food = placeFood(snake, obstacles);
    snakeRef.current = snake;
    dirRef.current = { x: 1, y: 0 };
    obstaclesRef.current = obstacles;
    foodRef.current = food;
    setScore(0);
  }

  useEffect(() => {
    reset();
    draw();

    function handleKey(e) {
      const k = e.key;
      const d = dirRef.current;
      if (k === "ArrowUp" || k === "w") {
        if (d.y !== 1) dirRef.current = { x: 0, y: -1 };
      } else if (k === "ArrowDown" || k === "s") {
        if (d.y !== -1) dirRef.current = { x: 0, y: 1 };
      } else if (k === "ArrowLeft" || k === "a") {
        if (d.x !== 1) dirRef.current = { x: -1, y: 0 };
      } else if (k === "ArrowRight" || k === "d") {
        if (d.x !== -1) dirRef.current = { x: 1, y: 0 };
      } else if (k === " ") {
        toggleStart();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function toggleStart() {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
      return;
    }
    if (!snakeRef.current.length) reset();
    setRunning(true);
    intervalRef.current = setInterval(step, 120);
  }

  function step() {
    const snake = [...snakeRef.current];
    const dir = dirRef.current;
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    if (head.x < 0) head.x = baseCols - 1;
    if (head.y < 0) head.y = baseRows - 1;
    if (head.x >= baseCols) head.x = 0;
    if (head.y >= baseRows) head.y = 0;

    const obstacles = obstaclesRef.current;

    for (let s of snake) if (s.x === head.x && s.y === head.y) return gameOver();
    for (let o of obstacles) if (o.x === head.x && o.y === head.y) return gameOver();

    snake.unshift(head);
    const food = foodRef.current;
    if (head.x === food.x && head.y === food.y) {
      setScore((s) => s + 1);
      foodRef.current = placeFood(snake, obstacles);
    } else {
      snake.pop();
    }

    snakeRef.current = snake;
    draw();
  }

  function gameOver() {
    clearInterval(intervalRef.current);
    setRunning(false);
    snakeRef.current = [];
    draw();
  }

  function draw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255,255,255,0.123)";
    for (let r = 0; r <= baseRows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * cellSize + 0.5);
      ctx.lineTo(width, r * cellSize + 0.5);
      ctx.stroke();
    }
    for (let c = 0; c <= baseCols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * cellSize + 0.5, 0);
      ctx.lineTo(c * cellSize + 0.5, height);
      ctx.stroke();
    }

    // Obstacles
    const obstacles = obstaclesRef.current;
    ctx.fillStyle = "#303030";
    obstacles.forEach((o) => {
      ctx.fillRect(o.x * cellSize + 1, o.y * cellSize + 1, cellSize - 2, cellSize - 2);
    });

    // Food
    const food = foodRef.current;
    const cx = food.x * cellSize + cellSize / 2;
    const cy = food.y * cellSize + cellSize / 2;
    const radius = Math.min(cellSize * 0.4, 8);
    ctx.beginPath();
    ctx.fillStyle = "#ff4d4f";
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    const snake = snakeRef.current;
    for (let i = 0; i < snake.length; i++) {
      const p = snake[i];
      const x = p.x * cellSize + 1;
      const y = p.y * cellSize + 1;
      const sz = cellSize - 2;
      ctx.fillStyle = i === 0 ? "#7ef9a2" : "#2dd4bf";
      ctx.fillRect(x, y, sz, sz);
    }

    if (!running && (!snake || !snake.length)) {
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.font = `${Math.max(14, cellSize)}px system-ui`;
      ctx.textAlign = "center";
      ctx.fillText("Game Over — press Start", width / 2, height / 2);
    }
  }

  useEffect(() => draw(), [score, running, cellSize]);

  return (
    <div
      style={{
      //   fontFamily: "system-ui, sans-serif",
        color: "#e6eef0",
        padding: 10,
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 8,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 18 }}>Snake</h1>
        <button
          onClick={() => {
            if (!snakeRef.current.length) reset();
            toggleStart();
          }}
          style={{
            padding: "6px 20px",
            borderRadius: 50,
            border: "none",
            cursor: "pointer",
            background: running ? "#212529" : "#343a40",
            color: "white",
            // fontWeight: 600,
          }}
        >
          {running ? "Pause" : "Start"}
        </button>
        <div style={{ fontSize: 14 }}>Score: {score}</div>
      </div>

      <div style={{ margin: "0 auto", width, height, position: "relative" }}>
        <canvas ref={canvasRef} style={{ display: "block", borderRadius: 8 }} />
      </div>

      <p style={{ marginTop: 12, opacity: 0.8, fontSize: 13 }}>
        Snake —play- A,S,W,D & avoid the L, T, I, _ , - obstacles!
      </p>
    </div>
  );
}
