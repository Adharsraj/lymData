import React from "react";
import arrowright from "../../assets/assets/asset 60.svg";
import img from "../../assets/assets/contactusimg.png";
const Contact = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]  mx-auto p-4 text-[#040404] ">
        <div className="relative overflow-hidden h-screen md:h-[800px] lg:h-screen mt-12">
            
          <h1 className="lg:text-9xl absolute lg:leading-[105px] text-5xl leading-[45px] mt-20 z-50 ">
            ready when <br /> you are—It’s time <br /> to accelerate
          </h1>
          <img
            src={img}
            className=" hidden md:flex scale-150 pt-52 opacity-30  "
            alt=""
            srcset=""
          />
          <div className="flex group absolute  hover:cursor-pointer gap-4 top-[270px] lg:top-[400px] w-full mb-10    mx-auto">
            <h1 className="p-1  mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
              Get in touch
            </h1>
            <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
              <img src={arrowright} />
            </h1>
          </div>
          <div className="absolute mt-[400px] md:mt-[50px] flex gap-3 lg:mt-[-130px] xl:mt-[-290px]">
            <h2 className="w-10 h-10  rounded-full border flex items-center justify-center border-black">
              +
            </h2>
            <h2 className="w-10 h-10 rounded-full border border-black border-dashed flex items-center justify-center">
              *
            </h2>
          </div>
          <div className="mt-[480px] md:mt-[100px] lg:mt-[-90px] xl:mt-[-240px] ">
            <h2>you can also send us a plain email if you want too ;)</h2>
            <h2 className="text-2xl mt-2">info@lymdata.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
