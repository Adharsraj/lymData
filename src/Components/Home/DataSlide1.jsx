import React, { useEffect } from "react";
import { Carousel } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const DataSlide1 = () => {
  useEffect(() => {
    const strikeThrough = document.getElementById("strike-through");
    const strikeThroughh = document.getElementById("strike-throughh");
    const strikeThrough3 = document.getElementById("strike-through3");
    const strikeThrough4 = document.getElementById("strike-through4");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-element", // You need to set this to the element that should trigger the animation
        start: "top top", // Adjust as needed
        end: "center center", // Adjust as needed
        scrub: 1, // Adjust as needed
        markers: true, // Set to true to visualize the trigger area
      }
    });

    gsap.set(strikeThrough, { width: 0, transformOrigin: "right", top: "10%" });
    gsap.set(strikeThroughh, { width: 0, transformOrigin: "right", top: "10%" });
    gsap.set(strikeThrough3, { width: 0, transformOrigin: "right", top: "10%" });
    gsap.set(strikeThrough4, { width: 0, transformOrigin: "right", top: "10%" });

    tl.to(strikeThrough, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(strikeThroughh, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(strikeThrough3, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
    });
    tl.to(strikeThrough4, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Carousel autoplay dotPosition="">
      <div className="bg-black text-white min-h-screen overflow-hidden trigger-element relative">
        <div className="md:flex xl:pt-40 xl:px-28 justify-between">
          <div className="text-[30px] px-7 pt-10 font-bold lg:text-[30px] xl:text-[60px] xl:font-bold text-white  xl:leading-[60px]">
          <div className="mt-10 h-2" id="strike-through"></div>
            <h2 className="-mt-8">DATA-DRIVEN</h2>
        <div id="strike-throughh"></div>
            <h2 className="-mt-8 ">SOLUTIONS</h2>
            <div id="strike-through3"></div>

            <h2 className="-mt-8 ">SHAPPING YOUR</h2>
            <div id="strike-through4"></div>

            <h2 className="-mt-8 ">DIGITAL SUCCESS</h2>
          </div>

          <div className="text-[12px] pt-10 px-7 lg:text-[10px] xl:text-[14px]">
            <h2>Our Enhanced Landding Page Communicates</h2>
            <h2>Better And Connects With Our Customers Easily.</h2>
            <h2>Discover How We Turn Visions Into Reality,</h2>
            <h2>Creating Exceptional Experiences</h2>
            <h2>That Make A Difference.</h2>

            <div className="pt-5 xl:pt-16">
              <h2>Scalability</h2>
              <h2 className="pt-5 xl:pt-10">Productivity</h2>
              <h2 className="pt-5 xl:pt-10">Durability</h2>
              <h2 className="pt-5 xl:pt-10">Efficient</h2>
            </div>
          </div>
        </div>
 
      </div>

      <div className="bg-black text-white min-h-screen overflow-hidden">
        <div className="md:flex xl:pt-40 xl:px-28 justify-between">
          <div className="text-[30px] px-7 pt-10 font-bold lg:text-[30px] xl:text-[60px] xl:font-bold text-white line-through xl:leading-[60px]">
            <h2>DATA-DRIVEN</h2>
            <h2>SOLUTIONS</h2>
            <h2>SHAPPING YOUR</h2>
            <h2>DIGITAL SUCCESS</h2>
          </div>

          <div className="text-[12px] pt-10 px-7 lg:text-[10px] xl:text-[14px]">
            <h2>Our Enhanced Landding Page Communicates</h2>
            <h2>Better And Connects With Our Customers Easily.</h2>
            <h2>Discover How We Turn Visions Into Reality,</h2>
            <h2>Creating Exceptional Experiences</h2>
            <h2>That Make A Difference.</h2>

            <div className="pt-5 xl:pt-16">
              <h2>Scalability</h2>
              <h2 className="pt-5 xl:pt-10">Productivity</h2>
              <h2 className="pt-5 xl:pt-10">Durability</h2>
              <h2 className="pt-5 xl:pt-10">Efficient</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white min-h-screen overflow-hidden">
        <div className="md:flex xl:pt-40 xl:px-28 justify-between ">
          <div className="text-[30px] px-7 pt-10 font-bold lg:text-[30px] xl:text-[60px] xl:font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 xl:leading-[60px]">
            <h2>DATA-DRIVEN</h2>
            <h2>SOLUTIONS</h2>
            <h2>SHAPPING YOUR</h2>
            <h2>DIGITAL SUCCESS</h2>
          </div>

          <div className="text-[12px] pt-10 px-7 lg:text-[10px] xl:text-[14px]">
            <h2>Our Enhanced Landding Page Communicates</h2>
            <h2>Better And Connects With Our Customers Easily.</h2>
            <h2>Discover How We Turn Visions Into Reality,</h2>
            <h2>Creating Exceptional Experiences</h2>
            <h2>That Make A Difference.</h2>

            <div className="pt-5 xl:pt-16">
              <h2>Scalability</h2>
              <h2 className="pt-5 xl:pt-10">Productivity</h2>
              <h2 className="pt-5 xl:pt-10">Durability</h2>
              <h2 className="pt-5 xl:pt-10">Efficient</h2>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default DataSlide1;
