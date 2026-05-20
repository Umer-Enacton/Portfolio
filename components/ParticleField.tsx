"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Shared scroll state with smoothed values
const scrollState = { progress: 0, velocity: 0, direction: 1 };
const smoothState = { progress: 0, velocity: 0 };

function Particles({ count = 200 }) {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const initialPositions = useRef<Float32Array | null>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Distribute in a sphere shape
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 6;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      sizes[i] = Math.random() * 3 + 1;
    }
    return { positions, sizes };
  }, [count]);

  // Store initial positions for animation
  useEffect(() => {
    initialPositions.current = new Float32Array(particles.positions);
  }, [particles.positions]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Smooth interpolation (lerp) for fluid motion
    smoothState.progress += (scrollState.progress - smoothState.progress) * 0.04;
    smoothState.velocity += (scrollState.velocity - smoothState.velocity) * 0.06;

    const vel = smoothState.velocity;
    const prog = smoothState.progress;
    const dir = scrollState.direction;

    // Subtle scroll-driven rotation
    meshRef.current.rotation.x = prog * Math.PI * 0.4 + mouseRef.current.y * 0.1;
    meshRef.current.rotation.y = prog * Math.PI * 0.5 + time * 0.025 + mouseRef.current.x * 0.1;
    meshRef.current.rotation.z = 0;

    // No orbit movement
    meshRef.current.position.x = 0;
    meshRef.current.position.y = 0;

    // No zoom
    meshRef.current.scale.setScalar(1);

    // Subtle particle spread
    const posAttr = meshRef.current.geometry.attributes.position;
    if (posAttr && initialPositions.current) {
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        const spread = 1 + vel * 0.1;
        arr[ix] = initialPositions.current[ix] * spread;
        arr[iy] = initialPositions.current[iy] * spread;
        arr[iz] = initialPositions.current[iz] * spread;
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[particles.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#10b981"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ConnectionLines({ count = 50 }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const lines = useMemo(() => {
    const positions: number[] = [];
    const points: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 5;
      points.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < 3.5 && positions.length < 200) {
          positions.push(points[i].x, points[i].y, points[i].z);
          positions.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }

    return new Float32Array(positions);
  }, [count]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const time = state.clock.getElapsedTime();
    const prog = smoothState.progress;
    const vel = smoothState.velocity;

    // Subtle line rotation
    lineRef.current.rotation.x = prog * Math.PI * 0.25 + time * 0.004;
    lineRef.current.rotation.y = prog * Math.PI * 0.3 + time * 0.006;
    lineRef.current.rotation.z = 0;

    // No scale
    lineRef.current.scale.setScalar(1);
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[lines, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#10b981"
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}

function Scene() {
  return (
    <>
      <Particles count={200} />
      <ConnectionLines count={50} />
    </>
  );
}

export function ParticleField() {
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      const delta = scrollY - lastScrollY.current;
      const velocity = Math.min(Math.abs(delta) / 30, 1);
      const direction = delta > 0 ? 1 : -1;

      scrollState.progress = progress;
      scrollState.velocity = velocity;
      scrollState.direction = direction;
      lastScrollY.current = scrollY;
    };

    // Decay velocity over time
    const decayInterval = setInterval(() => {
      scrollState.velocity *= 0.9;
    }, 16);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(decayInterval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
