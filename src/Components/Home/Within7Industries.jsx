import React, { useState } from "react";
import { sevenIndustries } from "../../assets/Data/data";
import arrowright from "../../assets/assets/asset 60.svg";
import arrowleft from "../../assets/assets/asset 59.svg";

const Within7Industriesdhn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const carouselData = [
    {
      id: 1,
      title: "Entertainment",
      details:
        "We help the entertainment industry adapt and adopt technology with the goal of creating compelling content like never before, and redefining what a digital product is, and how it transforms leisure time.   ",
    },
    {
      id: 2,
      title: "Media & OTT",
      details:
        "Audiences demand ever more content, delivered instantly, without pause or buffering, in higher and higher quality, and increasingly tailored to their personal taste. We help media companies reinvent themselves to stay relevant. ",
    },
    {
      id: 3,
      title: "Finance & Crypto   ",
      details:
        "As the term fintech becomes a part of our everyday conversations, individuals and organizations expect nothing but the very best from brands in this space, and we make sure they deliver.   ",
    },
    {
      id: 4,
      title: "Insurance & Insurtech  ",
      details:
        "The design of meaningful experiences is a key asset that we bring to the insurance industry, and it’s part of what helps organizations rethink their portfolio in a digitally enhanced world.  ",
    },
    {
      id: 5,
      title: "Energy & Industrials  ",
      details:
        " We help the industrial sector redesign their operations, and reshape how factories are organized to build and ship products in shorter and shorter cycles.",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="max-w-[1840px] mx-auto">
      <div className=" hidden md:block">
        <h1 className="font-mono text-xs ml-8 lg:mt-10 mb-10">
          Within these 7 industries
        </h1>

        {sevenIndustries.map((m) => (
          <div
            key={m.id}
            id={m.id}
            className={`md:flex group md:px-8 m hover:cursor-pointer  lg:text-lg lg:py-8 xl:py-16 border-b ${
              hoveredId === m.id ? "bg-image" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(m.id)}
            onMouseLeave={handleMouseLeave}
            style={
              hoveredId === m.id ? { backgroundImage: `url(${m.img})` } : null
            }
          >
            <div>
              <h1 className="mt-3 mb-3 group-hover:text-white md:w-[200px] lg:w-[350px] xl:w-[500px] font-semibold">
                {m.head1}
              </h1>
            </div>
            <div>
              <h1 className="group-hover:text-white">{m.head2}</h1>
              <div className="flex xl:gap-1 gap-4 w-full mt-5 md:w-[200px] items-center xl:w-[560px]">
                <h1 className="p-4 xl:w-[160px] text-base border rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]">
                  What we do
                </h1>
                <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]">
                  <img className="lg:w-56" src={arrowright} />
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="  md:hidden">
        <h1 className="font-mono text-xs ml-8 lg:mt-10 mb-10">
          Within these 7 industries
        </h1>

        <div className="carousel-container">
          <div className="carousel-slide flex flex-col justify-center ">
            <div className="w-[260px] h-[500px] mx-auto   text-center border-r border-l">
              <h1 className="mt-10 mb-20 text-left px-2 font-bold">
                {carouselData[currentSlide].title}
              </h1>
              <h2 className="mt-3  h-60 px-2">
                {carouselData[currentSlide].details}
              </h2>
              <div className="flex xl:gap-1 gap-4 w-full mt-10 md:w-[200px] justify-center items-center xl:w-[560px]">
                <h1 className="p-4 text-sm xl:w-[160px]  border rounded-full w-[140px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]">
                  Find out more
                </h1>
                <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]">
                  <img className="lg:w-56" src={arrowright} />
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-buttons flex gap-5">
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]"
              onClick={prevSlide}
            >
              <img src={arrowleft} />
            </button>
            <div className="text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center">
              {carouselData[currentSlide].id}/5
            </div>
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]"
              onClick={nextSlide}
            >
              <img src={arrowright} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Within7Industriesdhn;
