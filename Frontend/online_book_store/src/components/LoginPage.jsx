// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/useAuth';
// import axiosInstance from '../utils/axiosConfig';

// function LoginPage() {
//   const APP_URL = import.meta.env.VITE_API_URL ;
//   const [Loading , setLoading] = useState(false);
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const { user, checkAuth } = useAuth();
//   const navigate = useNavigate();
//   useEffect(() => {
//     if(user) {
//       navigate('/');
//     }
//   }, [user, navigate]);


//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
    
//     if (!loginData.email || !loginData.password) {
//       setError('Please fill all fields');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axiosInstance.post(`${APP_URL}/api/auth/login`, loginData);
//       await checkAuth(); // Wait for auth check to complete
//       navigate('/');
//     } catch (error) {
//       setError(error.response?.data?.message || 'Invalid email or password');
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <div className="flex items-center h-screen justify-center w-full bg-[#000000]">
//         <img src="./hero2.png" alt="hero2" className="max-h-full" />
//         <div className="flex flex-col items-center ">
//           <h1 className="text-[#CC9600] text-5xl font-bold">
//             Welcome to Neth BookPoint!
//           </h1>
//           {error && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg w-3/5 text-center">
//               {error}
//             </div>
//           )}
//           <p className="text-[#FFFFFF] mt-5 w-150">
//             Discover a seamless way to sell your books and unlock exclusive
//             benefits. Enjoy a hassle-free experience, save valuable time, and
//             take advantage of our amazing offers.
//           </p>
//           <h2 className="text-[#CC9600] text-4xl mt-8 font-bold">
//             Login to Your Account!
//           </h2>
//           <div className="flex flex-col mt-8 gap-4 w-4/5">
//             <div className="space-y-3">
//               <div className="relative">
//                 <input
//                   type="email"
//                   className="peer py-2.5 h-15 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:border-[#CC9600] focus:ring-[#CC9600] disabled:opacity-50 disabled:pointer-events-none"
//                   name="email"
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                 />
//                 <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
//                   <svg
//                     className="shrink-0 size-4 text-gray-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//               </div>

//               <div className="relative">
//                 <input
//                   type="password"
//                   className="peer py-2.5 h-15 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:ring-[#CC9600] focus:border-[#CC9600] disabled:opacity-50 disabled:pointer-events-none"
//                   name="password"
//                   onChange={handleChange}
//                   placeholder="Enter password"
//                 />
//                 <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
//                   <svg
//                     className="shrink-0 size-4 text-gray-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
//                     <circle cx="16.5" cy="7.5" r=".5"></circle>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <h3 className="text-[#D6CE80] cursor-pointer text-2xl text-right">
//               Forgot Password?
//             </h3>
//           </div>
//           <div className="flex justify-around mt-8 gap-6">
//             <p className="text-[#FFFFFF] text-2xl">
//               Don't you have an account?
//             </p>
//             <h3 className="text-[#F29C0D] cursor-pointer underline font-bold text-2xl"
//             onClick={() => navigate('/signup')}>
//               Create an account
//             </h3>
//           </div>
//           <hr className="border-t-2 mx-auto mt-1 border-[#A59F9F] w-5/6 px-15 my-8" />
//           <div className="flex justify-between w-4/5">
//             <div className="flex gap-6 cursor-pointer items-center">
//               <img
//                 src="./google-icon.png"
//                 alt="google-icon"
//                 className="w-12 h-12"
//               />
//               <p className="text-[#FFFFFF] text-2xl">Login with Google</p>
//             </div>
//             <button
//               type="submit"
//               disabled={Loading}
//               className="block w-39 h-12 text-[#FFFFFF] cursor-pointer font-bold bg-[#CC9600] hover:bg-[#cc8100] focus:outline-none font-lg rounded-2xl text-2xl"
//               onClick={handleSubmit}
//             >
//               {Loading ? 'Logging in...' : 'LOGIN'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import axiosInstance from '../utils/axiosConfig';

function LoginPage() {
  const APP_URL = import.meta.env.VITE_API_URL;
  const [Loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { user, checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!loginData.email || !loginData.password) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      await axiosInstance.post(`${APP_URL}/api/auth/login`, loginData);
      await checkAuth();
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid email or password');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center h-screen w-full bg-black overflow-y-auto">
      <img
        src="./hero2.png"
        alt="hero2"
        className="hidden md:block md:w-1/2 max-h-full object-contain"
      />

      <div className="w-full md:w-1/2 flex flex-col items-center px-6 md:px-12 py-8">
        <h1 className="text-[#CC9600] text-3xl md:text-5xl font-bold text-center">
          Welcome to Neth BookPoint!
        </h1>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg w-full text-center">
            {error}
          </div>
        )}

        <p className="text-white mt-5 text-center text-sm md:text-base">
          Discover a seamless way to sell your books and unlock exclusive
          benefits. Enjoy a hassle-free experience, save valuable time, and
          take advantage of our amazing offers.
        </p>

        <h2 className="text-[#CC9600] text-2xl md:text-4xl mt-8 font-bold text-center">
          Login to Your Account!
        </h2>

        <form className="flex flex-col mt-8 gap-4 w-full max-w-md" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                className="peer py-2.5 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:border-[#CC9600] focus:ring-[#CC9600]"
                name="email"
                onChange={handleChange}
                placeholder="Enter Email"
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                className="peer py-2.5 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:border-[#CC9600] focus:ring-[#CC9600]"
                name="password"
                onChange={handleChange}
                placeholder="Enter Password"
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                  <circle cx="16.5" cy="7.5" r=".5"></circle>
                </svg>
              </div>
            </div>
          </div>

          <h3 className="text-[#D6CE80] cursor-pointer text-sm md:text-xl text-right">
            Forgot Password?
          </h3>

          <button
            type="submit"
            disabled={Loading}
            className="w-full py-2 bg-[#CC9600] text-white font-bold rounded-2xl hover:bg-[#cc8100] text-base md:text-xl mt-4"
          >
            {Loading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-md mt-6 gap-4">
          <p className="text-white text-base md:text-xl">Don't have an account?</p>
          <h3
            className="text-[#F29C0D] cursor-pointer underline font-bold text-base md:text-xl"
            onClick={() => navigate('/signup')}
          >
            Create an account
          </h3>
        </div>

        <hr className="border-t-2 w-full max-w-md border-[#A59F9F] my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-md gap-6">
          <div className="flex gap-4 cursor-pointer items-center">
            <img
              src="./google-icon.png"
              alt="google-icon"
              className="w-10 h-10"
            />
            <p className="text-white text-base md:text-xl">Login with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

