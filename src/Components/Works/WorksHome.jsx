import React from "react";
import Image1 from "../../assets/Images/image1.webp"
import Image2 from "../../assets/Images/image2.webp"
import Image3 from "../../assets/Images/image3.webp"
import Image4 from "../../assets/Images/image4.webp"

export const WorksHome = () => {

  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm  mb-20   gap-8 overflow-hidden">
      <div className="hidden lg:block">
        <h1 className="mt-20 xxl:text-9xl font-sans font-bold px-32">I craft digital<br/>
            experiences<br/>
            for humans</h1>
        <h1 className="mt-10 text-xl  px-32">🏆 Designer of the Year on CSS Design Awards + Digital Design Award</h1>
        <h1 className="mt-32 text-xl text-right px-10">
            Helping startups and tech companies building <br/>
            or scaling digital experiences leveraging design</h1>


            <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans">ShoreTrade</h3>
            <div className=" mt-7 px-5">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         UX & UI Design
        </button>
          </div>
          <div className=" mt-3 px-5">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
          </div>
          <h3 className="text-xl px-5 mt-20">ShoreTrade is a B2B Online Trading <br/>
                Marketplace that allows sale of seafood direct<br/>
                from fishery to wholesaler</h3>

            <div className="hidden lg:grid grid-cols-2  w-full h-full items-end mt-[-100px] ">
              <div>
                <h3 className="px-5 text-xl"></h3>
              </div>

            </div>
          </div>
          <div className="relative">
          <img
            src={Image1}
            className="mt-8 lg:mt-0 hidden lg:block bg-black w-[350px] h-[600px] rounded-3xl"
          />
          <img
            src={Image2}
            className="absolute top-3/4 left-2/5 transform -translate-x-1/4 -translate-y-1/3 hidden lg:block bg-black w-[130px] h-[80px]"
          />
          <img
            src={Image4}
            alt="Overlay"
            className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block bg-black w-[150px] h-[100px]"
          />
          <img
            src={Image3}
            className="absolute top-52 left-2/5 transform -translate-x-1/4 -translate-y-1/3 hidden lg:block bg-black w-[130px] h-[80px]"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WorksHome;

