import React from 'react'
import { blogCards } from '../../assets/Data/data'

const BlogCards = () => {
  return (
    <>
    <div  className="max-w-[1640px] mx-auto bg-white min-h-screen">
  <div className='grid  p-5  gap-7 md:grid-cols-2 lg:grid-cols-4 lg:px-10'>

  {blogCards.map((m, index) => (
    <div className='w-full lg:w-[300px] lg:mt-10 h-[450px] bg-white cursor-pointer rounded-3xl mx-auto shadow-2xl'>
  <img src={m.img} className='h-[200px] w-full rounded-t-3xl' alt="" />
  <div className='flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element'>
  <h1 className='font-bold lg:mt-5'>{m.title}</h1>
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