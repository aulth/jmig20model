import Footer from '@/component/Footer'
import HeaderAlert from '@/component/HeaderAlert'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <HeaderAlert/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
