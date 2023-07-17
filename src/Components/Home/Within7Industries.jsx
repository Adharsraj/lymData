import React, { useState } from "react";
import { sevenIndustries } from "../../assets/Data/data";

const Within7Industries = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 font-roboto mb-20 bg-[#F8FAFC] text-gray-800">
      {sevenIndustries.map((m) => (
        <div
          key={m.id}
          className="md:flex group justify-between border-b mb-6"
          onMouseEnter={() => handleMouseEnter(m.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: hoveredItem === m.id ? `url(${m.img})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0s",
          }}
        >
          <div>
            <h1 className="text-2xl font-bold mb-4 md:w-[350px] group-hover:text-white lg:px-16 lg:w-[700px]">
              {m.head1}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-xl group-hover:text-white">{m.head2}</h1>
            <h1 className="p-2 bg-black rounded-full mt-3 w-[130px] group-hover:text-white mb-10 text-white">
              Find out more
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Within7Industries;
