import 'styles/globals.css'
import 'styles/tailwindcss.css'
import ReduxProviders from 'src/redux/Providers'

export const metadata = {
  title: '지제이웍스',
  description: 'Building digital experience Creative platform service',
}

export default function RootLayout({children}) {
  return (
    <html className="break-keep selection:bg-black selection:text-white dark:selection:text-white">
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
