import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // heading

  const [showWowText, setShowWowText] = useState(false);

  useEffect(() => {
    const checkScreenHeight = () => {
      const screenHeight = window.innerHeight;

      // Check if the screen height is greater than 1000
      if (screenHeight > 1000) {
        setShowWowText(true);
      } else {
        setShowWowText(false);
      }
    };

    // Check the screen height when the component mounts
    checkScreenHeight();

    // Add an event listener to check when the window is resized
    window.addEventListener("resize", checkScreenHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenHeight);
    };
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill;
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scoll-section-inner h-screen w-[400vw] flex flex-row relative"
          >
            <div className="scroll-section h-screen bg-black  w-screen flex justify-center items-center">
              <div className="fixed headerz top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-400 text-gray-300">
                <div className="max-w-[1340px] mx-auto overflow-hidden">
                  <div className="">
                    <div className=" hider">
                      {showWowText ? (
                        <section className="max-w-[1640px]">
                          <div className=" flex items-center text-center z-0">
                            <div className="  flex flex-col md:justify-center font-aeonic uppercase text-[134px] mx-auto">
                              <div className="col  ">
                                <h6 className="md:text-left whitespace-nowrap   xl:w-full xl:text-[134px] lg:text-[100px]  md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ">
                                  <div>Data-driven</div>
                                </h6>
                                <h6 className="md:text-left text-center whitespace-nowrap  xl:w-full xl:text-[134px] lg:text-[100px] md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0">
                                  <div>Solutions</div>
                                </h6>
                                <h6 className="md:text-left text-center whitespace-nowrap   xl:w-[1000px] xl:text-[134px] lg:text-[80px] md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0">
                                  <div> Shaping your</div>
                                </h6>
                                <h6 className="md:text-left text-center xl:w-full  whitespace-nowrap  xl:text-[134px]   lg:text-[83px] w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0">
                                  <div>digital Success</div>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </section>
                      ) : (
                        <section className="max-w-[1640px]  ">
                          <div className=" hider  flex items-center text-center z-0 md:min-h-screen  mx-auto ">
                            <div className=" flex  flex-col md:justify-center font-aeonic uppercase   mx-auto">
                              <div className=" driven">
                                <h5 className="md:text-left   xl:w-full whitespace-nowrap xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full mx-auto md:ml-0">
                                  <div>
                                    <span className="">Data-</span>
                                    <span className="">driven</span>
                                  </div>
                                </h5>
                                <h5 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
                                  <div>Solutions</div>
                                </h5>
                                <h5 className="md:text-left whitespace-nowrap text-center  xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
                                  <div> Shaping your</div>
                                </h5>
                                <h5 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] w-full mx-auto md:text-7xl text-4xl md:w-full md:ml-0">
                                  <div>
                                    {" "}
                                    <span className="">digital</span> Success
                                  </div>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </section>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-section h-screen bg-black w-screen flex justify-center items-center">
              <h3>
                section2
                <div className="bg-green-500 h-[600px] w-[1000px]">
                  <img
                    src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1705302891/LYMDATALABS/Pages/Home/production_id_49748841080p-ezgif.com-optimize_antwe1.gif"
                    alt=""
                  />
                </div>
              </h3>
            </div>
            <div className="scroll-section h-screen bg-slate-600 w-screen flex justify-center items-center">
              <h3>section3</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;
