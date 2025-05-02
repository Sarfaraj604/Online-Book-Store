
// import React, { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";


// import { useEffect } from "react";
// import { useAuth } from "../context/useAuth";

// export default function CheckoutPage() {
//   const APP_URL = import.meta.env.VITE_API_URL ;
//   const [Loading , setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Accessing user data from context
//   const [ copies, setCopies ] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const unitPrice = 900; // Price per copy
//   const totalPrice = unitPrice * copies; // Total price calculation
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const handlePayment = async () => {
//     setLoading(true);
//     console.log("Total Price (in ₹):", totalPrice);
//     const res = await fetch(`${APP_URL}/api/payment/create-order`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ amount: totalPrice }) // use your dynamic total price
      
//     });
  
//     const data = await res.json();
//     console.log("Order object:", data);

//     console.log("Amount received from backend (in paise):", data.amount);
//     const options = {
//       key: "rzp_test_liSN24fZRi9Wv5", // Razorpay Test Key
//       amount: data.amount,
//       currency: data.currency,
//       name: "Sarfaraz BookPoint",
//       description: "Book Purchase",
//       order_id: data.id,
//       handler: async function (response) {
//         alert("Payment Successful!");
//         console.log(response);
//         // Optional: send response to backend to save order

//         const verifyRes = await fetch(`${APP_URL}/api/payment/verify`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//             bookTitle: "Manikkawatha",
//             amount: totalPrice, // Pass the total price here
//             copies: copies, // Pass the number of copies here
//             user: user.name,
//             email: user.email, // Pass the user email here
//           }),
//         });
      
//         const verifyData = await verifyRes.json();
//         console.log("Verification Response:", verifyData);
//         setLoading(false);
//         if (verifyData.success) {
//           navigate("/shops");
//         } else {
//           alert("Payment was not verified. Please contact support.");
//         }
//       },
//       prefill: {
//         name: user.name,
//         email: user.email,
//       },
//       theme: {
//         color: "#CC9600"
//       }
//     };
  
//     const rzp = new window.Razorpay(options);
//     rzp.open();
    
//   };
  
//   return (
//     <div className="relative min-h-screen flex flex-col">
//       {/* Navbar - always visible */}
//       <Navbar />

//       {/* Content wrapper - blur only this */}
//       <div id="main-content" className={`flex-1 transition-all duration-300 ${showModal ? 'blur-sm' : ''}`}>
//         <h1 className="font-bold text-5xl text-[#4B330B] text-center mt-20">
//           Your Cart Details
//         </h1>
//         <div className="flex flex-row justify-start gap-30 h-auto mb-20">
//           <img src="./bookmark.png" alt="bookmark" className="-mt-10" />
//           <div className="flex flex-col mt-20 items-start w-74 h-99 border border-[#A59F9F] rounded-lg">
//             <img
//               src="./Rectangle 55.png"
//               alt="book"
//               className="w-29 h-41 mb-5 ml-22 mt-10"
//             />
//             <h3 className="font-bold text-2xl text-[#000000] ml-10">
//               Manikkawatha
//             </h3>
//             <h4 className="font-bold text-lg text-[#1E1E1E] ml-10">
//               Mahinda Prasad Masimbula
//             </h4>
//             <h3 className="font-bold text-2xl ml-10">Rs. 900/=</h3>
//             <div className="flex items-center space-x-2 ml-20 mt-3">
//               <label htmlFor="copies" className="font-bold text-xl text-[#4B330B]">
//                 Copies
//               </label>
//               <input
//                 id="copies"
//                 type="number"
//                 min="1"
//                 value={copies}
//                 onChange={(e) => setCopies(parseInt(e.target.value) || 1)}
//                 className="w-16 px-2 py-1 border text-lg border-[#000000] rounded text-center"
//               />
//             </div>
//           </div>
//           <div>
//             <h3 className="font-bold text-3xl mt-150 mb-5 -ml-55">Total Price: Rs. { totalPrice.toFixed(2)}</h3>

//             <button onClick={() => setShowModal(true)}>
//               <div className="w-80 h-16 -ml-55 content-center border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] rounded-lg ">
//                 <p className="text-2xl text-center ">Proceed to Checkout</p>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer - always visible */}
//       <Footer />

//       {/* Modal Overlay */}
//       {showModal && (
//         <>
//           {/* Blur only main content */}
//           <div className="fixed inset-0 bg-transparent z-40 pointer-events-none" />

//           {/* Modal box */}
//           <div className="fixed inset-0 z-50 flex justify-center items-center">
//             <div className="bg-black text-white rounded-lg p-8 w-[700px] h-[500px] shadow-lg overflow-auto relative">
//               <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Checkout Details</h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input className="p-2 rounded bg-gray-300 text-black" placeholder="Receiver name" />
//                 <input className="p-2 rounded bg-gray-300 text-black" placeholder="Billing Address" />
//                 <input className="p-2 rounded bg-gray-300 text-black" placeholder="Sending Address" />
//                 <input className="p-2 rounded bg-gray-300 text-black" placeholder="Select District" />
//                 <input className="p-2 rounded bg-gray-300 text-black" placeholder="Contact Number" />
//                 <input className="p-2 rounded bg-gray-300 text-black" placeholder="Select Province" />
//               </div>

//               <div className="flex justify-between items-center mt-6">
//                 <button
//                 disabled={Loading}
//                  onClick={handlePayment}
//                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded">
//                   {Loading ? ' Processing...' : 'Pay Now'}
//                 </button>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="border border-yellow-500 px-6 py-2 rounded text-yellow-400 hover:bg-yellow-600 hover:text-black"
//                 >
//                   Close Checkout Page
//                 </button>
//               </div>

//               <p className="text-red-500 mt-4 text-center text-sm">
//                 *Contact us to cancel your order
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/useAuth";

export default function CheckoutPage() {
      const APP_URL = import.meta.env.VITE_API_URL ;
      const [Loading , setLoading] = useState(false);
      const navigate = useNavigate();
      const { user } = useAuth(); // Accessing user data from context
      const [ copies, setCopies ] = useState(1);
      const [showModal, setShowModal] = useState(false);
      const unitPrice = 900; // Price per copy
      const totalPrice = unitPrice * copies; // Total price calculation
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handlePayment = async () => {
        setLoading(true);
        console.log("Total Price (in ₹):", totalPrice);
        const res = await fetch(`${APP_URL}/api/payment/create-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ amount: totalPrice }) // use your dynamic total price
          
        });
      
        const data = await res.json();
        console.log("Order object:", data);
    
        console.log("Amount received from backend (in paise):", data.amount);
        const options = {
          key: "rzp_test_liSN24fZRi9Wv5", // Razorpay Test Key
          amount: data.amount,
          currency: data.currency,
          name: "Sarfaraz BookPoint",
          description: "Book Purchase",
          order_id: data.id,
          handler: async function (response) {
            alert("Payment Successful!");
            console.log(response);
            // Optional: send response to backend to save order
    
            const verifyRes = await fetch(`${APP_URL}/api/payment/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookTitle: "Manikkawatha",
                amount: totalPrice, // Pass the total price here
                copies: copies, // Pass the number of copies here
                user: user.name,
                email: user.email, // Pass the user email here
              }),
            });
          
            const verifyData = await verifyRes.json();
            console.log("Verification Response:", verifyData);
            setLoading(false);
            if (verifyData.success) {
              navigate("/shops");
            } else {
              alert("Payment was not verified. Please contact support.");
            }
          },
          prefill: {
            name: user.name,
            email: user.email,
          },
          theme: {
            color: "#CC9600"
          }
        };
      
        const rzp = new window.Razorpay(options);
        rzp.open();
        
      };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      <div id="main-content" className={`flex-1 transition-all duration-300 ${showModal ? 'blur-sm' : ''}`}>
        <h1 className="font-bold text-3xl md:text-5xl text-[#4B330B] text-center mt-10 md:text-end lg:text-center">
          Your Cart Details
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 md:gap-16 lg:gap-30 px-4 md:px-0 h-auto mb-20">
          <img 
            src="./bookmark.png" 
            alt="bookmark" 
            className="hidden md:block md:-mt-10 w-16 md:w-auto" 
          />
          
          <div>
            {/* Book Card */}
          <div className="mt-10 md:mt-20 w-60 ml-7 h-110  sm:h-110 sm:w-30 md:w-80 md:h-120 border border-[#A59F9F] rounded-lg p-4 md:p-0">
            <div className="flex flex-col items-center">
              <img
                src="./Rectangle 55.png"
                alt="book"
                className="w-40 md:w-48 p-5 h-56 md:h-64 mb-5"
              />
              <h3 className="font-bold text-xl md:text-2xl text-[#000000]">
                Manikkawatha
              </h3>
              <h4 className="font-bold text-base md:text-lg text-[#1E1E1E]">
                Mahinda Prasad Masimbula
              </h4>
              <h3 className="font-bold text-xl md:text-2xl">Rs. 900/=</h3>
              
              <div className="flex items-center space-x-2 mt-3">
                <label htmlFor="copies" className="font-bold text-lg md:text-xl text-[#4B330B]">
                  Copies
                </label>
                <input
                  id="copies"
                  type="number"
                  min="1"
                  value={copies}
                  onChange={(e) => setCopies(parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 border text-lg border-[#000000] rounded text-center"
                />
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="mt-8 md:mt-10 flex flex-col  md:items-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-5">
              Total Price: Rs. {totalPrice.toFixed(2)}
            </h3>

            <button 
              onClick={() => setShowModal(true)}
              className="w-full md:w-80 h-16 border border-[#CC9600] rounded-lg hover:bg-[#E88500] hover:text-white transition-colors"
            >
              <p className="text-xl md:text-2xl text-center">Proceed to Checkout</p>
            </button>
          </div>
          </div>
          
        </div>
      </div>

      <Footer />

      {/* Modal Overlay - Responsive adjustments */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-transparent z-40 pointer-events-none" />

          <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
            <div className="bg-black text-white rounded-lg p-6 md:p-8 w-full md:w-[700px] max-h-[90vh] overflow-auto relative">
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6 text-center">
                Checkout Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <input 
                    key={i}
                    className="p-2 rounded bg-gray-300 text-black w-full"
                    placeholder={[
                      "Receiver name",
                      "Billing Address",
                      "Sending Address",
                      "Select District",
                      "Contact Number",
                      "Select Province"
                    ][i]}
                  />
                ))}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <button
                  disabled={Loading}
                  onClick={handlePayment}
                  className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded"
                >
                  {Loading ? ' Processing...' : 'Pay Now'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full md:w-auto border border-yellow-500 px-6 py-2 rounded text-yellow-400 hover:bg-yellow-600 hover:text-black"
                >
                  Close Checkout Page
                </button>
              </div>

              <p className="text-red-500 mt-4 text-center text-sm">
                *Contact us to cancel your order
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}