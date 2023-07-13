import React from "react";
import Shinas from "../../assets/Images/IMAGE (1).png";
import Billal from "../../assets/Images/IMAGE (2).png";
import Bibin from "../../assets/Images/IMAGE (3).png";
import Shabeer from "../../assets/Images/IMAGE.png";

const OurTechGurus = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4 bg-black text-white  font-roboto ">
      <div className="text-center mt-16">
        <span className="text-gray-400 md:text-lg ">Our Tech Gurus</span>
        <h1 className="text-2xl mt-8 mb-6 md:text-6xl ">Leadership team</h1>
        <h3 className="w-[290px] md:w-[500px] lg:w-[700px] text-lg  mx-auto">
          Stead was built on the desire to make great things possible, through
          the guidance of expert leaders. By fostering a culture of innovation,
          collaboration & client centricity, our leadership team ensure that
          Stead continue to deliver exceptional software solutions
        </h3>
      </div>

      <div className="grid font-dm md:grid-cols-2 lg:grid-cols-4 mb-10">
        <div className="relative">
          <img
            className="h-[300px] w-[150px] mx-auto mb-10 mt-12"
            src={Shinas}
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2 ">
            <span className="text-lg"> Shinas</span>
            <br />
            Chief Architect
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[300px] w-[150px] md:mt-12 mx-auto mb-10"
            src={Shabeer}
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2 ">
            Shabeer
            <br />
            Chief Architect
          </div>
        </div>

        <div className="relative">
          <img
            className="h-[300px] w-[150px] mx-auto mb-10 lg:mt-12"
            src={Billal}
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2">
            Billal
            <br />
            Chief Architect
          </div>
        </div>

        <div className="relative">
          <img
            className="h-[300px] w-[150px] mx-auto mb-10 lg:mt-12"
            src={Bibin}
            alt="chiefarchitect"
          />
          <div className="absolute bottom-16 left-8 bg-transparent text-white p-2">
            Bibin
            <br />
            Chief Architect
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechGurus;
