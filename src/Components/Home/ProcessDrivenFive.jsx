import React from "react";
import { productDrivenDesign } from "../../assets/Data/data";

const ProcessDrivenFive = () => {
  return (
    <div className="bg-[#BCBCBC]">
      <div className="max-w-[1840px]  bg-[#BCBCBC] mb-10   mx-auto p-4 md:p-0  md:text-xl  ">
        <div className="md:flex">
          {productDrivenDesign.map((m) => (
            <div
              key={m.id}
              className="w-full md:flex-grow mb-10 md:mb-0 z-10 group cursor-pointer relative"
            >
              <div className="text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
                <div className="border md:border-transparent p-2 md:p-0   h-96 flex flex-col justify-around">
                  <h1 className="text-lg uppercase mx-auto text-white group-hover:text-black font-semibold   lg:w-4/5 ">{m.head1}</h1>
                  <div className="w-4/5  mx-auto">
                  <h1 className="p-3 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[40px] xl:h-8 xl:w-[50px] bg-[#282728]">
                    <img className="lg:w-5 " src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187634/assets/assets/asset_60_lqw1hz.svg" />
                  </h1>
                  </div>
                  <h1 className=" w-4/5   mx-auto md:text-transparent group-hover:text-black">
                    {m.head2}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessDrivenFive;
