import React from "react";
import { SlSocialDribbble, SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { Link } from "react-router-dom";

const FooterZipsy = () => {
  
  return (
    <div className="bg-[#262626]">
      <div className="max-w-[1640px]  mx-auto p-2 text-white ">
        <div className="px-8 md:hidden mt-20 mb-20 ">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>
           
            
          <div className="py-10">
          <input type="email" placeholder='user@lym.com' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
          <button className='bg-gradient-to-r from-indigo-400 to-cyan-400 p-2 font-[Poppins] rounded-md text-white md:w-auto w-full'>Subscribe</button>
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
              <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg" className="w-12 h-12" alt="footer-logo"  />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-around mt-20 mb-20">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>
          
          <div className="py-10">
          <input type="email" placeholder='user@lym.com' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
          <button className='bg-gradient-to-r from-indigo-400 to-cyan-400 p-2 font-[Poppins] rounded-md text-white md:w-auto w-full'>Subscribe</button>
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
              <Link to='/privacy'>
              
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
            <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg" className="w-12 h-12" alt="footer-logo"  />
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
