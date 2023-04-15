import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import {MdOutlineMail} from 'react-icons/md'
const Secretariat = () => {
    return (
        <div className="w-full flex gap-1 flex-wrap justify-between">
            <div className='w-[48%] p-2 border border-gray-200 h-20'>
                <div className="w-full font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                    <h2>President</h2> <button className="pl-2"><IoMdArrowDropdown /></button>
                </div>
                <div className="w-full">
                    <h3>Abid Raza Kazmi</h3>
                    <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                </div>
            </div>
            <div className='w-[48%] p-2 border border-gray-200'>
                <div className="w-full font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                    <h2>Coordinator</h2> <button className="pl-2"><IoMdArrowDropdown /></button>
                </div>
                <div className="w-full">
                    <h3>Prabhat Kumar</h3>
                    <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                </div>
            </div>
            <div className='w-[48%] p-2 border border-gray-200'>
                <div className="w-full font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                    <h2>Joint Secretary I</h2> <button className="pl-2"><IoMdArrowDropdown /></button>
                </div>
                <div className="w-full">
                    <h3>Shreyash Dasgupta</h3>
                    <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                </div>
            </div>
            <div className='w-[48%] p-2 border border-gray-200'>
                <div className="w-full font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                    <h2>Joint Secretary II</h2> <button className="pl-2"><IoMdArrowDropdown /></button>
                </div>
                <div className="w-full">
                    <h3>Jagannath Das</h3>
                    <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                </div>
            </div>
            <div className='w-[48%] p-2 border border-gray-200'>
                <div className="w-full font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                    <h2>Technical Associate</h2> <button className="pl-2"><IoMdArrowDropdown /></button>
                </div>
                <div className="w-full">
                    <h3>Mohd Usman</h3>
                    <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                </div>
            </div>
            <div className='w-[48%] p-2 border border-gray-200'>
                <div className="w-full font-bold flex justify-between items-center border-b border-gray-300 pb-1">
                    <h2>HR Team</h2> <button className="pl-2"><IoMdArrowDropdown /></button>
                </div>
                <div className="w-full">
                    <h3>Payoja Das</h3>
                    <h3>Mysha Rizvi</h3>
                    <h3>Anadil Hussain</h3>
                    <h3>Laiba Shakeel</h3>
                    <h4 className='flex gap-1 items-start text-blue-600'><MdOutlineMail className='mt-1.5' /><a href="mailto:jmi.g20model@gmail.com" className='' >jmi.g20model@gmail.com</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Secretariat