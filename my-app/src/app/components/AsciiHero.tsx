"use client";

type Props = {
  art: string;
};

export default function AsciiHero({ art }: Props) {
  return <pre style={styles.pre}>{art}</pre>;
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
