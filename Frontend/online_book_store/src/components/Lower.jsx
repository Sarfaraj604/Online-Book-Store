// import React from "react";
// import { Link } from "react-router-dom";

// function Lower() {
//   return (
//     <div className="bg-[#000000] h-165 flex justify-around items-center">
//       <div>
//         <img
//           src="./Rectangle 21.png"
//           alt="books"
//           className="w-136 h-77 ml-8 object-contain"
//         />
//       </div>
//       <div className="w-144 space-y-8 mr-10">
//         <h1 className="text-[#FFFFFF] text-5xl font-bold">
//           Your favourite{" "}
//           <span className="text-[#CC9600]">
//             Reads
//             <br />
//             Are Here!
//           </span>
//         </h1>
//         <p className="text-[#FFFFFF] text-xl">
//           Buy your favorite books online with ease! Enjoy exclusive offers and
//           discounts on selected titles. Dive into our collection and find
//           special deals that make reading more affordable. Shop now and unlock
//           more savings with every purchase!
//         </p>
//         <div className="text-[#CA891D] flex space-x-25">
//           <div>
//             <span className="font-normal text-5xl">800+</span>
//             <br />
//             Book Listing
//           </div>
//           <div>
//             <span className="font-normal text-5xl">1K+</span>
//             <br />
//             Registered Members
//           </div>
//           <div>
//             <span className="font-normal text-5xl">50+</span>
//             <br />
//             Branch Count
//           </div>
//         </div>
//         <Link to="/shops">
//         <button
//           type="button"
//           class="py-3 px-15 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-[#CC9600] text-[#FFFFFF] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] dark:text-[#FFFFFF] dark:hover:text-[#FFFFFF] dark:hover:border-[#E88500]"
//         >
//           Explore More
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Lower;


import React from "react";
import { Link } from "react-router-dom";

function Lower() {
  return (
    <div className="bg-[#000000] min-h-[40rem] flex flex-col lg:flex-row justify-center lg:justify-around items-center px-6 py-10 gap-10">
      <div>
        <img
          src="./Rectangle 21.png"
          alt="books"
          className="w-100 h-70 object-contain"
        />
      </div>
      <div className="max-w-2xl space-y-6 text-center lg:text-left">
        <h1 className="text-[#FFFFFF] text-3xl sm:text-4xl lg:text-5xl font-bold">
          Your favourite <br className="block lg:hidden" />
          <span className="text-[#CC9600]">Reads Are Here!</span>
        </h1>
        <p className="text-[#FFFFFF] text-base sm:text-lg">
          Buy your favorite books online with ease! Enjoy exclusive offers and
          discounts on selected titles. Dive into our collection and find
          special deals that make reading more affordable. Shop now and unlock
          more savings with every purchase!
        </p>
        <div className="text-[#CA891D] flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 justify-center lg:justify-start">
          <div>
            <span className="font-normal text-2xl sm:text-4xl lg:text-5xl">800+</span>
            <br /> Book Listing
          </div>
          <div>
            <span className="font-normal text-2xl sm:text-4xl lg:text-5xl">1K+</span>
            <br /> Registered Members
          </div>
          <div>
            <span className="font-normal text-2xl sm:text-4xl lg:text-5xl">50+</span>
            <br /> Branch Count
          </div>
        </div>
        <Link to="/shops">
          <button
            type="button"
            className="py-3 px-8 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-[#CC9600] text-[#FFFFFF] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none"
          >
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Lower;
