import React from "react";
import star from "../../assets/assets/asset 61.svg";
import arrowright from "../../assets/assets/asset 60.svg";
import imgright from "../../assets/assets/lines2.png";

const Approach = () => {
   
  return (
   <>

<div className="max-w-[1640px]   mx-auto p-4 font-dm  md:text-xl  ">
    <div className="lg:mt-20">

  <div className="md:hidden">
    <div className="flex justify-between align-middle items-center">
      <h1>approach</h1>
      <img className="hover:animate-spin" src={star} alt="" style={{ animationDuration: '3s' }} />
    </div>
{/* 
    <div className="text-[25px] hidden leading-10  ">
      <h1>We're challengers at heart and</h1>
      <h1>builders by nature.</h1>
    </div> */}
    <div className="text-[25px]  xl:text-[82px] xl:w-[560px] mx-auto text-left   leading-10  text-[#000]  mt-10  mb-16">
    <h1>Our offering has evolved
as a testament of theas a testament of the
work we have completedwork we have completed
and delivered for moreand delivered for more
than 150 companies of all than 150 companies of allkinds and sizes.</h1>

  </div>
  </div>

  <div className="flex md:hidden group hover:cursor-pointer gap-4 w-[200px] xl:w-[560px] md:mx-auto md:w-[600px">
<h1 className="p-1 md:mt-10 text-white rounded-full w-[220px] bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
Dive into our culture
</h1>
<h1 className="p-2 md:mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
<img src={arrowright}  />
</h1>
</div>

  <div className="hidden md:block mt-20 relative">
    <div className="flex justify-between xl:px-16 lg:px-5  align-middle items-center">
      <h1 className="text-sm">approach</h1>
      <h1 className="text-[38px] xl:text-[42px] hidden w-[600px] leading-10">We're challengers at heart and <br />builders by nature.</h1>
      <img className="hover:animate-spin" src={star} alt="" style={{ animationDuration: '3s' }} />
    </div>

  

  <div className="text-[42px] lg:mt-[-40px] lg:text-[47px]  w-[600px] xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10   text-[#000]   mb-16">
    <h1 className="lg:text-6xl  lg:w-[670px] ">Our offering has evolved
as a testament of work we have completed
and delivered for  more
than 150 companies of allkinds and sizes.</h1>

  </div>
  <div className="flex group hover:cursor-pointer gap-4 w-[600px] xl:w-[560px] mx-auto">
<h1 className="p-2 mt-10 flex justify-center rounded-full w-[220px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
Lets build together
</h1>
<h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
<img src={arrowright}  />
</h1>
</div>
<img className="hidden xl:flex absolute z-0 top-[240px] left-0 transform -translate-x-[160px] -translate-y-1/2 scale-110 opacity-70 filter invert" src={imgright} alt="img" />



  </div>
  </div>

</div>

   </>
  );
};

export default Approach;
