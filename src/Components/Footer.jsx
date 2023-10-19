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

  return (
    <div className="max-w-[1640px] mx-auto bg-black text-white md:p-10">
      <div className="md:hidden   md:items-center" >
        <div className="">
      <h1>
        Get started now
      </h1>
      <h1>
I t takes less than a minute of your time.
      </h1>

        </div>

      <div className='h-10 w-[300px]  mx-auto text-center flex justify-center items-center  bg-blue-600'>
  <button className="bg-black flex text-white font-semibold border border-gray-400 w-[210px] p-3 gap-4">
  Request a quote
    <img
      className="w-[16px] pt-1"
      src={arrow}
      alt="Arrow Right"
    />
  </button>
</div>
      </div>
      <div className=" flex justify-around"> 
      <div className="">
      <h1 className="md:text-[50px]">
        Get started now!
      </h1>
      <h1 className="md:text-[20px]">
I t takes less than a minuteof your time.
      </h1>

        </div>
        <div className=''>
  <button className="bg-black flex text-white border border-gray-400 w-[150px] p-3 gap-4">
    Request a quote
    {/* <img
      className="w-[16px] pt-1 bg-black text-white"
      src={arrow}
      alt="Arrow Right"
    /> */}
  </button>
</div>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-3 px-10 lg:px-16 lg:grid-cols-4 gap-5 list-none md:p-5">
        <div>
          <ul className="md:py-10 md:text-bold md:text-[24px]">Company</ul>
          <li className="">About</li>
          <li className="md:pt-1">Services</li>
          <li className="md:pt-1">Industries</li>
          <li className="md:pt-1">Works</li>
          <li className="md:pt-1">Careers</li>
          <li className="md:pt-1">Contact</li>
        </div>
        <div>
          <ul className="md:py-10 md:text-bold md:text-[24px]">Services</ul>
          <li className="">Branding</li>
          <li className="md:pt-1">Experience Design</li>
          <li className="md:pt-1">Technology</li>
          <li className="md:pt-1">Digital Marketing</li>
        </div>
        <div>
          <ul className="md:py-10 md:text-bold md:text-[24px]">Other</ul>
          <li className="">Partnership</li>
          <li className="md:pt-1">Awards and Recognitions</li>
          <li className="md:pt-1">Blogs</li>
          <li className="md:pt-1">Resource</li>
          <li className="md:pt-1">Augmentation</li>
          <li className="md:pt-1">Testimonials</li>
          <li className="md:pt-1">Our Clients</li>
          <li className="md:pt-1">Submit feedback to our CEO</li>
        </div>
        <div  className="hidden lg:block">
    <h1 className="md:py-10 md:text-bold md:text-[24px]">Connect</h1>
    <div className="flex flex-col gap-1">
<div className="grid grid-cols-2">
    <h1>Email</h1>
    <h1>:info@webandcrafts.com</h1>
    <h1 className="md:pt-1">General Enquiry</h1>
    <h1 className="md:pt-1">:+91 480 2733 111</h1>

    <h1 className="md:pt-1">Sales Enquiry</h1>
    <h1 className="md:pt-1">:+91 480 2733 555</h1>

    <h1 className="md:pt-1">HR Enquiry</h1>
    <h1 className="md:pt-1">:+91 480 2733 999</h1>

    <h1 className="md:pt-1">Whatsapp</h1>
    <h1 className="md:pt-1">:+91 8606 483 399</h1>



</div>

    </div>

    {/* <div>
      icons 
    </div> */}

 

      </div>
      </div>
      <div  className="lg:hidden" >
    <h1>Connect</h1>
    <div className="flex flex-col gap-2 ">
<div className="grid grid-cols-2">
    <h1>EMAIL</h1>
    <h1>Info@</h1>

</div>
<div className="grid grid-cols-2">
    <h1>EMAIL</h1>
    <h1>Info@</h1>

</div>

    </div>

    
      </div>
      <div className="lg:hidden">
      icons 
    </div>
<div className="lg:hidden ">
    <div className=" text-center">
      privacypolicy | TERMS
    </div>
    <div className="w-[300px] mx-auto text-center">
All rights reserved
    </div>

</div>
<div className="hidden lg:flex justify-around md:pt-5">
  <h1>WAC © 2023 All rights reserved</h1>
  <h1>Privacy Policy|Terms & Conditions</h1>
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