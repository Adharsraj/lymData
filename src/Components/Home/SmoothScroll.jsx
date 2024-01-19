import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
const SmoothScroll = () => {
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 280 : 30;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
  return (
    <>
      <div className=" bg-black overflow-hidden ">
        <section className="h-screen relative w-screen ">
          <motion.div
            animate={{
              WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                mousePosition.y - size / 2
              }px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
            className="h-full w-full flex items-center justify-center text-white absolute mask"
            style={{ zIndex: 2, pointerEvents: "all" }}
          >
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-[400px] lg:text-[104px] lg:leading-[96px]  pl-5 md:text-[70px] md:pl-7 md:w-[1000px] text-start text-white font-bold  leading-[50px] md:leading-[76px]  text-[50px] "
            >
              <span className="text-[#000000]">DATA-DRIVEN </span>
              <br />
              SOLUTIONS <br /> SHAPING YOUR <br /> DIGITAL <span className='text-black'>SUCCESS.</span>
            </p>
          </motion.div>
          <div id="stars"></div>
          {/* <div id="stars"></div> */}

          <div className="h-full w-full flex items-center justify-center absolute">
            <p className="w-[400px] lg:text-[104px] lg:leading-[96px] pl-5 md:text-[70px] md:pl-7 md:w-[1000px] text-start text-white font-bold  leading-[50px] md:leading-[76px] text-[50px] ">
              <span className="landing-title">DATA-DRIVEN</span>
              <br />
              SOLUTIONS <br /> SHAPING YOUR <br /> DIGITAL
              <span className="landing-title"> SUCCESS.</span>
            </p>
          </div>

          <div class="relative flex justify-center flex-col scroll-container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Scroll down</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default SmoothScroll