import React, { useState } from "react";
import { sevenIndustries } from "../../assets/Data/data";

const Within7ForService = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div id="withservices" className="max-w-[1740px] mx-auto overflow-hidden  ">
      <div>
        {sevenIndustries.map((m) => (
          <div
            key={m.id}
            id={m.id}
            className={`md:flex group md:px-8 w-full md:h-[320px] hover:cursor-pointer lg:text-lg lg:py-8 xl:py-16 border-b ${
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
                  <img
                    className="lg:w-56"
                    src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg"
                  />
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Within7ForService;
