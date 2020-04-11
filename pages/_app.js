import Head from 'next/head'
import '../styles/tailwind.src.css'
import '@fortawesome/fontawesome-free/css/all.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
        <meta name='theme-color' content='#222' />
        <title>zackad</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
