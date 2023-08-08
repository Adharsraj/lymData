import React from "react";
import {
  SlSocialDribbble,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
useNavigate;
const FooterZipsy = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#000]">
      <div className="max-w-[1640px]  mx-auto p-2 text-white overflow-hidden ">
        <div className="px-8 md:hidden mt-20 mb-20 ">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>

            <div className="py-10">
              <input
                type="email"
                placeholder="email"
                className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-full px-2 focus:outline-none"
              />
              {/* <button className="text-white bg-gradient-to-r from-indigo-400 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Subscribe
              </button> */}

              <div className="flex xl:gap-1   gap-4 w-full md:w-[200px] items-center xl:w-[560px]">
                <div className="flex  group/item hover:cursor-pointer ">
                  <h1 className="p-4 xl:w-[160px] text-base   rounded-full w-[100px] flex items-center h-10 bg-gradient-to-r from-indigo-400 to-cyan-400 hover:bg-gradient-to-br  transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]">
                    Subscribe
                  </h1>
                  <h1 className="p-4 rounded-full  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-gradient-to-r from-indigo-400 to-cyan-400 hover:bg-gradient-to-br ">
                    <img
                      className="lg:w-56"
                      src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419160/LYMDATALABS/Pages/asset_60_lqw1hz_1_pb14gi.svg"
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="mt-4 ">
                <Link to="/works">
                  <h2 className="p-1 text-[#aea8a8] hover:text-white">Works</h2>
                </Link>
                <Link to="/about">
                  <h2 className="p-1 text-[#aea8a8] hover:text-white">
                    About us
                  </h2>
                </Link>
                <Link to="/careers">
                  <h2 className="p-1 text-[#aea8a8] hover:text-white">
                    Careers
                  </h2>
                </Link>
                <Link to="/services">
                  <h2 className="p-1 text-[#aea8a8] hover:text-white">
                    Services
                  </h2>
                </Link>
              </div>
              <div className="mt-4">
                <Link to="/privacy">
                  <h2 className="p-1 text-[#aea8a8] hover:text-white">
                    Privacy Policy
                  </h2>
                </Link>
                <Link to="/terms">
                  <h2 className="p-1 text-[#aea8a8] hover:text-white">
                    Terms of Service
                  </h2>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between md:justify-around mt-8">
                <span
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/lymdatalabs/",
                      "_blank"
                    )
                  }
                  className="hover:border-blue-800 border p-2 cursor-pointer hover:text-blue-800"
                >
                  <SlSocialFacebook />
                </span>
                <span
                  onClick={() =>
                    window.open("https://twitter.com/lymdata", "_blank")
                  }
                  className="hover:border-blue-300  border p-2 cursor-pointer hover:text-blue-300"
                >
                  <SlSocialTwitter />
                </span>
                <span
                  onClick={() =>
                    window.open(
                      "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                      "_blank"
                    )
                  }
                  className="hover:border-red-200 border p-2 cursor-pointer hover:text-red-200"
                >
                  <SlSocialInstagram />
                </span>
                <span
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/lymdata-labs",
                      "_blank"
                    )
                  }
                  className="hover:border-blue-500 border p-2 cursor-pointer hover:text-blue-500"
                >
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
                  src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
                  className="w-12 h-12"
                  alt="footer-logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-around mt-10 ">
          <div>
            <h1 className="text-2xl md:text-4xl w-[250px] md:w-full mx-auto">
              Design capital from <br /> obscurity to scale
            </h1>

            <div className="py-10 flex xl:gap-1   gap-4 w-full  md:w-[200px] items-center xl:w-[560px]">
              <input
                type="email"
                placeholder="email"
                className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-full px-2 focus:outline-none"
              />

              <div className="flex  group/item hover:cursor-pointer ">
                <h1 className="p-4 xl:w-[110px] text-base   rounded-full w-[120px] flex items-center h-10 bg-gradient-to-r from-indigo-400 to-cyan-400 hover:bg-gradient-to-br transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]">
                  Subscribe
                </h1>
                <h1 className="p-4 rounded-full  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-gradient-to-r from-indigo-400 to-cyan-400 hover:bg-gradient-to-br">
                  <img
                    className="lg:w-56"
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"
                    alt="Arrow Right"
                  />
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around gap-36">
            <div className=" ">
              <Link to="/works">
                <h2 className="p-1 text-[#aea8a8] hover:text-white">Works</h2>
              </Link>
              <Link to="/about">
                <h2 className="p-1 text-[#aea8a8] hover:text-white">
                  About us
                </h2>
              </Link>
              <Link to="/careers">
                <h2 className="p-1 text-[#aea8a8] hover:text-white">Careers</h2>
              </Link>
              <Link to="/services">
                <h2 className="p-1 text-[#aea8a8] hover:text-white">
                  Services
                </h2>
              </Link>
            </div>
            <div className="">
              <Link to="/privacy">
                <h2 className="p-1  text-[#aea8a8] hover:text-white">
                  Privacy Policy
                </h2>
              </Link>
              <Link to="/terms">
                <h2 className="p-1 text-[#aea8a8] hover:text-white">
                  Terms of Service
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex justify-around ">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
              className="w-12 h-12"
              alt="footer-logo"
            />
            <h1 className="text-sm">© 2023 lym, Inc. All rights reserved</h1>
          </div>
          <div className="flex items-center gap-12">
            <span
              onClick={() =>
                window.open("https://www.facebook.com/lymdatalabs/", "_blank")
              }
              className="hover:border-blue-800 border p-2 cursor-pointer hover:text-blue-800"
            >
              <SlSocialFacebook />
            </span>
            <span
              onClick={() =>
                window.open("https://twitter.com/lymdata", "_blank")
              }
              className="hover:border-blue-300  border p-2 cursor-pointer hover:text-blue-300"
            >
              <SlSocialTwitter />
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                  "_blank"
                )
              }
              className="hover:border-red-200 border p-2 cursor-pointer hover:text-red-200"
            >
              <SlSocialInstagram />
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/lymdata-labs",
                  "_blank"
                )
              }
              className="hover:border-blue-500 border p-2 cursor-pointer hover:text-blue-500"
            >
              <SlSocialLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterZipsy;
