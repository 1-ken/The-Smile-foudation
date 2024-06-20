import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mt-6 bg-red-200">
      <footer className="bottom-0 w-full bg-[#FF0000] text-white py-4 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-24">
            <div className="text-center md:text-left">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">NAVIGATION</h1>
              <ul className="mt-2 space-y-1 text-base md:text-lg lg:text-xl">
                <li className="text-[#FFD700]">Home</li>
                <li className="text-[#FFD700]">About Us</li>
                <li className="text-[#FFD700]">Donate</li>
                <li className="text-[#FFD700]">Contact</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Contact Us</h1>
              <p className="mt-2 text-base md:text-lg lg:text-xl">
                For all inquiries use contact@thislooksgreat.com or head over to
                <br className="hidden md:block" />
                our Contact page and send us a message
              </p>
              <div className="flex justify-center md:justify-start gap-x-4 mt-4">
                <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
                <FaFacebookF className="w-6 h-6 md:w-8 md:h-8" />
                <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
                <FaXTwitter className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}