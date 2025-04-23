import React from "react";
import { Link } from 'react-router-dom';

function BookSection() {
  const slides = [
    { image: "/book1.png", title: "Thunmanhandiya", description: "Mohan Raj Madawala"},
    { image: "/book2.png", title: "Gamperaliya", description: "Kamala Markandaya" },
    { image: "/book3.png", title: "Nectar in a Sieve", description: "Martin Wickramasinghe" },
    { image: "/book4.png", title: "Adaraneeya Victoria", description: "Mohan Raj Madawala" },
  ];
  return (
    <div className="container mx-auto w-280 h-170 " m-x="auto">
      <h1 className="text-5xl text-center mt-27 mb-20 font-bold text-[#000000]">
        Our Best Picks
      </h1>
      {/* Slider */}
      <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
        "slidesQty": {
          "xs": 1,
          "lg": 4
        }
      }'
      className="relative"
    >
      <Link to="/book" >
      <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div className="relative min-h-72 -mx-1">
          <div className="hs-carousel-body flex flex-nowrap transition-transform duration-700">
            {slides.map((slide, index) => (
              <div key={index} className="hs-carousel-slide px-1 w-full">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-center object-cover" />
                  <div className="p-2">
                    <h3 className="text-2xl font-bold text-black">{slide.title}</h3>
                    <p className="text-black text-xl font-normal">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Link>



      <button
        type="button"
        className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
    </div>
{/* End Slider */}
    </div>
  );
}

export default BookSection;
