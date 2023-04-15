import React from 'react'
import Link from 'next/link'
const Registration = () => {
  return (
    <div className="container mx-auto   mt-[61px] bg-white">
      <div className="w-full flex flex-col  items-start justify-center  bg-[url('/images/breadcrumb_bg.png')] bg-cover h-[6rem] py-8 md:px-20 px-4 sticky top-[calc(61px+28px)]">
        <h2 className="font-bold font-[agency] tracking-wider  text-white text-4xl">Registration</h2>
        <nav className=''>
          <ul className='flex gap-2 items-center text-white text-sm'>
            <li><Link href="/">Home</Link></li>
            <li>&gt;</li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
      <p className='text-sm'>formIsGoingHere</p>
    </div>
  )
}

export default Registration