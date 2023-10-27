import gsap from "gsap";
import React, { useEffect } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import Within7ForService from "../Home/Within7ForService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import img from '../../assets/Images/ardwn.png'

const ServicesLanding = () => {
  const navigate = useNavigate();
  const handleClicktowithservices = () => {
    const withservices = document.getElementById("withservices");
    if (withservices) {
      window.scrollTo({
        top: withservices.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleClicktoapproach = () => {
    const approach = document.getElementById("approach");
    if (approach) {
      window.scrollTo({
        top: approach.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClicktoindustries = () => {
    const industries = document.getElementById("industries");
    if (industries) {
      window.scrollTo({
        top: industries.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClicktoarchieve = () => {
    const archieve = document.getElementById("archieve");
    if (archieve) {
      window.scrollTo({
        top: archieve.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClicktoservices = () => {
    const services = document.getElementById("services");
    if (services) {
      window.scrollTo({
        top: services.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
    maxWidth: "100%",
    marginLeft: "10px",
    transform: "scale(1.8)",

  };
  return (
    <>
      {/* services */}
      <div id="services" className="bg-[#282728] overflow-hidden">
        <div className="max-w-[1640px]  mx-auto p-4 font-dm  md:text-xl mb-10 lg:mb-28 bg-[#282728] overflow-hidden ">
          <div className="mt-32  lg:mt-52 xl:mt-60 text-white text-5xl lg:text-6xl xl:w-full  xl:text-8xl  lg:mx-auto lg:w-[900px] font-aeonic">
            <h1>
              services
              <span className="text-[#7b7b7b]  ">
                <span
                  onClick={handleClicktoindustries}
                  className="opacity-50 hover:opacity-100 cursor-pointer"
                >
                  / industries
                </span>
                <span
                  onClick={handleClicktoarchieve}
                  className="opacity-50 hover:opacity-100 cursor-pointer"
                >
                  / archive
                </span>
              </span>{" "}
              <br /> this is what we do best.
            </h1>
          </div>

          <div className="text-white  md:flex md:gap-10 lg:gap-24 xl:gap-72 xl:mr-36 mt-32 z-10 relative lg:ml-32">
            <div 
              className="inline-block hover:cursor-pointer mt-[-20px] mb-20 "
            >
            {/* <img
            onClick={handleClicktoapproach}
            className="lg:ml-10 w-14 h-14 rounded-full bg-gray-400 cursor-pointer animate-bounce"
            src={img}
            alt=""
          /> */}
             
            </div>

            <div className="md:mt-48 some-element">
              <div>
                <h1 className="text-3xl font-semibold mt-10 mb-10">
                  Product Discovery <br />
                </h1>
                <div className="text-sm">
                  <h2 className="lg:text-sm border-b border-b-[#464546] py-4">
                    Client Strategy
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Product Strategy
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Business Intelligence
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    User Research & Testing
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Product Roadmapping
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Technology Strategy
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Content Strategy
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Data Strategy
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Optimization Strategy
                  </h2>
                </div>

                <div className="md:flex hidden  group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
                <div className="flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-semibold mt-10 mb-10">
                  Design <br />
                </h1>
                <div className="text-sm">
                  <h2 className="lg:text-sm border-b border-b-[#464546] py-4">
                    User Experience Design
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Information Architecture
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Interaction Design
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Visual Design
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Prototyping
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">Content</h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Copywriting
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Digital Branding
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Video Production
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Motion Graphics
                  </h2>
                </div>

                <div className="hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
                <div className="flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
              </div>
            </div>

            <div className="some-element">
              <div>
                <h1 className="text-3xl font-semibold mt-10 mb-10">
                  Technology <br />
                </h1>
                <div className="text-sm">
                  <h2 className="lg:text-sm border-b border-b-[#464546] py-4">
                    Technical Architecture
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Web Development
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4 ">
                    Front End Interface Development
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Back End Development
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Mobile App Development
                  </h2>
                  
                  <h2 className="border-b border-b-[#464546] py-4">
                    API & CMS Development
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Manual & Automated QA
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Voice Interfaces
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Machine Learning
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                    Augmented & Mixed Reality
                  </h2>
                </div>

                <div
                  id=""
                  className="hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto"
                >
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
                <div className="flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-semibold mt-10 mb-10">
                Web & Mobile Development
                </h1>
                <div className="text-sm">
                  <h2 className="lg:text-sm border-b border-b-[#464546] py-4">
                  Web Application Development
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  E-commerce
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Content Management System
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  B2B Platforms
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  ERP /CRM
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Backend Solutions
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Mobile App Development
                  </h2>
                </div>
              </div>

              <div className="hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                  see more
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                  <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                </h1>
              </div>
              <div className="flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto">
                <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ">
                  see more
                </h1>
                <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                  <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                </h1>
              </div>

              <div>
                <h1 className="text-3xl font-semibold mt-10 mb-10">
                  Growth, Marketing <br /> & Sales 
                </h1>
                <div className="text-sm">
                  <h2 className="lg:text-sm border-b border-b-[#464546] py-4">
                  Branding 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Consumer & Shopper Insights
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Customer Experience 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Customer Lifecycle Management 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Digital Marketing 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Green Growth 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Insights & Analytics 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Marketing Return on Investment 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  NeXT Commerce 
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Organization & Capabilities  
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Pricing  
                  </h2>
                  <h2 className="border-b border-b-[#464546] py-4">
                  Sales & Channel Management
                  </h2>
                </div>

                <div className="hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
                <div className="flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto">
                  <h1 className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ">
                    see more
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418614/LYMDATALABS/Pages/Services/asset_0_iofmqv_n1fgub.png"
            className="absolute opacity-10 xl:left-[-550px]  left-[-350px] top-[820px]"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418667/LYMDATALABS/Pages/Services/asset_1_ixuqhj_zx5ems.png"
            className="absolute  opacity-10  top-[1400px]"
            alt=""
          />
        </div>
      </div>
      {/* Approaches */}
      <>
        <div
          id="approach"
          className="max-w-[1640px]   mx-auto p-4  md:text-xl min-h-screen "
        >
          <div className="lg:mt-20">
            <div className="md:hidden">
              <div className="flex justify-between align-middle items-center some-element">
                <h1>approach</h1>
                <img
                  className="hover:animate-spin"
                  src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                  alt=""
                  style={{ animationDuration: "3s" }}
                />
              </div>

              <div className="text-[25px]  xl:text-[82px] xl:w-[560px] mx-auto text-left leading-10  text-[#7b7b7b]  mt-10  mb-16 some-element">
                <h1>
                Businesses can achieve growth and success in the digital era by utilizing data and its associated technologies. Our company specializes in assisting organizations to leverage the potential of data-driven intelligence, upgrade their core technology.
                </h1>

                <Link to="/contact">
                  <div className="flex group hover:cursor-pointer gap-4 w-[300px] xl:w-[560px] mx-auto">
                    <h1 className="p-2 mt-10 flex justify-center text-base rounded-full w-[200px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px] some-element">
                      Dive into contact
                    </h1>
                    <h1 className="p-2 mt-10 flex items-center rounded-full w-[45px] bg-[#282728]">
                      <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="hidden md:block mt-20 relative overflow-hidden">
              <div className="flex justify-between xl:px-16 lg:px-5  align-middle items-center">
                <h1 className="text-sm some-element">approach</h1>
                <h1 className="text-[38px] xl:text-[42px] hidden w-[600px] leading-10 some-element">
                  We're challengers at heart and <br />
                  builders by nature.
                </h1>
                <img
                  className="hover:animate-spin"
                  src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                  alt=""
                  style={{ animationDuration: "3s" }}
                />
              </div>

              <div className="text-[42px] lg:mt-[-40px] lg:text-[47px]  w-[600px] xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10   text-[#7b7b7b]   mb-16">
                <h1 className="lg:text-4xl  lg:leading-[44px] some-element text-[#7b7b7b]  lg:w-[690px] some-element">
                Businesses can achieve growth and success in the digital era by utilizing data and its associated technologies. Our company specializes in assisting organizations to leverage the potential of data-driven intelligence, upgrade their core technology.
                </h1>
              </div>
              <Link to="/contact">
                <div className="flex group hover:cursor-pointer gap-4 w-[600px] xl:w-[560px] mx-auto">
                  <h1 className="p-2 mt-10 flex justify-center rounded-full w-[220px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px] some-element">
                    Dive into contact
                  </h1>
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[45px] bg-[#282728]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
                </div>
              </Link>
              <img
                className="hidden xl:flex absolute z-10 top-[150px] left-0 transform  scale-150 overflow-hidden   "
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418735/LYMDATALABS/Pages/Services/lines2_tfqf81_au43wv.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </>

      {/* industries and archieve */}
      <>
        <div className="bg-[#F4F4F4] ">
          <div
            id="industries"
            className="max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  "
          >
            <div className="relative md:mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">
              <div className="xl:mt-[-150px] md:mt-[-130px]    mb-20">
                <div className="relative overflow-hidden md:h-[400px] h-[400px] lg:h-[500px] mb-10 some-element">
                  <img
                    // style={imageStyle}
                    className="mt-80 hidden md:flex "
                    // src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418735/LYMDATALABS/Pages/Services/lines2_tfqf81_au43wv.png"
                    // alt="Sample Image"
                  />
                  <h1 className="absolute mt-32 xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]">
                    <span
                      onClick={handleClicktoservices}
                      className="opacity-20 hover:opacity-50 hover:cursor-pointer"
                    >
                      services
                    </span>
                    <span
                      onClick={handleClicktoindustries}
                      className="text-[#424142] "
                    >
                      / industries /{" "}
                    </span>
                    <span
                      onClick={handleClicktoarchieve}
                      className="opacity-20 hover:opacity-50 hover:cursor-pointer"
                    >
                      {" "}
                      archive
                    </span>{" "}
                    <br />{" "}
                    <span className="text-[#424142] mb-10 ">
                      we are experts in.
                    </span>
                  </h1>
                  <img
                    onClick={handleClicktowithservices}
                    className="absolute lg:ml-20 mt-80 md:mt-28 animate-bounce mb-10 cursor-pointer"
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <Within7ForService />
        </div>

        <div
          id="archieve"
          className="max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  "
        >
          <div className="relative mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">
            <div className="xl:mt-[-150px] md:mt-[-130px] mt-[-200px]  mb-20">
              <div className="relative overflow-hidden md:h-[400px] h-[550px] lg:h-[500px] mb-10 some-element">
                <img
                  // style={imageStyle}
                  className="mt-80"
                  // src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418735/LYMDATALABS/Pages/Services/lines2_tfqf81_au43wv.png"
                  // alt="Sample Image"
                />
                <h1 className="absolute xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]">
                  <span
                    onClick={handleClicktoservices}
                    className="opacity-20 hover:opacity-50 hover:cursor-pointer"
                  >
                    services
                  </span>
                  <span
                    onClick={handleClicktoindustries}
                    className="opacity-20 hover:opacity-50 hover:cursor-pointer "
                  >
                    / industries /{" "}
                  </span>
                  <span
                    onClick={handleClicktoarchieve}
                    className="text-[#424142] cursor-pointer"
                  >
                    {" "}
                    archive
                  </span>{" "}
                  <br />{" "}
                  <span className="text-[#424142] mb-10 ">
                  Leading the way in digital design & innovation.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ServicesLanding;
