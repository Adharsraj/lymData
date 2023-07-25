import React from "react";
import { BsArrowRight } from "react-icons/bs";

const JobListing = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 text-[#040404] mb-10">
      <div className="flex  justify-between p-3 w-[300px] md:w-[450px] lg:w-[600px] lg:text-xl mx-auto">
        <div className="w-[150px] md:w-[350px]  md:text-lg lg:text-xl">
          <h1>OPEN APPLICATION</h1>
          <h3 className="mt-3">India / Remote</h3>
        </div>

        <div className="w-[150px] md:w-[350px] md:text-lg ">
          <h2>
            We're not actively hiring at the moment, but always looking for
            great people to collaborate with.
          </h2>
          <div className="w-[102px] h-[53px] mt-2 mb-6 bg-[#262626] text-white hover:-rotate-45 transition-transform">
            <span className="flex justify-end">
              <BsArrowRight size={30} />
            </span>
            <h1 className="flex justify-center">Get in touch</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
