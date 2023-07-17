import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { productDrivenDesign } from "../../assets/Data/data";
import gsap from "gsap";
import { useEffect } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
const ProcessDrivenDesign = () => {
  useEffect(() => {
    gsap.from("#processdriven #designed", {
      scrollTrigger: {
        trigger: "#processdriven #designed",
        toggleActions: "restart pause resume pause",
      },
      y: 100,
      opacity: 0,
      scrub:true,
      markers:true,
      stagger:0.2,
    });

    gsap.from("#design", {
      scrollTrigger: {
        trigger: "#design",
        toggleActions: "restart pause resume pause",
        
    },
    y: 100,
    opacity: 0,
    stagger:0.2
    });
  }, []);


  return (
    <>
    <div className="bg-[#BCBCBC]">

   
    <div className="max-w-[1640px] mx-auto p-4 bg-[#BCBCBC] text-white font-roboto">
      <div>
      <div className="flex justify-start md:justify-end">
  <h1 id="processdriven" className="w-[300px] flex flex-col items-center font-sans lg:text-xl  ml-4 md:ml-0 lg:w-[400px] py-10 mr-10">
    Products that matter are anticipated, personal and relevant to people.<br/>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp; 
    They aren’t created by chance, nor are the fruit of inspiration.
    Products that matter are the end result of a curated process of
    ideation, incubation, and implementation.</p>
  </h1>
</div>
        <div className="flex">
          <h1 id="design" className="text-xl font-semibold mt-4 lg:mt-0 lg:text-5xl md:text-5xl md:ml-1  xl:w-[800px]  xl:text-[150px]  w-[300px] mx-auto ">process</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 60 60"
            fill="none"
            className="ml-16 md:hidden hover:animate-spin"
            style={{ animationDuration: '5s' }}

          >
            <g clipPath="url(#clip0_286_233)">
              <path
                clipRule="evenodd"
                d="M26.8112 0V7.23512L29.178 27.7775C29.1756 27.7783 29.1732 27.7792 29.1708 27.78L16.1576 11.6487L11.0416 6.53273L8.87019 8.70416L6.53269 11.0426L11.6487 16.1586L27.7996 28.9723C27.7933 28.9845 27.787 28.9967 27.7809 29.009L7.23512 26.8109H0V29.8817V33.1888H7.23512L27.626 30.8394C27.6352 30.8699 27.645 30.9001 27.6554 30.9301L11.6486 43.8429L6.53258 48.9589L8.70359 51.1299L11.0417 53.4688L16.1577 48.3528L28.8715 32.3278C28.9109 32.3479 28.9509 32.3671 28.9915 32.3852L26.8112 52.7646V59.9997H29.8817L33.1888 59.9999V52.7647L30.8482 32.4498C30.8907 32.4344 30.9326 32.4178 30.974 32.4001L43.8422 48.3516L48.9583 53.4676L51.1297 51.2962L53.4672 48.9575L48.3512 43.8415L32.2816 31.0923C32.2945 31.0623 32.3067 31.032 32.3184 31.0013L52.7649 33.1888H60V30.1181V26.8111H52.7649L32.2923 29.1698C32.2863 29.1553 32.2802 29.1409 32.2739 29.1266L48.3514 16.1568L53.4674 11.0408L51.2965 8.86985L48.9583 6.53106L43.8423 11.6471L30.9918 27.8444C30.9893 27.8433 30.9867 27.8422 30.9842 27.8411L33.1888 7.23512V0H30.1183H26.8112Z"
                fill="#282728"
              />
            </g>
            <defs>
              <clipPath id="clip0_286_233">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>


        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 60 60"
            fill="none"
            className="  md:w-[200px] hidden mt-20 md:mt-2 xl:ml-20   md:flex hover:animate-spin "
            style={{ animationDuration: '5s' }}
          >
            <g clipPath="url(#clip0_286_233)">
              <path
                clipRule="evenodd"
                d="M26.8112 0V7.23512L29.178 27.7775C29.1756 27.7783 29.1732 27.7792 29.1708 27.78L16.1576 11.6487L11.0416 6.53273L8.87019 8.70416L6.53269 11.0426L11.6487 16.1586L27.7996 28.9723C27.7933 28.9845 27.787 28.9967 27.7809 29.009L7.23512 26.8109H0V29.8817V33.1888H7.23512L27.626 30.8394C27.6352 30.8699 27.645 30.9001 27.6554 30.9301L11.6486 43.8429L6.53258 48.9589L8.70359 51.1299L11.0417 53.4688L16.1577 48.3528L28.8715 32.3278C28.9109 32.3479 28.9509 32.3671 28.9915 32.3852L26.8112 52.7646V59.9997H29.8817L33.1888 59.9999V52.7647L30.8482 32.4498C30.8907 32.4344 30.9326 32.4178 30.974 32.4001L43.8422 48.3516L48.9583 53.4676L51.1297 51.2962L53.4672 48.9575L48.3512 43.8415L32.2816 31.0923C32.2945 31.0623 32.3067 31.032 32.3184 31.0013L52.7649 33.1888H60V30.1181V26.8111H52.7649L32.2923 29.1698C32.2863 29.1553 32.2802 29.1409 32.2739 29.1266L48.3514 16.1568L53.4674 11.0408L51.2965 8.86985L48.9583 6.53106L43.8423 11.6471L30.9918 27.8444C30.9893 27.8433 30.9867 27.8422 30.9842 27.8411L33.1888 7.23512V0H30.1183H26.8112Z"
                fill="#282728"
              />
            </g>
            <defs>
              <clipPath id="clip0_286_233">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 id="design" className="text-xl font-semibold hidden md:flex  md:w-[550px] lg:w-[900px] xl:w-[1100px]  xl:text-[160px]   md:text-7xl lg:text-[120px] lg:ml-20">driven design</h1>
        </div>
        <h1 id="design" className="text-xxl font-semibold border md:hidden  ">driven design</h1>
        <div className="flex gap-10 mt-10 mb-20">
          <h2 id="buttons" className="p-2 hover:cursor-pointer lg:text-xl text font-mono text-black px-10">
            Fields of expertise
          </h2>
          <h2 id="buttons" className="justify-center hover:cursor-pointer p-2 bg-gray-800 lg:text-xl text-slate-100 rounded-full item-center">
            What we do
          </h2>
        </div>
      </div>

      <div id="designed" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
  {productDrivenDesign.map((m) => (
    <div
      key={m.id}
      className="flex md:border-r group hover:cursor-pointer  lg:hover:bg-white lg:hover:text-black flex-col"
    >
      <h1 className="w-[250px] mx-auto text-2xl mt-10">{m.head1}</h1>
      <h2 className="w-[60px] md:ml-12 lg:ml-[39px] group-hover:text-black hidden md:flex rounded-full p-2 lg:text-[#BCBCBC]  ">
        <BsArrowRight size={30} />
      </h2>
      <h2
        className="w-[250px] group-hover:text-black lg:text-sm mx-auto lg:text-[#BCBCBC]  mt-8 mb-8 font-sans">
        {m.head2}
      </h2>
      <h2 className="w-[60px] h-[42px]  md:hidden rounded-full ml-14 p-2 bg-black">
        <BsArrowRight size={30} />
      </h2>
    </div>
  ))}
</div>



    </div>
    </div>
    </>
  );
};

export default ProcessDrivenDesign;
