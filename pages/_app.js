import { SessionProvider } from "next-auth/react"

import '../styles/tailwindcss.css'
import Layout from '../components/layouts/Layout';

function App({ 
  Component, 
  pageProps : { session, ...pageProps },
  }) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  )
}

export default App
