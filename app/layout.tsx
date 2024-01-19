'use client'

import 'styles/globals.css'
import 'styles/tailwindcss.css'

export default function RootLayout({children}) {
  return (
    <html className="selection:text-white selection:bg-black dark:selection:bg-primary-700 dark:selection:text-white break-keep">
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
  )
}
