import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { SlSocialDribbble, SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { Link } from "react-router-dom";
import CompanyLogo from '../assets/Logos/Companylogo.svg'

const FooterZipsy = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="bg-[#262626]">
      <div className="max-w-[1640px]  mx-auto p-2 text-white ">
        <div className="px-8 md:hidden mt-20 mb-20 ">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>
            <h2 className=" mt-5 flex gap-2">
              Let’s talk{" "}
              <span>
                <FaLocationArrow />
              </span>
            </h2>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="mt-4 ">
              <Link to="/works">
              <h2 className="p-1">Works</h2>
              </Link>
              <Link to="/about">
              <h2 className="p-1">About us</h2>
              </Link>
              <Link to="/careers">
              <h2 className="p-1">Careers</h2>
              </Link>
              <Link to="/services">
              <h2 className="p-1">Services</h2>
              </Link>
              </div>
              <div className="mt-4">
              <Link to='/privacy'>
              
              <h2 className="p-1">Privacy Policy</h2>
              </Link>
              <Link to="/terms">
              <h2 className="p-1">Terms of Service</h2>
              </Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between md:justify-around mt-8">
                <span className="border p-2">
                  <SlSocialFacebook />
                </span>
                <span className="border p-2">
                  <SlSocialTwitter />
                </span>
                <span className="border p-2">
                  <SlSocialInstagram />
                </span>
                <span className="border p-2">
                  <SlSocialLinkedin />
                </span>
                <span className="border p-2">
                  <SlSocialDribbble />
                </span>
              </div>
              <div>
                <h1 className="text-sm mt-5 md:text-center">
                  © 2023 Lym, Inc. All rights reserved
                </h1>
              </div>
              <div>
              <img src={CompanyLogo} className="w-12 h-12" alt="footer-logo"  />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-around mt-20 mb-20">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>
            <h2 className=" mt-10 flex gap-2">
              Let’s talk{" "}
              <span>
                <FaLocationArrow />
              </span>
            </h2>
          </div>
          <div className="flex justify-around gap-36">
            <div className=" ">
              <Link to="/works">
              <h2 className="p-1">Works</h2>
              </Link>
              <Link to="/about">
              <h2 className="p-1">About us</h2>
              </Link>
              <Link to="/careers">
              <h2 className="p-1">Careers</h2>
              </Link>
              <Link to="/services">
              <h2 className="p-1">Services</h2>
              </Link>
            </div>
            <div className="">
              <Link to='/privacy'>
              
              <h2 className="p-1">Privacy Policy</h2>
              </Link>
              <Link to="/terms">
              <h2 className="p-1">Terms of Service</h2>
              </Link>
              {/* <h2 className="p-1">Customer Terms</h2>
              <h2 className="p-1">Designer Terms</h2> */}
            </div>
          </div>
        </div>

        <div className=" hidden md:flex justify-around mt-10 mb-20">
          <div className="flex items-center">
            <img src={CompanyLogo} className="w-12 h-12" alt="footer-logo"  />
            <h1>© 2023 lym, Inc. All rights reserved</h1>
          </div>
          <div className="flex items-center gap-12">
          <span className="border p-2 cursor-pointer hover:text-blue-800">
                  <SlSocialFacebook />
                </span>
                <span className="border p-2 cursor-pointer hover:text-blue-300">
                  <SlSocialTwitter />
                </span>
                <span className="border p-2 cursor-pointer hover:text-red-200">
                  <SlSocialInstagram />
                </span>
                <span className="border p-2 cursor-pointer hover:text-blue-500">
                  <SlSocialLinkedin />
                </span>
                <span className="border p-2 cursor-pointer hover:text-red-500">
                  <SlSocialDribbble  />
                </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterZipsy;
