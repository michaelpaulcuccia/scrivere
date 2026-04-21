import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CRTBackground from "./components/CRTBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go No Further",
  description: "You have gone too far",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body style={styles.body}>
        {/* GLOBAL BACKGROUND SYSTEM */}
        <CRTBackground />

        {/* APP CONTENT */}
        <div style={styles.content}>{children}</div>
      </body>
    </html>
  );
}

/* =======================
   BASE LAYOUT STYLES
======================= */

const styles = {
  body: {
    margin: 0,
    background: "hsl(154 50% 5%)",
    color: "hsl(154 84% 70%)",
    textShadow: "0 0 4px hsl(154 84% 70%)",
    fontFamily: "monospace",
    minHeight: "100vh",
    overflow: "hidden",
  },

  content: {
    position: "relative" as const,
    zIndex: 2,
    minHeight: "100vh",
  },
};
