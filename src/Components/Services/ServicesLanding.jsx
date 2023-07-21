import gsap from "gsap";
import React, { useEffect } from "react";
import arrowright from "../../assets/assets/asset 60.svg";
import imgright from "../../assets/assets/lines2.png";
import { FaLongArrowAltDown } from "react-icons/fa";
import img1 from "../../assets/assets/asset 0.png";
import img2 from "../../assets/assets/asset 1.png";
import star from "../../assets/assets/asset 61.svg";
import { Link } from "react-router-dom";
import arrowbottom from "../../assets/assets/asset 41.svg";
import Within7ForService from '../Home/Within7ForService';

const ServicesLanding = () => {
  const handleClicktoapproach = () => {
    const component2Element = document.getElementById('approach');
    if (component2Element) {
      window.scrollTo({
        top: component2Element.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const handleClicktoindustries = () => {
    const industries = document.getElementById('industries');
    if (industries) {
      window.scrollTo({
        top: industries.offsetTop,
        behavior: 'smooth',
      })
    }
  }


  const handleClicktoarchieve = () => {
    const archieve = document.getElementById('archieve');
    if (archieve) {
      window.scrollTo({
        top: archieve.offsetTop,
        behavior: 'smooth',
      })
    }
  }


  const handleClicktoservices = () => {
    const services = document.getElementById('services');
    if (services) {
      window.scrollTo({
        top: services.offsetTop,
        behavior: 'smooth',
      })
    }
  }

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

  const imageStyle = {
    maxWidth: '100%',
    marginLeft: '10px',
    transform: 'scale(1.8)',

    // Adjust the scale value as needed
  };
  return (
    <>
    {/* services */}
    <div id="services" className="bg-[#282728]">
      <div className="max-w-[1640px]  mx-auto p-4 font-dm  md:text-xl mb-10 lg:mb-28 bg-[#282728] ">

        

        <div className="mt-32  lg:mt-52 xl:mt-60 text-white text-5xl lg:text-6xl xl:w-full  xl:text-8xl  lg:mx-auto lg:w-[900px]">
          <h1>
            services
            <span className="text-[#7b7b7b]  ">

              <span onClick={handleClicktoindustries}   className="opacity-50 hover:opacity-100 cursor-pointer">/ industries</span> 
              <span onClick={handleClicktoarchieve} className="opacity-50 hover:opacity-100 cursor-pointer">/ archive</span></span>{" "}
            <br /> this is what we do best.
          </h1>
        </div>

        <div className="text-white md:flex md:gap-10 lg:gap-24 xl:gap-72 xl:mr-36 mt-32 z-10 relative ">
          
          <div onClick={handleClicktoapproach} className="inline-block mt-[-20px] mb-20">
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

              <div id="" className="flex group hover:cursor-pointer gap-4 w-full   mx-auto">
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
    {/* Approaches */}
    <>
<div id="approach" className="max-w-[1640px]   mx-auto p-4 font-dm  md:text-xl  ">
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

{/* industries and archieve */}
<>
    
    <div className='bg-[#F4F4F4]'>

    <div id='industries' className="max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  ">
      
       <div className="relative mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">


    <div className='xl:mt-[-150px] md:mt-[-130px] mt-[-200px]  mb-20'>
      <div className='relative overflow-hidden md:h-[400px] h-[550px] lg:h-[500px] mb-10 '>
      <img style={imageStyle}  className="mt-32" src={imgright} alt="Sample Image" />
      <h1 className='absolute xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]'>
          <span onClick={handleClicktoservices} className='opacity-20 hover:opacity-50 hover:cursor-pointer'>services</span> 
          <span onClick={handleClicktoindustries} className="text-[#424142] ">/ industries / </span> 
          <span onClick={handleClicktoarchieve} className="opacity-20 hover:opacity-50 hover:cursor-pointer"> archive</span>  <br />{" "}
          <span  className='text-[#424142] mb-10 '>we are experts in.
</span> 
        </h1>
        <img className='absolute lg:ml-20 mt-80 md:mt-28 animate-bounce mb-10' src={arrowbottom} alt="" />

      </div>
    </div>
      </div>

     



    </div>
    <Within7ForService/>
    </div>

    <div id="archieve" className="max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  ">
      
       <div className="relative mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">


    <div className='xl:mt-[-150px] md:mt-[-130px] mt-[-200px]  mb-20'>
      <div className='relative overflow-hidden md:h-[400px] h-[550px] lg:h-[500px] mb-10 '>
      <img style={imageStyle}  className="mt-32" src={imgright} alt="Sample Image" />
      <h1 className='absolute xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]'>
          <span onClick={handleClicktoservices} className='opacity-20 hover:opacity-50 hover:cursor-pointer'>services</span> 
          <span onClick={handleClicktoindustries}  className="opacity-20 hover:opacity-50 hover:cursor-pointer ">/ industries / </span> 
          <span onClick={handleClicktoarchieve} className="text-[#424142] cursor-pointer"> archive</span>  <br />{" "}
          <span   className='text-[#424142] mb-10 '>15+ years of solved challenges</span> 
        </h1>
        <img className='absolute lg:ml-20 mt-80 md:mt-28 animate-bounce mb-10' src={arrowbottom} alt="" />

      </div>
    </div>
      </div>

     



    </div>
    </>




    </>
  );
};

export default ServicesLanding;
