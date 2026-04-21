"use client";

import React from "react";

export default function CRTBackground() {
  return (
    <>
      <div style={styles.glare} />
      <div style={styles.interlaced} />

      <style jsx global>{`
        @keyframes lines {
          0% {
            background-position: 0px 0px;
          }
          50% {
            background-position: 0px 0px;
          }
          51% {
            background-position: 0px 2px;
          }
          100% {
            background-position: 0px 2px;
          }
        }
      `}</style>
    </>
  );
}

/* =======================
   CRT BACKGROUND LAYERS
======================= */

const styles = {
  glare: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: "none" as const,
    background: "radial-gradient(hsl(154 5% 15%) 0%, hsl(154 50% 5%) 70%)",
  },

  interlaced: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    pointerEvents: "none" as const,
    background:
      "repeating-linear-gradient(transparent 0px 1px, rgba(0,0,0,0.3) 3px 4px)",
    animation: "lines 0.066s linear infinite",
  },
};
