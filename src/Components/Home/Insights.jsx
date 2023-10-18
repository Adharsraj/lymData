import React from 'react'
import img from '../../assets/Images/Insights.png'
import arrow from '../../assets/Images/right_arrow.png'

const Insights = () => {
  return (
    <div className='min-h-screen'>
        <div className=' pt-5 px-20'>
        <h2 className='text-black text-[80px]'>Insights</h2>
        

        <div className='flex justify-between items-center pt-10 flex-col md:flex-row'>
            <div>
            <div className='bg-black h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[190px] w-[300px]'/>
                <div className='flex justify-between items-center px-2'>
                <h2 className='font-bold text-white'>Blog . <span className='text-[12px] font-normal'>11 min read</span></h2>
                <h2 className='text-[12px] font-normal text-white'>October 04 2023</h2>
                </div>
            </div>
            <h2 className='font-bold pt-5 text-[14px] text-center'>Angular vs Reactjs : Which One is better..?</h2>
            </div>

            <div>
            <div className='bg-black h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[190px] w-[300px]'/>
                <div className='flex justify-between items-center px-2'>
                <h2 className='font-bold text-white'>Blog . <span className='text-[12px] font-normal'>11 min read</span></h2>
                <h2 className='text-[12px] font-normal text-white'>October 04 2023</h2>
                </div>
            </div>
            <h2 className='font-bold pt-5 text-[14px] text-center'>Angular vs Reactjs : Which One is better..?</h2>
            </div>

            <div>
            <div className='bg-black h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[190px] w-[300px]'/>
                <div className='flex justify-between items-center px-2'>
                <h2 className='font-bold text-white'>Blog . <span className='text-[12px] font-normal'>11 min read</span></h2>
                <h2 className='text-[12px] font-normal text-white'>October 04 2023</h2>
                </div>
            </div>
            <h2 className='font-bold pt-5 text-[14px] text-center'>Angular vs Reactjs : Which One is better..?</h2>
            </div>
            
            </div>

            <div className='flex justify-center items-center pt-20'>
  <button className="bg-white flex text-gray-800 font-semibold border border-gray-400 w-[200px] p-3 gap-4">
    Explore all insights
    <img
      className="w-[16px] pt-1"
      src={arrow}
      alt="Arrow Right"
    />
  </button>
</div>

        </div>
    </div>
  )
}

export default Insights