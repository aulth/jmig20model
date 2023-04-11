import React from 'react'

const Sponsor = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-61px)] bg-white mt-[61px]">
      <div className="w-full bg-[url('/images/breadcrumb_bg.png')] bg-cover py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold prim-font text-white text-4xl">Sponsor</h2>
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