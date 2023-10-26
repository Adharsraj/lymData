import React from 'react'
import img from '../../assets/Images/Services.png'
import arrow from '../../assets/Images/right_arrow.png'
import { servv } from '../../assets/Data/data'

const Services = () => {
  return (
  <>
    <div  className="max-w-[1640px] mx-auto bg-white min-h-screen">
<h1 className='lg:text-[70px] text-[35px] font-bold lg:px-28 text-black px-5 some-element'>Services</h1>
  <div className='grid  p-5  gap-7 md:grid-cols-2 lg:grid-cols-3 lg:px-28'>

  {servv.map((m, index) => (
    <div className='w-full lg:w-[348px]  h-[229px] bg-white border border-gray-400 mx-auto shadow-2xl'>

  <img src={m.img} className='h-[56px] w-full' alt="" />
  <div className='flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element'>
  <h1 className='font-bold'>{m.title}</h1>
  <h2 className='lg:text-[14px] text-[12px]'>{m.desc}</h2>
  <div className='flex gap-2'>
  <h2> Learn More</h2>
  <img src={arrow} alt="arrow" className='w-[16px]'/>
  </div>

  </div>
    </div>
  ))}
    </div>

  </div>
  </>
  )
}

export default Services;