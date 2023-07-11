import gsap from "gsap";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.from("p", {
      y: 100,
      opacity: 0,
      stagger: 0.5,
    });

    tl.from("h3", {
      y: 100,
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
  }, []);

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-2 font-roboto  bg-black md:mt-[-6px] lg:mt-[-16px] ">
        <div className="mt-10 ">
          <h3
            className=" hidden border md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-grey md:flex justify-center items-center hover:text-2xl duration-200 absolute md:top-[-50px] md:left-[-160px] lg:top-6 lg:left-6 z-50 text-white"
            id="box"
          >
            h0ver
          </h3>

          <h3
            className=" hidden border md:w-[150px] md:h-[150px] lg:w-[200px]  lg:h-[200px] rounded-full bg-grey md:flex justify-center items-center hover:text-2xl duration-200 absolute lg:top-60 lg:left-[386px] md:top-[100px] md:left-[180px] z-50 text-white"
            id="box1"
          >
            h0ver
          </h3>

          <h3
            className=" hidden border md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-grey md:flex justify-center items-center hover:text-2xl duration-200 absolute lg:top-[480px] lg:left-[-100px] md:top-[160px] md:left-[-110px] z-50 text-white"
            id="box2"
          >
            h0ver
          </h3>

          <div className="lg:mt-[92px] mt-20">
            <section className="clip-text-video ">
              <img
                className="lg:h-[500px] lg:mt-[207px] md:mt-[90px] md:h-[280px]   h-[180px] mt-[88px]   w-full px-6  z-0"
                id="running"
                src="https://i.giphy.com/media/HkEDr0jVekaZO/giphy.webp"
                alt="GIF"
              />

              <div className="clip-text-video__text layer lg:mt-[200px] w-full  z-0 ">
                <p className="lg:text-9xl lg:w-[990px] md:text-7xl  text-4xl font-extrabold font-zuume mx-auto mt-30 ml-  relative">
                  "Transforming
                </p>
                <p className="lg:text-9xl lg:w-[990px] md:text-7xl text-4xl  font-extrabold font-zuume mx-auto relative">
                  visions
                </p>
                <p className="lg:text-9xl lg:w-[990px] md:text-7xl text-4xl   font-extrabold font-zuume mx-auto relative">
                  Into captivating
                </p>
                <p className="lg:text-9xl lg:w-[990px] md:text-7xl text-4xl   mb-10 font-extrabold font-zuume mx-auto relative">
                  Beauty"
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-white"></div>
    </>
  );
};

export default Hero;
