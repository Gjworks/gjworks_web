import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"
import "../styles/tailwindcss.css"
import Layout from "../components/layouts/Layout";

function App({ 
  Component, 
  pageProps : { session, ...pageProps },
  }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default App
