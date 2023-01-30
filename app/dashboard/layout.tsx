"use client";

import "styles/globals.css"
import "styles/tailwindcss.css"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      {children}
    </>
  );
}