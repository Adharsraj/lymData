import React from 'react'

const BlogNew = () => {
  return (
    <div className="bg-[#F4F4F4]">
    <div className="max-w-[1640px] font-aeonic  mx-auto p-2    ">
      <h2 className=" md:hidden mt-32">Recognition</h2>
      <h2 className="hidden md:block md:mt-24"></h2>

      <div className="relative overflow-hidden ">
        <h2 className="text-6xl px-1 z-20  text-[#282728] xxl:px-10 lg:text-[170px] xxl:text-[220px] md:text-8xl mt-24 lg:mt-14 font-bold absolute">
        Featured
          <h1 className="lg:ml-20">—articles</h1>
        </h2>
        <img
          src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691417363/LYMDATALABS/Pages/Culture/asset_3_gtyaon_aqutmr.png"
          className=" w-full top-0 h-[300px] lg:h-[600px] scale-x-150"
          alt="imgrotate"
        />
      </div>
    </div>
  </div>
  )
}

export default BlogNew;