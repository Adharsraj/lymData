import React from 'react'
import img from '../../assets/Images/Insights.png'
import arrow from '../../assets/Images/right_arrow.png'

const Insights = () => {
  return (
    <div className="max-w-[1640px] mx-auto min-h-screen bg-black">
      <h1 className='lg:text-[70px] lg:p-12 lg:px-28 text-[35px] p-3 some-element text-white'>Insights </h1>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-4 p-2 lg:gap-10">
        <div className="flex lg:flex-col    gap-2 ">
          <div className="w-40 md:w-[348px]  md:h-[229px]  lg:bg-white h-20">
            <img src={img} alt="img"/>
            <div className='hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-element'>
                <h2 className='lg:text-[14px] lg:font-bold text-black'>Blog . <span className='font-light'>11 min read</span></h2>
                <h2 className='lg:text-[14px] text-black'>October 04 2023</h2>
            </div>
          </div>
          <div className='text-center md:pt-2 pt-3 some-element'>
          <h1 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">Blog . 11 min read</h1>
            <h1 className="font-bold lg:text-[16px] text-[10px] text-white">Angular vs Reactjs : Which One is better..?</h1>
          </div>
        </div>
        <div className="flex lg:flex-col     gap-2 ">
        <div className="w-40 md:w-[348px]  md:h-[229px]  lg:bg-white h-20">
            <img src={img} alt="img"/>
            <div className='hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-element'>
                <h2 className='lg:text-[14px] lg:font-bold text-black'>Blog . <span className='font-light'>11 min read</span></h2>
                <h2 className='lg:text-[14px] text-black'>October 04 2023</h2>
            </div>
          </div>
          <div className='text-center md:pt-2 pt-3 some-element'>
          <h1 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">Blog . 11 min read</h1>
            <h1 className="font-bold lg:text-[16px] text-[10px] text-white">Angular vs Reactjs : Which One is better..?</h1>
          </div>
        </div>
        <div className="flex lg:flex-col   gap-2 ">
        <div className="w-40 md:w-[348px]  md:h-[229px]  lg:bg-white h-20">
            <img src={img} alt="img"/>
            <div className='hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-element'>
                <h2 className='lg:text-[14px] lg:font-bold text-black'>Blog . <span className='font-light'>11 min read</span></h2>
                <h2 className='lg:text-[14px] text-black'>October 04 2023</h2>
            </div>
          </div>
          <div className='text-center md:pt-2 pt-3 some-element'>
          <h1 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">Blog . 11 min read</h1>
            <h1 className="font-bold lg:text-[16px] text-[10px] text-white">Angular vs Reactjs : Which One is better..?</h1>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center pt-20'>
  <button className="bg-white flex text-gray-800 font-semibold border border-gray-400 w-[210px] p-3 gap-4 some-element">
    Explore all insights
    <img
      className="w-[16px] pt-1"
      src={arrow}
      alt="Arrow Right"
    />
  </button>
</div>

    </div>
  )
}

export default Insights