import React from 'react'
import Link from 'next/link'
const Sponsor = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-61px)] bg-white mt-[61px]">
      <div className="w-full flex flex-col  items-start justify-center  bg-[url('/images/breadcrumb_bg.png')] bg-cover h-[6rem] py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold font-[agency] tracking-wider  text-white text-4xl">Sponsor</h2>
        <nav className=''>
          <ul className='flex gap-2 items-center text-white text-sm'>
            <li><Link href="/">Home</Link></li>
            <li>&gt;</li>
            <li><Link href="/sponsor">Sponsor</Link></li>
          </ul>
        </nav>
      </div>
      <div className='w-full flex gap-2 justify-center flex-col items-center py-8 md:px-20 px-4'>
        <div className='md:w-[40%] w-full'>
          <img src="/images/mea.png" className='object-cover w-full overflow-hidden' alt="" />
        </div>
        <div className='md:w-[100%] w-full'>
          <p>The Ministry of External Affairs of India proudly sponsored the G20 Model at Jamia Millia Islamia, demonstrating its commitment to fostering global cooperation and engagement. This sponsorship helped provide an opportunity for students to engage with global issues and discuss policy solutions in a simulated G20 environment. By supporting initiatives like the G20 Model, the Ministry of External Affairs aims to cultivate the next generation of leaders and build a brighter future for India and the world.</p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Sponsor