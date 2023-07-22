import React from "react";
import img6 from "../../assets/assets (3)/asset 38.svg";
import { fourCultures } from "../../assets/Data/data";

const FourCultures = () => {
  return (
    <div id="fourculture" className="bg-[#282728]">
      <div className="max-w-[1640px] mt-[-150px] text-white  mx-auto p-2  ">
        <h2 className=" invisible mt-40 mb-32">gh</h2>
        {/* mobile view */}
        <div className="mb-32 md:hidden ">
          {fourCultures.map((m) => (
            <div id={m.id} className="mb-16">
              <img src={m.img} alt="star1" className="" />
              <h2 className="text-4xl mt-4 mb-4 border-t pt-5">
                {" "}
                <span className="text-base mr-4">0{m.id}</span> {m.head1}
              </h2>
              <h1>{m.head2}</h1>
            </div>
          ))}
        </div>

        {/* Lap view */}
        <div className="mb-3 hidden md:block">
          {fourCultures.map((m) => (
            <div id={m.id} className="mb-16 flex gap-6 lg:grid lg:grid-cols-3 lg:px-3 xxl:px-24 xxl:mb-28">
              <h2 className="text-2xl  lg:text-3xl xxl:text-4xl  mb-4 mt-[-20px]  border-spacing-3 pt-5 w-64 lg:w-96  ">
                <span className="border-t  pt-2">

                <span className="text-base mr-4   ">0{m.id}</span>{" "}
                <span className=" border-spacing-5">{m.head1}</span>
                </span>
              </h2>
              <img src={m.img} className="" alt="star1" />
              <h1 className="w-80 lg:w-full lg:text-xl xxl:text-2xl border-t pt-2">{m.head2}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourCultures;
