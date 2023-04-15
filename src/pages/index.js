import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar'
import Craousel from '@/component/Craousel'
import Head from 'next/head'
import About from '@/component/About'
import Sponsor from '@/component/Sponsor'
import MediaResources from '@/component/MediaResources'
import Footer from '@/component/Footer'
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
      <Navbar />
      <Craousel />
      <div className="container mx-auto   bg-[url('/images/bg-art.png')] bg-cover bg-white">
        <div className='w-full flex gap-8 justify-between md:flex-row flex-col py-8 md:px-20 px-4'>
          <div className='md:w-[60%] w-full'>
            <p className='text-justify'>The  Model G20   Jamia Millia Islamia  is a prestigious event organized by the  Jamia Millia Islamia  University in India. The event aims to simulate the annual meetings of the Group of Twenty (G20) countries, where the leaders of the world's largest economies come together to discuss global socio-political and economic issues and formulate policies to address them.</p>
            <br />
            <p className='text-justify'> Jamia Millia Islamia  brings forward the chance for all the schools, colleges and universities around India to bring their students together for a common purpose - discussing important issues that pose a threat to our world. The  Model G20   Jamia Millia Islamia  provides a unique platform for students to experience the intricacies of international diplomacy, negotiation, and decision-making. It brings together students from different disciplines and backgrounds to work together and engage in discussions on topics of global significance.</p>
            <br />
            <p className='text-justify'>This is an excellent opportunity to further develop one's knowledge of international relations, politics, economics, law, and world affairs in general. We hope the event provides a dynamic platform for intellectual deliberation and discussion and extends the theme of the G20 Summit, which is  “Vasudhaiva Kutumbakam” . </p>
            <br />
            <p className='text-justify'>The  Model G20   Jamia Millia Islamia  provides an excellent opportunity for students to develop critical thinking, leadership, communication, and problem-solving skills. It also offers a chance to network with peers and professionals from diverse backgrounds and gain valuable insights into global issues and perspectives.</p>
          </div>
          <div className='md:w-[40%] w-full'>
            <img  src="/images/g20-about.webp" className='object-cover sticky top-[100px] w-full overflow-hidden' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
