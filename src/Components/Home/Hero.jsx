import gsap from "gsap";
import React, { useEffect } from "react";
import giphy from '../../assets/gif/giphy.webp'
const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.from("p", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    tl.from("h3", {
      y: 100,
      ease: "power4.inOut",

      stagger: 1.5,
    });

    gsap.fromTo(
      "#box",
      {
        x: 270,
        y: 50,
        rotate: 0,
      },
      {
        x: 270,
        y: 80,
        rotate: 0,
        delay: 1,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.fromTo(
      "#box1",
      {
        x: 270,
        y: 50,
        rotate: 0,
      },
      {
        x: 270,
        y: 80,
        rotate: 0,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo(
      "#box2",
      {
        x: 270,
        y: 50,
        rotate: 0,
      },
      {
        x: 270,
        y: 80,
        rotate: 0,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
      }
    );

    const box = document.getElementById("box");
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");

    box.addEventListener("mouseenter", () => {
      gsap.to("#box", {
        x: 270,
        y: 90,
        yoyo: true,
        background: "gray",
      });

      gsap.to("#box", {
        scale: 1.4,
        duration: 0.3,
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to("#box", {
        x: 270,
        y: 100,
        duration: 1.3,
        background: "transparent",
      });

      gsap.to("#box", {
        scale: 1, // Reset the size
        duration: 2.3,
      });
    });

    box1.addEventListener("mouseenter", () => {
      gsap.to("#box1", {
        x: 270,
        y: 90,
        yoyo: true,
        background: "gray",
      });

      gsap.to("#box1", {
        scale: 1.4,
        duration: 0.3,
      });
    });

    box1.addEventListener("mouseleave", () => {
      gsap.to("#box1", {
        x: 270,
        y: 100,
        duration: 1.3,
        background: "transparent",
      });

      gsap.to("#box1", {
        scale: 1,
        duration: 2.3,
      });
    });

    box2.addEventListener("mouseenter", () => {
      gsap.to("#box2", {
        x: 270,
        y: 90,
        yoyo: true,
        background: "gray",
      });

      gsap.to("#box2", {
        scale: 1.4,
        duration: 0.3,
      });
    });

    box2.addEventListener("mouseleave", () => {
      gsap.to("#box2", {
        x: 270,
        y: 100,
        duration: 1.3,
        background: "transparent",
      });

      gsap.to("#box2", {
        scale: 1, // Reset the size
        duration: 2.3,
      });
    });

    // if (divRef.current) {
    //   gsap.to(divRef.current, { clipPath: 'circle(50% at 50% 100% )', duration: 1 });
    // }
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

  return (
    <>
      <div className=" bg-black text-white">
        <div className="max-w-[1640px] mx-auto  mt-[-10px]    md:mt-[-16px] lg:mt-[-16px]  ">
          <div className="">
            <h3
              className="flex justify-center items-center 
            border md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]
             rounded-full bg-grey hover:text-2xl duration-200 absolute md:top-[-50px] md:left-[-160px] 
             lg:top-6 lg:left-6 z-50 text-white left-[-210px] top-[10px] w-[85px] h-[85px]"
              id="box"
            >
              Home
            </h3>

            <h3
              className="flex justify-center items-center 
             border md:w-[150px] md:h-[150px] lg:w-[200px]  lg:h-[200px] rounded-full bg-grey
              md:flex  hover:text-2xl duration-200 absolute lg:top-60 lg:left-[386px] md:top-[100px]
               md:left-[180px] z-50 text-white left-[-50px] w-[85px] h-[85px]"
              id="box1"
            >
              About
            </h3>

            <h3
              className=" flex text-center  left-[-210px] top-[180px] 
             border md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-grey md:flex
              justify-center items-center hover:text-2xl duration-200 absolute lg:top-[380px] 
              lg:left-[-100px] md:top-[160px] md:left-[-110px] z-50 text-white w-[85px] h-[85px]"
              id="box2"
            >
              Works
            </h3>

            <div className=" ">
              <section className="clip-text-video  ">
                <img
                  className="xl:h-[520px] max-w-[1640px] xl:mt-[125px] opacity-80 lg:h-[390px]  md:mt-[90px] md:h-[280px]   h-[280px] mt-[88px]   w-full px-6  z-0"
                  id="running"
                  src={giphy}
                  alt="GIF"
                />

                <div className="clip-text-video__text layer flex items-center text-center z-0 ">
                  <div className="overlay  flex flex-col md:justify-center font-aeonic uppercase text-[134px]">
                    <div className="col  ">
                      <h6 className="md:text-left   xl:w-full xl:text-[134px] lg:text-[100px]  md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ">
                        <div>Data-driven</div>
                      </h6>
                      <h6 className="md:text-left text-center  xl:w-full xl:text-[134px] lg:text-[100px] md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0">
                        <div>Solutions</div>
                      </h6>
                      <h6 className="md:text-left text-center   xl:w-[1100px] xl:text-[134px] lg:text-[80px] md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0">
                        <div> Shaping your</div>
                      </h6>
                      <h6 className="md:text-left text-center xl:w-[1200px]   xl:text-[124px]   lg:text-[83px] w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0">
                        <div>digital Success</div>
                      </h6>

                    
                    </div>
                    {/* <div className="col">
                      <h6>
                        <div>
                          <span>click</span>anywhere to continue
                        </div>
                      </h6>
                    </div> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
