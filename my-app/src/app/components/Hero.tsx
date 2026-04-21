"use client";

import NeonDropdown from "./NeonDropdown";
import AsciiHero from "./AsciiHero";
import React from "react";

type Props = {
  asciiArt: string;
  children?: React.ReactNode;
};

export default function Hero({ asciiArt, children }: Props) {
  return (
    <div style={styles.wrapper}>
      {/* CENTERED HERO BLOCK */}
      <div style={styles.centerBlock}>
        <AsciiHero art={asciiArt} />

        <div style={styles.dropdownWrap}>
          <NeonDropdown />
        </div>
      </div>

      {/* LEFT TERMINAL SECTION (now includes children) */}
      <div style={styles.terminalBlock}>
        {/* 👇 injected page content */}
        {children}
      </div>

      <style jsx>{`
        .blink {
          animation: blink 0.4s linear infinite;
        }

        @keyframes blink {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 40px",
  },

  /* centered ASCII + menu */
  centerBlock: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },

  dropdownWrap: {
    marginTop: "20px",
  },

  /* LEFT TERMINAL SECTION */
  terminalBlock: {
    marginTop: "40px",

    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    textAlign: "left" as const,
    gap: "8px",
  },
};
