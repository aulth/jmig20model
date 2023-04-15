import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-61px)] mt-[61px] bg-white">
      <div className="w-full flex flex-col gap-1 items-start justify-center  bg-[url('/images/breadcrumb_bg.png')] bg-cover h-[6rem] py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold font-[agency] tracking-wider text-white text-4xl">About</h2>
        <nav className=''>
          <ul className='flex gap-2 items-center text-white text-sm'>
            <li><Link href="/">Home</Link></li>
            <li>&gt;</li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
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
          <img src="/images/g20-about.webp" className='object-cover w-full overflow-hidden' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About