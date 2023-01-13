
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <Component {...pageProps} />
    <Header/>
    <Navbar/>
    </>
  )
}
   
