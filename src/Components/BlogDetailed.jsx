import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogsData } from "../assets/Data/data";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BlogDetailed = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const m = blogsData.find((o) => o.id === parseInt(id));
    if (parseInt(id) < 4) {
      const n = blogsData.find((o) => o.id === parseInt(id) + 1);
      const o = blogsData.find((o) => o.id === parseInt(id) + 2);
      const newData = [...(n ? [n] : []), ...(o ? [o] : [])];
      setCombinedData(newData);
    } else {
      const n = blogsData.find((o) => o.id === parseInt(id) - 1);
      const o = blogsData.find((o) => o.id === parseInt(id) - 2);
      const newData = [...(n ? [n] : []), ...(o ? [o] : [])];
      setCombinedData(newData);
    }
    setBlogData(m);
    console.log(combinedData);
  }, [id]);

  return (
    <>
      <Navbar />
      <div>
        {blogData && (
          <div className="max-w-[1640px] mx-auto p-4 font-roboto mb-4">
            <div className="mt-8 mx-3">
              <h1 className="md:text-lg font-dm">
                blog/
                <span className="text-gray-400">{blogData.title}</span>
              </h1>
              <h2 className="uppercase text-2xl md:text-4xl font-bold w-[230px] md:w-[600px] mt-10 ">
                {blogData.title}
              </h2>
              <div className="mt-6 text-gray-400 md:text-lg font-dm">
                <span>
                  By:{blogData.By} | {blogData.Date} | {blogData.Genere} |{" "}
                  {blogData.Time}
                </span>
              </div>
            </div>
            <img className="mt-6 w-full" src={blogData.img} alt="image" />
            <div>{<blogData.more />}</div>
          </div>
        )}
        {combinedData && (
          <div className="max-w-[1640px] mx-auto p-4 font-roboto mb-20">
            <div className="flex justify-between">
              <p className="font-times mb-6 text-3xl w-[250px] md:w-[400px] ">MORE BLOG ARTICLES</p>
              <Link to='/blog'>
                <h2 className="text-gray-500 cursor-pointer md:mr-10 ">Show all</h2>
              </Link>
            </div>
            <div className="flex justify-center">

            <div className="grid md:grid-cols-2 gap-5">
              {combinedData.map((m) => (
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
