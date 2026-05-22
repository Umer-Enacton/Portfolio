"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticleField = dynamic(
  () => import("@/components/ParticleField").then((m) => m.ParticleField),
  { ssr: false, loading: () => null }
);

export function Scene3DWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer 3D scene until after LCP and main-thread idle
    const id = requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 });
    return () => cancelIdleCallback(id);
  }, []);

  if (!shouldLoad) return null;
  return <ParticleField />;
}
