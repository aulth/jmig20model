import React from 'react'
import PressRelease from './PressRelease'
import Documents from './Documents'
const MediaResources = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-61px)] bg-white">
      <div className="w-full bg-[url('/images/breadcrumb_bg.png')] py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold prim-font text-white text-4xl">Media & Resources</h2>
      </div>
      <div className='w-full flex gap-4 justify-center flex-col items-center py-4 md:px-20 px-4'>
        <div className="w-full flex gap-6  overflow-x-auto ">
          <button className='shrink-0 text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Press Release</button>
          <button className='shrink-0 text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Documents</button>
          <button className='shrink-0 text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Photo Gallery</button>
          <button className='shrink-0 text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Social Media</button>
          <button className='shrink-0 text-gray-800 text-lg rounded px-4 py-2 font-semibold'>Videos</button>
        </div>
        {/* <PressRelease/> */}
        <Documents/>
      </div>
    </div>
  )
}

export default MediaResources