import React from "react";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Insights = () => {
  const [insightsHeading] = useTypewriter({
    words: ["Insights", "Stay updated !"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 4000,
  });
  return (
    <div className="max-w-[1640px] mx-auto  bg-black" data-scroll-section>
      <h4 className="lg:text-[40px] lg:p-12 lg:px-28 text-[35px] lg:font-bold p-3 some-ele text-white">
        {insightsHeading}
        <Cursor cursorColor="white" cursorStyle="|"></Cursor>
      </h4>
      <div className="flex flex-col lg:flex-row  lg:justify-around gap-2 p-2 lg:px-10">
        {/* <div className=" flex flex-col lg:flex-row lg:justify-around gap-4 p-2  "> */}
        //1st card
        <Link to={"/blog/The Power of PredictiveAnalytics"}>
          <div className="flex lg:flex-col   gap-2 shadow-2xl cursor-pointer">
            <div className="relative xxl:w-[348px] lg:w-[240px] md:w-[348px] md:h-[229px] h-20 rounded-[6px] overflow-hidden group">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172891/LYMDATALABS/Pages/webp/Banner_Image_1920_x_1080_Blog_Insights_2_rpiac9_1_k6miov.webp"
                alt="img"
                className="md:h-[200px] md:w-[348px] w-[140px] h-[75px] rounded-[6px]"
              />
              <div className="hidden lg:flex flex-col justify-center items-center absolute inset-0 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black z-[10] bg-opacity-70">
                <p className="lg:text-[14px]">Read More</p>
              </div>
              <div className="hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele">
                <h5 className="lg:text-[14px] lg:font-bold  text-[#ffffff98]">
                  Blog . <span className="font-light">11 min read</span>
                </h5>
                <h5 className="lg:text-[14px]  text-[#ffffff98]">
                  October 04 2023
                </h5>
              </div>
            </div>

            <div className="text-left md:pt-2 pt-3 pl-2 some-ele">
              <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">
                Blog . 11 min read
              </h4>
              <h4 className="font-bold lg:text-[16px] text-[10px] text-white">
                The Power of Predictive Analytics: How Data Is Revolutionizing
                Decision-Making
              </h4>
            </div>
          </div>
        </Link>
        //2nd card
        <Link to={"/blog/DataPrivacyintheDigitalAge"}>
          <div className="flex lg:flex-col   gap-2 shadow-2xl cursor-pointer">
            <div className="relative  xxl:w-[348px] lg:w-[240px] md:w-[348px] md:h-[229px] h-20 rounded-[6px] overflow-hidden group">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172892/LYMDATALABS/Pages/webp/Banner_Image_1920_x_1080_Blog_Data_Privacy_1_1_uqotuc_1_lmikg4.webp"
                alt="img"
                className="md:h-[200px] md:w-[348px] w-[140px] h-[75px] rounded-t-[6px]"
              />
              <div className="hidden lg:flex flex-col justify-center items-center absolute inset-0 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black z-[10] bg-opacity-70">
                <p className="lg:text-[14px]">Read More</p>
              </div>
              <div className="hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele">
                <h5 className="lg:text-[14px] lg:font-bold  text-[#ffffff98]">
                  Blog . <span className="font-light">11 min read</span>
                </h5>
                <h5 className="lg:text-[14px]  text-[#ffffff98]">
                  October 04 2023
                </h5>
              </div>
            </div>
            

            <div className="text-left md:pt-2 pt-3 some-ele pl-2">
              <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">
                Blog . 11 min read
              </h4>
              <h4 className="font-bold lg:text-[16px] text-[10px] text-white">
                Data Privacy In The Digital Age: Navigating Regulations And Best
                Practices
              </h4>
            </div>
          </div>
        </Link>
    
      
        //3rd card
        <Link to={"/blog/DataPrivacyintheDigitalAge"}>
          <div className="flex lg:flex-col   gap-2 shadow-2xl cursor-pointer">
            <div className="relative  xxl:w-[348px] lg:w-[240px] md:w-[348px] md:h-[229px] h-20 rounded-[6px] overflow-hidden group">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172891/LYMDATALABS/Pages/webp/Banner_Image_1920_x_1080_Blog_Data_Analytics_ad94wp_1_fg0ajh.webp"
                alt="img"
                className="md:h-[200px] md:w-[348px] w-[140px] h-[75px] rounded-t-[6px]"
              />
              <div className="hidden lg:flex flex-col justify-center items-center absolute inset-0 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black z-[10] bg-opacity-70">
                <p className="lg:text-[14px]">Read More</p>
              </div>
              <div className="hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele">
                <h5 className="lg:text-[14px] lg:font-bold  text-[#ffffff98]">
                  Blog . <span className="font-light">11 min read</span>
                </h5>
                <h5 className="lg:text-[14px]  text-[#ffffff98]">
                  October 04 2023
                </h5>
              </div>
            </div>

            <div className="text-left md:pt-2 pt-3 some-ele pl-2">
              <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">
                Blog . 11 min read
              </h4>
              <h4 className="font-bold lg:text-[16px] text-[10px] text-white">
              Data Analytics for E-commerce: Boosting Sales and Customer
                Engagement
              </h4>
            </div>
          </div>
        </Link>
      </div>

      {/* <div className='flex justify-center items-center pt-20'>
  <button className="bg-white flex text-gray-800 font-semibold border border-gray-400 w-[210px] p-3 mb-12 gap-4 some-ele rounded-full">
    Explore all insights
    <img
      className="w-[16px] pt-1"
      src={arrow}
      alt="Arrow Right"
    />
  </button>
</div> */}

      <Link to="/blog">
        <div className="flex justify-center">
          <div className="flex gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[300px] mx-44  lg:mb-7 pb-10 px-5 items-center justify-center">
            <h4 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[500px] bg-white text-black font-bold transition-all transform hover:translate-x-14">
              Explore all insights
            </h4>
            <h4 className="p-3 mt-10 flex items-center rounded-full w-[70px] bg-white text-black">
              <img
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg"
                alt="arrow"
              />
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Insights;
