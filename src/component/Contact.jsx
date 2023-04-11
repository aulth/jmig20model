import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto   mt-[61px] bg-white">
      <div className="w-full bg-[url('/images/breadcrumb_bg.png')] bg-cover py-8 md:px-20 px-4 sticky top-[61px]">
        <h2 className="font-bold prim-font text-white text-4xl">Contact</h2>
      </div>
      <div className='w-full flex gap-8 justify-between md:flex-row flex-col py-8 md:px-20 px-4'>
        <div className='md:w-[60%] w-full'>
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-lg mx-auto">
              <p className="text-lg mb-4">We would love to hear from you! For any inquiries or feedback, please feel free to contact us at:</p>
              <p className="text-lg mb-4">Email: <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">contact@example.com</a></p>
              <p className="text-lg mb-4">We'll get back to you as soon as possible.</p>
            </div>
          </main>
        </div>
        <div className='md:w-[40%] w-full'>
          <img src="/images/g20-about.webp" className='object-cover w-full overflow-hidden' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact