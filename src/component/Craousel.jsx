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
                <div className="container flex justify-around items-center m-auto h-[calc(100vh-61px)] mt-[61px]">
                    <div className="w-full flex justify-center items-center h-[calc(100vh-61px)] flex-col">
                        <img src="/images/g20-logo-white.png" className=' w-60 z-50' alt="" />
                        <img src="https://www.g20.org/content/dam/gtwenty/banner-carousal/vasudhaiva-kutumbakam.png" className='md:w-80 w-64' alt="theme of g20" />
                    </div>
                    <div className="w-full h-[calc(100vh-61px)"></div>
                </div>
            </div>
        </>
    )
}

export default Craousel