"use client";

import "styles/globals.css";
import "styles/tailwindcss.css";

export default function RootLayout({ children }) {
  return (
    <html className="break-keep selection:bg-black selection:text-white dark:selection:text-white">
      <head />
      <body>
        {children}
        <div id="toast"></div>
        <div id="left"></div>
        <div id="right"></div>
        <div id="bottom"></div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
