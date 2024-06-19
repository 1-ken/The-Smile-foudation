import React from "react";
import logo from "./logo.png";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-[#FF0000] border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className="h-[100px] cursor-pointer rounded-full"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer py-3 font-bold text-2xl  text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-white"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/about-us")}
              className={`cursor-pointer py-3 font-bold text-2xl  text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/about-us") && "text-black border-b-white"
              }`}
            >
              About us
            </li>
            <li
              onClick={() => navigate("/programs")}
              className={`cursor-pointer py-3 font-bold text-2xl  text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/programs") && "text-black border-b-white"
              }`}
            >
              Programs
            </li>
            <li
              onClick={() => navigate("/donate")}
              className={`cursor-pointer py-3 font-bold text-2xl  text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/donate") && "text-black border-b-white"
              }`}
            >
              Donate
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
