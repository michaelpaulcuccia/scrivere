"use client";

const ASCII_ART = `
 _    _      _ _        __          __        _     _ 
| |  | |    | | |       \\ \\        / /       | |   | |
| |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
|  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _\` |
| |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
|_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|
`;

export default function Hero() {
  return (
    <div style={styles.wrapper}>
      <pre style={styles.pre}>{ASCII_ART}</pre>

      <p>Would you like to play a game?</p>
      <p>
        &gt;<span className="blink">_</span>
      </p>

      <div style={styles.interlaced} />
      <div style={styles.glare} />

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
    color: "hsl(154 84% 70%)",
    textShadow: "0 0 4px hsl(154 84% 70%)",
    fontFamily: "monospace",
    fontSize: "16px",
    minHeight: "100vh",
    position: "relative" as const,
    overflow: "hidden",
  },
  pre: {
    margin: "auto",
    marginTop: "10vh",
    display: "table",
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
    animation: "lines 0.066666666s linear infinite",
  },
};
