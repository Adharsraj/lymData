import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";

const Cultureandmore = () => {
  const handleClicktofourculture = () => {
    const component2Element = document.getElementById("fourculture");
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
        y: 80,
        rotate: 0,
        delay: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px] p-4 overflow-hidden  mx-auto  font-dm  md:text-xl ">
        <div className="lg:mt-20">
          <div className="md:hidden">
            <div className="flex justify-between align-middle items-center">
              <h1>Culture @ LYM</h1>
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                className="invisible"
                alt=""
              />
            </div>

            <div className="text-[25px] leading-10  ">
              <h1>
                Organizations exist to carry out things that individuals
                couldn’t achieve by themselves. We work together because it’s
                the onlyway to work things out.
              </h1>
              <h1 className="mt-6">
              LYM Data Labs exists to transform our surroundings and ourselves through
                design, empathy and a restless quest for quality
              </h1>
            </div>
          </div>

          <div className="hidden md:block mt-20 relative">
            <div className="flex justify-between xl:px-5  align-middle ">
              <h1 className="text-sm">Culture @ LYM</h1>
              <h1 className="text-[38px] font-extrabold  w-[600px] lg:w-[640px] lg:text-3xl leading-10">
                Organizations exist to carry out things that individuals
                couldn’t achieve by themselves. We work together because it’s
                the onlyway to work things out.
                <h1 className="mt-6">
                  LYM Data Labs exists to transform our surroundings and ourselves
                  through design, empathy and a restless quest for quality
                </h1>
              </h1>
              <img
                className=" hover:animate-spin invisible"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                alt=""
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>

        <div className="md:grid md:mt-20 mt-10 md:grid-cols-2 ">
          <img
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417461/LYMDATALABS/Pages/Culture/asset_4_udsfcg_dzpltd.jpg"
            className="md:mt-40 md:ml-0 lg:h-[700px] md:w-[300px] lg:w-[400px] ml-20 lg:ml-12"
            alt=""
            srcset=""
          />
          <div className="">
            <img
              src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417519/LYMDATALABS/Pages/Culture/asset_5_ierey2_cqluoa.jpg"
              className="mt-10 ml-[-30px] md:ml-10 "
              alt=""
              srcset=""
            />
            <div className=" md:ml-10 xxl:gap-6 lg:mt-14 lg:flex lg:gap-3 lg:items-center">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417569/LYMDATALABS/Pages/Culture/asset_33_b9ifoq_asto4x.svg"
                className="mt-10 mb-10 "
                alt="gjj"
              />
              <h1 className="">
                Our craft is a combination of robust methodology, an open
                mindset and a collaborative spirit that brings out the best in
                every person in our team.
              </h1>
            </div>
            <div className="md:ml-10 lg:mt-14 xxl:gap-6 lg:flex lg:items-center lg:gap-3">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417611/LYMDATALABS/Pages/Culture/asset_34_xw8ije_i7wiln.svg"
                className="mb-10 mt-10"
                alt=""
                srcset=""
              />
              <h1>
                DHNN™ is best thought of as a collective brain, formed by a
                diverse group of people who bring years of experience,
                dedication and commitment to our daily work.
              </h1>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2   ">
          <div>
            <div className="lg:flex lg:gap-3 xxl:gap-6 lg:ml-10 lg:items-center lg:mt-52">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417648/LYMDATALABS/Pages/Culture/asset_35_rrxuyo_ptdgpo.svg"
                className="mb-10 mt-10"
                alt=""
              />

              <h1 className="lg:w-[350px] xxl:w-[500px]">
                We have invested a lot of time and effort into assembling the
                greatest possible team of humans, whose superpowers are the best
                way to define what we’re all about:
              </h1>
            </div>
            <div
              onClick={handleClicktofourculture}
              className=" hidden lg:inline-block absolute ml-5  top-[2100px] left-0 px-3 "
            >
              <button
                id="arrowcontainer"
                className="md:h-12 h-10 w-5   bg-gradient-to-r from-indigo-400 to-cyan-400  flex items-end justify-center rounded-full"
              ></button>
              <h1
                id="arrowbottom"
                className="md:h-16 h-32 mt-[-115px] w-5 bg-gradient-to-r from-indigo-400 to-cyan-400 z-50 rounded-full flex items-end justify-center"
              >
                <FaLongArrowAltDown color="black" size={38} />
              </h1>
            </div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417702/LYMDATALABS/Pages/Culture/asset_6_rq5v6i_rarnio.jpg"
              className="ml-14 lg:ml-10 md:ml-0 md:mt-40  mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultureandmore;
