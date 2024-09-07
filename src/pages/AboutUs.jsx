import React from 'react';
import Photo from "./in_lifting_others_we_rise.jpg";
import Founder from "./founder.jpg";
import coFounder from "./co-founder.jpg";

export default function AboutUs() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="relative mt-5 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] max-w-screen mx-auto overflow-hidden rounded-sm">
          <img 
            src={Photo} 
            alt="In Lifting Others We Rise" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#FFF8DC] shadow-lg rounded-sm mt-4 max-w-6xl mx-auto p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FF0000] font-bold text-center mt-8">Mission</h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 text-center">
            Our mission is to bring smiles to those who are struggling and to fill hearts
            with hope, showing them there is more to life than sorrow. We provide physical and mental
            support to families, educate the youth, and donate resources to benefit the less fortunate.
          </p>
        </div>
        <div className="bg-[#FFF8DC] shadow-lg rounded-sm mt-4 max-w-6xl mx-auto p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FF0000] font-bold text-center mt-8">Vision</h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 text-center">
            The Smiles Foundation's vision is to create a world where there is more joy than sorrow,
            and everyone has access to the resources and support they need to thrive.
            We strive to fill the hearts of those who are struggling with hope, demonstrating that
            there is always more to life than the difficulties they face.
          </p>
        </div>
        <div className="bg-[#FFF8DC] shadow-lg rounded-sm mt-4 max-w-6xl mx-auto p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FF0000] font-bold text-center mt-8">Team</h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 text-center">
            Our team is made up of dedicated individuals who are passionate about making a difference in the community.
          </p>
          <div className="flex justify-center mt-8">
            <ul className="flex gap-6">
              <li>
                <img src={Founder} alt="founder" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-lg" />
                <p className="text-center text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-[#FF0000] font-bold mt-2">Founder</p>
              </li>
              <li>
                <img src={coFounder} alt="co-founder" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-lg" />
                <p className="text-center text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-[#FF0000] font-bold mt-2">Co-Founder</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
