import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-61px)] bg-white">
        <div className="w-full bg-[url('/images/breadcrumb_bg.png')] py-8 md:px-20 px-4 sticky top-[61px]">
           <h2 className="font-bold prim-font text-white text-4xl">About G20</h2>
        </div>
        <div className='w-full flex gap-8 justify-between md:flex-row flex-col py-8 md:px-20 px-4'>
        <div className='md:w-[60%] w-full'>
           <p>The G20 Model Jamia Millia Islamia is a prestigious event organized by the Jamia Millia Islamia University in India. The event aims to simulate the annual meetings of the Group of Twenty (G20) countries, where the leaders of the world's largest economies come together to discuss global economic issues and formulate policies to address them.</p>
           <br />
           <p>The G20 Model Jamia Millia Islamia provides a unique platform for students to experience the intricacies of international diplomacy, negotiation, and decision-making. It brings together students from different disciplines and backgrounds to work together and engage in discussions on topics of global significance.</p>
           <br />
           <p>The G20 Model Jamia Millia Islamia provides an excellent opportunity for students to develop critical thinking, leadership, communication, and problem-solving skills. It also offers a chance to network with peers and professionals from diverse backgrounds and gain valuable insights into global issues and perspectives.</p>
        </div>
        <div className='md:w-[40%] w-full'>
            <img src="/images/g20-about.webp" className='object-cover w-full overflow-hidden' alt="" />
        </div>
        </div>
    </div>
  )
}

export default About