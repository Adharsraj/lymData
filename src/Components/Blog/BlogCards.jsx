import React from 'react'
import { blogCards } from '../../assets/Data/data'

const BlogCards = () => {
  return (
    <>
    <div  className="max-w-[1640px] mx-auto bg-white min-h-screen">
  <div className='grid  p-5  gap-7 md:grid-cols-2 lg:grid-cols-3 lg:px-28'>

  {blogCards.map((m, index) => (
    <div className='w-full lg:w-[300px] lg:mt-10 h-[250px] bg-white hover:bg-gradient-to-r from-cyan-400 to-indigo-400 cursor-pointer hover:w-[320px] rounded-3xl mx-auto shadow-2xl'>

  <div className='flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element'>
  <h1 className='font-bold lg:mt-10'>{m.title}</h1>
  <h2 className='lg:text-[14px] text-[12px] lg:mt-20'>{m.desc}</h2>

  </div>
    </div>
  ))}
    </div>

  </div>
  </>
  )
}

export default BlogCards;