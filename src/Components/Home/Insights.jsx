import React from 'react'
import insight1 from '../../assets/Images/Insights1.jpg'
import insight2 from '../../assets/Images/Insights2.jpg'
import insight3 from '../../assets/Images/Insights3.jpg'
import { Link } from "react-router-dom";
import arrow from '../../assets/Images/right_arrow.png'

const Insights = () => {
  return (
    <div className="max-w-[1640px] mx-auto md:min-h-screen bg-black">
      <h4 className='lg:text-[70px] lg:p-12 lg:px-28 text-[35px] p-3 some-ele text-white'>Insights </h4>
      <div className="flex flex-col lg:flex-row lg:px-28 lg:justify-center gap-4 p-2 lg:gap-16">
        <div className="flex lg:flex-col    gap-5 shadow-2xl ">
          <div className="w-40 md:w-[348px]  md:h-[229px]  lg:bg-white h-20 rounded-3xl">
            <img src={insight1} alt="img" className='md:h-[200px] md:w-[348px] w-[140px] h-[75px] rounded-t-3xl'/>
            <div className='hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele'>
                <h5 className='lg:text-[14px] lg:font-bold text-black'>Blog . <span className='font-light'>11 min read</span></h5>
                <h5 className='lg:text-[14px] text-black'>October 04 2023</h5>
            </div>
          </div>
          <div className='text-left md:pt-2 pt-3 some-ele'>
          <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">Blog . 11 min read</h4>
            <h4 className="font-bold lg:text-[16px] text-[10px] text-white">The Power of Predictive Analytics: How Data Is Revolutionizing Decision-Making</h4>
          </div>
        </div>
        <div className="flex lg:flex-col     gap-5 shadow-2xl">
        <div className="w-40 md:w-[348px]  md:h-[229px]  lg:bg-white h-20 rounded-3xl">
            <img src={insight2} alt="img" className='md:h-[200px] md:w-[348px] w-[140px] h-[75px] rounded-t-3xl'/>
            <div className='hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele'>
                <h5 className='lg:text-[14px] lg:font-bold text-black'>Blog . <span className='font-light'>11 min read</span></h5>
                <h5 className='lg:text-[14px] text-black'>October 04 2023</h5>
            </div>
          </div>
          <div className='text-left md:pt-2 pt-3 some-ele'>
          <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">Blog . 11 min read</h4>
            <h4 className="font-bold lg:text-[16px] text-[10px] text-white">Data Privacy in the Digital Age: Navigating Regulations and Best Practices</h4>
          </div>
        </div>
        <div className="flex lg:flex-col   gap-5 shadow-2xl">
        <div className="w-40 md:w-[348px]  md:h-[229px]  lg:bg-white h-20 rounded-3xl">
            <img src={insight3} alt="img" className='md:h-[200px] md:w-[348px] w-[140px] h-[75px] rounded-t-3xl'/>
            <div className='hidden lg:flex justify-between items-center md:px-2 md:pt-1 some-ele'>
                <h5 className='lg:text-[14px] lg:font-bold text-black'>Blog . <span className='font-light'>11 min read</span></h5>
                <h5 className='lg:text-[14px] text-black'>October 04 2023</h5>
            </div>
          </div>
          <div className='text-left md:pt-2 pt-3 some-ele'>
          <h4 className="lg:hidden font-bold lg:text-[16px] text-[12px] text-white">Blog . 11 min read</h4>
            <h4 className="font-bold lg:text-[16px] text-[10px] text-white">Data Analytics for E-commerce: Boosting Sales and Customer Engagement</h4>
          </div>
        </div>
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
      <div className="flex   group hover:cursor-pointer gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[300px]  lg:mb-7 pb-10 px-5 items-center justify-center">
                <h4 className="p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[500px] bg-white text-black font-bold transition-all transform hover:translate-x-14">
                Explore all insights
                </h4>
                <h4 className="p-3 mt-10 flex items-center rounded-full w-[70px] bg-white text-black">
                  <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg" alt='arrow'/>
                </h4>
              </div>
      </Link>

    </div>
  )
}

export default Insights