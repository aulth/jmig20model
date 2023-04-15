import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
const Secretariat = () => {
    const toggleAccordian = (id) =>{
        let elem = document.querySelector(`#${id}`);
        let icon = document.querySelector(`#${id}Icon`);
        elem.classList.toggle('h-0')
        elem.classList.toggle('py-2')
        icon.classList.toggle('rotate-180')
    }
    return (
        <div className="w-full flex md:flex-row flex-col gap-2 justify-between">
            <div className='md:w-1/2 w-full flex flex-col gap-2'>
                <div className='w-full  border border-gray-200 overflow-hidden'>
                    <div className="w-full p-2 font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2>President</h2> <button onClick={()=>{toggleAccordian('president')}} className="pl-2"><IoMdArrowDropdown id='presidentIcon' className='duration-75' /></button>
                    </div>
                    <div id='president'  className="w-full px-2 h-0 duration-100">
                        <h3>Abid Raza Kazmi</h3>
                        <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                    </div>
                </div>
                <div className='w-full  border border-gray-200 overflow-hidden'>
                    <div className="w-full p-2 font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2>Coordinator</h2> <button onClick={()=>{toggleAccordian('coordinator')}} className="pl-2"><IoMdArrowDropdown id='coordinatorIcon' className='duration-75' /></button>
                    </div>
                    <div id='coordinator' className="w-full h-0 px-2 duration-100">
                        <h3>Prabhat Kumar</h3>
                        <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                    </div>
                </div>
                <div className='w-full border border-gray-200 overflow-hidden'>
                    <div className="w-full p-2 font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2>Joint Secretary I</h2> <button onClick={()=>{toggleAccordian('js1')}} className="pl-2"><IoMdArrowDropdown id='js1Icon' className='duration-75' /></button>
                    </div>
                    <div id='js1' className="w-full h-0 px-2 duration-100">
                        <h3>Shreyash Dasgupta</h3>
                        <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 w-full flex flex-col gap-2'>
                <div className='w-full border border-gray-200 overflow-hidden'>
                    <div className="w-full p-2 font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2>Joint Secretary II</h2><button onClick={()=>{toggleAccordian('js2')}} className="pl-2"><IoMdArrowDropdown id='js2Icon' className='duration-75' /></button>
                    </div>
                    <div id='js2' className="w-full h-0 px-2 duration-100">
                        <h3>Jagannath Das</h3>
                        <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                    </div>
                </div>
                <div className='w-full border border-gray-200 overflow-hidden'>
                    <div className="w-full p-2 font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2>Technical Associate</h2> <button onClick={()=>{toggleAccordian('tech')}} className="pl-2"><IoMdArrowDropdown id='techIcon' className='duration-75' /></button>
                    </div>
                    <div id='tech' className="w-full h-0 px-2 duration-100">
                        <h3>Mohd Usman</h3>
                        <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                    </div>
                </div>
                <div className='w-full border border-gray-200 overflow-hidden'>
                    <div className="w-full p-2 font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                        <h2>HR Team</h2> <button onClick={()=>{toggleAccordian('hr')}} className="pl-2"><IoMdArrowDropdown id='hrIcon' className='duration-75' /></button>
                    </div>
                    <div id='hr' className="w-full h-0 px-2 duration-100">
                        <h3>Payoja Das</h3>
                        <h3>Mysha Rizvi</h3>
                        <h3>Anadil Hussain</h3>
                        <h3>Laiba Shakeel</h3>
                        <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secretariat