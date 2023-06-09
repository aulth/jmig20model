import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="py-8 bg-[url('/images/footer_bg.svg')] bg-cover relative ">
            <div className="w-screen h-1.5 footer-top-border top-0 absolute "></div>
            <div className="w-screen h-1.5 absolute top-0"></div>
            <div className="container mx-auto grid grid-cols-1 md:px-20 px-4 sm:grid-cols-5 gap-4">
                <Link href="/">
                    <img src="/images/g20-logo.png" className='w-40' alt="" />
                </Link>
                <div>
                    <h2 className="text-lg font-semibold">Quick Link</h2>
                    <ul className="">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Partners</h2>
                    <ul className="">
                        <li><Link href="/sponsor">Sponsor</Link></li>
                        <li><Link href="/resources">Media & Resources</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Resgistration</h2>
                    <ul className="">
                        <li><Link href="/registration">Delegate</Link></li>
                        <li><Link href="/registration">Executive Board</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold">Follow Us</h2>
                    <ul className="mt-4 flex">
                        <li className="mr-4"><a href="#"><AiFillFacebook className='text-xl' /></a></li>
                        <li className="mr-4"><a href="#"><AiFillTwitterCircle className='text-xl' /></a></li>
                        <li className="mr-4"><a href="https://www.instagram.com/jmi.modelg20" target="_blank"><AiFillInstagram className='text-xl' /></a></li>
                        <li className="mr-4"><a href="#"><AiFillLinkedin className='text-xl' /></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex container m-auto md:px-20 px-4 justify-between items-center mt-4">
                <div className="flex flex-wrap items-center gap-2">
                    <img src="/images/mea.png" className='shrink-0 w-32' alt="Ministry of External Affair" />
                    <img src="/images/ris.png" className='shrink-0 w-36' alt="RIS" />
                    <img src="/images/jmi.png" className='shrink-0 w-10' alt="Jamia Millia Islamia" />
                    <img src="/images/75mahotsav.png" className='shrink-0 w-20 ml-1' alt="Azadi ka Amrit Mahtosav" />
                    <img src="/images/g20.png" className='shrink-0 w-20 -ml-2' alt="G20" />
                </div>
            </div>
            <div className="text-center mt-8">
                <p>Developed By <a href="https://mohd-usman.vercel.app" target='_blank' className='text-[#2e59c1]'>Mohd Usman</a></p>
            </div>

        </footer>
    )
}

export default Footer