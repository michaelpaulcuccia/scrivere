"use client";

import React from "react";

const ASCII_ART = `
 _    _      _ _        __          __        _     _ 
| |  | |    | | |       \\ \\        / /       | |   | |
| |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
|  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _\` |
| |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
|_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|
`;

export default function AsciiHero() {
  return <pre style={styles.pre}>{ASCII_ART}</pre>;
}

const styles = {
  pre: {
    marginTop: "10vh",
    display: "table",
    color: "hsl(154 84% 70%)",
    textShadow: "0 0 6px hsl(154 84% 70%)",
    fontFamily: "monospace",
  },
};
