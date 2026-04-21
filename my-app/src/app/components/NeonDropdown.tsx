"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownSection, dropdownData } from "../data/DropdownData";

type Props = {
  data?: DropdownSection[];
  label?: string;
};

const NeonDropdown: React.FC<Props> = ({
  data = dropdownData,
  label = "Menu",
}) => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // ✅ FIX: close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveSection(null);
    setHoveredItem(null);
  }, [pathname]);

  return (
    <>
      {/* CRT Effects */}
      <div style={styles.glare} />
      <div style={styles.interlaced} />

      <nav style={styles.navMenu}>
        <div
          style={styles.menuButton}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => {
            setMenuOpen(false);
            setActiveSection(null);
            setHoveredItem(null);
          }}
        >
          {label}

          {/* First Level */}
          <div
            style={{
              ...styles.dropdown,
              display: menuOpen ? "block" : "none",
            }}
          >
            {data.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                style={{
                  ...styles.sectionItem,
                  ...(activeSection === sectionIndex
                    ? styles.sectionItemActive
                    : {}),
                }}
                onMouseEnter={() => setActiveSection(sectionIndex)}
                onMouseLeave={() => {
                  setActiveSection(null);
                  setHoveredItem(null);
                }}
              >
                {/* Section Link (Clickable) */}
                <Link href={section.url} style={styles.sectionLink}>
                  {section.title}
                </Link>

                {/* Flyout */}
                <div
                  style={{
                    ...styles.flyout,
                    display: activeSection === sectionIndex ? "block" : "none",
                  }}
                >
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.url}
                      style={{
                        ...styles.link,
                        ...(hoveredItem === itemIndex ? styles.linkHover : {}),
                      }}
                      onMouseEnter={() => setHoveredItem(itemIndex)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Animations */}
      <style>
        {`
          @keyframes flicker {
            0% { opacity: 0.95; }
            50% { opacity: 1; }
            100% { opacity: 0.97; }
          }

          @keyframes scanlines {
            0% { background-position: 0 0; }
            100% { background-position: 0 4px; }
          }
        `}
      </style>
    </>
  );
};

export default NeonDropdown;

/* =======================
   Styles
======================= */

const styles = {
  navMenu: {
    fontFamily: "'Courier New', Courier, monospace",
    color: "#0ff",
    textShadow: "0 0 6px #0ff",
    padding: "20px",
    animation: "flicker 0.15s infinite",
  },

  menuButton: {
    position: "relative" as const,
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid #f0f",
    cursor: "pointer",
    boxShadow: "0 0 10px #f0f",
    color: "#ff0",
    background: "transparent", // 👈 removed black box
  },

  dropdown: {
    position: "absolute" as const,
    top: "100%",
    left: 0,
    minWidth: "200px",
    zIndex: 1000,
    background: "transparent", // 👈 no fill
  },

  sectionItem: {
    position: "relative" as const,
    padding: "10px",
    borderBottom: "1px solid #f0f",
    cursor: "pointer",
    background: "transparent", // 👈 no fill
  },

  sectionItemActive: {
    boxShadow: "0 0 8px #ff0 inset",
  },

  sectionLink: {
    color: "#ff0",
    textDecoration: "none",
    display: "block",
  },

  flyout: {
    position: "absolute" as const,
    top: 0,
    left: "100%",
    minWidth: "200px",
    zIndex: 1000,
    background: "transparent", // 👈 no fill
  },

  link: {
    display: "block",
    padding: "10px",
    color: "#ff0",
    textDecoration: "none",
    borderBottom: "1px solid #f0f",
    textShadow: "0 0 4px #ff0",
  },

  linkHover: {
    backgroundColor: "#f0f",
    color: "#000",
    textShadow: "none",
  },

  glare: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    background:
      "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
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
      "repeating-linear-gradient(transparent 0px 2px, rgba(0,0,0,0.3) 3px 4px)",
    animation: "scanlines 0.1s linear infinite",
  },
};
