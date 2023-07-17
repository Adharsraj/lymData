import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/Logos/Companylogo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    gsap.from("#logo,#getintouch,#menu", {
      y: -100,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto p-8 font-roboto flex items-center justify-between bg-transparent h-[65px] z-10 fixed top-0  border-black left-0 right-0">
      <div>
        <Link to="/">
          <img
            id="logo"
            className="lg:w-[104px]  lg:h-[80px] md:w-16 w-12 "
            src={CompanyLogo}
            alt="companylogo"
          />
        </Link>
      </div>
      <div className="relative flex items-center p-2">
        {isMenuOpen && (
          <div className="absolute top-[-5px] mt-4 py-2 w-[300px] md:w-[356px] md:h-[310px] bg-white rounded-lg shadow-lg left-[-230px] md:left-[-180px] lg:left-[-180px] md:top-[-8px] lg:top-[-8px] md:text-2xl md:p-4 z-50 p-2 ease-in duration-300">
            <ul>
              <li className="px-4 mt-[-6px] py-2 cursor-pointer text-gray-400">
                menu
              </li>

              <Link to="/about">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                  About
                </li>
              </Link>
              <Link to="/blog">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                  Blogs
                </li>
              </Link>
              <Link to="/careers">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                  Careers
                </li>
              </Link>
              <Link to="/works">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                  Works
                </li>
              </Link>
              <Link to="/contact">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                  Contact
                </li>
              </Link>
            </ul>

            <svg
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              onClick={closeMenu}
            >
              <path
                className="text-gray-600"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
        <div className="flex items-center ease-out duration-300">
          <span
            id="getintouch"
            className="bg-slate-800 hover:cursor-pointer text-white rounded-3xl w-[110px] h-[33px] sm:flex items-center justify-center text-center hidden mr-5 font-dm"
          >
            Get in touch
          </span>
        </div>
        <div onClick={toggleMenu} className="bg-transparent hover:cursor-pointer  group">

        <div  onClick={toggleMenu} className="group  p-2">
  <svg
    id="menu"
    className="w-6 h-6  cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    onClick={toggleMenu}
  >
    <path
      className="text-gray-500 group-hover:text-white "
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 6h20M2 18h20"
    />
  </svg>
</div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
