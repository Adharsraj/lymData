import gsap from "gsap";
import React, { useEffect } from "react";
import arrowright from "../../assets/assets/asset 60.svg";
import imgright from "../../assets/assets/lines2.png";
import { FaLongArrowAltDown } from "react-icons/fa";
import img1 from "../../assets/assets/asset 0.png";
import img2 from "../../assets/assets/asset 1.png";

const ServicesLanding = () => {
  useEffect(() => {
    gsap.fromTo(
      "#arrowbottom",
      {
        x: 0,
        y: 70,
        rotate: 0,
      },
      {
        x: 0,
        y: 100,
        rotate: 0,
        delay: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  return (
    <div className="bg-[#282728]">
      <div className="max-w-[1640px]  mx-auto p-4 font-dm  md:text-xl mb-10 lg:mb-28 bg-[#282728] ">
        

        <div className="mt-20 lg:mt-52 xl:mt-60 text-white text-5xl lg:text-6xl xl:w-full  xl:text-8xl  lg:mx-auto lg:w-[900px]">
          <h1>
            services
            <span className="text-[#424142]">/ industries / archive</span>{" "}
            <br /> this is what we do best.
          </h1>
        </div>

        <div className="text-white md:flex md:gap-10 lg:gap-24 xl:gap-72 xl:mr-36 mt-32 z-10 relative ">
          <div className="inline-block mt-[-20px] mb-20">
            <button
              id="arrowcontainer"
              className="md:h-20 h-10 w-7 ml-5 mt-[-40px] bg-yellow-300  flex items-end justify-center rounded-full"
            >
              <h1
                id="arrowbottom"
                className="md:h-36 h-32 w-7  bg-yellow-300 z-50 rounded-full flex items-end justify-center"
              >
                <FaLongArrowAltDown color="black" size={38} />
              </h1>
            </button>
          </div>

          <div className="md:mt-48">
            <div>
              <h1 className="text-3xl font-semibold mt-10 mb-10">
                Product <br /> discovery
              </h1>
              <h2 className="mt-6 mb-6 lg:text-sm">
                We set the right processes and methodologies to boost innovation
                labs and digital product discoveries.
              </h2>
              <div className="text-sm">
                <h2 className="border-b border-b-[#464546] py-4">
                  Design thinking processes
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital Innovation & transformation workshops
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Blueprints for digital services & customer experiences
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Proof of concepts
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital landscape, user and market research
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital product ideation & implementation
                </h2>
              </div>

              <div className="flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                  see more
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                  <img src={arrowright} />
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold mt-10 mb-10">
                Product <br /> discovery
              </h1>
              <h2 className="mt-6 mb-6 lg:text-sm">
                We set the right processes and methodologies to boost innovation
                labs and digital product discoveries.
              </h2>
              <div className="text-sm">
                <h2 className="border-b border-b-[#464546] py-4">
                  Design thinking processes
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital Innovation & transformation workshops
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Blueprints for digital services & customer experiences
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Proof of concepts
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital landscape, user and market research
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital product ideation & implementation
                </h2>
              </div>

              <div className="flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                  see more
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                  <img src={arrowright} />
                </h1>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <h1 className="text-3xl font-semibold mt-10 mb-10">
                Product <br /> discovery
              </h1>
              <h2 className="mt-6 mb-6 lg:text-sm">
                We set the right processes and methodologies to boost innovation
                labs and digital product discoveries.
              </h2>
              <div className="text-sm">
                <h2 className="border-b border-b-[#464546] py-4">
                  Design thinking processes
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital Innovation & transformation workshops
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Blueprints for digital services & customer experiences
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Proof of concepts
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital landscape, user and market research
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital product ideation & implementation
                </h2>
              </div>

              <div className="flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                  see more
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                  <img src={arrowright} />
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold mt-10 mb-10">
                Product <br /> discovery
              </h1>
              <h2 className="mt-6 mb-6 lg:text-sm">
                We set the right processes and methodologies to boost innovation
                labs and digital product discoveries.
              </h2>
              <div className="text-sm">
                <h2 className="border-b border-b-[#464546] py-4">
                  Design thinking processes
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital Innovation & transformation workshops
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Blueprints for digital services & customer experiences
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Proof of concepts
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital landscape, user and market research
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital product ideation & implementation
                </h2>
              </div>

              <div className="flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                  see more
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                  <img src={arrowright} />
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold mt-10 mb-10">
                Product <br /> discovery
              </h1>
              <h2 className="mt-6 mb-6 lg:text-sm">
                We set the right processes and methodologies to boost innovation
                labs and digital product discoveries.
              </h2>
              <div className="text-sm">
                <h2 className="border-b border-b-[#464546] py-4">
                  Design thinking processes
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital Innovation & transformation workshops
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Blueprints for digital services & customer experiences
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Proof of concepts
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital landscape, user and market research
                </h2>
                <h2 className="border-b border-b-[#464546] py-4">
                  Digital product ideation & implementation
                </h2>
              </div>
            </div>

            <div className="flex group hover:cursor-pointer gap-4 w-full   mx-auto">
              <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                see more
              </h1>
              <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                <img src={arrowright} />
              </h1>
            </div>
          </div>



        </div>
      </div>
          <div className="overflow-hidden">
    <img src={img1} className="absolute opacity-10 xl:left-[-550px]  left-[-350px] top-[820px]" alt="" />
  </div>
  <div className="overflow-hidden">
    <img src={img2} className="absolute  opacity-10  top-[1400px]" alt="" />
  </div>
    </div>
  );
};

export default ServicesLanding;
