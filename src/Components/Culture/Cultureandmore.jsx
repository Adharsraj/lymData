import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import img1 from "../../assets/Images/About1.png"
import img2 from "../../assets/Images/About2.png"
import img3 from "../../assets/Images/About3.png"

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
            <div className="flex justify-between align-middle items-center some-element">
              <h1>Culture @ LYM</h1>
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg"
                className="invisible"
                alt=""
              />
            </div>

            <div className="text-[25px] leading-10  some-element">
              <h1>
              We believe that a human-centric approach to web design is essential for creating successful online experiences. By focusing on the needs and desires of real people, we can create websites that are intuitive, engaging, and easy to use. This not only leads to happier users, but also drives business results for our clients. 
              </h1>
              <h1 className="mt-6">
              The objective of LYM Data Labs is to bring about a change in our environment and individuals by means of design, understanding, and an unwavering pursuit of excellence. 
              </h1>
            </div>
          </div>

          <div className="hidden md:block mt-20 relative">
            <div className="flex justify-between xl:px-5  align-middle some-element">
              <h1 className="text-sm whitespace-nowrap">Culture @ LYM</h1>
              <h1 className="text-[38px] font-extrabold  w-[600px] lg:w-[640px] lg:text-3xl leading-10">
              We believe that a human-centric approach to web design is essential for creating successful online experiences. By focusing on the needs and desires of real people, we can create websites that are intuitive, engaging, and easy to use. This not only leads to happier users, but also drives business results for our clients.
                <h1 className="mt-6">
                The objective of LYM Data Labs is to bring about a change in our environment and individuals by means of design, understanding, and an unwavering pursuit of excellence. 
                </h1>
              </h1>
              <img
              src={img1}
              className="mt-10 ml-[-30px] md:ml-10 md:mt-20 md:w-[400px] md:h-[400px]"
              alt=""
              srcset=""
            />  
            </div>
          </div>
        </div>

        <div className="md:grid md:mt-10 mt-10 md:grid-cols-2 ">
          <img
            src={img2}
            className="md:mt-0 md:ml-10 lg:h-[350px] md:w-[300px] lg:w-[450px] ml-20 lg:ml-12"
            alt=""
            srcset=""
          />
          <div className="">
            
            <div className=" md:ml-10 xxl:gap-6 lg:mt-4 lg:flex lg:gap-3 lg:items-center">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417569/LYMDATALABS/Pages/Culture/asset_33_b9ifoq_asto4x.svg"
                className="mt-0 mb-0 "
                alt="gjj"
              />
              <h1 className="some-element">
              The approach we take in our work involves utilizing a strong methodology, being receptive to new ideas, and fostering a team environment that encourages everyone to perform at their highest level. 
              </h1>
            </div>
            <div className="md:ml-10 lg:mt-0 xxl:gap-6 lg:flex lg:items-center lg:gap-3">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417611/LYMDATALABS/Pages/Culture/asset_34_xw8ije_i7wiln.svg"
                className="mb-10 mt-10"
                alt=""
                srcset=""
              />
              <h1 className="some-element">
              The collective brain of LYMDATA LABS is comprised of a varied group of individuals who possess extensive experience, unwavering dedication, and a strong commitment to our daily tasks. 
              </h1>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2   ">
          <div>
            <div className="lg:flex lg:gap-3 xxl:gap-6 lg:ml-10 lg:items-center lg:mt-20">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417648/LYMDATALABS/Pages/Culture/asset_35_rrxuyo_ptdgpo.svg"
                className="mb-10 mt-10"
                alt=""
              />

              <h1 className="lg:w-[350px] xxl:w-[500px] some-element">
              Our team of exceptional individuals has been meticulously curated, with each member possessing unique superpowers that perfectly embody our mission. This has required a significant amount of dedication and hard work on our part. 
              </h1>
            </div>
            {/* <div
              
              className=" hidden lg:inline-block absolute ml-0  top-[2100px] left-0 px-0 "
            >
              <img
            onClick={handleClicktofourculture}
            className="lg:ml-0 w-[65px] cursor-pointer animate-bounce"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg"
            alt=""
          />
              
            </div> */}
          </div>

          <div>
            <img
              src={img3}
              className="ml-14 lg:ml-52 md:ml-0 md:mt-0 md:mb-44  mt-10 md:w-[350px] md:h-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultureandmore;
