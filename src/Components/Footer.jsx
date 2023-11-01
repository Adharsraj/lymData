import React, { useState } from "react";
import arrow from '../assets/Images/right_arrow.png';
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Footer= () => {
  const scale = 0.9; 
  
  return (
    <div className="max-w-[1640px] mx-auto bg-black text-white md:p-3 md:pt-7">
      <div className="md:hidden   md:items-center" >
        <div className="px-7 pt-7 some-ele">
      <h1 className="font-light text-[32px]">
        Get started now!
      </h1>
      <h1 className="">
I t takes less than a minute of your time.
      </h1>

        </div>

      {/* <div className='h-10 w-[300px]  mx-auto text-center flex justify-center items-center  pt-10 pb-14'>
  <button className="bg-blue-600 flex text-white w-[180px] p-3 gap-4 whitespace-nowrap some-ele">
  Request a quote
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <g transform={`scale(${scale})`}>
        <path
          className="fill-current text-white"
          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5"
          data-name="Right"
        />
      </g>
    </svg>
  </button>
</div> */}

<div className="flex  group hover:cursor-pointer gap-2 w-[300px] lg:ml-72 xl:mx-auto  xl:w-[230px]  lg:mb-7 items-center justify-center">
                <h1 className="p-2 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-blue-600 text-white transition-all border transform hover:translate-x-12">
                Request a quote
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[35px] bg-blue-600 text-white border fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <g transform={`scale(${scale})`}>
        <path
          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5"
          data-name="Right"
        />
      </g>
    </svg>
                </h1>
              </div>
      </div>

      <div className="hidden lg:hidden md:flex justify-between gap-[100px] px-10"> 
      <div className="some-ele font-light">
      <h1 className="md:text-[40px]">
        Get started now!
      </h1>
      <h1 className="md:text-[20px]">
It takes less than a minute of your time.
      </h1>

        </div>
<div className="flex  group hover:cursor-pointer gap-2 w-[200px]">
                <h1 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[300px] bg-black text-white transition-all border transform hover:translate-x-16">
                Request a quote
                </h1>
                <h1 className="p-3 mt-10 flex items-center rounded-full w-[60px] bg-black text-white border fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <g transform={`scale(${scale})`}>
        <path
        className="w-[760px]"
          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5"
          data-name="Right"
        />
      </g>
    </svg>
                </h1>
              </div>
      </div>


      <div className="hidden md:hidden lg:flex justify-between border gap-[200px] "> 
      <div className="some-ele font-light px-24">
      <h1 className="lg:text-[50px]">
        Get started now!
      </h1>
      <h1 className="lg:text-[20px]">
It takes less than a minute of your time.
      </h1>

        </div>
<div className="flex  group hover:cursor-pointer gap-2 pr-[5%] border w-[200px] xl:mx-auto  xl:w-[290px]  lg:mb-7">
                <h1 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[300px] bg-black text-white transition-all border transform hover:translate-x-16">
                Request a quote
                </h1>
                <h1 className="p-3 mt-10 flex items-center rounded-full w-[60px] bg-black text-white border fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <g transform={`scale(${scale})`}>
        <path
        className="w-[960px]"
          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5"
          data-name="Right"
        />
      </g>
    </svg>
                </h1>
              </div>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-3 px-10 lg:px-16 lg:grid-cols-4 gap-5 lg:justify-between list-none md:p-5 some-ele font-light">
        <div className="lg:px-10">
          <ul className="md:py-10 md:text-[24px] py-5 text-[20px]">Company</ul>
          <li className="">About</li>
          <li className="md:pt-1 pt-1">Services</li>
          <li className="md:pt-1 pt-1">Industries</li>
          <li className="md:pt-1 pt-1">Works</li>
          <li className="md:pt-1 pt-1">Careers</li>
          <li className="md:pt-1 pt-1">Contact</li>
        </div>
        <div>
          <ul className="md:py-10 md:text-[24px] py-5 text-[16px]">Services</ul>
          <li className="">Web Development</li>
          <li className="md:pt-1 pt-1 ">Mobile App Development</li>
          <li className="md:pt-1 pt-1 ">Performance Marketing</li>
          <li className="md:pt-1 pt-1 ">Custom Software Development</li>
          <li className="md:pt-1 pt-1 ">Data Engineering</li>
          <li className="md:pt-1 pt-1">Metaverse</li>
        </div>
        <div>
          <ul className="md:py-10 md:text-[24px] py-5 text-[20px]">Insights</ul>
          <li className="">The Power of Predictive Analytics</li>
          <li className="md:pt-1 pt-1 whitespace-nowrap">Data Privacy in the Digital Age</li>
          <li className="md:pt-1 pt-1 whitespace-nowrap">Data Analytics for E-commerce</li>
        </div>
        <div  className="hidden lg:block">
    <h1 className="md:py-10 md:text-[24px]">Connect</h1>
    <div className="flex flex-col gap-1">
<div className="grid grid-cols-2">
    <h1>Email</h1>
    <h1>:  info@lymdata.com</h1>
    <h1 className="md:pt-1">General Enquiry</h1>
    <h1 className="md:pt-1">:  +91 9446 054 134</h1>

    <h1 className="md:pt-1">Sales Enquiry</h1>
    <h1 className="md:pt-1">:  +91 9446 054 134</h1>

    <h1 className="md:pt-1">HR Enquiry</h1>
    <h1 className="md:pt-1">:  +91 7034 588 388</h1>

    {/* <h1 className="md:pt-1">Whatsapp</h1>
    <h1 className="md:pt-1">:+91 8606 483 399</h1> */}



</div>

    </div>

    {/* <div>
      icons 
    </div> */}

 

      </div>
      </div>
      <div  className="lg:hidden some-ele" >
    <h1 className="text-[20px] pt-7 px-5">Connect</h1>
    <div className="flex flex-col gap-0 ">
<div className="grid grid-cols-2 px-5 pt-3">
<h1>Email</h1>
    <h1>:info@lymdata.com</h1>
    <h1 className="pt-1">General Enquiry</h1>
    <h1 className="pt-1">: +91 9446 054 134</h1>

    <h1 className="pt-1">Sales Enquiry</h1>
    <h1 className="pt-1">: +91 9446 054 134</h1>

    <h1 className="pt-1">HR Enquiry</h1>
    <h1 className="pt-1">: +91 7034 588 388</h1>

    {/* <h1 className="pt-1">Whatsapp</h1>
    <h1 className="pt-1">:+91 8606 483 399</h1> */}

</div>
<div className="flex lg:gap-3 pt-14 gap-5 px-5">
          <h3 className="pb-1 text-[#c1bfbf] hover:text-white">Follow us :</h3>
          <ul>
            <li>
                    <div className="flex gap-9 lg:gap-10">
                      
                      <span
                        onClick={() =>
                          window.open(
                            "https://www.facebook.com/lymdatalabs/",
                            "_blank"
                          )
                        }
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full"
                      >
                        <SlSocialFacebook />
                      </span>
                      <span
                        onClick={() =>
                          window.open("https://twitter.com/lymdata", "_blank")
                        }
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full"
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
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full "
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
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full"
                      >
                        <SlSocialLinkedin />
                      </span>
                    </div>
                  </li>
            </ul>
            </div>

    </div>

    
      </div>
      
<div className="lg:hidden pt-10 some-ele">
    <div className=" text-center">
    Privacy Policy|Terms & Conditions
    </div>
    <div className="w-[300px] mx-auto text-center pt-5 pb-5">
    LYMDATA © 2023 All rights reserved
    </div>

</div>
<div className="hidden lg:flex justify-around lg:pt-10 some-ele">
  <h1 className="font-light">LYMDATA © 2023 All rights reserved</h1>
  <h1 className="font-light">Privacy Policy | Terms & Conditions</h1>
  <div className="flex lg:gap-3">
          <h3 className="pb-1 text-[#c1bfbf] hover:text-white">Follow us :</h3>
          <ul>
            <li>
                    <div className="flex gap-2 lg:gap-10">
                      
                      <span
                        onClick={() =>
                          window.open(
                            "https://www.facebook.com/lymdatalabs/",
                            "_blank"
                          )
                        }
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full"
                      >
                        <SlSocialFacebook />
                      </span>
                      <span
                        onClick={() =>
                          window.open("https://twitter.com/lymdata", "_blank")
                        }
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full"
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
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full "
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
                        className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full"
                      >
                        <SlSocialLinkedin />
                      </span>
                    </div>
                  </li>
            </ul>
            </div>
</div>
    </div>
  );
};

export default Footer;