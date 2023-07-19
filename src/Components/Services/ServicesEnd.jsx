import React from 'react'
import imgright from "../../assets/assets/lines2.png";
import arrowbottom from "../../assets/assets/asset 41.svg";
import Within7ForService from '../Home/Within7ForService';

const ServicesEnd = () => {
  const imageStyle = {
    maxWidth: '100%',
    marginLeft: '10px',
    transform: 'scale(2.3)',

    // Adjust the scale value as needed
  };
  return (
    <>
    
    <div className='bg-[#F4F4F4]'>

    <div className="max-w-[1640px]  mx-auto p-4 font-dm   md:text-xl bg-[#F4F4F4] ">
      
       <div className="mt-20   xl:mt-40 text-[#DEDEDE] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">
        <h1>
          services{" "}
          <span className="text-[#424142] ">/ industries / </span> archive <br />{" "}
          <span className='text-[#424142] '>we are experts in.</span> 
        </h1>
        <img className='lg:ml-20 mt-32 animate-bounce' src={arrowbottom} alt="" />

      </div>

      <div className="flex items-center xl:mt-[-460px] lg:mt-[-320px] md:mt-[-360px] mt-[-440px] mb-10 h-[400px] overflow-hidden justify-center">
      <div className="max-w-screen-lg ">
        <img style={imageStyle}  src={imgright} alt="Sample Image" />
      </div>
    </div>



    </div>
    <Within7ForService/>
    </div>

    <div className="max-w-[1640px]  mx-auto p-4 font-dm mb-10  md:text-xl bg-[#F4F4F4] ">
      
       <div className="mt-20   xl:mt-40 text-[#DEDEDE] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]">
        <h1>
          services{" "}
          <span className=" ">/ industries / </span> <span className="text-[#424142]"> archive</span>  <br />{" "}
          <span className='text-[#424142] '>15+ years of solved challenges</span> 
        </h1>
        <img className='lg:ml-20 mt-32 animate-bounce' src={arrowbottom} alt="" />

      </div>

      <div className="flex items-center xl:mt-[-460px] lg:mt-[-320px] md:mt-[-360px] mt-[-440px] mb-10 h-[400px] overflow-hidden justify-center">
      <div className="max-w-screen-lg ">
        <img style={imageStyle}  src={imgright} alt="Sample Image" />
      </div>
    </div>



    </div>
    </>
  )
}

export default ServicesEnd
