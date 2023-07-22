import React from "react";
import star from "../../assets/assets/asset 61.svg";
import arrowright from "../../assets/assets/asset 60.svg";
import imgright from "../../assets/assets/lines2.png";
import img6 from "../../assets/assets (3)/lines.png";

const Services = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]   mx-auto p-4 font-dm  md:text-xl overflow-hidden  ">
        <div className="lg:mt-20">
          <div className="md:hidden">
            <div className="flex justify-between align-middle items-center">
              <h1>services</h1>
              <img
                className="hover:animate-spin"
                src={star}
                alt=""
                style={{ animationDuration: "3s" }}
              />
            </div>

            <div className="text-[25px]  xl:text-[82px] xl:w-[560px] mx-auto text-left   leading-10  text-[#000]  mt-10  mb-16">
              <h1>
                We’re challengers and problem solvers.See what this amazing team
                is capable of.See what this amazing team is capable of.
              </h1>
            </div>
          </div>

          <div className="flex md:hidden group hover:cursor-pointer gap-4 w-[240px] xl:w-[560px] md:mx-auto md:w-[600px">
            <h1 className="p-2 md:mt-10 text-white rounded-full w-[230px] bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
              Dive into our Services
            </h1>
            <h1 className="p-2 md:mt-10 flex items-center rounded-full w-[50px] bg-[#282728]">
              <img src={arrowright} />
            </h1>
          </div>

          <div className="hidden md:block mt-20 relative">
            <div className="flex justify-between xl:px-16 lg:px-5  align-middle items-center">
              <h1 className="text-sm">services</h1>
              <h1 className="text-[38px] xl:text-[42px] hidden w-[600px] leading-10">
                We're challengers at heart and <br />
                builders by nature.
              </h1>
              <img
                className="hover:animate-spin"
                src={star}
                alt=""
                style={{ animationDuration: "3s" }}
              />
            </div>

            <div className="text-[42px] lg:mt-[-40px] lg:text-[3px]  w-[600px] xl:text-[42px] xxl:w-[820px]  mx-auto text-left   leading-10   text-[#000]   mb-16">
              <h1 className="lg:text-4xl  lg:w-[670px] xxl:w-[940px] xxl:text-5xl">
                We’re challengers and problem solvers.
                <br />
                See what this amazing team is capable of.
              </h1>
            </div>
            <div className="flex group hover:cursor-pointer gap-4 w-[600px] xxl:w-[830px]  mx-auto lg:mb-40">
              <h1 className="p-2  flex justify-center rounded-full w-[220px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                Lets build together
              </h1>
              <h1 className="p-2  flex items-center rounded-full w-[40px] bg-[#282728]">
                <img src={arrowright} />
              </h1>
            </div>
            <img
              className="hidden xl:flex absolute z-0 top-0 scale-150"
              src={img6}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
