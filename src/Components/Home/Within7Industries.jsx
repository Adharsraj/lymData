import React, { useState } from "react";
import { servv, sevenIndustries } from "../../assets/Data/data";
import { Link } from "react-router-dom";

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
      title: "Web Development",
      details:
        "Boost your online visibility with the assistance of our specialized web development services. Our team excels in crafting user-centric web experiences that prioritize the needs of your audience. From seamless navigation to visually stunning designs, we ensure every detail contributes to business success, creating a powerful online presence that leaves a lasting impression.        ",
    },
    {
      id: 2,
      title: "App Development      ",
      details:
        "By leveraging our proficiency in Mobile App Development, your organization can maximize its potential.Boasting a proven track record, we excel in creating highly popular and widely used apps. Our approach combines data insights with principles of behavioral science, ensuring your mobile app not only meets but exceeds user expectations, fostering engagement and success.        ",
    },
    {
      id: 3,
      title: "Performance Marketing      ",
      details:
        "Enhance your digital presence with reliability by utilizing our performance marketing services. Specializing in data-driven strategies, we offer a comprehensive range of solutions including SEO, PPC, social media, and email marketing. By aligning our efforts with your business objectives, we ensure every marketing initiative contributes to measurable success, driving growth and visibility.        ",
    },
    {
      id: 4,
      title: "Software Development      ",
      details:
        "Our Custom Software Development team specializes in tailor made solutions for your specific business needs.We understand that every business is distinct, requiring software solutions that align perfectly with specific objectives. Our expertise lies in developing customized software that enhances efficiency, scalability, and overall business performance, ensuring a seamless fit for your operations.        ",
    },
    {
      id: 5,
      title: "Data Engineering      ",
      details:
        "Recognizing the transformative power of data-driven insights, our Data Engineering services employ advanced analytics methodologies to achieve significant outcomes.Whether it's uncovering hidden trends, optimizing processes, or making informed decisions, our team harnesses the potential of data to propel your business forward. Experience the difference that data-driven intelligence can make for your organization.        ",
    },
    {
      id: 6,
      title: "Metaverse",
      details:
        "With the aid of our all-encompassing services, you can immerse yourself in the world of the Metaverse. Explore abundant possibilities and redefine the way you engage with your audience. From virtual experiences to innovative interactions, our Metaverse solutions open new avenues for creativity, collaboration, and connection. Don't just witness the future – be a part of it in this captivating digital realm you must experience.        ",
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
    <div id="withinseven" className="max-w-[1840px] textSliderContainerd mx-auto overflow-hidden">
      <div className=" hidden md:block">


{servv.map((m, index) => (
   <div
      key={m.id}
      id={m.id}
      className={`md:flex group md:px-8 w-full h-[320px]   lg:text-lg lg:py-8 xl:py-16 ${
         hoveredId === m.id ? "bg-image" : ""
      } ${index !== sevenIndustries.length - 1 ? "border-b" : ""}`}
      onMouseEnter={() => handleMouseEnter(m.id)}
      onMouseLeave={handleMouseLeave}
   >
      {/* Add a conditional rendering for video or image */}
  <video
    autoPlay
    loop
    muted
    // transform hover:-translate-y-full
    className={`w-full h-full  ${hoveredId === m.id ?"visible":"hidden"} object-cover duration-100`}
    src={m.img} // Replace 'm.video' with the path to your video
  />

     <div>
              <h1 className="mt-3 mb-8 h-10 textSliderContainerd  group-hover:text-white  md:w-[200px] lg:w-[320px] xl:w-[500px] font-semibold lg:text-xl xl:text-[30px]">
                {m.title}
              </h1>
            </div>
            <div>
              <h1 className=" textSliderContainerd group-hover:text-white text-xl">{m.desc}</h1>
              <Link to="inside-services" state={{title:m.title}}>
              <div className="flex xl:gap-1   gap-4 w-full mt-5 md:w-[200px] items-center  xl:w-[560px]">
                <div className="flex  group/item hover:cursor-pointer">
                  <h1 className="p-4 xl:w-[160px] text-base  rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]">
                    What we do
                  </h1>
                  <h1 className="p-4 rounded-full textSliderContainerd  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]">
                    <img
                      className="lg:w-56"
                      src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
              </div>
</Link>
            </div>   </div>
))}


      </div>

      <div className="  md:hidden textSliderContainerd">
        <h1 className="font-mono text-xs ml-8 lg:mt-10 mb-10">
          Services
        </h1>

        <div className="carousel-container">
          <div className="carousel-slide flex  flex-col justify-center ">
            <div className=" w-screen  h-[500px]  px-10   text-center ">
              <div className="border-r border-l">
                <h1 className="mt-10 mb-20 text-left px-2 font-bold">
                  {carouselData[currentSlide].title}
                </h1>
                <h2 className="mt-3  h-60 px-2">
                  {carouselData[currentSlide].details}
                </h2>
               <Link to={"/inside-services"}>
                  <div className="flex mb-5 pl-4 xl:gap-1 gap-4 w-full mt-10 md:w-[200px]  items-center xl:w-[560px]">
                    <h1 className="p-4 text-sm xl:w-[160px]  border rounded-full w-[140px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]">
                      Find out more
                    </h1>
                    <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]">
                      <img
                        className="lg:w-56"
                        src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"
                      />
                    </h1>
                  </div>
               </Link>
              </div>
            </div>
          </div>
          <div className="carousel-buttons flex justify-center gap-5">
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]"
              onClick={prevSlide}
            >
              <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691415903/LYMDATALABS/Pages/Home/asset_59_wsgb7l_e3bvws.svg" />
            </button>
            <div className="text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center">
              {carouselData[currentSlide].id}/{carouselData.length}
            </div>
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]"
              onClick={nextSlide}
            >
              <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Within7Industriesdhn;
