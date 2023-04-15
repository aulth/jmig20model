import React, { useState } from 'react'
import PressRelease from './PressRelease'
import Documents from './Documents'
import PhotoGallery from './PhotoGallery'
import Video from './Video'
import Link from 'next/link'
const MediaResources = () => {
  const openTab = (id) => {
    if (typeof window != undefined) {
      document.querySelectorAll('.tab').forEach((tab) => { tab.classList.add('hidden') })
      document.querySelectorAll('.res-btn').forEach((tab) => { 
        tab.classList.add('text-gray-800');
        tab.classList.remove('border-[#2e59c1]') 
      })
      document.querySelector(`#${id}`).classList.remove('hidden')
      let tab = document.querySelector(`#${id}Btn`)
      tab.classList.remove('text-gray-800')
      tab.classList.add('text-[#2e59c1]')
      tab.classList.add('border-[#2e59c1]')
    }
  }
  return (
    <div className="container mx-auto min-h-[calc(100vh-61px)] bg-white mt-[61px]">
      <div className="w-full flex flex-col gap-1 items-start justify-center  bg-[url('/images/breadcrumb_bg.png')] bg-cover h-[6rem] py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold font-[agency] tracking-wider text-white text-4xl">Media & Resources</h2>
        <nav className=''>
          <ul className='flex gap-2 items-center text-white text-sm'>
            <li><Link href="/">Home</Link></li>
            <li>&gt;</li>
            <li><Link href="/resources">Media & Resources</Link></li>
          </ul>
        </nav>
      </div>
      <div className='w-full flex gap-4 justify-center flex-col items-center py-4 md:px-20 px-4'>
        <div className="w-full flex gap-6  overflow-x-auto  ">
          <button id='pRelBtn' onClick={()=>{openTab('pRel')}} className='shrink-0 res-btn border-b-2 border-white text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Press Release</button>
          <button id='docBtn' onClick={()=>{openTab('doc')}}  className='shrink-0 res-btn border-b-2 border-white text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Documents</button>
          <button id='pGalBtn' onClick={()=>{openTab('pGal')}}  className='shrink-0 res-btn border-b-2 border-white text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Photo Gallery</button>
          {/* <button id='sMedBtn' className='shrink-0 res-btn text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Social Media</button> */}
          <button id='vBtn' onClick={()=>{openTab('v')}}  className='shrink-0 res-btn border-b-2 border-white text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Videos</button>
        </div>
        <div className='tab'  id='pRel' >
          <PressRelease />
        </div>
        <div className='tab hidden'  id='doc' >
          <Documents />
        </div>
        <div className='tab hidden'  id='pGal' >
          <PhotoGallery />
        </div>
        <div className='tab hidden'  id='v' >
          <Video />
        </div>
      </div>
    </div>
  )
}

export default MediaResources