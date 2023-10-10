import gsap from "gsap";
import React, { useEffect, useState } from "react";
import giphy from "../../assets/gif/giphy.webp";
import img from '../../assets/Images/ardwn.png'

const Hero = ({ showImage }) => {
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

    // box.addEventListener("mouseenter", () => {
    //   gsap.to("#box", {
    //     x: 270,
    //     y: 90,
    //     yoyo: true,
    //     background: "gray",
    //   });

    //   gsap.to("#box", {
    //     scale: 1.4,
    //     duration: 0.3,
    //   });
    // });

    // box.addEventListener("mouseleave", () => {
    //   gsap.to("#box", {
    //     x: 270,
    //     y: 100,
    //     duration: 1.3,
    //     background: "transparent",
    //   });

    //   gsap.to("#box", {
    //     scale: 1, // Reset the size
    //     duration: 2.3,
    //   });
    // });

    // box1.addEventListener("mouseenter", () => {
    //   gsap.to("#box1", {
    //     x: 270,
    //     y: 90,
    //     yoyo: true,
    //     background: "gray",
    //   });

    //   gsap.to("#box1", {
    //     scale: 1.4,
    //     duration: 0.3,
    //   });
    // });

    // box1.addEventListener("mouseleave", () => {
    //   gsap.to("#box1", {
    //     x: 270,
    //     y: 100,
    //     duration: 1.3,
    //     background: "transparent",
    //   });

    //   gsap.to("#box1", {
    //     scale: 1,
    //     duration: 2.3,
    //   });
    // });

    // box2.addEventListener("mouseenter", () => {
    //   gsap.to("#box2", {
    //     x: 270,
    //     y: 90,
    //     yoyo: true,
    //     background: "gray",
    //   });

    //   gsap.to("#box2", {
    //     scale: 1.4,
    //     duration: 0.3,
    //   });
    // });

    // box2.addEventListener("mouseleave", () => {
    //   gsap.to("#box2", {
    //     x: 270,
    //     y: 100,
    //     duration: 1.3,
    //     background: "transparent",
    //   });

    //   gsap.to("#box2", {
    //     scale: 1, // Reset the size
    //     duration: 2.3,
    //   });
    // });

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
    if (showImage) {
      setTimeout(() => {
        setShowImage(true);
      }, 1000);
    }

    setTimeout(() => {
      setDefault(true);
    }, 1000);
  }, [showImage]);

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
    window.addEventListener('resize', checkScreenHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenHeight);
    };
  }, []);

  return (
    <>
      <div className=" bg-black text-white">
        <div className="max-w-[1640px] mx-auto ">
          <div className="">
            <div className=" ">
            {showWowText ?(
                  <section className="max-w-[1640px] ">
               
               <div className=" flex items-center text-center z-0 ">
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
                ):
              <section className="max-w-[1640px] ">
               
<div className="  flex items-center text-center z-0 md:min-h-screen  mx-auto ">
  <div className=" flex flex-col md:justify-center font-aeonic uppercase text-  mx-auto">
    <div className="col">
      <h6 className="md:text-left xl:w-full whitespace-nowrap xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full mx-auto md:ml-0">
        <div>Data-driven</div>
      </h6>
      <h6 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
        <div>Solutions</div>
      </h6>
      <h6 className="md:text-left whitespace-nowrap text-center  xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
        <div> Shaping your</div>
      </h6>
      <h6 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] w-full mx-auto md:text-7xl text-4xl md:w-full md:ml-0">
        <div>digital Success</div>
      </h6>
    </div>
  </div>
</div>

              </section>
}
            </div>
            <div
              
              className="hidden hover:cursor-pointer lg:inline-block top-1/2 absolute px-0 my-60"
            >
              <img
            onClick={handleClicktohowethink}
            className="lg:ml-10 w-14 h-14 rounded-full bg-gray-400 cursor-pointer animate-bounce"
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
