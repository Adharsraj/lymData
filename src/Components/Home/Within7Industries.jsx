import React from "react";
import { sevenIndustries } from "../../assets/Data/data";

const Within7Industries = () => {
  return (
    <div
      className="max-w-[1640px] mx-auto p-4 font-dm mb-20 bg-[#F8FAFC
    ] text-gray-800"
    >
      {sevenIndustries.map((m) => (
        <div key={m.id} className="md:flex justify-between border-b mb-6 ">
          <div>
            <h1 className="text-2xl mb-4 md:w-[350px] lg:px-16 lg:w-[700px]">
              {m.head1}
            </h1>
          </div>
          <div>
            <h1>{m.head2}</h1>
            <h1 className="p-2 bg-black rounded-full mt-3 w-[130px] mb-10 text-white">
              Find out more
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Within7Industries;
