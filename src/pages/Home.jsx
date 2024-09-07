import React from "react";
import donationImage from "./donation.jpg";

export default function Home() {
  return (
    <div className="m-4 relative">
      <div className="bg-center bg-cover h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] max-w-screen mx-auto overflow-hidden rounded-lg">
        <img className="object-cover shadow-lg w-full h-full" src={donationImage} alt="donation" />
        <div className="absolute inset-x-0 top-4 transform text-center px-4 md:px-8">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#FFF8DC] font-bold">
            Let your radiant smile
          </p>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#FFF8DC] font-bold">
            spread good vibes all around
          </p>
        </div>
        <div className="absolute inset-x-0 top-20 md:top-24 lg:top-28 transform flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 px-4 md:px-8">
          <a href="https://forms.gle/P2fa57oLKhxAhtMEA" target="_blank" rel="noopener noreferrer"><button className="bg-red-600 text-[#FFD700] px-7 py-2 text-sm font-medium uppercase rounded shadow-md hover:bg-red-900 transition duration-150 ease-in-out hover:shadow-lg">
            Volunteer
          </button></a>
          
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 px-4 bg-[#FFF8DC] shadow-lg rounded-sm">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#000000] font-bold text-center">MISSION</h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-black-700 text-center">
          Our mission is to bring smiles to those who are struggling and to fill
          hearts with hope, showing them there is more to life than sorrow. We
          provide physical and mental support to families, educate the youth,
          and donate resources to benefit the less fortunate.
        </p>
      </div>
    </div>
  );
}