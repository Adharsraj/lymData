import React from "react";
import {
  SlSocialDribbble,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowNarrowRight } from 'react-icons/hi';

useNavigate;
const FooterZipsy = () => {
  const navigate = useNavigate();
  return (
    // <div className="bg-[#262626] text-white">

    <div className="bg-[#000]">
      <div className="max-w-[1640px]  mx-auto p-2 text-white overflow-hidden ">
        <div className="px-8 md:hidden mt-20 mb-20 ">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>

            {/* <div className="py-10 flex xl:gap-1 gap-4 w-full mt-5 md:w-[200px] items-center xl:w-[560px]">
              <input
                type="email"
                placeholder="lymdatalabs@gmail.com"
                className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-full px-2 focus:outline-none"
              />
                <h1 className="p-2 cursor-pointer flex items-center rounded-full w-[35px] bg-white text-white">
                <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_49_lb3zxr.svg" />
              </h1>
            </div> */}
            <div className="flex items-center mt-5 mb-5 justify-between border-b border-gray-500 rounded p-4">
      <input
        className="flex-1 bg-transparent text-2xl focus:outline-none"
        type="text"
        placeholder="Your email"
      />
      <div className="ml-[-40px]">
        <HiArrowNarrowRight className="h-6 w-6 text-gray-500" />
      </div>
    </div>
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
                <Link to="/privacy">
                  <h2 className="p-1">Privacy Policy</h2>
                </Link>
                <Link to="/terms">
                  <h2 className="p-1">Terms of Service</h2>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between md:justify-around mt-8">
              <span
      onClick={() => window.open('https://www.facebook.com/lymdatalabs/', '_blank')}
      className="border p-2 cursor-pointer hover:text-blue-800"
    >
      <SlSocialFacebook />
    </span>
            <span
                  onClick={() => window.open('https://twitter.com/lymdata', '_blank')}

            className="border p-2 cursor-pointer hover:text-blue-300">
              <SlSocialTwitter />
            </span>
            <span
                  onClick={() => window.open('https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==', '_blank')}

            className="border p-2 cursor-pointer hover:text-red-200">
              <SlSocialInstagram />
            </span>
            <span
                  onClick={() => window.open('https://www.linkedin.com/company/lymdata-labs', '_blank')}

            className="border p-2 cursor-pointer hover:text-blue-500">
              <SlSocialLinkedin />
            </span>
              </div>
              <div>
                <h1 className="text-sm mt-5 md:text-center">
                  © 2023 Lym, Inc. All rights reserved
                </h1>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg"
                  className="w-12 h-12"
                  alt="footer-logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-around mt-20 mb-20">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>

            <div className="flex items-center mt-10 mb-5 justify-between border-b border-gray-500 rounded p-4">
      <input
        className="flex-1 bg-transparent text-2xl focus:outline-none"
        type="text"
        placeholder="Your email"
      />
      <div className="">
        <HiArrowNarrowRight className="h-6 w-6 text-gray-500" />
      </div>
    </div>
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
              <Link to="/privacy">
                <h2 className="p-1">Privacy Policy</h2>
              </Link>
              <Link to="/terms">
                <h2 className="p-1">Terms of Service</h2>
              </Link>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex justify-around mt-10 mb-20">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg"
              className="w-12 h-12"
              alt="footer-logo"
            />
            <h1>© 2023 lym, Inc. All rights reserved</h1>
          </div>
          <div className="flex items-center gap-12">
          <span
      onClick={() => window.open('https://www.facebook.com/lymdatalabs/', '_blank')}
      className="border p-2 cursor-pointer hover:text-blue-800"
    >
      <SlSocialFacebook />
    </span>
            <span
                  onClick={() => window.open('https://twitter.com/lymdata', '_blank')}

            className="border p-2 cursor-pointer hover:text-blue-300">
              <SlSocialTwitter />
            </span>
            <span
                  onClick={() => window.open('https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==', '_blank')}

            className="border p-2 cursor-pointer hover:text-red-200">
              <SlSocialInstagram />
            </span>
            <span
                  onClick={() => window.open('https://www.linkedin.com/company/lymdata-labs', '_blank')}

            className="border p-2 cursor-pointer hover:text-blue-500">
              <SlSocialLinkedin />
            </span>
            {/* <span
                  onClick={() => window.open('https://www.facebook.com', '_blank')}

            className="border p-2 cursor-pointer hover:text-red-500">
              <SlSocialDribbble />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterZipsy;
