// import React from "react";

// function Middle() {
//   return (
//     <div
//       className="text-center h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('./Hero.png')" }}
//     >
//       <h1 className="text-5xl mt-17 font-bold text-[#E78600]">
//         The Book Lover's Dreamland Awaits!
//       </h1>
//       <p className="max-w-4xl mx-auto text-xl mt-5 text-white">
//         Welcome to the ultimate book lover's paradise! Join our community and
//         contribute to the ever-evolving library of stories, where every book has
//         a chance to inspire someone new.
//       </p>
//       <div className="max-w-md mx-auto">
//       <div className="align-middle w-full relative mt-5">
//         <input
//           type="text"
//           placeholder="Search a Book"
//           className="block w-full rounded-md h-13 mt-9 py-1 pr-16 pl-7 text-base text-[#A59F9F] placeholder:text-gray-400 ring-2 ring-[#CC9600] focus:outline-none md:text-md/6"/>
//         <button
//           type="submit"
//           className="absolute inset-y-2 right-2 px-15 text-white bg-[#4B330B] hover:bg-[#CC9600] focus:outline-none font-lg rounded-md text-lg dark:bg-[#4B330B] dark:hover:bg-[#CC9600]">
//           Search
//         </button>
//       </div>
//       </div>
      
//     </div>
//   );
// }

// export default Middle;


import React from "react";

function Middle() {
  return (
    <div
      className="text-center min-h-screen flex flex-col justify-start items-center px-4 pt-8 pb-20 sm:pt-8 sm:pb-24 md:pt-10 md:pb-32"
      style={{
        backgroundImage: "url('./Hero.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', // Centered the background image
      }}
    >
      <div className="w-full max-w-4xl bg-black bg-opacity-50 p-4 rounded-xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#E78600] leading-snug">
          The Book Lover's Dreamland Awaits!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4">
          Welcome to the ultimate book lover's paradise! Join our community and
          contribute to the ever-evolving library of stories, where every book has
          a chance to inspire someone new.
        </p>
        <div className="w-full mt-6 px-2">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search a Book"
              className="block w-full rounded-md py-3 pr-28 pl-4 text-base text-[#A59F9F] placeholder:text-gray-400 ring-2 ring-[#CC9600] focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 sm:px-6 py-2 text-white bg-[#4B330B] hover:bg-[#CC9600] focus:outline-none rounded-md text-sm sm:text-base"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;