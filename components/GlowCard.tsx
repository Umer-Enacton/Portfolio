"use client";

import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl ${className}`}
      style={{ minHeight: "65vh", backgroundColor: "var(--color-surface)" }}
    >
      {/* ═══ TOP-RIGHT GLOW ═══ */}
      <div
        className="pointer-events-none absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.15) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ═══ BOTTOM-LEFT GLOW ═══ */}
      <div
        className="pointer-events-none absolute -bottom-[100px] -left-[100px] w-[360px] h-[360px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {/* Frosted grain near bottom-left ring */}
      {/* <div
        className="pointer-events-none absolute -bottom-[30px] -left-[30px] w-[280px] h-[280px]"
        style={{
          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 65%)",
          filter: "url(#grain-filter)",
          maskImage: "radial-gradient(circle at 0% 100%, black 0%, black 25%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(circle at 0% 100%, black 0%, black 25%, transparent 65%)",
        }}
      /> */}

      {/* ═══ GLASS OVERLAY ═══ */}
      {/* Matte glass effect — clear in center, frosted near edges/rings */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.015) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.01) 100%)",
        }}
      />

      {/* SVG filter for grain texture */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="gray-noise" />
            <feBlend in="SourceGraphic" in2="gray-noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      {/* Grain texture overlay — stronger near rings, invisible in center */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          maskImage: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
