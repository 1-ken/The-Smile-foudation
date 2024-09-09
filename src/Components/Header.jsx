import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const [pageState, setPageState] = useState();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  });
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
            className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-28 cursor-pointer rounded-full"
          />
        </div>
        <div>
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer py-2 md:py-3 font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-white"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/about-us")}
              className={`cursor-pointer py-2 md:py-3 font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/about-us") && "text-black border-b-white"
              }`}
            >
              About us
            </li>
            <li
              onClick={() => navigate("/programs")}
              className={`cursor-pointer py-2 md:py-3 font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/programs") && "text-black border-b-white"
              }`}
            >
              Programs
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={`cursor-pointer py-2 md:py-3 font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-[#FFD700] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") ||
                (pathMatchRoute("/profile") && "text-black border-b-white")
              }`}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
