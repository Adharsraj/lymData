import React from "react";
import arrowright from "../../assets/assets/asset 60.svg";
import img from "../../assets/assets/contactusimg.png";
const Contact = () => {
  return (
    <div className="bg-[#F4F4F4]">
      {/* <div className="max-w-[1640px]  mx-auto p-4 text-[#040404] ">
        <div className="relative overflow-hidden h md:h-[700px]  xl:h-screen mt-12">
            <div className="hidden md:flex justify-between items-center">
            <h1 className="lg:text-9xl    lg:leading-[105px] text-5xl leading-[45px] mt-20 z-50 ">
            ready when <br /> you are—It’s time <br /> to accelerate
          </h1>
          <iframe className="mt-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991079733446!2d76.29998647382259!3d10.017594172734224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2e430b5527%3A0x19cf2b36ac16c7f8!2sDotspace%20Edapally!5e0!3m2!1sen!2sin!4v1689835845317!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          <h1 className=" md:hidden lg:text-9xl absolute lg:leading-[105px] text-5xl  leading-[45px] mt-20 z-50 ">
            ready when <br /> you are—It’s time <br /> to accelerate
          </h1>
          <img
            src={img}
            className=" hidden md:flex lg:scale-150 pt- opacity-30  "
            alt=""
            srcset=""
          />
          <div className="flex group absolute  hover:cursor-pointer gap-4 top-[270px] lg:top-[500px] xl:top-[370px] w-full mb-10 md:mt-5   mx-auto">
            <h1 className="p-1  mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
              Get in touch
            </h1>
            <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
              <img src={arrowright} />
            </h1>
          </div>
          <div className="absolute mt-[400px] md:mt-[-310px] flex gap-3 lg:mt-[-300px] xl:mt-[-410px]">
            <h2 className="w-10 h-10  rounded-full border flex items-center justify-center border-black">
              +
            </h2>
            <h2 className="w-10 h-10 rounded-full border border-black border-dashed flex items-center justify-center">
              *
            </h2>
          </div>
          <div className="mt-[480px] md:mt-[-270px] lg:mt-[-200px] xl:mt-[-360px] ">
            <h2>you can also send us a plain email if you want too ;)</h2>
            <h2 className="text-2xl mt-2">info@lymdata.com</h2>
          </div>
        </div>
      </div> */}

      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] ">
        {/* <div className="flex flex-col md:flex-row gap-10 align-middle items-center justify-between px-10"> */}

        <div className="  md:px-20">
          <div className="mt-10 lg:mt-16   ">
            <h1 className="text-5xl  lg:text-8xl xxl:text-9xl ">
              ready when <br /> you are—It’s time <br /> to accelerate{" "}
            </h1>

            <div className="flex group   hover:cursor-pointer gap-4 top-[270px] lg:top-[500px] xl:top-[370px] w-full mb-10 md:mt-5   mx-auto">
              <h1 className="p-1  mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                Get in touch
              </h1>
              <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
                <img src={arrowright} />
              </h1>
            </div>
            <div></div>
            <div className="  flex gap-3 ">
              <h2 className="w-10 h-10  rounded-full border flex items-center justify-center border-black">
                +
              </h2>
              <h2 className="w-10 h-10 rounded-full border border-black border-dashed flex items-center justify-center">
                *
              </h2>
            </div>
            <h1 className="mt-5 mb-5">
              {" "}
              you can also send us a plain email if you want too ;) <br />
              info@dhnn.com
            </h1>
          </div>
        </div>
        <div className="md:flex justify-around items-center md:px-10 xxl:px-16 ">
          <div className="md:w-[400px] xxl:w-full">
            <h1 className="mt-5 md:mt-0">
            Dotspace Edapally <br />
Total Tower Near Devankulangara <br /> Behind Changapuzha Park <br /> Elamakara, Edappally, Kochi, Kerala <br /> 682024
            </h1>
          </div>
          <div>
            <iframe
              className="  md w-full xxl:w-[500px] h-[300px] lg:mt-16  mt-10 mb-10 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991079733446!2d76.29998647382259!3d10.017594172734224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2e430b5527%3A0x19cf2b36ac16c7f8!2sDotspace%20Edapally!5e0!3m2!1sen!2sin!4v1689835845317!5m2!1sen!2sin"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
