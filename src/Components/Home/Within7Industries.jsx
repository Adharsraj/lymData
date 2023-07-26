import React, { useState } from "react";
import { sevenIndustries } from "../../assets/Data/data";

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
      title: "E-commerce",
      details:
        "This industry involves buying and selling products or services over the internet. It encompasses online stores, payment gateways, customer support, and digital marketing to facilitate smooth online transactions.",
    },
    {
      id: 2,
      title: "Finance and Banking",
      details:
        "This sector deals with financial services, including banking, investments, loans, and asset management. Digital solutions in finance enable secure transactions, mobile banking, and personalized financial advice.",
    },
    {
      id: 3,
      title: "Healthcare",
      details:
        "The healthcare industry focuses on providing medical services, treatment, and support to patients. Digital solutions in healthcare aim to improve patient care, enhance diagnostics, and streamline administrative processes.",
    },
    {
      id: 4,
      title: "Travel and Hospitality",
      details:
        "This sector revolves around travel services, such as hotels, airlines, tour operators, and travel agencies. Digital technologies play a significant role in online booking systems and personalized travel experiences.",
    },
    {
      id: 5,
      title: "Retail",
      details:
        "Retail involves the sale of goods directly to consumers, either through physical stores or online platforms. Digital solutions in retail include e-commerce platforms, inventory management, and customer analytics.",
    },
    {
      id: 6,
      title: "Entertainment",
      details:
        "The entertainment industry encompasses various forms of media and entertainment, including movies, music, gaming, and digital content creation. Digital agencies in entertainment may focus on marketing, content production, and audience engagement.",
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
    <div id="withinseven" className="max-w-[1840px] mx-auto overflow-hidden">
      <div className=" hidden md:block">
        <h1 className="font-mono text-xs ml-8 lg:mt-10 mb-10">
          Within these 7 industries
        </h1>

        {sevenIndustries.map((m, index) => (
          <div
            key={m.id}
            id={m.id}
            className={`md:flex group md:px-8 w-full h-[320px] m hover:cursor-pointer lg:text-lg lg:py-8 xl:py-16 ${
              hoveredId === m.id ? "bg-image" : ""
            } ${index !== sevenIndustries.length - 1 ? "border-b" : ""}`}
            onMouseEnter={() => handleMouseEnter(m.id)}
            onMouseLeave={handleMouseLeave}
            style={
              hoveredId === m.id
                ? {
                    backgroundImage: `url(${m.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : null
            }
          >
            <div>
              <h1 className="mt-3 mb-3 group-hover:text-white md:w-[200px] lg:w-[320px] xl:w-[500px] font-semibold">
                {m.head1}
              </h1>
            </div>
            <div>
              <h1 className="group-hover:text-white">{m.head2}</h1>
              <div className="flex xl:gap-1 gap-4 w-full mt-5 md:w-[200px] items-center xl:w-[560px]">
                <h1 className="p-4 xl:w-[160px] text-base border rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]">
                  What we do
                </h1>
                <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]">
                  <img
                    className="lg:w-56"
                    src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg"
                    alt="Arrow Right"
                  />
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
                  <img
                    className="lg:w-56"
                    src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg"
                  />
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-buttons flex gap-5">
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]"
              onClick={prevSlide}
            >
              <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187630/assets/assets/asset_59_wsgb7l.svg" />
            </button>
            <div className="text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center">
              {carouselData[currentSlide].id}/{carouselData.length}
            </div>
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]"
              onClick={nextSlide}
            >
              <img src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Within7Industriesdhn;
