import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GridParticles({
  imageSrc,
  // particle/grid params
  gap = 4,                 // grid step (image pixels)
  minR = 0.9,              // smallest radius (dark)
  maxR = 5.5,              // largest radius (white)
  sizeScale = 1.0,         // global size multiplier (screen pixels)
  maskCircle = true,       // keep particles inside main circular mask
  // hover movement params
  showHoverCircle = true,
  hoverRadius = 40,       // world/screen pixels
  moveProb = 0.35,         // fraction of particles inside circle that move [0..1]
  maxSteps = 2,            // max number of grid steps to move (amplitude)
  speedMinHz = 0.6,        // min movement speed (cycles per second)
  speedMaxHz = 2.8,        // max movement speed
  // container styling
  style,
  className
}) {
  const containerRef = useRef(null);
  const stateRef = useRef({
    renderer: null,
    scene: null,
    camera: null,
    material: null,
    points: null,
    hoverRing: null,
    clock: null,
    disposed: false,
    lastImgW: 0,
    lastImgH: 0
  });

  // Init Three.js once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const state = stateRef.current;
    state.disposed = false;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Scene + camera (orthographic in screen px)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000);
    camera.position.z = 10;

    // Material (grid movement inside hover circle)
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: {
        uSizeMultiplier: { value: renderer.getPixelRatio() },
        uUserScale:      { value: sizeScale },

        uTime:           { value: 0.0 },
        uMouse:          { value: new THREE.Vector2(0, 0) },
        uHoverRadius:    { value: hoverRadius },
        uHoverActive:    { value: 0.0 },

        uGap:            { value: gap },
        uMaxSteps:       { value: maxSteps * 1.0 },
        uSpeedMin:       { value: speedMinHz },
        uSpeedMax:       { value: speedMaxHz },
        uMoveProb:       { value: moveProb }
      },
      vertexShader: `
        uniform float uSizeMultiplier;
        uniform float uUserScale;

        uniform float uTime;
        uniform vec2  uMouse;
        uniform float uHoverRadius;
        uniform float uHoverActive;

        uniform float uGap;
        uniform float uMaxSteps;
        uniform float uSpeedMin;
        uniform float uSpeedMax;
        uniform float uMoveProb;

        attribute float aSize;
        attribute float aGray;
        attribute float aSeed;

        varying float vGray;

        float hash11(float p) {
          p = fract(p * 0.1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
        }

        void main() {
          vGray = aGray;

          vec3 basePos = position;

          // world pos for inside test (modelMatrix includes mesh scale)
          vec4 worldPos = modelMatrix * vec4(basePos, 1.0);
          float inHover = (uHoverActive > 0.5 && distance(worldPos.xy, uMouse) <= uHoverRadius) ? 1.0 : 0.0;

          // which pixels move?
          float rMove = hash11(aSeed * 13.37);
          float moveMask = (rMove < uMoveProb) ? 1.0 : 0.0;

          // direction: 0:+x, 1:-x, 2:+y, 3:-y
          float rDir = floor(hash11(aSeed * 97.31) * 4.0);
          vec2 dir = (rDir < 1.0) ? vec2(1.0, 0.0) :
                     (rDir < 2.0) ? vec2(-1.0, 0.0) :
                     (rDir < 3.0) ? vec2(0.0, 1.0) : vec2(0.0, -1.0);

          // per-pixel speed and phase
          float speed = mix(uSpeedMin, uSpeedMax, hash11(aSeed * 151.11));
          float phase = hash11(aSeed * 271.7);

          // triangular wave -> discrete steps
          float t   = fract(uTime * speed + phase);
          float tri = 1.0 - abs(2.0 * t - 1.0);
          float steps = floor(tri * uMaxSteps + 0.5);

          // local offset (in image px units; modelMatrix scales to world units)
          vec2 offset = dir * steps * uGap * inHover * moveMask;

          vec3 pos = basePos;
          pos.xy += offset;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // aSize=radius, gl_PointSize=diameter (in screen px)
          gl_PointSize = aSize * 2.0 * uSizeMultiplier * uUserScale;
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying float vGray;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.48, 0.5, d);
          gl_FragColor = vec4(vec3(vGray), alpha);
        }
      `
    });

    // Hover ring
    const hoverRing = new THREE.Mesh(
      new THREE.RingGeometry(0.98, 1.0, 96),
      new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7, depthTest: false })
    );
    hoverRing.renderOrder = 999;
    hoverRing.position.z = 1;
    hoverRing.visible = showHoverCircle;
    scene.add(hoverRing);

    // Save
    state.renderer = renderer;
    state.scene = scene;
    state.camera = camera;
    state.material = material;
    state.hoverRing = hoverRing;
    state.clock = new THREE.Clock();

    // Sizing
    function resize() {
      if (state.disposed) return;
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;

      renderer.setSize(width, height, false);

      // Ortho camera in screen px: center at (0,0)
      state.camera.left = -width / 2;
      state.camera.right = width / 2;
      state.camera.top = height / 2;
      state.camera.bottom = -height / 2;
      state.camera.updateProjectionMatrix();

      material.uniforms.uSizeMultiplier.value = renderer.getPixelRatio();
    }
    resize();
    const onWindowResize = () => resize();
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    renderer.setAnimationLoop(() => {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // Pointer events (map to world coords)
    function updateMouse(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const worldX = mx - rect.width / 2;
      const worldY = rect.height / 2 - my;
      material.uniforms.uMouse.value.set(worldX, worldY);
      if (showHoverCircle) {
        hoverRing.position.set(worldX, worldY, hoverRing.position.z);
      }
    }
    const onEnter = (e) => { material.uniforms.uHoverActive.value = 1.0; updateMouse(e); };
    const onMove  = (e) => { material.uniforms.uHoverActive.value = 1.0; updateMouse(e); };
    const onLeave = () => { material.uniforms.uHoverActive.value = 0.0; };

    renderer.domElement.addEventListener('pointerenter', onEnter);
    renderer.domElement.addEventListener('pointermove', onMove);
    renderer.domElement.addEventListener('pointerleave', onLeave);

    // Cleanup
    return () => {
      state.disposed = true;
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.removeEventListener('pointerenter', onEnter);
      renderer.domElement.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointerleave', onLeave);
      renderer.setAnimationLoop(null);

      if (state.points) {
        state.scene.remove(state.points);
        state.points.geometry.dispose();
        state.points = null;
      }
      if (state.hoverRing) {
        state.scene.remove(state.hoverRing);
        state.hoverRing.geometry.dispose();
        state.hoverRing.material.dispose();
        state.hoverRing = null;
      }
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []); // init once

  // Build or rebuild particles when image/gap/mask change
  useEffect(() => {
    const state = stateRef.current;
    if (!state.material || !imageSrc) return;

    let cancelled = false;

    async function loadAndBuild() {
      try {
        const img = await loadImage(imageSrc);
        if (cancelled || state.disposed) return;
        buildParticlesFromImage(img, {
          gap,
          minR,
          maxR,
          maskCircle
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to load image:', err);
      }
    }

    loadAndBuild();
    return () => { cancelled = true; };
  }, [imageSrc, gap, maskCircle]);

  // Update size mapping when min/max radius change
  useEffect(() => {
    const state = stateRef.current;
    if (!state.points) return;
    const gAttr = state.points.geometry.getAttribute('aGray');
    const sAttr = state.points.geometry.getAttribute('aSize');
    const gArr = gAttr.array, sArr = sAttr.array;
    for (let i = 0; i < gAttr.count; i++) {
      const brightness = gArr[i];
      sArr[i] = Math.max(0.0001, minR + (maxR - minR) * brightness);
    }
    sAttr.needsUpdate = true;
  }, [minR, maxR]);

  // Update uniforms/hover ring on prop changes
  useEffect(() => {
    const state = stateRef.current;
    if (!state.material) return;
    state.material.uniforms.uUserScale.value = sizeScale;
  }, [sizeScale]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state.material) return;
    state.material.uniforms.uHoverRadius.value = hoverRadius;
    if (state.hoverRing) {
      state.hoverRing.visible = showHoverCircle;
      state.hoverRing.scale.set(hoverRadius, hoverRadius, 1);
    }
  }, [hoverRadius, showHoverCircle]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state.material) return;
    state.material.uniforms.uMoveProb.value = moveProb;
    state.material.uniforms.uMaxSteps.value = maxSteps;
    state.material.uniforms.uSpeedMin.value = speedMinHz;
    state.material.uniforms.uSpeedMax.value = speedMaxHz;
    state.material.uniforms.uGap.value = gap; // keep shader gap in sync (in case only movement changes)
  }, [moveProb, maxSteps, speedMinHz, speedMaxHz, gap]);

  // Helpers
  function setPointsScaleToFit(w, h) {
    const state = stateRef.current;
    const container = containerRef.current;
    if (!state.points || !container) return;

    const vw = container.clientWidth || 1;
    const vh = container.clientHeight || 1;
    const scale = 0.9 * Math.min(vw / w, vh / h);
    state.points.scale.setScalar(scale);
    state.points.position.set(0, 0, 0);
    state.lastImgW = w;
    state.lastImgH = h;

    // Also scale hover ring base to current radius (world units)
    if (state.hoverRing) {
      state.hoverRing.scale.set(hoverRadius, hoverRadius, 1);
    }
  }

  function buildParticlesFromImage(img, opts) {
    const { gap: G, minR: MIN, maxR: MAX, maskCircle: MASK } = opts;
    const state = stateRef.current;

    // resize work image for perf
    const maxDim = 900;
    const s = Math.min(1, maxDim / Math.max(img.width, img.height));
    const w = Math.max(1, Math.floor(img.width * s));
    const h = Math.max(1, Math.floor(img.height * s));

    const cvs = document.createElement('canvas');
    cvs.width = w; cvs.height = h;
    const ctx = cvs.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, w, h);
    const { data } = ctx.getImageData(0, 0, w, h);

    const cx = w / 2, cy = h / 2;
    const rMask = Math.min(w, h) / 2;

    // RNG for seeds
    let seed = 1337;
    const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) & 0xffffff) / 0xffffff;

    const positions = [];
    const sizes = [];
    const grays = [];
    const seeds = [];

    for (let y = 0; y < h; y += G) {
      for (let x = 0; x < w; x += G) {
        if (MASK) {
          const dx = x - cx, dy = y - cy;
          if ((dx*dx + dy*dy) > (rMask*rMask)) continue;
        }
        const idx = (y*w + x) * 4;
        const r = data[idx] / 255, g = data[idx+1] / 255, b = data[idx+2] / 255;
        const brightness = 0.2126*r + 0.7152*g + 0.0722*b; // grayscale

        // perfect grid positions (no jitter)
        positions.push(x - cx, (cy - y), 0);

        // size map dark->small, white->big
        const radius = Math.max(0.0001, MIN + (MAX - MIN) * brightness);
        sizes.push(radius);

        grays.push(brightness);
        seeds.push(rand());
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(positions), 3));
    geo.setAttribute('aSize',    new THREE.Float32BufferAttribute(new Float32Array(sizes), 1));
    geo.setAttribute('aGray',    new THREE.Float32BufferAttribute(new Float32Array(grays), 1));
    geo.setAttribute('aSeed',    new THREE.Float32BufferAttribute(new Float32Array(seeds), 1));

    // swap points
    if (state.points) {
      state.scene.remove(state.points);
      state.points.geometry.dispose();
    }
    state.points = new THREE.Points(geo, state.material);
    state.scene.add(state.points);

    setPointsScaleToFit(w, h);
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      // For remote URLs you must have proper CORS headers, or getImageData will fail
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  return (
    <div
      ref={containerRef}
      className={`${className} w-full h-full flex items-center justify-center`}
      style={{
        // Give it a size; parent can override via props
        width: '65%',
        height: '100%',
        position: 'relative',
        // background: '#111',
        ...style
      }}/>);
}