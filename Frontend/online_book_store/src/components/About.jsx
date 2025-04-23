import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-[#000000]">
      <div>
        <img
          src="./Rectangle 53.png"
          alt="main-image"
          className="w-full h-116"
        />
      </div>
      <div className="flex flex-col gap-5 items-start m-16 justify-center mt-10">
        <h1 className="text-4xl font-bold text-[#CC9600] tracking-wide">
          About Us
        </h1>
        <p className="text-justify tracking-wide align-top h-auto text-[#FFFFFF] text-lg">
          Welcome to Neth BookPoint, your trusted source for a diverse range of
          books catering to every reader's taste. Established with the mission
          to foster a love for reading in our community, we pride ourselves on
          providing excellent service and a wide selection of books. Our journey
          began in 2021, and since then, we have grown to become a beloved
          destination for book lovers. Below, branches, their locations, and
          contact numbers.journey began in 2021, and since then, we have grown
          to become a beloved destination for book lovers. Below, you'll find
          information about our four branches, their locations, and contact
          numbers.
        </p>
      </div>
      <div className="flex flex-col gap-10 m-16 mt-10">
        <h1 className="text-[#CC9600] font-bold text-3xl tracking-wide">
          Our Branches
        </h1>
        <div className="flex flex-row gap-5 w-full justify-around flex-wrap text-center  ">
          <div >
            <h5 className="text-[#FCEE59]">Kurunegala</h5>
            <p className="text-[#D6CE80]">Main Street, City Center</p>
            <p className="text-[#FFFFFF]">
              Contact: 123-456-7890 <br />Operating Hours: Monday to <br />Saturday, 9 AM -
              7 PM; Sunday, 10 <br />AM - 5 PM <br /> In-store shopping, Special discounts
             <br /> for students, Workshops, Study <br />spaces
            </p>
          </div>
          <div>
            <h5 className="text-[#FCEE59]">Kandy</h5>
            <p className="text-[#D6CE80]">Main Street, City Center</p>
            <p className="text-[#FFFFFF] align-center ">
                Contact: 123-456-7890 <br />Operating Hours: Monday to <br/>Saturday, 9 AM -
                7 PM; Sunday, 10 <br />AM - 5 PM <br /> In-store shopping, Special discounts
                <br /> for students, Workshops, Study <br />spaces
            </p>
          </div>
          <div>
            <h5 className="text-[#FCEE59]">Colombo</h5>
            <p className="text-[#D6CE80]">Main Street, City Center</p>
            <p className="text-[#FFFFFF]">
            Contact: 123-456-7890 <br />Operating Hours: Monday to <br />Saturday, 9 AM -
              7 PM; Sunday, 10 <br />AM - 5 PM <br /> In-store shopping, Special discounts
             <br /> for students, Workshops, Study <br />spaces
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center m-16 mt-10">
        <h1 className="font-bold text-3xl text-[#CC9600] tracking-wide">Our Commitment</h1>
        <p className=" text-[#FFFFFF] text-justify text-lg tracking-wide h-auto leading-7">At Neth BookPoint, we are committed to providing a welcoming and inspiring environment for all book enthusiasts. Each of our branches is staffed with knowledgeable and friendly team members ready to assist you in finding the perfect book. Whether you're looking for the latest bestseller, a rare find, or a cozy place to read, Neth BookPoint is your destination. We believe in the power of a rare find, or a cozy place to read, Neth BookPoint is your destination. We believe in the power of reading to transform lives and build community. Join us at one reading to transform lives and build community. Join us at one of our branches or explore our offerings online. We're here to support your reading journey and make your book shopping experience enjoyable and fulfilling.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
