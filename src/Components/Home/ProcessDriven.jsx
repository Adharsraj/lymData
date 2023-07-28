import React from "react";
import { Link } from "react-router-dom";

const ProcessDrivendhn = () => {
 
  return (
    <div className="bg-[#BCBCBC] relative">
      <div className="max-w-[1640px] relative bg-[#BCBCBC]   mx-auto p-4 font-dm  md:text-xl overflow-hidden ">
        <div className="">

        <div className="  flex flex-between">
          <h1 className="md:hidden z-10  text-sm font-mono py-1">Fields of expertise</h1>
          <div className="hidden  md:flex md:flex-col w-[200px] ml-auto mr-16 text-white text-sm">
            <h1 className=" z-10  mt-5 mb-1">
              We are enthusiastic about empowering businesses to build amazing
              user experiences through data-driven design.
            </h1>
            <h1 className="z-10">
              Our strategy centres on utilising data and insights to
              create successfully engage, delight, and convert people.
            </h1>
          </div>
        </div>
        <div className="">
          
  <div
    className=" hidden md:block   absolute top-0 left-0 md:scale-90  md:w-full md:h-full mt-6 z-0"
    style={{
      backgroundImage:
        'url("https://res.cloudinary.com/db5gkedee/image/upload/v1690288787/WhatsApp_Image_2023-07-25_at_6.00.10_PM_wfnksq.jpg")',
      backgroundPosition: 'center',
      opacity: 0.8, 
    }}
  ></div>
  <div
    className=" md:hidden   absolute top-0 left-0 md:scale-90  md:w-full md:h-full mt-6 z-0"
    style={{
      backgroundImage:
        'url("https://res.cloudinary.com/db5gkedee/image/upload/v1690288787/WhatsApp_Image_2023-07-25_at_6.00.10_PM_wfnksq.jpg")',
      backgroundPosition: 'center',
      opacity: 0.8, 
    }}
  ></div>

  {/* Text Content */}
  <div className="relative z-10">
    <div className="hidden md:block text-white">
      <div>
        <h1 className="text-[100px] lg:text-[150px] xl:text-[200px]">
          <span className="lg:text-[135px] xl:text-[180px]">D</span>
          ata
        </h1>
      </div>
      <div className="flex items-center justify-around text-[100px] xl:text-[200px] xl:mt-32 lg:text-[140px] mt-14 lg:mt-20 ">
      <img
              className="lg:w-20 hover:animate-spin"
              src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187633/assets/assets/asset_61_jtdinc.svg"
              alt="imgsmallviewstar "
              style={{ animationDuration: "3s" }}
              />
        <h2>driven</h2>
        <h2>design</h2>
      </div>
    </div>
  </div>
</div>



          <div className="hidden relative   md:flex text-white mt-32 xl:ml-20  justify-between md:items-center w-[600px] xl:w-[900px] lg:mb-16 ">
            <h1 className="cursor-pointer">Fields of expertise </h1>
        <Link to="/services" >
            <div className="flex  xl:gap-1 group gap-4 w-[200px] justify-end md:w-[200px]  items-center xl:w-[560px] ">
              <h1 className="p-4  xl:w-[160px] flex text-center items-center justify-center lg:w-[160px] lg:h-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform group-hover:-translate-x-[-56px]">
                What we do
              </h1>
              <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#000]">
                <img className="lg:w-56" src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg" />
              </h1>
            </div>
        </Link>
          </div>

        <div className="md:hidden font-helvetica relative text-white text-6xl">
          <h1>
            <span className="text-6xl">D</span>
            ata
          </h1>
          <div className=" md: items-center flex gap-2 justify-center">
            {/* <img src={star} alt="imgsmallviewstar"  /> */}
            <img
              className="hover:animate-spin w-10"
              src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187633/assets/assets/asset_61_jtdinc.svg"
              alt="imgsmallviewstar "
              style={{ animationDuration: "3s" }}
            />
            <h1>driven</h1>
          </div>
          <h1>design</h1>
        </div>

        <div className=" relative md:hidden md:flex-col w-[200px] mx-auto mr-16 text-white  text-sm">
          <h1 className=" mt-5 w-[200px]  mb-5 py-5">
            We are enthusiastic about empowering businesses to build amazing
            user experiences through data-driven design.
          </h1>
          <h1 className="w-[200px]">
            {" "}
            Our strategy centres on utilising data and insights to
            create successfully engage, delight, and convert people.
          </h1>
          <div className="flex gap-4 w-[200px] xl:w-[560px] mx-auto">
            <h1 className="text-center p-2 mt-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform hover:-translate-x-[-56px]">
              What we do
            </h1>
            <h1 className="p-2 mt-10 flex items-center rounded-full text-white w-[40px] bg-[#000]">
              <img className="" src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg" />
            </h1>
          </div>
        </div>

        <div className="z-10 relative mx-0 md:mx-0 ">
          <style>
            {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
          </style>
        </div>
      </div>
    </div>
    </div>

  );
};




export default ProcessDrivendhn;
