import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Shops() {
  const { loading } = useAuth();
  const [ selectedCategory, setSelectedCategory ] = useState(" ");
  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) => (prev === category ? '' : category));
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-[#CC9600] font-bold text-6xl tracking-wide">
          Explore All Books Here
        </h1>
        <div className="flex flex-row font-bold cursor-pointer text-3xl gap-20 mt-15">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'All'}     onChange={() => handleCategoryChange('All')} />
            <h3>All</h3>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'Novel'} onChange={() => handleCategoryChange('Novel')} />
            <h3>Novel</h3>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'Translations'} onChange={() => handleCategoryChange('Translations')} />
            <h3>Translations</h3>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-7 h-7 accent-yellow-500" checked={selectedCategory === 'Kids’ Stories'} onChange={() => handleCategoryChange('Kids’ Stories')} />
            <h3>Kids’ Stories</h3>
          </label>
        </div>
      </div>
      <div className="m-20 flex flex-row gap-8 justify-evenly flex-wrap mb-15">
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./book1.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 700/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./Rectangle 32.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 900/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./Rectangle 34.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 1200/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./book2.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 700/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./book3.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 800/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./book4.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 1000/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./book1.png" alt="book1" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 1100/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
        <Link to="/book"><div className="border h-109 w-66 p-5 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 gap-2">
            <img src="./book3.png" alt="book2" className=""/>
            <h5 className="font-bold text-2xl">Thunmanhandiya <span className="text-xl block">Mahagamasekara</span></h5>
            <h6 className="font-bold">Rs. 1300/= <span className="block font-light">Available across all branches</span></h6>
            <div className="w-43 h-8 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-1 items-center justify-center rounded-lg">
                <img src="./Shopping cart.png" alt="cart" className=" w-4 h-4" />
                <p>Add to Cart</p>
            </div>
        </div></Link>
      </div>
      <div className="flex align-middle pb-10 pr-30 items-center justify-end"><img src="./Group 12.png" alt="add to cart" /></div>
      <Footer />
    </div>
  );
}

export default Shops;
