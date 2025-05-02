// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../context/useAuth";
// function Navbar() {
//   const { user, logout } = useAuth();
//   const [showModal, setShowModal] = useState(false);
//   const isActive = (path) => {
//     return window.location.pathname === path
//       ? "text-yellow-500 font-bold"
//       : "text-white hover:text-gray-200";
//   };
//   return (
//     <nav className="bg-[url('/navback.png')] bg-cover bg-center p-4 h-30 ">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//         <div className="flex items-center justify-between">
//           <img
//             src="./logo.png"
//             alt="Logo"
//             className="h-25 w-26 object-contain"
//           />
//           <h1 className="text-[#cc9600] text-2xl font-bold leading-none ">
//             SAIF <br /> BOOKPOINT
//           </h1>
//         </div></Link>
//         <div className="flex space-x-15 mt-5 text-xl">
//           <Link
//             to="/"
//             className={`text-white hover:text-gray-200 ${isActive("/")}`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/shops"
//             className={`text-white hover:text-gray-200 ${isActive("/shops")}`}
//           >
//             Shops
//           </Link>
//           <Link
//             to="/about"
//             className={`text-white hover:text-gray-200 ${isActive("/about")}`}
//           >
//             About
//           </Link>
//           <Link
//             to="/team"
//             className={`text-white hover:text-gray-200 ${isActive("/team")}`}
//           >
//             Delivery Team
//           </Link>
//           <Link
//             to="/sellers"
//             className={`text-white hover:text-gray-200 ${isActive("/sellers")}`}
//           >
//             Sellers
//           </Link>
//         </div>
//         <div className="flex items-center justify-between space-x-22 mr-22">
//           <Link to="/notification">
//             <img
//               src="./Bell.png"
//               alt="Logo"
//               className="h-5 w-5 object-contain mt-5"
//             />
//           </Link>
//             <div className="flex flex-col items-center mt-5">
//               <div onClick={() => setShowModal(true)} onMouseEnter={() => setShowModal(true)}>
//               <img
//                 src="./Rectangle 4.png"
//                 alt="Logo"
//                 className="h-10 w-12 object-contain"
//               />
//               </div>
//               <span className="text-white text-xm ">{user?.email}</span>
//             </div>
//           </div>
//         </div>
//       {showModal && (
//         <div className="w-60 h-80 bg-[#593903] mr-15 mt-10 absolute top-20 right-0 rounded-lg shadow-lg p-4">
//           <ul className="text-white text-lg ml-3 space-y-5">
//             <div className="flex items-center space-x-2">
//               <img
//                 src="./profile.svg"
//                 alt="profile"
//                 className="h-6 w-6 filter invert brightness-50"
//               />
//               <li>My Profile</li>
//             </div>
//             <div className="flex items-center space-x-2">
//               <img
//                 src="./package.png"
//                 alt="order"
//                 className="h-6 w-6 filter invert brightness-200"
//               />
//               <li>Orders</li>
//             </div>
//             <div className="flex items-center space-x-2">
//               <img
//                 src="./e-commerce.png"
//                 alt="address"
//                 className="h-6 w-6 filter invert brightness-200"
//               />
//               <li>Wishlist (0)</li>
//             </div>
//             <div className="flex items-center space-x-2">
//               <img
//                 src="./gift-card.png"
//                 alt="gift"
//                 className="h-6 w-6 filter invert brightness-200"
//               />
//               <li>Gift Cards</li>
//             </div>
  
//           </ul>
//           <button onClick={logout}>
//           <div className="w-40 h-13 mt-10 border ml-5 border-[#FFFFFF] text-[#FFFFFF] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#FFFFFF] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#FFFFFF] flex flex-row gap-3 items-center justify-center rounded-lg">
//             <img
//               src="./logout.png"
//               alt="logout"
//               className="h-6 w-6 filter invert brightness-0"
//             />
//             <p className="text-2xl">Logout</p>
//           </div>
//           </button>
//           <button
//             onClick={() => setShowModal(false)}
//             className="absolute top-1 right-4 text-white text-4xl font-bold hover:text-yellow-400"
//           >
//             &times;
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) =>
    window.location.pathname === path
      ? "text-yellow-500 font-bold"
      : "text-white hover:text-gray-200";

  return (
    <nav className="bg-[url('/navback.png')] bg-cover bg-center w-full p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="./logo.png" alt="Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-[#cc9600] text-xl font-bold leading-tight">
            SAIF <br /> BOOKPOINT
          </h1>
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

        {/* Center: Nav Links */}
        <div
          className={`w-full md:w-auto mt-4 md:mt-0 flex-col md:flex-row ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex items-center gap-4 md:gap-8 text-lg`}
        >
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/shops" className={isActive("/shops")}>
            Shops
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/team" className={isActive("/team")}>
            Delivery Team
          </Link>
          <Link to="/sellers" className={isActive("/sellers")}>
            Sellers
          </Link>
        </div>

        {/* Right: Notification and Profile */}
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link to="/notification">
            <img
              src="./Bell.png"
              alt="notification"
              className="h-6 w-6 object-contain"
            />
          </Link>

          <div
            className="relative cursor-pointer"
            onClick={() => setShowModal(true)}
            onMouseEnter={() => setShowModal(true)}
          >
            <img
              src="./Rectangle 4.png"
              alt="profile"
              className="h-10 w-12 object-contain"
            />
            <p className="text-white text-sm text-center">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Dropdown Modal */}
      {showModal && (
        <div className="w-60 h-80 bg-[#593903] absolute top-24 right-4 rounded-lg shadow-lg p-4 z-50">
          <ul className="text-white text-lg space-y-5">
            <li className="flex items-center gap-2">
              <img src="./profile.svg" alt="profile" className="h-6 w-6" />
              My Profile
            </li>
            <li className="flex items-center gap-2">
              <img src="./package.png" alt="order" className="h-6 w-6" />
              Orders
            </li>
            <li className="flex items-center gap-2">
              <img src="./e-commerce.png" alt="wishlist" className="h-6 w-6" />
              Wishlist (0)
            </li>
            <li className="flex items-center gap-2">
              <img src="./gift-card.png" alt="gift" className="h-6 w-6" />
              Gift Cards
            </li>
          </ul>
          <button
            onClick={logout}
            className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <img src="./logout.png" alt="logout" className="h-5 w-5" />
            Logout
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-4 text-white text-3xl hover:text-yellow-400"
          >
            &times;
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
