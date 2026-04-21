"use client";

import NeonDropdown from "./NeonDropdown";
import AsciiHero from "./AsciiHero";
import Text from "./Text";

export default function Hero() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.glare} />
      <div style={styles.interlaced} />

      {/* CENTERED HERO BLOCK */}
      <div style={styles.centerBlock}>
        <AsciiHero />

        <div style={styles.dropdownWrap}>
          <NeonDropdown />
        </div>
      </div>

      {/* LEFT ALIGNED TERMINAL TEXT */}
      <div style={styles.terminalBlock}>
        <Text>Would you like to play a game?</Text>

        <Text>
          &gt;<span className="blink">_</span>
        </Text>
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
    </div>
  );
}

const styles = {
  wrapper: {
    background: "hsl(154 50% 5%)",
    minHeight: "100vh",
    position: "relative" as const,
    overflow: "hidden",
    color: "hsl(154 84% 70%)",
    textShadow: "0 0 4px hsl(154 84% 70%)",
    fontFamily: "monospace",
  },

  /* centered ASCII + menu */
  centerBlock: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 40px 20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },

  dropdownWrap: {
    marginTop: "20px",
  },

  /* LEFT TERMINAL SECTION */
  terminalBlock: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px 40px 60px",

    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start", // 👈 key change
    textAlign: "left" as const,
    gap: "8px",
  },

  glare: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    background: "radial-gradient(hsl(154 5% 15%) 0%, hsl(154 50% 5%) 70%)",
  },

  interlaced: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    pointerEvents: "none" as const,
    background:
      "repeating-linear-gradient(transparent 0px 1px, rgba(0,0,0,0.3) 3px 4px)",
    animation: "lines 0.066s linear infinite",
  },
};
