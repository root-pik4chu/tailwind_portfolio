import React, { useEffect, useRef, useState, useCallback } from "react";

export default function SnakeGameJS() {
  const canvasRef = useRef(null);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState([]);
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [queuedDir, setQueuedDir] = useState(null);
  const [fruit, setFruit] = useState(null);
  const [obstacles, setObstacles] = useState([]);
  const [paused, setPaused] = useState(false);
  const [wrap, setWrap] = useState(false);
  const [speed, setSpeed] = useState(200);

  const gridCountRef = useRef(20);
  const tileSizeRef = useRef(20);
  const loopRef = useRef(null);

  const LEVELS = [
    { speed: 200, obstacles: 0, startLen: 3 },
    { speed: 150, obstacles: 2, startLen: 4 },
    { speed: 110, obstacles: 4, startLen: 4 },
    { speed: 80, obstacles: 6, startLen: 5 },
    { speed: 55, obstacles: 8, startLen: 6 },
  ];

  const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const cellOccupied = useCallback(
    (x, y, snk = snake) => snk.some((s) => s.x === x && s.y === y),
    [snake]
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // grid
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= gridCountRef.current; i++) {
      const pos = Math.round(i * tileSizeRef.current) + 0.5;
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(canvas.width, pos);
      ctx.stroke();
    }

    // obstacles
    ctx.fillStyle = "#fff";
    obstacles.forEach((o) => {
      ctx.fillRect(
        o.x * tileSizeRef.current + 1,
        o.y * tileSizeRef.current + 1,
        Math.max(0, Math.round(tileSizeRef.current) - 2),
        Math.max(0, Math.round(tileSizeRef.current) - 2)
      );
    });

    // fruit
    if (fruit) {
      const cx = fruit.x * tileSizeRef.current + tileSizeRef.current / 2;
      const cy = fruit.y * tileSizeRef.current + tileSizeRef.current / 2;
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#fff";
      ctx.arc(cx, cy, Math.max(3, tileSizeRef.current * 0.28), 0, Math.PI * 2);
      ctx.stroke();
    }

    // snake
    for (let i = 0; i < snake.length; i++) {
      const s = snake[i];
      ctx.globalAlpha = i === 0 ? 1 : 0.9 - (i / snake.length) * 0.3;
      ctx.fillRect(
        s.x * tileSizeRef.current + 1,
        s.y * tileSizeRef.current + 1,
        Math.max(0, Math.round(tileSizeRef.current) - 2),
        Math.max(0, Math.round(tileSizeRef.current) - 2)
      );
    }
    ctx.globalAlpha = 1;
  }, [snake, fruit, obstacles]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const size = Math.floor(parent.clientWidth);
    if (size < 300) gridCountRef.current = 14;
    else if (size < 420) gridCountRef.current = 18;
    else gridCountRef.current = 20;
    canvas.width = size;
    canvas.height = size;
    tileSizeRef.current = canvas.width / gridCountRef.current;
    draw();
  }, [draw]);

  const placeFruit = useCallback(
    (snk, obs) => {
      let tries = 0;
      while (tries < 2000) {
        const fx = rand(0, gridCountRef.current - 1);
        const fy = rand(0, gridCountRef.current - 1);
        if (
          !cellOccupied(fx, fy, snk) &&
          !obs.some((o) => o.x === fx && o.y === fy)
        )
          return { x: fx, y: fy };
        tries++;
      }
      return null;
    },
    [cellOccupied]
  );

  const initGame = useCallback(
    (lvl = level) => {
      const cfg = LEVELS[lvl - 1];
      const startSnake = [];
      for (let i = cfg.startLen - 1; i >= 0; i--)
        startSnake.push({ x: i, y: 0 });

      const newObs = [];
      while (newObs.length < cfg.obstacles) {
        const ox = rand(0, gridCountRef.current - 1);
        const oy = rand(0, gridCountRef.current - 1);
        if (!cellOccupied(ox, oy, startSnake))
          newObs.push({ x: ox, y: oy });
      }

      const newFruit = placeFruit(startSnake, newObs);
      setSnake(startSnake);
      setObstacles(newObs);
      setFruit(newFruit);
      setScore(0);
      setSpeed(cfg.speed);
      setDir({ x: 1, y: 0 });
      setQueuedDir(null);
    },
    [level, cellOccupied, placeFruit]
  );

  const stopLoop = useCallback(() => {
    if (loopRef.current) clearInterval(loopRef.current);
    loopRef.current = null;
  }, []);

  const gameOver = useCallback(() => {
    stopLoop();
    setTimeout(() => {
      alert("Game Over! Score: " + score);
      initGame(level);
      startLoop();
    }, 60);
  }, [stopLoop, score, initGame, level]);

  const step = useCallback(() => {
    if (paused || !snake.length) return;

    let nd = queuedDir || dir;
    if (queuedDir) {
      if (!(queuedDir.x === -dir.x && queuedDir.y === -dir.y)) {
        nd = queuedDir;
        setDir(queuedDir);
      }
      setQueuedDir(null);
    }

    const head = { x: snake[0].x + nd.x, y: snake[0].y + nd.y };

    if (wrap) {
      head.x = (head.x + gridCountRef.current) % gridCountRef.current;
      head.y = (head.y + gridCountRef.current) % gridCountRef.current;
    } else if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= gridCountRef.current ||
      head.y >= gridCountRef.current
    )
      return gameOver();

    if (
      cellOccupied(head.x, head.y) ||
      obstacles.some((o) => o.x === head.x && o.y === head.y)
    )
      return gameOver();

    const newSnake = [head, ...snake];
    let ate = false;
    if (fruit && head.x === fruit.x && head.y === fruit.y) {
      setScore((prev) => prev + 10);
      ate = true;
      const placed = placeFruit(newSnake, obstacles);
      setFruit(placed);
    }
    if (!ate) newSnake.pop();
    setSnake(newSnake);
    draw();
  }, [
    paused,
    snake,
    dir,
    queuedDir,
    wrap,
    fruit,
    obstacles,
    draw,
    gameOver,
    cellOccupied,
    placeFruit,
  ]);

  const startLoop = useCallback(() => {
    stopLoop();
    loopRef.current = setInterval(step, speed);
  }, [step, speed, stopLoop]);

  useEffect(() => {
    resizeCanvas();
    initGame(level);
    startLoop();

    const onKey = (e) => {
      const key = e.key.toLowerCase();
      if (key === "w") setQueuedDir({ x: 0, y: -1 });
      if (key === "s") setQueuedDir({ x: 0, y: 1 });
      if (key === "a") setQueuedDir({ x: -1, y: 0 });
      if (key === "d") setQueuedDir({ x: 1, y: 0 });
      if (key === "p") setPaused((p) => !p);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      stopLoop();
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [level, resizeCanvas, initGame, startLoop, stopLoop]);

  useEffect(() => {
    if (loopRef.current) startLoop();
  }, [speed, startLoop]);

  useEffect(() => {
    draw();
  }, [snake, fruit, obstacles, draw]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6">
        <div className="panel bg-transparent">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold">
                Snake — React (JSX) • WASD Keys
              </h2>
              <p className="text-sm text-gray-400">
                Use W/A/S/D keys or swipe. Press <strong>P</strong> to pause.
              </p>
            </div>
            <div className="text-right text-sm">
              <div>Score: <strong>{score}</strong></div>
              <div>Level: <strong>{level}</strong></div>
            </div>
          </div>

          <div className="aspect-square border border-gray-700 rounded">
            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>

          <div className="mt-2 text-sm text-gray-100">
            Grid lines visible. Walls kill unless Wrap is ON.
          </div>
        </div>

        <div className="panel bg-transparent p-2">
          <h3 className="font-medium mb-2">Levels</h3>
          <div className="flex gap-2 flex-wrap mb-3">
            {[1, 2, 3, 4, 5].map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLevel(l);
                  initGame(l);
                }}
                className={`px-3 py-1 rounded border ${
                  level === l ? "border-white" : "border-gray-600"
                }`}
              >
                Level {l}
              </button>
            ))}
          </div>

          <div className="flex gap-2 mb-3 text-sm">
            <div className="px-2 py-1 border border-gray-700 rounded">
              Length: {snake.length}
            </div>
            <div className="px-2 py-1 border border-gray-700 rounded">
              Speed: {speed} ms
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                initGame(level);
                startLoop();
              }}
              className="px-3 py-1 border rounded"
            >
              Start / Restart
            </button>
            <button
              onClick={() => setPaused((p) => !p)}
              className="px-3 py-1 border rounded"
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={() => setWrap((w) => !w)}
              className="px-3 py-1 border rounded"
            >
              Wrap: {wrap ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
