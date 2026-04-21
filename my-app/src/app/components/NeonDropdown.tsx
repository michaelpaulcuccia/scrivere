// import React, { useState } from "react";
// import Link from "next/link";

// type MenuItem = {
//   name: string;
//   url: string;
// };

// type Props = {
//   items?: MenuItem[];
//   label?: string;
// };

// const NeonDropdown: React.FC<Props> = ({
//   label = "Menu",
//   items = [{ name: "Coffee", url: "/coffee" }],
// }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav style={styles.navMenu}>
//       <div
//         style={styles.navItem}
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//       >
//         {label}

//         <div
//           style={{
//             ...styles.dropdownContent,
//             display: open ? "block" : "none",
//           }}
//         >
//           {items.map((item, index) => (
//             <Link key={index} href={item.url} style={styles.link}>
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NeonDropdown;

// /* =======================
//    Styles Object (Bottom)
// ======================= */

// const styles = {
//   navMenu: {
//     fontFamily: "'Courier New', Courier, monospace",
//     backgroundColor: "#000",
//     color: "#0ff",
//   },
//   navItem: {
//     position: "relative" as const,
//     display: "inline-block",
//     padding: "10px 20px",
//     border: "2px solid #f0f",
//     background: "#222",
//     cursor: "pointer",
//   },
//   dropdownContent: {
//     position: "absolute" as const,
//     backgroundColor: "#000",
//     border: "2px solid #f0f",
//     minWidth: "150px",
//     top: "100%",
//     left: 0,
//     padding: 0,
//     zIndex: 1000,
//   },
//   link: {
//     color: "#ff0",
//     padding: "10px",
//     textDecoration: "none",
//     display: "block",
//     borderBottom: "1px solid #f0f",
//   },
// };

// import React, { useState } from "react";
// import Link from "next/link";

// type MenuItem = {
//   name: string;
//   url: string;
// };

// type Props = {
//   items?: MenuItem[];
//   label?: string;
// };

// const NeonDropdown: React.FC<Props> = ({
//   label = "Menu",
//   items = [{ name: "Coffee", url: "/coffee" }],
// }) => {
//   const [open, setOpen] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <>
//       {/* CRT Effects */}
//       <div style={styles.glare} />
//       <div style={styles.interlaced} />

//       <nav style={styles.navMenu}>
//         <div
//           style={styles.navItem}
//           onMouseEnter={() => setOpen(true)}
//           onMouseLeave={() => setOpen(false)}
//         >
//           {label}

//           <div
//             style={{
//               ...styles.dropdownContent,
//               display: open ? "block" : "none",
//             }}
//           >
//             {items.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.url}
//                 style={{
//                   ...styles.link,
//                   ...(hoveredIndex === index ? styles.linkHover : {}),
//                 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Keyframes */}
//       <style>
//         {`
//           @keyframes flicker {
//             0% { opacity: 0.95; }
//             50% { opacity: 1; }
//             100% { opacity: 0.97; }
//           }

//           @keyframes scanlines {
//             0% { background-position: 0 0; }
//             100% { background-position: 0 4px; }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default NeonDropdown;

// /* =======================
//    Styles Object
// ======================= */

// const styles = {
//   navMenu: {
//     fontFamily: "'Courier New', Courier, monospace",
//     backgroundColor: "#000",
//     color: "#0ff",
//     padding: "20px",
//     textShadow: "0 0 6px #0ff, 0 0 12px #0ff",
//     animation: "flicker 0.15s infinite",
//   },
//   navItem: {
//     position: "relative" as const,
//     display: "inline-block",
//     padding: "10px 20px",
//     border: "2px solid #f0f",
//     background: "#111",
//     cursor: "pointer",
//     boxShadow: "0 0 10px #f0f",
//   },
//   dropdownContent: {
//     position: "absolute" as const,
//     backgroundColor: "#000",
//     border: "2px solid #f0f",
//     minWidth: "150px",
//     top: "100%",
//     left: 0,
//     padding: 0,
//     zIndex: 1000,
//     boxShadow: "0 0 10px #f0f",
//   },
//   link: {
//     color: "#ff0",
//     padding: "10px",
//     textDecoration: "none",
//     display: "block",
//     borderBottom: "1px solid #f0f",
//     textShadow: "0 0 4px #ff0",
//   },
//   linkHover: {
//     backgroundColor: "#f0f",
//     color: "#000",
//     textShadow: "none",
//   },
//   glare: {
//     position: "fixed" as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: -2,
//     background:
//       "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
//   },
//   interlaced: {
//     position: "fixed" as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 10,
//     pointerEvents: "none" as const,
//     background:
//       "repeating-linear-gradient(transparent 0px 2px, rgba(0,0,0,0.3) 3px 4px)",
//     animation: "scanlines 0.1s linear infinite",
//   },
// };

//import { DropdownSection, dropdownData } from "../data/DropdownData";

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DropdownSection, dropdownData } from "../data/DropdownData";

type Props = {
  data?: DropdownSection[];
  label?: string;
};

const NeonDropdown: React.FC<Props> = ({
  data = dropdownData,
  label = "Menu",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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
          }}
        >
          {label}

          {/* First Level (Dropdown) */}
          <div
            style={{
              ...styles.dropdown,
              display: menuOpen ? "block" : "none",
            }}
          >
            {data.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                style={styles.sectionItem}
                onMouseEnter={() => setActiveSection(sectionIndex)}
                onMouseLeave={() => {
                  setActiveSection(null);
                  setHoveredItem(null);
                }}
              >
                {section.title}

                {/* Second Level (Flyout Right) */}
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
    backgroundColor: "#000",
    color: "#0ff",
    padding: "20px",
    textShadow: "0 0 6px #0ff",
    animation: "flicker 0.15s infinite",
  },
  menuButton: {
    position: "relative" as const,
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid #f0f",
    background: "#111",
    cursor: "pointer",
    boxShadow: "0 0 10px #f0f",
  },
  dropdown: {
    position: "absolute" as const,
    top: "100%",
    left: 0,
    backgroundColor: "#000",
    border: "2px solid #f0f",
    minWidth: "180px",
    zIndex: 1000,
  },
  sectionItem: {
    position: "relative" as const,
    padding: "10px",
    borderBottom: "1px solid #f0f",
    color: "#ff0",
    cursor: "pointer",
  },
  flyout: {
    position: "absolute" as const,
    top: 0,
    left: "100%",
    backgroundColor: "#000",
    border: "2px solid #f0f",
    minWidth: "180px",
    zIndex: 1000,
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
