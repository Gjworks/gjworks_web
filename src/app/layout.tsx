'use client'
import { useEffect } from 'react'
import '/styles/globals.css'
import '/styles/tailwindcss.css'
import ReduxProviders from '@plextype/redux/Providers'
import Log from '@plextype/utils/debug/Log'

export default function RootLayout({ children }) {
  if (typeof globalThis.Log === 'undefined') {
    globalThis.Log = Log
  }

  return (
    <html className="dark break-keep selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <head />
      <body>
        <ReduxProviders>{children}</ReduxProviders>
        <div id="toast"></div>
        <div id="left"></div>
        <div id="right"></div>
        <div id="bottom"></div>
        <div id="modal"></div>
      </body>
    </html>
  )
}
