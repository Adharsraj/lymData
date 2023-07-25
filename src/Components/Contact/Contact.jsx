import React from "react";
const Contact = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] ">
        <div className="  md:px-20">
          <div className="mt-10 lg:mt-16   ">
            <h1 className="text-5xl mt-32  lg:text-8xl xxl:text-9xl ">
              ready when <br /> you are—It’s time <br /> to accelerate{" "}
            </h1>
            <div className="flex group   hover:cursor-pointer gap-4 top-[270px] lg:top-[500px] xl:top-[370px] w-full mb-10 md:mt-5   mx-auto">
              <h1 className="p-1  mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                Get in touch
              </h1>
              <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
                <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg" />
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
              you can also send us a plain email if you want too  <br />
              info@dhnn.com
            </h1>
          </div>
        </div>
        <div className="md:flex justify-around items-center bg-[#262626] text-white lg:rounded-3xl md:px-10 xxl:px-16 ">
          <div className="md:w-[400px] xxl:w-full">
            <h1 className="mt-5 md:mt-0">
              4th floor <br />
              Dotspace Business Center <br />
              Total Tower Near Devankulangara <br /> Behind Changapuzha Park{" "}
              <br /> Elamakara, Edappally, Kochi, Kerala <br /> 682024
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
        <div className="md:px-16 xxl:px-28 mt-20 lg:mb-16  ">
          <div className="lg:border border-black h-96 rounded-ss-3xl rounded-ee-3xl ">
            <div className="flex flex-col items-center text-center justify-around align-middle">
              <h1 className="text-3xl mb-4 mt-4">our services</h1>
              <h1 className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus, esse!
              </h1>
              <div className="flex w-full justify-between xxl:justify-center lg:px-2   gap-1 lg:gap-10 mt-10">
              <div className=" bg-white  px-4 lg:p-12 lg:px-14 lg:rounded-3xl">
                 <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690262029/digital-transformation_ui58a6.png" alt="" srcset="" />
                  <h1>text for it </h1>
                </div>
                <div className=" bg-white  px-4 lg:p-12 lg:px-14 lg:rounded-3xl">
                <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690262029/business_solutions_gatadh.png" alt="" srcset="" />

                  <h1>text for it </h1>
                </div>
                <div className=" bg-white  px-4 lg:p-12 lg:px-14 lg:rounded-3xl">
                <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690262029/design_engeniering_sjlecv.png" alt="" srcset="" />

                  <h1>text for it </h1>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
