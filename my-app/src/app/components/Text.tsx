import React from "react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Text({ children, style }: Props) {
  return <p style={{ ...styles.text, ...style }}>{children}</p>;
}

const styles = {
  text: {
    fontFamily: "monospace",
    color: "hsl(154 84% 70%)",
    textShadow: "0 0 4px hsl(154 84% 70%)",
    fontSize: "16px",
  },
};
