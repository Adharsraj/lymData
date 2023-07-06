import React from 'react'
import { Link } from 'react-router-dom'
import { blogsData } from '../assets/Data/data'

const AllBlogs = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-roboto">
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 gap-5">
        {blogsData.map((m) => (
          <Link key={m.id} to={`/blog/${m.id}`}>
            <div>
              <img src={m.img} alt="Featured" />
              <h3 className="uppercase mt-4 lg:text-lg">{m.title}</h3>
              <h3 className="mt-4 text-gray-500">{m.Date}</h3>
              <h3 className="text-gray-500">{m.Genere}</h3>
              <h3 className="text-gray-500 text-sm mb-6">{m.Time}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default AllBlogs