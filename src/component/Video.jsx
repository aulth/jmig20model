import React from 'react'
import { BsFileEarmarkPdf } from 'react-icons/bs'

const Video = () => {
  // <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>

  return (
    <div className="w-full flex flex-wrap gap-4 justify-around">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/uDHaLDQxTK4" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Video