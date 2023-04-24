'use client'

import { SessionProvider } from 'next-auth/react'
import React, { Suspense } from 'react'

import 'styles/globals.css'
import 'styles/tailwindcss.css'

export default function RootLayout({ children }) {
  return (
    <html className="dark">
      <head />
      <body>
        <SessionProvider>
          {children}
          <div id="toast"></div>
          <div id="left"></div>
          <div id="right"></div>
          <div id="bottom"></div>
          <div id="modal"></div>
        </SessionProvider>
      </body>
    </html>
  )
}
