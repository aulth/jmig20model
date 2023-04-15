import React, { useState } from 'react'
import Link from 'next/link'
import { MdOutlineMail, MdPhone } from 'react-icons/md'
import { AiOutlineMail, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast';
import Secretariat from './Secretariat'
const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })
  const handleOnChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!data.name) {
      toast.error("Enter Name")
      return;
    }
    if (!data.email) {
      toast.error("Enter Email")
      return;
    }
    if (!data.message) {
      toast.error("Please Type Message")
      return;
    }
    // toast.success("Message Sent")
    toast.promise(new Promise(async (resolve, reject) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ data })
      })
      const json = await response.json();
      setData({ name: '', email: '', message: '' })
      if (json.success) {
        resolve();
      } else {
        reject();
      }
    }), {
      loading: 'Sending',
      success: 'Message Sent',
      error: 'Failed'
    })

  }
  return (
    <div className="container mx-auto  mt-[calc(61px+28px)] bg-white">
      <div className="w-full flex flex-col gap-1 items-start justify-center  bg-[url('/images/breadcrumb_bg.png')] bg-cover h-[6rem] py-8 md:px-20 px-4 sticky top-[calc(61px+28px)]">
        <h2 className="font-bold font-[agency] tracking-wider text-white text-4xl">Secretariat</h2>
        <nav className=''>
          <ul className='flex gap-2 items-center text-white text-sm'>
            <li><Link href="/">Home</Link></li>
            <li>&gt;</li>
            <li><Link href="/contact">Secretariat</Link></li>
          </ul>
        </nav>
      </div>
      <div className='w-full flex gap-8 justify-between md:flex-row flex-col py-8 md:px-20 px-4'>
        <div className='md:w-1/2 w-full'>
          <p className='text-justify'>
            The Model G20 Secretariat is responsible for organising and coordinating G20 meetings across the university during the course of the event. The Secretariat provides logistical support, ensures that the simulation runs smoothly, and serves as a neutral party to assist the participating delegations.
          </p>
          <h2 className=" my-2 text-2xl text-center font-[agency] tracking-wider ">Who's Who</h2>
          <div className="w-full">
            <Secretariat />
          </div>
        </div>
        <div className='md:w-1/2 w-full'>
          <h2 className='mb-2 font-semibold text-lg flex gap-1 items-start'>Text us your query <AiOutlineQuestionCircle className='mt-2' /></h2>
          <form onSubmit={handleOnSubmit} className='flex flex-col gap-3'>
            <div className='flex gap-1 items-center border border-orange-300 rounded'>
              <BiUser className=' text-xl ml-2' />
              <input type="text" name="name" onChange={handleOnChange} placeholder='Enter your name' className='p-2 w-full focus:outline-none border-none' id="" required />
            </div>
            <div className='flex gap-1 items-center border border-orange-300 rounded'>
              <AiOutlineMail className=' text-xl ml-2' />
              <input type="email" name="email" onChange={handleOnChange} placeholder='Email' className='p-2 w-full focus:outline-none border-none' id="" required />
            </div>
            <textarea name="message" onChange={handleOnChange} className='w-full h-32 p-2 border rounded focus:outline-none  border-orange-300' placeholder='Message..' id="" cols="30" rows="10" required></textarea>
            <div className="flex justify-end">
              <button type='submit' className="px-2 py-1 border bg-orange-400 text-white hover:bg-green-300 rounded">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position='top-right' />
    </div>
  )
}

export default Contact