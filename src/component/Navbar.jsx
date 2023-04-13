import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () =>{
        if(typeof window!=undefined){
            let menu = document.querySelector('.menu');
            menu.classList.toggle('hidden')
            setMenuOpened(!menuOpened)
        }
    }
    return (
        <header className="w-screen bg-white border-b z-50 border-orange-200 py-2 xl:px-20 px-4 flex items-center fixed top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <img src="/images/g20-logo.png" className='w-32' alt="" />
                    </Link>
                </div>
                <nav className='xl:flex menu w-full  md:m-0 mx-auto justify-between hidden xl:static absolute top-[61px] left-0  bg-white xl:pt-0 pt-2 md:pb-0 pb-2'>
                    <ul className='flex xl:flex-row flex-col xl:gap-5 gap-2 xl:items-center items-start xl:px-0 px-2'>
                        <li className='shrink-0 hover:text-[#2e59c1] xl:text-sm text-base font-[500] border-b-2 border-white duration-200 hover:border-[#2e59c1]'><Link href="/about">About G20</Link></li>
                        <li className='shrink-0 hover:text-[#2e59c1]  xl:text-sm text-base font-[500] border-b-2 border-white duration-200 hover:border-[#2e59c1]'><Link href="/resources">Media & Resources</Link></li>
                        <li className='shrink-0 hover:text-[#2e59c1]  xl:text-sm text-base font-[500] border-b-2 border-white duration-200 hover:border-[#2e59c1]'><Link href="/sponsor">Sponsor</Link></li>
                    </ul>
                    <hr className='mt-1 xl:hidden' />
                    <ul className='flex xl:flex-row flex-col xl:gap-5 gap-2 xl:items-center items-start xl:mt-0 mt-2 xl:px-0 px-2'>
                        <li className='shrink-0 hover:text-[#2e59c1] xl:text-sm text-base font-[500] border-b-2 border-white duration-200 hover:border-[#2e59c1]'><Link href="/registration">Registration</Link></li>
                        <li className='shrink-0 hover:text-[#2e59c1] xl:text-sm text-base font-[500] border-b-2 border-white duration-200 hover:border-[#2e59c1]'><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
               <button onClick={toggleMenu} className='xl:hidden block text-2xl'>{!menuOpened?<AiOutlineMenu />:<AiOutlineClose />}</button>
            </div>
        </header>

    )
}

export default Navbar