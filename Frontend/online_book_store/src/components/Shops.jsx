// import React from "react";
// import { useState } from "react";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/useAuth";

// function Shops() {
//   const { loading } = useAuth();
//   const [ selectedCategory, setSelectedCategory ] = useState(" ");
//   const handleCategoryChange = (category) => {
//     setSelectedCategory((prev) => (prev === category ? '' : category));
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center mt-20">
//         <h1 className="text-[#CC9600] font-bold text-6xl tracking-wide">
//           Explore All Books Here
//         </h1>
//         <div className="flex flex-row font-bold cursor-pointer text-3xl gap-20 mt-15">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'All'}     onChange={() => handleCategoryChange('All')} />
//             <h3>All</h3>
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'Novel'} onChange={() => handleCategoryChange('Novel')} />
//             <h3>Novel</h3>
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'Translations'} onChange={() => handleCategoryChange('Translations')} />
//             <h3>Translations</h3>
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'Kids’ Stories'} onChange={() => handleCategoryChange('Kids’ Stories')} />
//             <h3>Kids’ Stories</h3>
//           </label>
//         </div>
//       </div>
//       <div className="m-20 flex flex-row gap-8 justify-evenly flex-wrap mb-15">
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./book1.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 700/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./Rectangle 32.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 900/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./Rectangle 34.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 1200/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./book2.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 700/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./book3.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 800/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./book4.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 1000/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./book1.png" alt="book1" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 1100/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//         <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
//             <img src="./book3.png" alt="book2" className=""/>
//             <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
//             <h6 className="font-bold">Rs. 1300/= <span className="block font-light">Available across all branches</span></h6>
//             <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
//                 <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
//                 <p>Add to Cart</p>
//             </div>
//         </div></Link>
//       </div>
//       <div className="flex align-middle pb-10 pr-30 items-center justify-end"><img src="./Group 12.png" alt="add to cart" /></div>
//       <Footer />
//     </div>
//   );
// }

// export default Shops;

import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Shops() {
  const { loading } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(" ");

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) => (prev === category ? "" : category));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden w-full">
      <div className="flex flex-col items-center justify-center mt-20 px-4 text-center">
        <h1 className="text-[#CC9600] font-bold text-4xl md:text-6xl tracking-wide">
          Explore All Books Here
        </h1>

        <div className="flex flex-wrap justify-center font-bold cursor-pointer text-xl gap-6 mt-10">
          {["All", "Novel", "Translations", "Kids’ Stories"].map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 accent-yellow-500"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <h3>{category}</h3>
            </label>
          ))}
        </div>
      </div>

      <div className="px-4 py-10 max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {[ 
          { img: "book1.png", price: "700" },
          { img: "Rectangle 32.png", price: "900" },
          { img: "Rectangle 34.png", price: "1200" },
          { img: "book2.png", price: "700" },
          { img: "book3.png", price: "800" },
          { img: "book4.png", price: "1000" },
          { img: "book1.png", price: "1100" },
          { img: "book3.png", price: "1300" },
        ].map((book, idx) => (
          <Link to="/book" key={idx}>
            <div className="w-full max-w-[250px] mx-auto border p-4 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2 bg-white shadow-md">
              <img src={`./${book.img}`} alt="book" className="w-full h-48 object-contain" />
              <h5 className="font-bold text-lg text-center">
                Thunmanhandiya
                <span className="block text-base font-normal">Mahagamasekara</span>
              </h5>
              <h6 className="font-bold">
                Rs. {book.price}/=
                <span className="block font-light text-sm">Available across all branches</span>
              </h6>
              <div className="mt-2 w-full border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex gap-1 items-center justify-center rounded-lg py-1">
                <img src="./Shopping cart.png" alt="cart" className="w-4 h-4" />
                <p>Add to Cart</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end px-4 pb-10 overflow-hidden">
        <img src="./Group 12.png" alt="add to cart" />
      </div>

      <Footer />
    </div>
  );
}

export default Shops;
