import React from "react";
import { Link } from "react-router-dom";
const HowweThinkdhn = () => {
  return (
    <div id="howethink" className="bg-[#F8FAFC] overflow-hidden ">

    <div className="max-w-[1640px]  mx-auto p-4 font-helvetica  md:text-xl bg-[#F8FAFC] ">
        <div className="lg:mt-20">

      <div className="md:hidden">
        <div className="flex justify-between align-middle items-center">
          <h1 className="mt-10 ">How we think</h1>
          <img className=" hover:animate-spin w-10" src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187633/assets/assets/asset_61_jtdinc.svg" alt="" style={{ animationDuration: '3s' }} />
        </div>

        <div className="text-[25px] mt-5 some-element ">
          <h1>We're challengers at heart and</h1>
          <h1>builders by nature.</h1>
        </div>
        <div className="text-[25px] some-element  xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10  text-[#7b7b7b] mt-14  mb-4">
        <h1>LYM Data Labs is a collective brain,
        formed by a diverse group of
        people who bring years of
        experience, dedication and
        commitment to our daily work.</h1>
      </div>
        <Link to="/culture">

<div className="flex   group hover:cursor-pointer gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[560px]  lg:mb-7">
<h1 className="p-2 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all ">
Dive into our culture
</h1>
<h1 className="p-2 mt-10 flex items-center rounded-full w-[35px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white">
<img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_49_lb3zxr.svg" />
</h1>
</div>

</Link>
      </div>

      <div className="hidden md:block mt-20 relative">
        <div className="flex justify-between xl:px-5  align-middle items-center">
          <h1>How we think</h1>
          <h1 className="text-[35px]  xl:text-[42px]  ml-[-20px] some-element  xl:w-[610px]  lg:w-[600px] leading-10">We're challengers at heart and <br />builders by nature.</h1>
          <img className="hover:animate-spin" src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187633/assets/assets/asset_61_jtdinc.svg" alt="" style={{ animationDuration: '3s' }} />
        </div>



      <div className="text-[40px] w-[600px]  lg:ml-56 xl:mx-auto  xl:text-[40px] xl:w-[570px] mx-auto text-left   leading-10  text-[#7b7b7b]  mt-20 mb-16 lg:mb-10">
        <h1>LYM Data Labs is a collective brain,
        formed by a diverse group of
        people who bring years of
        experience, dedication and
        commitment to our daily work</h1>

      </div>

      <div className="flex      gap-4 w-[600px] lg:ml-56 xl:mx-auto  xl:w-[570px] mx-auto lg:mb-7">
<Link  to="/culture">
        <div className="flex  group  gap-2 ">

  <h1 className="p-2 flex border  items-center justify-center mt-10 rounded-full w-[220px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all duration-300 transform group-hover:-translate-x-[-56px]">
    Dive into our culture
  </h1>
  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white">
    <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_49_lb3zxr.svg" />
  </h1>
  </div>

</Link>
</div>


<img className="hidden xl:flex absolute  z-0 top-[240px] left-0 transform -translate-x-[160px] -translate-y-1/2 scale-150" src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187629/assets/assets/lines2_tfqf81.png" alt="img" />



      </div>
      </div>

    </div>
    </div>

  );
};

export default HowweThinkdhn;
