import React from 'react'

function Footer() {
  return (
    <div className='bg-[#000000] h-80'>
        <img src="./Rectangle 24.png" alt="bottom-logo" className='w-38 h-28 ml-30' />
      <hr className="border-t-1 mx-auto border-[#FFFFFF] w-5/6 px-15 my-8"/>
      <div className='flex justify-center gap-12 pt-10 items-center'>
      <a href="#" className='text-[#ffffff]'>© 2024 | Neth BookPoint</a>
      <p className='text-center  text-[#CC9600] font-normal text-lg'>Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for our online platform to enjoy maximum benefits!</p>
      <div className='flex gap-5'>
        <img src="./Icon1.png" alt="icon1" />
        <img src="./Icon2.png" alt="icon2" />
      </div>
      </div>
      
    </div>
  )
}

export default Footer
