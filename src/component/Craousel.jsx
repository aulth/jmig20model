import React from 'react'

const Craousel = () => {
    return (
        <>
            <div className="w-screen mx-auto h-screen  relative flex xl:justify-start justify-center xl:items-stretch items-center overflow-y-hidden">
                <video id="background-video" className='absolute top-0 z-10 xl:block hidden' autoPlay loop muted poster="/images/cover.jpg">
                    <source src="/video/language.mp4" type="video/mp4" />
                </video>
                <video id="background-video" className='absolute top-0 z-10 xl:hidden block' autoPlay loop muted poster="/images/cover.jpg">
                    <source src="/video/language-phone.mp4" type="video/mp4" />
                </video>
                <div className='z-50 flex items-center flex-col text-white xl:ml-[10%] xl:mt-[15%] mt-20'>
                    <h2 className=" md:text-[26px] text-[20px] prim-font capitalize">WELCOME TO</h2>
                    <h3 className="font-bold md:text-[45px] text-[30px] prim-font">G20 Model - JMI</h3>
                    <img src="https://www.g20.org/content/dam/gtwenty/banner-carousal/vasudhaiva-kutumbakam.png"  className='md:w-80 w-64' alt="theme of g20" />
                    <div className="w-60 h-44 relative flex justify-center items-center">
                        <img src="https://www.g20.org/content/dam/gtwenty/banner-carousal/white-glow-bg.svg" className='absolute top-0 w-full' alt="g20jmi logo" />
                        <img src="/images/g20-logo.png" className=' w-40 z-50' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Craousel