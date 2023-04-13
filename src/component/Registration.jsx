import React from 'react'

const Registration = () => {
  return (
    <div className="container mx-auto   mt-[61px] bg-white">
      <div className="w-full bg-[url('/images/breadcrumb_bg.png')] bg-cover py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold prim-font text-white text-4xl">Registration</h2>
      </div>
      <div className='w-full flex gap-8 justify-center md:flex-row items-center  flex-col py-16  md:px-20 px-4'>
        <button className="bg-white shadow-md rounded p-8 text-xl font-semibold hover:bg-orange-400 hover:text-white duration-150">
          Register for Delegate
        </button>
        <button className="bg-white shadow-md rounded p-8 text-xl font-semibold hover:bg-green-500 hover:text-white duration-150">
          Register for EB
        </button>
      </div>
    </div>
  )
}

export default Registration