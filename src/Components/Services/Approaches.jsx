import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
// import arrowright from "../../assets/Logos/asset/asset/ 49.svg";
import { BsArrowRight } from "react-icons/bs";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import imgmain from '../../assets/Images/service/test.png'
import imgtab from '../../assets/Images/service/bg-services1.png'
import imgphone from '../../assets/Images/service/bg-services2.png'

gsap.registerPlugin(ScrollTrigger)

const Approach = () => {
    useEffect(() => {
        gsap.from("#approach", {
          scrollTrigger: {
            trigger: "#approach",
            toggleActions: "restart pause resume pause",
          },
          x: 100,
          opacity: 0,
          scrub:true,
          markers:true
        });
    
        gsap.from("#approachallenge", {
          scrollTrigger: {
            trigger: "#approachallenge",
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
        //     end:"top 50px",
        //     scrub:true,
        //     markers:true,
          
        // },
        // x:100,
        // rotation:360,
        // ease:"none",
        // })
      }, []);
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-roboto md:text-xl bg-[#F8FAFC] ">
     <div className="md:grid md:grid-cols-3  relative">
  <img
    src={imgmain}
    alt="bg-img"
    className="absolute hidden md:flex md:mt-40  lg:mt-40 w-full   lg:pl-[75px]    "
  />


  <div className="hidden md:flex">
    <h1
      id="approach"
      className="lg:mt-10 font-mono lg:w-[150px] lg:py-10 lg:ml-20"
    >
      approach
    </h1>
  </div>


  <div className="md:hidden">
    <h1
      id=""
      className="lg:mt-10 ml-5  lg:w-[150px] lg:py-10 lg:ml-20"
    >
      approach
    </h1>
  </div>


  <div>
    <h5
      id="approachallenge"
      className="mt-4 mb-4 md:ml-0 lg:w-[650px] mx-auto font-bold text-2xl ml-6  md:w-[400px]  lg:py-14  lg:text-5xl mr-16 relative z-10"
    >
      Our offering has evolved
      as a testament of theas a testament of the
      work we have completedwork we have completed
      and delivered for moreand delivered for more
      than 150 companies of all than 150 companies of allkinds and sizes.
    </h5>
    <div className="flex flex-end  justify-end mb-3">
 

    </div>
    {/* <div
      id="howwechallenge"
      className="text-neutral-500 lg:w-[650px] md:ml-0 ml-6 w-[250px] text-left lg:text-5xl lg:mt-8 md:w-[500px]    mr-20 relative z-10"
    >
      LYM™ is a collective brain, <br />
      formed by a diverse group <br />
      offormed by a diverse group of people who bring years <br />
      ofpeople who bring years of experience, dedication and commitment to our
      daily work.
    </div> */}
  </div>

  <div className="hidden md:flex flex-end justify-end mb-3">
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
          <div className="flex group hover:cursor-pointer gap-4 w-[600px] xl:w-[560px] mx-auto">
  <h1 className="px-6 p-2 mt-10 rounded-full w-[220px] bg-[#000000] text-white transition-all duration-300 transform group-hover:-translate-x-[-56px]">
    Let's build together
  </h1>
  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#ffff05]">
    {/* <img src={arrowright}  /> */}
  </h1>
</div>
          {/* <figure className="align-middle">
              <img  src="https://lymdata-2-0-9uzrbq2vo-lymdatalabs.vercel.app/assets/home-section-3--lines2.png" alt="bg-img" />
          </figure>    */}
           
    </div>
    
  );
};

export default Approach;
