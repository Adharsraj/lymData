import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const HowWeThink = () => {
    useEffect(() => {
        gsap.from("#howwethink", {
          scrollTrigger: {
            trigger: "#howwethink",
            toggleActions: "restart pause resume pause",
          },
          x: 300,
          opacity: 0,
          scrub:true,
          markers:true
        });
    
        gsap.from("#howwechallenge", {
          scrollTrigger: {
            trigger: "#howwechallenge",
            toggleActions: "restart pause resume pause",
            
        },
        y: 200,
        opacity: 0,
        stagger:0.2
        });
        // gsap.to("#diveinto",{
        //   scrollTrigger:{
        //     trigger:"#diveinto",
        //     start:"top center",
        //     end:"top end",
        //     scrub:true,
        //     markers:true,
          
        // },
        // x:0,
        // rotation:360,
        // ease:"none",
        // yoyo:true
        // })
      }, []);
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm md:text-xl bg-[#F8FAFC
    ] ">
      <div className="md:grid md:grid-cols-3  ">
        <div className="">
          <h1 id="howwethink" className="lg:text-9xl lg:mt-12 lg:italic font-light lg:w-[200px]  text-gray-500">
            How we <br /> think
          </h1>
        </div>

        <div>
          <h1 id="howwechallenge" className="text-2xl mt-4 mb-4 lg:w-[650px] mx-auto  italic font-times lg:text-4xl">
            We're challengers at heart and builders by nature.
          </h1>
          <div className="flex flex-end md:hidden  justify-end mb-3">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 60 60"
            fill="none"
            className="hover:animate-spin"
            style={{ animationDuration: '5s' }}

            

          >
            <g clipPath="url(#clip0_286_233)">
              <path
                
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
          <div id="howwechallenge" className="text-gray-500 lg:w-[650px] lg:text-5xl">
            LYM-DATA™ is a collective brain, formed by a diverse group offormed by a
            diverse group of people who bring years ofpeople who bring years of
            experience, dedication and commitment to our daily work.
          </div>
          </div>

          <div className=" hidden  md:flex flex-end  justify-end mb-3  ">

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 60 60"
  fill="none"
  className="lg:hidden hover:animate-spin mr-10"
  style={{ animationDuration: '5s' }}

  

>
  <g clipPath="url(#clip0_286_233)">
    <path
      
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

<svg

  xmlns="http://www.w3.org/2000/svg"
  width="90"
  height="80"
  viewBox="0 0 60 60"
  fill="none"
  className=" lg:flex hover:animate-spin"
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
      </div>
          {/* <h5 className="mt-8  mx-auto  mb-4 w-[160px] text-gray-500 rounded-xl p-2 bg-yellow-300">Dive into our culture</h5> */}
                <div id="" className="w-[132px] h-[53px] 2xl:ml-[540px] mt-6 mb-6 bg-[#F2F626] hover:-rotate-45 transition-transform border lg:ml-[480px]  ">
                    <div className="flex">

                <h1  className="flex justify-center font-roboto ">Dive into our culture</h1>
                <span className="flex justify-end">
                  <BsArrowRight size={30} />
                </span>
                    </div>
              </div>


              
    </div>
  );
};

export default HowWeThink;
