import { SessionProvider } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css"
import "../styles/tailwindcss.css"

function App({ 
  Component, 
  router,
  pageProps : { session, ...pageProps },
  }) {
  return (
    <SessionProvider session={session}>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </SessionProvider>
  )
}

export default App
