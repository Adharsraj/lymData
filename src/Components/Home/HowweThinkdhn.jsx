import React from "react";
import star from "../../assets/assets/asset 61.svg";
import arrowright from "../../assets/assets/asset 49.svg";
import imgright from "../../assets/assets/lines2.png";
const HowweThinkdhn = () => {
  return (
    <div className="bg-[#F8FAFC] ">

    <div className="max-w-[1640px]  mx-auto p-4 font-dm  md:text-xl bg-[#F8FAFC] ">
        <div className="lg:mt-20">

      <div className="md:hidden">
        <div className="flex justify-between align-middle items-center">
          <h1>How we think</h1>
          <img src={star} alt="" />
        </div>

        <div className="text-[25px] leading-10  ">
          <h1>We're challengers at heart and</h1>
          <h1>builders by nature.</h1>
        </div>
        <div className="text-[25px]  xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10  text-[#7b7b7b] mt-10  mb-16">
        <h1>LYM™ is a collective brain,
        formed by a diverse group of
        people who bring years of
        experience, dedication and
        commitment to our daily work.</h1>

      </div>
      </div>

      <div className="hidden md:block mt-20 relative">
        <div className="flex justify-between xl:px-5  align-middle items-center">
          <h1>How we think</h1>
          <h1 className="text-[38px] xl:text-[42px]  w-[600px] leading-10">We're challengers at heart and <br />builders by nature.</h1>
          <img className="hover:animate-spin" src={star} alt="" style={{ animationDuration: '3s' }} />
        </div>

      

      <div className="text-[42px] w-[600px] xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10  text-[#7b7b7b]  mt-20 mb-16">
        <h1>LYM™ is a collective brain,
        formed by a diverse group of
        people who bring years of
        experience, dedication and
        commitment to our daily work.</h1>

      </div>

      <div className="flex group hover:cursor-pointer gap-4 w-[600px] xl:w-[560px] mx-auto">
  <h1 className="p-2 mt-10 rounded-full w-[220px] bg-[#ffff05] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
    Dive into our culture
  </h1>
  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#ffff05]">
    <img src={arrowright}  />
  </h1>
</div>
<img className="hidden xl:flex absolute  z-0 top-[240px] left-0 transform -translate-x-[160px] -translate-y-1/2 scale-110" src={imgright} alt="img" />



      </div>
      </div>

    </div>
    </div>

  );
};

export default HowweThinkdhn;
