import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../assets/Data/data";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BlogDetailed = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const m = blogsData.find((o) => o.id === parseInt(id));
    setBlogData(m);
    console.log(m);
  }, [id]);

  return (
    <>
      <Navbar />
      <div>
        {blogData && (
          <div className="max-w-[1640px] mx-auto p-4 font-roboto mb-32">
            <div className="mt-8 mx-3">
              <h1 className="md:text-lg font-dm">
                blog/
                <span className="text-gray-400">{blogData.title}</span>
              </h1>
              <h2 className="uppercase text-2xl md:text-4xl font-bold w-[230px] md:w-[600px] mt-10 ">
                {blogData.title}
              </h2>
            <div className="mt-6 text-gray-400 md:text-lg font-dm">
                <span>By:{blogData.By} | {blogData.Date} | {blogData.Genere} | {blogData.Time}</span>
            </div>
            </div>
            <img className="mt-6 w-full" src={blogData.img} alt="image" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailed;

{
  /* <div>{<blogData.more/>}</div> */
}
