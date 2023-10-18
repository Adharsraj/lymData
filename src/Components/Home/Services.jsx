import React from 'react'
import img from '../../assets/Images/Services.png'
import arrow from '../../assets/Images/right_arrow.png'

const Services = () => {
  return (
    <div className='bg-black min-h-screen'>
        <div className=' pt-5 px-20'>
            <h2 className='text-white text-[80px]'>Services</h2>

            <div className='flex justify-between items-center flex-col md:flex-row'>
            <div className='bg-white h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[60px] w-[300px]'/>
                <h2 className='font-bold pt-5 px-5'>UI/UX</h2>
                <p className='pt-3 px-5 text-xs'>Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow</p>
                <div className='flex px-5 pt-5 gap-3'>
                <h2 className='text-sm '>Learn More</h2>
                <h1 className="w-[16px] pt-1">
                    <img
                      className=""
                      src={arrow}
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
            </div>

            <div className='bg-white h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[60px] w-[300px]'/>
                <h2 className='font-bold pt-5 px-5'>UI/UX</h2>
                <p className='pt-3 px-5 text-xs'>Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow</p>
                <div className='flex px-5 pt-5 gap-3'>
                <h2 className='text-sm '>Learn More</h2>
                <h1 className="w-[16px] pt-1">
                    <img
                      className=""
                      src={arrow}
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
            </div>

            <div className='bg-white h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[60px] w-[300px]'/>
                <h2 className='font-bold pt-5 px-5'>UI/UX</h2>
                <p className='pt-3 px-5 text-xs'>Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow</p>
                <div className='flex px-5 pt-5 gap-3'>
                <h2 className='text-sm '>Learn More</h2>
                <h1 className="w-[16px] pt-1">
                    <img
                      className=""
                      src={arrow}
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
            </div>
            </div>


            <div className='flex justify-between items-center pt-10 pb-10 flex-col md:flex-row'>
            <div className='bg-white h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[60px] w-[300px]'/>
                <h2 className='font-bold pt-5 px-5'>UI/UX</h2>
                <p className='pt-3 px-5 text-xs'>Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow</p>
                <div className='flex px-5 pt-5 gap-3'>
                <h2 className='text-sm '>Learn More</h2>
                <h1 className="w-[16px] pt-1">
                    <img
                      className=""
                      src={arrow}
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
            </div>

            <div className='bg-white h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[60px] w-[300px]'/>
                <h2 className='font-bold pt-5 px-5'>UI/UX</h2>
                <p className='pt-3 px-5 text-xs'>Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow</p>
                <div className='flex px-5 pt-5 gap-3'>
                <h2 className='text-sm '>Learn More</h2>
                <h1 className="w-[16px] pt-1">
                    <img
                      className=""
                      src={arrow}
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
            </div>

            <div className='bg-white h-[220px] w-[300px]'>
                <img src={img} alt="img" className='h-[60px] w-[300px]'/>
                <h2 className='font-bold pt-5 px-5'>UI/UX</h2>
                <p className='pt-3 px-5 text-xs'>Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow</p>
                <div className='flex px-5 pt-5 gap-3'>
                <h2 className='text-sm '>Learn More</h2>
                <h1 className="w-[16px] pt-1">
                    <img
                      className=""
                      src={arrow}
                      alt="Arrow Right"
                    />
                  </h1>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Services;