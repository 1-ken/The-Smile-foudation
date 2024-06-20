import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className="mt-6 bg-red-200">
        <footer className="bottom-0 w-full bg-[#FF0000] text-white text-center py-4 z-50">
          <div className="flex items-center justify-center space-x-[10rem]">
            <div>
              <h1>NAVIGATION</h1>
              <ul>
                <li>Home</li>
                <li>ABOUT US</li>
                <li> DONATE</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1>Contact Us</h1>
              <p>
                For all inquiries use contact@thislooksgreat.com or head over to <br></br>
                our Contact page and send us a message
              </p>
              <div className="flex gap-x-2">
                <FaWhatsapp/>
                <FaFacebookF/>
                <FaInstagram/>
                <FaXTwitter/>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
