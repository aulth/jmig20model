import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar'
import Craousel from '@/component/Craousel'
import Head from 'next/head'
import About from '@/component/About'
import Sponsor from '@/component/Sponsor'
import MediaResources from '@/component/MediaResources'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Model G20 Jamia Millia Islamia</title>
        <meta name="description" content="Simulate the G20 summit and shape global policies at Model G20 Jamia Millia Islamia. Join students from around the world to build leadership skills and gain valuable experience. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2D2F33" ></meta>
        <link rel="canonical" href="https://mohd-usman.vercel.app/" />
        <link rel="alternate" href="https://mohd-usman.vercel.app/" hrefLang="en-in" />
        {/* facebook open graph  */}
        <meta property="og:title" content="Mohd Usman - full stack web developer" />
        <meta property="og:site_name" content="Mohd Usman" />
        <meta property="og:url" content="https://mohd-usman.vercel.app" />
        <meta property="og:description" content="As a Full Stack Web Developer, I have worked on personal, online, and freelance projects. Check out my portfolio to see what I can do for you. Currently seeking internship opportunities." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://mohd-usman.vercel.app/images/usman.png" />
      </Head>
    <Navbar/>
    <Craousel/>
    <About/>
    <Sponsor/>
    <MediaResources/>
    </>
  )
}
