import React from "react";
import donationImage from "./donation.jpg";

export default function Home() {
  return (
    <>
      <div
        className="bg-center bg-cover h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full max-w-screen mx-auto overflow-hidden rounded-sm m-auto"
        style={{ backgroundImage: `url(${donationImage})` }}
      >
        <div className="ml-[17rem]">
          <p>let your radiant smile spread god vibes all around</p>
          <div className="flex space-x-20 ">
            <button className=" bg-red-600 text-[#FFD700] px-7 py-2 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
              volunteer
            </button>
            <button className=" bg-red-600 text-[#FFD700] px-7 py-2 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
              donate
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[17rem] mr-[15rem]">
        <h1>MISSION</h1>
        <p>
          Our mission is to bring smiles to those who are struggling and to fill
          hearts with hope, showing them there is more to life than sorrow. We
          provide physical and mental support to families, educate the youth,
          and donate resources to benefit the less fortunate.
        </p>
      </div>
    </>
  );
}
