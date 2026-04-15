import React, { useState } from "react";
import Link from "next/link";

type MenuItem = {
  name: string;
  url: string;
};

type Props = {
  items?: MenuItem[];
  label?: string;
};

const NeonDropdown: React.FC<Props> = ({
  label = "Menu",
  items = [{ name: "Coffee", url: "/coffee" }],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.navMenu}>
      <div
        style={styles.navItem}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {label}

        <div
          style={{
            ...styles.dropdownContent,
            display: open ? "block" : "none",
          }}
        >
          {items.map((item, index) => (
            <Link key={index} href={item.url} style={styles.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NeonDropdown;

/* =======================
   Styles Object (Bottom)
======================= */

const styles = {
  navMenu: {
    fontFamily: "'Courier New', Courier, monospace",
    backgroundColor: "#000",
    color: "#0ff",
  },
  navItem: {
    position: "relative" as const,
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid #f0f",
    background: "#222",
    cursor: "pointer",
  },
  dropdownContent: {
    position: "absolute" as const,
    backgroundColor: "#000",
    border: "2px solid #f0f",
    minWidth: "150px",
    top: "100%",
    left: 0,
    padding: 0,
    zIndex: 1000,
  },
  link: {
    color: "#ff0",
    padding: "10px",
    textDecoration: "none",
    display: "block",
    borderBottom: "1px solid #f0f",
  },
};
