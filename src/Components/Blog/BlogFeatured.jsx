import React from "react";
import featuedImg from "../../assets/Images/IMAGE (4).png";
const BlogFeatured = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4   font-roboto mt-20">
      <div className="mb-6">
        <div className=" lg:flex lg:justify-between lg:p-8">
          <h2 className="text-3xl  uppercase mb-5 mt-10 lg:text-6xl md:text-5xl">enabling blog</h2>
          <h3 className="md:text-lg md:mt-12">
            Take a look behind the scenes, learn from us, be entertained or
            inspired.
          </h3>
        </div>
        <h3
          className="mb-6 lg:text-right lg:mt-[-40px] lg:text-lg lg:mr-8" >
          We are happy that you are here.
        </h3>
        <h3 className="mb-2 text-gray-400 md:text-lg lg:ml-14">Featured</h3>

        <img className="mx-auto" src={featuedImg} alt="featured" />
      </div>
    </div>
  );
};

export default BlogFeatured;
