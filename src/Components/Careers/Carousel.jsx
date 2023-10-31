import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import img1 from "../../assets/Images/career1.jpeg";
import img2 from "../../assets/Images/career2.jpeg";
import img3 from "../../assets/Images/career3.jpeg";
import img4 from "../../assets/Images/career4.jpeg";
import img5 from "../../assets/Images/career5.jpeg";

const Carousel = () => {
    const swiperRef = useRef(null);

    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
  
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    useEffect(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    }, []);

  return (
    <>
      <div className="md:hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden ">

              <div className="flex pt-10 justify-center ">

            <h1 className="text-center mt-[-10px]  text-5xl">number</h1>
            <h1 className="text-center">/number</h1>
              </div>
              <div>
              <h1 className="text-left pl-10">dhnn</h1>

              </div>
              <div>
              <h1 className="text-left pl-10">text here</h1>

              </div>

              </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden ">

              <div className="flex pt-10 justify-center ">

            <h1 className="text-center mt-[-10px]  text-5xl">number</h1>
            <h1 className="text-center">/number</h1>
              </div>
              <div>
              <h1 className="text-left pl-10">dhnn</h1>

              </div>
              <div>
              <h1 className="text-left pl-10">text here</h1>

              </div>

              </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden ">

              <div className="flex pt-10 justify-center ">

            <h1 className="text-center mt-[-10px]  text-5xl">number</h1>
            <h1 className="text-center">/number</h1>
              </div>
              <div>
              <h1 className="text-left pl-10">dhnn</h1>

              </div>
              <div>
              <h1 className="text-left pl-10">text here</h1>

              </div>

              </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden ">

              <div className="flex pt-10 justify-center ">

            <h1 className="text-center mt-[-10px]  text-5xl">number</h1>
            <h1 className="text-center">/number</h1>
              </div>
              <div>
              <h1 className="text-left pl-10">dhnn</h1>

              </div>
              <div>
              <h1 className="text-left pl-10">text here</h1>

              </div>

              </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex flex-col justify-around    rounded-full min-h-[17rem] overflow-hidden ">

              <div className="flex pt-10 justify-center ">

            <h1 className="text-center mt-[-10px]  text-5xl">number</h1>
            <h1 className="text-center">/number</h1>
              </div>
              <div>
              <h1 className="text-left pl-10">dhnn</h1>

              </div>
              <div>
              <h1 className="text-left pl-10">text here</h1>

              </div>

              </div>


          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:flex mt-20 w-full">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={0}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className=" flex justify-center items-center">
                <img src={img2} alt="img2"/>
              </div>
              <div className=" flex flex-col justify-around some-ele">
                <div className="flex">
                <h1 className="font-bold text-9xl">01</h1>
                <h1 className="font-light text-[20px] mt-3">/05</h1>
                </div>
                <h1 className="font-semibold text-2xl">People <br/>Meeting</h1>
                <h1>of publishers say thay mobile <br/>content boosted their positive <br/>feedback.</h1>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className=" flex justify-center items-center">
               <img src={img1} alt="img1"/>
              </div>
              <div className=" flex flex-col justify-around some-ele">
              <div className="flex">
                <h1 className="font-bold text-9xl">02</h1>
                <h1 className="font-light text-[20px] mt-3">/05</h1>
                </div>
                <h1 className="font-semibold text-2xl">Meeting our People <br/>& Culture team</h1>
                <h1>Introductions, getting to know each <br/>other and getting acquainted with <br/>the process.</h1>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className="flex justify-center items-center">
                <img src={img5} alt="img5"/>
              </div>
              <div className="flex flex-col justify-around some-ele">
              <div className="flex">
                <h1 className="font-bold text-9xl">03</h1>
                <h1 className="font-light text-[20px] mt-3">/05</h1>
                </div>
                <h1 className="font-semibold text-2xl">DHNN Challenge</h1>
                <h1>Interviews are good for you to tell <br/>us about yourself, but we much <br/>rather see you in action.</h1>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className="flex justify-center items-center">
                <img src={img4} alt="img4"/>
              </div>
              <div className="flex flex-col justify-around some-ele">
              <div className="flex">
                <h1 className="font-bold text-9xl">04</h1>
                <h1 className="font-light text-[20px] mt-3">/05</h1>
                </div>
                <h1 className="font-semibold text-2xl">Meeting your <br/>future Lead</h1>
                <h1>In this stage, you get to share your <br/>interests and ideas with the area's <br/>lead.</h1>

              </div>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="md:grid md:grid-cols-2 bg-gray-100 border border-black min-h-[15rem] md:min-h-[20rem] lg:min-h-[27rem]  md:w-[] rounded-full">
              <div className="flex justify-center items-center">
              <img src={img3} alt="img3"/>
              </div>
              <div className="flex flex-col justify-around some-ele">
              <div className="flex">
                <h1 className="font-bold text-9xl">05</h1>
                <h1 className="font-light text-[20px] mt-3">/05</h1>
                </div>
                <h1 className="font-semibold text-2xl">DHNN Proposal</h1>
                <h1>Finally, we'll send a proposal that <br/>we crafted specially for you. We <br/>hope you say yes!</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-20 p-2 justify-center lg:ml-[-470px] lg:gap-3 lg:mb-10 lg:mt-10 ">
        <button
          onClick={goPrev}
          className="bg-black flex justify-center items-center w-14 h-14 rounded-full"
        >
          <ArrowLeftOutlined className="text-white" />
        </button>
        <button
          onClick={goNext}
          className="bg-black flex justify-center items-center w-14 h-14 rounded-full"
        >
          <ArrowRightOutlined className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Carousel;