// import React from "react";
// import { Link } from "react-router-dom";

// function Book() {
//   return (
//     <div className=" pt-15 pl-15 bg-[linear-gradient(to_right,_#000000_50%,_#FFFFFF_50%)]">
//       <div className="">
//         <h1 className="font-bold mb-3 text-3xl text-[#FFFFFF]">
//           Thunmanhandiya
//         </h1>
//         <h3 className="font-bold text-xl text-[#FFDD7E]">Mahagamasekara</h3>
//       </div>
//       <div className="flex flex-row justify-center items-end gap-5 mt-10">
//         <div className="">
//           <img src="./Rectangle 46.png" alt="book1" className="w-170 h-135" />
//         </div>
//         <div>
//           <div className="flex justify-items-start gap-5">
//             <img src="./Credit card.png" alt="credit card" />
//             <h3 className="font-bold text-2xl text-[#CA891D]">Rs. 700/=</h3>
//           </div>
//           <p className="text-[#593903] italic text-2xl mt-5">
//             <span className="block">*Offer Ends</span>
//             December 31, 2024
//           </p>
//         </div>
//       </div>
//       <Link to="/checkout">
//       <div className="w-55 h-13 ml-180 mt-10 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-hidden focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-3 items-center justify-center rounded-lg">
//         <img src="./Shopping cart.png" alt="cart" className=" w-6 h-6" />
//         <p className="text-2xl">Add to Cart</p>
//       </div>
//       </Link>
//       <div className="flex flex-row gap-80 mt-20">
//         <div className="w-1/2 ml-15">
//           <div className="flex flex-row gap-5 mt-10 mb-13">
//           <img src="./Icon.png" alt="" />
//           <h1 className="font-bold text-3xl text-[#F3F3F3]">Category: Novel</h1>
//           </div>
//           <p className="text-2xl text-[#F3F3F3] text-justify tracking-wide h-auto ">Thunmanhandiya, written by Mahagamasekara, is a poignant novel set in rural Sri Lanka. It explores the complexities of human relationships and emotions, depicting the lives of its characters with sensitivity and depth. The story's rich narrative and evocative setting make it a timeless tale about love, loss, and the ties that bind us.Abiling is an aimless, alcoholic and in debt. He gets into arguments with his brother (Dharmadasa Kuruppu) and other villagers, and then decides to get a job with a rich landowner (A.P. Gunaratne). In the meantime, on the encouragement of his uncle, Sirisena enrolled in art school and improved his abilities. There he hopes to show off his skills to his uncle, Abilene.</p>
//         </div>
//         <div className="w-1/2 mr-15">
//           <h1 className="font-bold text-3xl text-[#000000] mt-10 mb-13">About This Book</h1>
//           <p className="text-2xl text-[#000000] text-justify tracking-wide h-auto pr-15">Mahagama Sekara was a legendary poet of the 20th century in Sri Lanka. He was born on 7th April 1929, in Radawana, Colombo, Sri Lanka. He was the only child of Maha Gamage Jhon Appuhami (father) and Ranawaka Arachchige Rosalin (mother). Mahagama Sekara was also known as a great Sri Lankan novelist, translator, artist, playwright, lyricist, filmmaker, philosopher and teacher. Tunmanhandiya is a Sinhala film directed by Mr. Mahagama Sekara [1] and released in Sri Lanka in 1970. The rest of the story is based around the life of Abiling ( Joe Abeywickrama ), a vitra artist living in a small village, and his son-in-law Sirisena (Kumara Balasuriya, Karunaratne Ranasinghe). Abiling is an aimless, alcoholic and in debt. He gets into arguments with his brother (Dharmadasa Kuruppu) and other villagers, and then decides to get a job with a rich landowner (A.P. Gunaratne). In the meantime, on the encouragement of his uncle, Sirisena enrolled in art school and improved his abilities. There he hopes to show off his skills to his uncle, Abilene.</p>
//         </div>
//       </div>
//       <div className="flex flex-row justify-around items-center bg-[#000000] h-30 pb-0 pr-0 mt-20">
//         <img src="./Icon (1).png" alt="icon1" />
//         <img src="./Icon (2).png" alt="icon2" />
//         <img src="./Icon (3).png" alt="icon3" />
//         <img src="./Icon (4).png" alt="icon4" />
//       </div>
//     </div>
//   );
// }

// export default Book;


import React from "react";
import { Link } from "react-router-dom";

