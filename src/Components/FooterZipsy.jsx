import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { SlSocialDribbble, SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";

const FooterZipsy = () => {
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
            <div className="flex justify-around">
              <div className="mt-4 ">
                <h3 className="p-1">work</h3>
                <h3 className="p-1">Aboutus</h3>
                <h3 className="p-1">Engagement</h3>
                <h3 className="p-1">Careers</h3>
              </div>
              <div className="mt-4">
                <h3 className="p-1">work</h3>
                <h3 className="p-1">Aboutus</h3>
                <h3 className="p-1">Engagement</h3>
                <h3 className="p-1">Careers</h3>
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
                <h1 className="mt-4"> footer logo</h1>
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
              <h3 className="p-1">work</h3>
              <h3 className="p-1">About us</h3>
              <h3 className="p-1">Engagement</h3>
              <h3 className="p-1">Careers</h3>
            </div>
            <div className="">
              <h3 className="p-1">Privacy Policy</h3>
              <h3 className="p-1">Terms of Service</h3>
              <h3 className="p-1">Customer Terms</h3>
              <h3 className="p-1">Designer Terms</h3>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex justify-around mt-10 mb-20">
          <div className="flex">
            <h1>logo</h1>
            <h1>© 2023 lym, Inc. All rights reserved</h1>
          </div>
          <div className="flex gap-12">
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
