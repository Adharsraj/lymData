import gsap from "gsap";
import React, { useEffect, useState } from "react";
import giphy from "../../assets/gif/giphy.webp";
import { FaLongArrowAltDown } from "react-icons/fa";
import Popup from "./Popup";
import img from '../../assets/Images/ardwn.png'
const Hero = () => {
  const handleClicktohowethink = () => {
    const component2Element = document.getElementById("howethink");
    if (component2Element) {
      window.scrollTo({
        top: component2Element.offsetTop,
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

    gsap.from("h6 div", 1.5, {
      yPercent: 100,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.to("h6", 1.5, {
      clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumWidth, setIsMediumWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerHeight <= 615);
      setIsMediumWidth(window.innerWidth >= 1200 && window.innerWidth <= 1350);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Popup />
      <div className=" bg-black text-white ">
        <div className="max-w-[1640px] mx-auto  mt-[-10px]     md:mt-[-16px] lg:mt-0  overflow-hidden ">
          <div className="">
            <div className=" ">
              <section className="clip-text-video  ">
                <img
                  className="xl:h-screen max-w-[1640px] xl:mt-0 opacity-80 lg:h-screen lg:mt-0  md:mt-[90px] md:h-[280px]   h-[280px] mt-[88px]   w-full px-6  z-0"
                  id="running"
                  src={giphy}
                  alt="GIF"
                />

                <div className="clip-text-video__text layer lg:h-screen flex items-center text-center z-0 ">
                  <div className="overlay  flex flex-col md:justify-center font-aeonic uppercase text-[134px]">
                    <div className="col  ">
                      {isSmallScreen && isMediumWidth ? (
                        <>
                          <h6 className="md:text-left    xl:w-full lg:whitespace-nowrap lg:text-8xl md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ">
                            <div>Data-driven</div>
                          </h6>
                          <h6 className="md:text-left text-center  lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0">
                            <div>Solutions</div>
                          </h6>
                          <h6 className="md:text-left text-center   lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0">
                            <div> Shaping your</div>
                          </h6>
                          <h6 className="md:text-left text-center lg:whitespace-nowrap   xl:w-full lg:text-8xl w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0">
                            <div>digital Success</div>
                          </h6>
                        </>
                      ) : (
                        <>
                          <h6 className="md:text-left  xl:text-9xl  xl:w-full lg:whitespace-nowrap lg:text-8xl md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ">
                            <div>Data-driven</div>
                          </h6>
                          <h6 className="md:text-left text-center xl:text-9xl lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0">
                            <div>Solutions</div>
                          </h6>
                          <h6 className="md:text-left text-center xl:text-9xl  lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0">
                            <div> Shaping your</div>
                          </h6>
                          <h6 className="md:text-left text-center lg:whitespace-nowrap  xl:text-9xl   xl:w-full lg:text-8xl w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0">
                            <div>digital Success</div>
                          </h6>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div
              
              className="hidden hover:cursor-pointer lg:inline-block top-1/2 absolute px-0 my-60"
            >
              <img
            onClick={handleClicktohowethink}
            className="lg:ml-10 w-10 h-10 rounded-full bg-gray-400 cursor-pointer animate-bounce"
            src={img}
            alt=""
          />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
