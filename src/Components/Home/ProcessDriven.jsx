import React from "react";
import star from "../../assets/assets/asset 62.svg";
import arrowright from "../../assets/assets/asset 60.svg";
import { productDrivenDesign } from "../../assets/Data/data";
import { Link } from "react-router-dom";

const ProcessDrivendhn = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="bg-[#BCBCBC]">
      <div className="max-w-[1640px]  bg-[#BCBCBC]   mx-auto p-4 font-dm  md:text-xl  ">
        <div className="flex flex-between">
          <h1 className="md:hidden font-mono py-10">Fields of expertise</h1>
          <div className="hidden md:flex md:flex-col w-[200px] ml-auto mr-16 text-white text-sm">
            <h1 className=" mt-5 mb-5">
              Products that matter are anticipated, personal and relevant to
              people.
            </h1>
            <h1>
              {" "}
              They aren’t created by chance, nor are the fruit of inspiration.
              Products that matter are the end result of a curated process of
              ideation, incubation and implementation.
            </h1>
          </div>
        </div>

        <div className="hidden md:block text-white">
          <div>
            <h1 className="text-[100px] lg:text-[150px] xl:text-[200px]">
              process
            </h1>
          </div>
          <div className="flex items-center justify-around text-[100px] xl:text-[200px] xl:mt-32 lg:text-[140px] mt-14 lg:mt-20 ">
            <img
              className="lg:w-20 hover:animate-spin"
              src={star}
              alt="imgsmallviewstar "
              style={{ animationDuration: "3s" }}
            />
            <h2>driven</h2>
            <h2>design</h2>
          </div>
        </div>

        <Link to="/services" onClick={handleLinkClick}>
          <div className="hidden group hover:cursor-pointer md:flex text-white mt-32 xl:ml-20  justify-between md:items-center w-[600px] xl:w-[900px] lg:mb-32 ">
            <h1>Fields of expertise </h1>
            <div className="flex xl:gap-1 gap-4 w-[200px] justify-end md:w-[200px]  items-center xl:w-[560px] ">
              <h1 className="p-4 xl:w-[160px] flex text-center items-center justify-center lg:w-[160px] lg:h-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform group-hover:-translate-x-[-56px]">
                What we do
              </h1>
              <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#000]">
                <img className="lg:w-56" src={arrowright} />
              </h1>
            </div>
          </div>
        </Link>

        <div className="md:hidden text-white text-7xl">
          <h1>process</h1>
          <div className=" md: items-center flex justify-between">
            {/* <img src={star} alt="imgsmallviewstar"  /> */}
            <img
              className="hover:animate-spin"
              src={star}
              alt="imgsmallviewstar "
              style={{ animationDuration: "3s" }}
            />
            <h1>driven</h1>
          </div>
          <h1>design</h1>
        </div>

        <div className=" md:hidden md:flex-col w-[200px]  mr-16 text-white  text-sm">
          <h1 className=" mt-5 w-[300px] mb-5 py-5">
            Products that matter are anticipated, personal and relevant to
            people.
          </h1>
          <h1 className="w-[300px]">
            {" "}
            They aren’t created by chance, nor are the fruit of inspiration.
            Products that matter are the end result of a curated process of
            ideation, incubation and implementation.
          </h1>
          <div className="flex gap-4 w-[200px] xl:w-[560px] mx-auto">
            <h1 className="text-center p-2 mt-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform hover:-translate-x-[-56px]">
              What we do
            </h1>
            <h1 className="p-2 mt-10 flex items-center rounded-full text-white w-[40px] bg-[#000]">
              <img className="" src={arrowright} />
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
  );
};

export default ProcessDrivendhn;
