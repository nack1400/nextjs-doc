import "@/styles/globals.css";
import Layout from '../components/layout'
// import { Inter } from 'next/font/google'
// import { Roboto } from 'next/font/google'

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />, 'l')
}