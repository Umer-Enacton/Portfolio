"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () => import("@/components/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

export function Scene3DWrapper() {
  return <ParticleField />;
}
