import React from "react";
import Image1 from "../../assets/Images/image1.png"
import Image2 from "../../assets/Images/image2.png"
import Image3 from "../../assets/Images/image3.png"
import Image4 from "../../assets/Images/image4.png"
import Image5 from "../../assets/Images/image5.png"
import Image6 from "../../assets/Images/image6.png"

export const WorksHome = () => {

  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm  mb-20   gap-8 overflow-hidden">
      <div className="hidden lg:block">
        <h1 className="mt-20 xxl:text-9xl font-sans font-extrabold px-32 animate-slide-up">I craft digital<br/>
            experiences<br/>
            for humans</h1>
        <h1 className="mt-10 text-xl  px-32">🏆 Designer of the Year on CSS Design Awards + Digital Design Award</h1>
        <h1 className="mt-32 text-xl text-right px-10">
            Helping startups and tech companies building <br/>
            or scaling digital experiences leveraging design</h1>

            {/* 1 */}
            <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans mt-24">ShoreTrade</h3>
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

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

          </div>
          <div className="flex">
  <img
    src={Image1}
    className="mt-8 lg:mt-0 hidden lg:block bg-black w-[450px] h-[700px]"
  />
  {/* <img
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
    className="absolute top-52 left-[calc(40% - 65px)] transform -translate-x-1/4 -translate-y-1/3 hidden lg:block bg-black w-[130px] h-[80px]"
  /> */}
</div>

{/* <div className="relative flex justify-end px-52">
      <img
        src={Image1}
        loading="eager"
        alt=""
        className="project-image-phone-main"
      />
      <img
        src={Image2}
        loading="eager"
        alt=""
        className="absolute project-image-floating"
        style={{ transform: 'translate3d(0px, 19.8664%, 0px)' }}
      />
      <img
        src={Image4}
        loading="eager"
        alt=""
        className="absolute project-image-floating"
        style={{ transform: 'translate3d(0px, 22.5022%, 0px)' }}
      />
      <img
        src={Image3}
        loading="eager"
        alt=""
        className="absolute project-image-floating"
        style={{ transform: 'translate(0px, 25%)' }}
      />
    </div> */}

          
        </div>
        
        {/* 2 */}
        <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans mt-24">Hello Coach</h3>
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
          <h3 className="text-xl px-5 mt-20">Create your best life with powerful solutions<br/>
                for your body, mind and soul withone-to-one<br/>
                coaching from the best in the business</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

          </div>
          <div className="flex">
          <img
            src={Image2}
            className="mt-8 lg:mt-0 hidden lg:block bg-black w-[750px] h-[750px]"
          />
          {/* <img
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
          /> */}
          </div>
          
        </div>

        {/* 3 */}
        <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans mt-24">Milray Park</h3>
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
          <h3 className="text-xl px-5 mt-20">Interior Design & Furniture Shopping Service.<br/>
                Your one-on-one online interior designer<br/>
                service</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

          </div>
          <div className="flex justify-end px-0">
          <img
            src={Image3}
            className="mt-8 lg:mt-0 hidden lg:block bg-black w-[1500px] h-[650px] "
          />
          {/* <img
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
          /> */}
          </div>
          
        </div>

        {/* 4 */}
        <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans mt-24">Pollie</h3>
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
          <h3 className="text-xl px-5 mt-20">We're making it easier for menstruating people<br/>
                to manage their complex chronic conditions,<br/>
                starting with polycystic ovarian syndrome<br/>
                (PCOS).</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

          </div>
          <div className="flex">
          <img
            src={Image4}
            className="mt-8 lg:mt-0 hidden lg:block bg-black w-[450px] h-[750px]"
          />
          {/* <img
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
          /> */}
          </div>
          
        </div>

        {/* 5 */}
        <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans mt-24">AiWorld <br/> Magazine</h3>
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
          <h3 className="text-xl px-5 mt-20">Ai World Magazine is a platform collecting<br/>
                news and information worldwide, covering a<br/>
                wide range of topics, from climate change to<br/>
                education and technology.</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

          </div>
          <div className="flex justify-end">
          <img
            src={Image5}
            className="mt-8 lg:mt-0 hidden lg:block bg-black w-[1000px] h-[600px]"
          />
          {/* <img
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
          /> */}
          </div>
          
        </div>

        {/* 6 */}
        <div className="lg:grid lg:grid-cols-2 items-start mt-32">
          <div className=" w-full h-full">
            <h3 className="text-7xl font-bold px-5 font-sans mt-24">Wear United</h3>
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
          <h3 className="text-xl px-5 mt-20">WEAR United is a fashion e-commerce<br/>
                platform that unites Australia’s best<br/>
                independent brands and boutiques, all in one<br/>
                place.</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

          </div>
          <div className="flex justify-end">
          <img
            src={Image6}
            className="mt-8 lg:mt-0 hidden lg:block bg-black w-[1000px] h-[600px]"
          />
          {/* <img
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
          /> */}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
      <h1 className="mt-32 text-4xl text-center font-sans font-extrabold animate-slide-up">I craft digital<br/>
            experiences<br/>
            for humans</h1>
        <h1 className="mt-10">🏆 Designer of the Year on CSS Design Awards + Digital Design Award</h1>
        <h1 className="mt-32 text-xl ">
            Helping startups and tech companies building
            or scaling digital experiences leveraging design</h1>

        {/* 1 */}
        <div className="lg:grid lg:grid-cols-2 items-start">
          <h3 className="text-5xl font-bold font-sans mt-32 lg:mt-0">ShoreTrade</h3>
          <div className=" mt-7 px-0">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-100 rounded">
         UX & UI Design
        </button> 
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        </div>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
        </div>
          </div>
          <h3 className="text-xl mt-20">ShoreTrade is a B2B Online Trading
                Marketplace that allows sale of seafood direct
                from fishery to wholesaler</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

              <div className="flex flex-col items-center mt-10">
                <img
                    src={Image1}
                    className="mt-8 mb-4 bg-black w-[250px] h-[400px]"
                />
                {/* <img
                    src={Image2}
                    className="hidden md:absolute md:top-3/4 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                />
                <img
                    src={Image4}
                    alt="Overlay"
                    className="hidden md:absolute md:top-80 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black md:block w-[150px] h-[100px]"
                />
                <img
                    src={Image3}
                    className="hidden md:absolute md:top-52 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                /> */}
            </div>

        </div>

        {/* 2 */}
        <div className="lg:grid lg:grid-cols-2 items-start">
          <h3 className="text-5xl font-bold font-sans mt-32 lg:mt-0">Hello Coach</h3>
          <div className=" mt-7 px-0">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-100 rounded">
         UX & UI Design
        </button> 
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        </div>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
        </div>
          </div>
          <h3 className="text-xl mt-20">Create your best life with powerful solutions
            for your body, mind and soul withone-to-one
            coaching from the best in the business</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

              <div className="flex flex-col items-center mt-10">
                <img
                    src={Image2}
                    className="mt-8 mb-4 bg-black w-[300px] h-[400px] rounded-3xl"
                />
                {/* <img
                    src={Image2}
                    className="hidden md:absolute md:top-3/4 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                />
                <img
                    src={Image4}
                    alt="Overlay"
                    className="hidden md:absolute md:top-80 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black md:block w-[150px] h-[100px]"
                />
                <img
                    src={Image3}
                    className="hidden md:absolute md:top-52 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                /> */}
            </div>

        </div>

        {/* 3 */}
        <div className="lg:grid lg:grid-cols-2 items-start">
          <h3 className="text-5xl font-bold font-sans mt-32 lg:mt-0">Milray Park</h3>
          <div className=" mt-7 px-0">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-100 rounded">
         UX & UI Design
        </button> 
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        </div>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
        </div>
          </div>
          <h3 className="text-xl mt-20">Interior Design & Furniture Shopping Service.
            Your one-on-one online interior designer
            service</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

              <div className="flex flex-col items-center mt-10">
                <img
                    src={Image3}
                    className="mt-8 mb-4 bg-black w-[550px] h-[300px] rounded-3xl"
                />
                {/* <img
                    src={Image2}
                    className="hidden md:absolute md:top-3/4 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                />
                <img
                    src={Image4}
                    alt="Overlay"
                    className="hidden md:absolute md:top-80 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black md:block w-[150px] h-[100px]"
                />
                <img
                    src={Image3}
                    className="hidden md:absolute md:top-52 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                /> */}
            </div>

        </div>

        {/* 4 */}
        <div className="lg:grid lg:grid-cols-2 items-start">
          <h3 className="text-5xl font-bold font-sans mt-32 lg:mt-0">Pollie</h3>
          <div className=" mt-7 px-0">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-100 rounded">
         UX & UI Design
        </button> 
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        </div>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
        </div>
          </div>
          <h3 className="text-xl mt-20">We're making it easier for menstruating people
            to manage their complex chronic conditions,
            starting with polycystic ovarian syndrome
            (PCOS).</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

              <div className="flex flex-col items-center mt-10">
                <img
                    src={Image4}
                    className="mt-8 mb-4 bg-black w-[230px] h-[400px] rounded-3xl"
                />
                {/* <img
                    src={Image2}
                    className="hidden md:absolute md:top-3/4 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                />
                <img
                    src={Image4}
                    alt="Overlay"
                    className="hidden md:absolute md:top-80 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black md:block w-[150px] h-[100px]"
                />
                <img
                    src={Image3}
                    className="hidden md:absolute md:top-52 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                /> */}
            </div>

        </div>


        {/* 5 */}
        <div className="lg:grid lg:grid-cols-2 items-start">
          <h3 className="text-5xl font-bold font-sans mt-32 lg:mt-0">AiWorld Magazine</h3>
          <div className=" mt-7 px-0">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-100 rounded">
         UX & UI Design
        </button> 
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        </div>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
        </div>
          </div>
          <h3 className="text-xl mt-20">Ai World Magazine is a platform collecting
            news and information worldwide, covering a
            wide range of topics, from climate change to
            education and technology.</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

              <div className="flex flex-col items-center mt-10">
                <img
                    src={Image5}
                    className="mt-8 mb-4 bg-black w-[550px] h-[300px] rounded-3xl"
                />
                {/* <img
                    src={Image2}
                    className="hidden md:absolute md:top-3/4 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                />
                <img
                    src={Image4}
                    alt="Overlay"
                    className="hidden md:absolute md:top-80 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black md:block w-[150px] h-[100px]"
                />
                <img
                    src={Image3}
                    className="hidden md:absolute md:top-52 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                /> */}
            </div>

        </div>


        {/* 6 */}
        <div className="lg:grid lg:grid-cols-2 items-start">
          <h3 className="text-6xl font-bold font-sans mt-32 lg:mt-0">Wear United</h3>
          <div className=" mt-7 px-0">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Direction
        </button>
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
         Branding
        </button>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-100 rounded">
         UX & UI Design
        </button> 
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
          Website Design
        </button>
        </div>
        <div className="mt-2">
        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded">
        Motion
        </button>
        </div>
          </div>
          <h3 className="text-xl mt-20">WEAR United is a fashion e-commerce
            platform that unites Australia’s best
            independent brands and boutiques, all in one
            place.</h3>

                <h3  className="p-3 mt-8 px-5 flex justify-center rounded-full w-[180px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                View on Behance
              </h3>

              <div className="flex flex-col items-center mt-10">
                <img
                    src={Image6}
                    className="mt-8 mb-4 bg-black w-[550px] h-[300px] rounded-3xl"
                />
                {/* <img
                    src={Image2}
                    className="hidden md:absolute md:top-3/4 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                />
                <img
                    src={Image4}
                    alt="Overlay"
                    className="hidden md:absolute md:top-80 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black md:block w-[150px] h-[100px]"
                />
                <img
                    src={Image3}
                    className="hidden md:absolute md:top-52 md:left-2/5 md:transform md:-translate-x-1/4 md:-translate-y-1/3 bg-black md:block w-[130px] h-[80px]"
                /> */}
            </div>

        </div>
     </div>
    </div>
  );
};

export default WorksHome;

