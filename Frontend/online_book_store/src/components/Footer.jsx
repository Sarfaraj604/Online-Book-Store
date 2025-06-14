// import React from 'react'

// function Footer() {
//   return (
//     <div className='bg-[#000000] h-80'>
//         <img src="./Rectangle 24.png" alt="bottom-logo" className='w-38 h-28 ml-30' />
//       <hr className="border-t-1 mx-auto border-[#FFFFFF] w-5/6 px-15 my-8"/>
//       <div className='flex justify-center gap-12 pt-10 items-center'>
//       <a href="#" className='text-[#ffffff]'>© 2024 | Neth BookPoint</a>
//       <p className='text-center  text-[#CC9600] font-normal text-lg'>Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for our online platform to enjoy maximum benefits!</p>
//       <div className='flex gap-5'>
//         <img src="./Icon1.png" alt="icon1" />
//         <img src="./Icon2.png" alt="icon2" />
//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default Footer


import React from 'react'

function Footer() {
  return (
    <div className='bg-[#000000] py-6 px-4'>
      <div className='flex justify-center lg:justify-start lg:px-10'>
        <img src="./Rectangle 24.png" alt="bottom-logo" className='w-36 h-24 mx-auto lg:mx-0' />
      </div>
      <hr className="border-t mx-auto border-[#FFFFFF] w-5/6 my-10 pb-10"/>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left gap-6 lg:gap-4 lg:px-10'>
        <a href="#" className='text-[#ffffff] text-sm md:text-base lg:whitespace-nowrap whitespace-normal'>© 2025 | Neth BookPoint</a>
        <p className='text-[#CC9600] pl-6 font-normal text-sm md:text-lg flex-1 whitespace-normal lg:whitespace-break-spaces'>
          Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for our online platform to enjoy maximum benefits!
        </p>
        <div className='flex gap-4 justify-center lg:justify-end'>
          <img src="./Icon1.png" alt="icon1" className='w-6 h-6'/>
          <img src="./Icon2.png" alt="icon2" className='w-6 h-6'/>
        </div>
      </div>
      <p className='text-center text-xs text-gray-400 mt-4'>Contact us on @aftab</p>
    </div>
  )
}

export default Footer
