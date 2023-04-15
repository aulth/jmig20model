import React, { useEffect } from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const HeaderAlert = () => {
  useEffect(() => {
    if (typeof window != undefined) {
      var countDownDate = new Date("Apr 29, 2023 00:00:00").getTime();
      var x = setInterval(function () {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining
        var distance = countDownDate - now;

        // Calculate days, hours, minutes and seconds remaining
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

        // If the countdown is finished, display a message
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }, [])

  return (
    <div className="w-screen  fixed top-0 z-50 bg-gradient-to-r from-[rgb(254,156,22)] to-[rgb(78,145,88)] xl:px-20 py-1 text-sm px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div id="timer" className='text-white'></div>
        <div className="">
          <ul className="flex items-center gap-2 text-white">
            <li><a href="https://www.instagram.com/jmi.modelg20" target="_blank"><AiFillInstagram className='text-xl' /></a></li>
            <li><a href="#"><AiFillLinkedin className='text-xl' /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderAlert