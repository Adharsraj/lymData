import React from 'react'
import {  OurTopClients } from '../../assets/Data/data'

const TopClients = () => {
  return (
    <div className='bg-[#F7F7F7]'>
        <h1 className='p-4 text-3xl max-w-[1150px] font-bold md:text-center mx-auto md:pt-20 md:pb-20 md:text-5xl '>Top Clients</h1>
        <div className=" grid  max-w-[1150px] mx-auto gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 pb-10 lg:px-0 mb-10">
          {OurTopClients.map((m) => (
            <div className=" bg-white p-2 md:px-8 flex flex-col justify-center items-center ">
              <img
                className="w-20 h-14 mt-10 md:mt-24  md:w-[140px] md:h-[85px]"
                src={m.img}
                alt="images"
              />
              <h1 className="h-10 mt-10 font-bold">{m.title}</h1>
              <p className="text-center h-[200px] lg:h-[150px] md:h-[230px]">
                {m.description}
              </p>
            </div>
          ))}
        </div>
        <h1 className='w-[200px]  border-2  mx-auto flex text-lg justify-center border-black items-center h-16 rounded-full font-bold p-5'> See all clients</h1>
        <div className='pb-10'></div>
    </div>
  )
}

export default TopClients