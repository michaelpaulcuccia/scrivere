"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  art: string;
};

export default function AsciiHero({ art }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    ...styles.wrapper,
    ...(hovered && !isHome ? styles.wrapperHover : {}),
  };

  const content = <pre style={styles.pre}>{art}</pre>;

  if (isHome) {
    return <div style={styles.wrapper}>{content}</div>;
  }

  return (
    <Link href="/" style={styles.linkWrapper}>
      <div
        style={containerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </div>
    </Link>
  );
}

const styles = {
  /* base layout */
  wrapper: {
    marginTop: "10vh",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  linkWrapper: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  },

  /* ASCII block */
  pre: {
    display: "table",
    color: "hsl(154 84% 70%)",
    textShadow: "0 0 6px hsl(154 84% 70%)",
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "1.2",
    margin: 0,
  },

  /* ⚡ ACTIVE 80s HOVER MODE */
  wrapperHover: {
    filter: "brightness(1.8) contrast(1.2) saturate(2)",
    transform: "scale(1.003)",
    textShadow: "0 0 8px #0ff, 0 0 16px #f0f, 0 0 24px #0ff",
  },
};