function Book() {
  return (
    <div className="pt-10 pl-5 md:pt-15 md:pl-15 bg-[linear-gradient(to_right,_#000000_50%,_#FFFFFF_50%)]">
      <div>
        <h1 className="font-bold mb-3 text-xl sm:text-2xl md:text-3xl text-[#FFFFFF]">
          Thunmanhandiya
        </h1>
        <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#FFDD7E]">
          Mahagamasekara
        </h3>
      </div>

      <div className="flex flex-row justify-center items-start gap-5 mt-10">
        {/* LEFT: Book Image */}
        <div className="flex-1 flex justify-center items-start">
          <img
            src="./Rectangle 46.png"
            alt="book1"
            className="w-62 h-40 sm:w-58 sm:h-70 md:w-74 md:h-90 lg:w-[500px] lg:h-[600px] object-contain"
          />
        </div>

        {/* RIGHT: Price + Offer + Button */}
        <div className="flex-1 relative flex flex-col sm:pl-10 mt-30 sm:mt-60 justify-start items-start gap-5">
          <div className="flex justify-start gap-3 sm:gap-5 w-full max-w-xs">
            <img
              src="./Credit card.png"
              alt="credit card"
              className="w-6 sm:w-8 md:w-auto"
            />
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-[#CA891D]">
              Rs. 700/=
            </h3>
          </div>
          <p className="text-[#593903] italic text-base sm:text-lg md:text-2xl mt-2 leading-snug text-center">
            <span className="block">*Offer Ends</span>
            December 31, 2024
          </p>

          {/* Shifted "Add to Cart" Button */}
          <Link to="/checkout">
            <div className="mt-8 w-48 sm:w-50 h-11 sm:h-8 md:h-13 border border-[#CC9600] text-[#000000] hover:border-[#E88500] hover:text-[#FFFFFF] focus:outline-none focus:border-[#E88500] focus:text-[#FFFFFF] focus:bg-[#E88500] hover:bg-[#E88500] disabled:opacity-50 disabled:pointer-events-none dark:border-[#CC9600] flex flex-row gap-3 items-center justify-center rounded-lg">
              <img
                src="./Shopping cart.png"
                alt="cart"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="text-base sm:text-lg md:text-2xl">Add to Cart</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-row gap-5 sm:gap-10 md:gap-20 mt-20">
        <div className="w-1/2 pr-5 md:pl-15">
          <div className="flex flex-row gap-3 sm:gap-5 mt-10 mb-5">
            <img src="./Icon.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-auto" />
            <h1 className="font-bold text-lg sm:text-2xl md:text-3xl text-[#F3F3F3]">
              Category: Novel
            </h1>
          </div>
          <p className="text-sm sm:text-lg md:text-2xl text-[#F3F3F3] text-justify tracking-wide h-auto leading-relaxed">
            Thunmanhandiya, written by Mahagamasekara, is a poignant novel set
            in rural Sri Lanka. It explores the complexities of human
            relationships and emotions, depicting the lives of its characters
            with sensitivity and depth. The story's rich narrative and evocative
            setting make it a timeless tale about love, loss, and the ties that
            bind us. Abiling is an aimless, alcoholic and in debt. He gets into
            arguments with his brother (Dharmadasa Kuruppu) and other villagers,
            and then decides to get a job with a rich landowner (A.P. Gunaratne).
            In the meantime, on the encouragement of his uncle, Sirisena
            enrolled in art school and improved his abilities. There he hopes to
            show off his skills to his uncle, Abilene.
          </p>
        </div>
        <div className="w-1/2 pr-2 md:pr-15">
          <h1 className="font-bold text-lg sm:text-2xl md:text-3xl text-[#000000] mt-10 mb-5">
            About This Book
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl text-[#000000] text-justify tracking-wide h-auto leading-relaxed">
            Mahagama Sekara was a legendary poet of the 20th century in Sri
            Lanka. He was born on 7th April 1929, in Radawana, Colombo, Sri
            Lanka. He was the only child of Maha Gamage Jhon Appuhami (father)
            and Ranawaka Arachchige Rosalin (mother). Mahagama Sekara was also
            known as a great Sri Lankan novelist, translator, artist,
            playwright, lyricist, filmmaker, philosopher and teacher.
            Tunmanhandiya is a Sinhala film directed by Mr. Mahagama Sekara and
            released in Sri Lanka in 1970. The rest of the story is based around
            the life of Abiling (Joe Abeywickrama), a vitra artist living in a
            small village, and his son-in-law Sirisena (Kumara Balasuriya,
            Karunaratne Ranasinghe). Abiling is an aimless, alcoholic and in
            debt. He gets into arguments with his brother (Dharmadasa Kuruppu)
            and other villagers, and then decides to get a job with a rich
            landowner (A.P. Gunaratne). In the meantime, on the encouragement of
            his uncle, Sirisena enrolled in art school and improved his
            abilities. There he hopes to show off his skills to his uncle,
            Abilene.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around items-center bg-[#000000] py-5 mt-20 gap-5">
        <img src="./Icon (1).png" alt="icon1" className="w-6 sm:w-8 md:w-auto" />
        <img src="./Icon (2).png" alt="icon2" className="w-6 sm:w-8 md:w-auto" />
        <img src="./Icon (3).png" alt="icon3" className="w-6 sm:w-8 md:w-auto" />
        <img src="./Icon (4).png" alt="icon4" className="w-6 sm:w-8 md:w-auto" />
      </div>
    </div>
  );
}

export default Book;
