// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../utils/axiosConfig";
// import { useAuth } from "../context/useAuth";
// import { Link } from "react-router-dom";

// function SignupPage() {
//   const APP_URL = import.meta.env.VITE_API_URL ;
//   const {user, setUser} = useAuth();
//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setSignupData({ ...signupData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Frontend validation
//     if (
//       !signupData.name ||
//       !signupData.email ||
//       !signupData.password ||
//       !signupData.confirmPassword
//     ) {
//       setError("Please fill all fields");
//       return;
//     }

//     if (signupData.password !== signupData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post(`${APP_URL}/api/auth/signup`, {
//         name: signupData.name,
//         email: signupData.email,
//         password: signupData.password,
//         confirmPassword: signupData.confirmPassword,
//       });

//       if (response.status === 201) {
//         setUser({ name: signupData.name, email: signupData.email });
//         navigate("/"); // Redirect to login page after successful signup
//       }
//     } catch (error) {
//       setError(
//         error.response?.data?.message || "Signup failed. Please try again."
//       );
//     }
//   };
//   useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//   }, [user, navigate]);
  
//   return (
//     <>
//       <div className="flex items-center h-screen justify-center w-full bg-[#000000]">
//         <img src="./hero2.png" alt="hero2" className="max-h-full" />
//         <div className="flex h-full flex-col items-center ">
//           <h1 className="text-[#CC9600] text-5xl font-bold">
//             Welcome to Neth BookPoint!
//           </h1>
//           <h2 className="text-[#CC9600] text-4xl mt-2 font-bold">
//             Create an account
//           </h2>
//           {error && <p className="text-red-500 text-xl">{error}</p>}

//           <div className="flex flex-col mt-2 gap-2 w-3/5">
//             <div className="space-y-3">
//               <div className="relative">
//                 <label
//                   for="email"
//                   className="block mb-2 text-lg font-medium text-[#CA891D]"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="peer py-2.5 h-15 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:border-[#CC9600] focus:ring-[#CC9600] disabled:opacity-50 disabled:pointer-events-none"
//                   onChange={handleChange}
//                   placeholder="Enter Your Name"
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
//                 <label
//                   for="email"
//                   className="block mb-2 text-lg font-medium text-[#CA891D]"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="peer py-2.5 h-15 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:border-[#CC9600] focus:ring-[#CC9600] disabled:opacity-50 disabled:pointer-events-none"
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
//                 <label
//                   for="password"
//                   className="block mb-2 text-lg font-medium text-[#CA891D]"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="peer py-2.5 h-15 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:border-[#CC9600] focus:ring-[#CC9600] disabled:opacity-50 disabled:pointer-events-none"
//                   onChange={handleChange}
//                   placeholder="Enter Password"
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
//                 <label
//                   for="password"
//                   className="block mb-2 text-lg font-medium text-[#CA891D] "
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   className="peer py-2.5 h-15 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:ring-[#CC9600] focus:border-[#CC9600] disabled:opacity-50 disabled:pointer-events-none"
//                   onChange={handleChange}
//                   placeholder="Confirm password"
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
//             <div className="flex text-lg gap-3 text-left items-start mt-0">
//                 <p className="font-light text-[#D6CE80]">
//                   Already have an account?{" "}
//                 </p>
//                 <Link
//                     to="/login"
//                     className="font-bold text-xl text-[#F29C0D] hover:underline">
//                      Login
//                   </Link>
//             </div>
//             <button
//               type="submit"
//               className="block w-full h-12 cursor-pointer text-[#FFFFFF] font-bold bg-[#CC9600] hover:bg-[#cc8100] focus:outline-none font-lg rounded-2xl text-2xl"
//               onClick={handleSubmit}
//             >
//               Create an account
//             </button>
//           </div>
//           <div className="flex justify-center items-center w-4/5 mt-2 my-2 gap-5">
//             <hr className="border-t-2 border-[#A59F9F] w-3/10" />
//             <span className="text-[#FFFFFF] text-2xl">or</span>
//             <hr className="border-t-2 border-[#A59F9F] w-3/10" />
//           </div>
//           <div className="flex justify-between w-3/5">
//             <button className="outline-1 outline-amber-500 cursor-pointer hover:bg-[#cc8100] rounded-xl">
//               <div className="flex gap-4 px-4 py-2 items-center ">
//                 <img
//                   src="./google-icon.png"
//                   alt="google-icon"
//                   className="w-9 h-9 "
//                 />
//                 <p className="text-[#FFFFFF] text-xl">Signup with Google</p>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignupPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";

function SignupPage() {
  const APP_URL = import.meta.env.VITE_API_URL;
  const { user, setUser } = useAuth();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axiosInstance.post(`${APP_URL}/api/auth/signup`, signupData);

      if (response.status === 201) {
        setUser({ name: signupData.name, email: signupData.email });
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col md:flex-row items-center w-full min-h-screen bg-[#000000] overflow-y-auto md:overflow-hidden md:h-screen">
      <img
        src="./hero2.png"
        alt="hero2"
        className="hidden md:block md:w-1/2 h-full object-cover"
      />

      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-6 md:px-12 py-10">
        <div className="w-full max-w-md">
          <div className="mt-0">
            <h1 className="text-[#CC9600] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center leading-snug lg:whitespace-nowrap text-ellipsis">
              Welcome to Neth BookPoint!
            </h1>
            <h2 className="text-[#CC9600] text-xl md:text-2xl mt-2 font-bold text-center">
              Create an account
            </h2>
          </div>

          {error && <p className="text-red-500 text-center text-sm md:text-base mt-2">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter Your Name" },
              { label: "Your email", name: "email", type: "email", placeholder: "Enter Email" },
              { label: "Password", name: "password", type: "password", placeholder: "Enter Password" },
              { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
            ].map((field, index) => (
              <div key={index} className="relative">
                <label className="block mb-1 text-sm md:text-base font-medium text-[#CA891D]">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  className="peer py-2.5 px-4 ps-11 block w-full bg-[#D6CE80] rounded-lg focus:ring-[#CC9600] focus:border-[#CC9600]"
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M2 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
                  </svg>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 text-sm md:text-base">
              <p className="text-[#D6CE80]">Already have an account?</p>
              <Link to="/login" className="font-bold text-[#F29C0D] hover:underline">
                Login
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#CC9600] text-white font-bold rounded-2xl hover:bg-[#cc8100] text-base md:text-lg"
            >
              Create an account
            </button>
          </form>

          <div className="flex justify-center items-center mt-6 gap-4">
            <hr className="border-t-2 border-[#A59F9F] w-1/3" />
            <span className="text-white text-sm md:text-lg">or</span>
            <hr className="border-t-2 border-[#A59F9F] w-1/3" />
          </div>

          <div className="mt-4">
            <button className="w-full border border-[#F29C0D] rounded-xl hover:bg-[#cc8100]">
              <div className="flex items-center gap-4 px-4 py-2 justify-center">
                <img src="./google-icon.png" alt="google-icon" className="w-8 h-8" />
                <p className="text-white text-sm md:text-base">Signup with Google</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

