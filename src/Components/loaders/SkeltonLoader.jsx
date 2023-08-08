import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../../assets/Data/data";

const SkeltonLoader = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 font-roboto overflow-hidden ">
      <div className="mb-6">
        <div className=" lg:flex lg:justify-between mt-32 lg:p-8">
          <h2 className="text-3xl bg-gray-200 text-transparent  uppercase mb-5  lg:text-6xl md:text-5xl">
            enabling blog
          </h2>
          <h3 className="md:text-lg bg-gray-200 text-transparent  md:mt-12">
            Take a look behind the scenes, learn from us, be entertained or
            inspired.
          </h3>
        </div>

        <div className=" bg-gray-200 w-screen mt-4 "></div>
      </div>
      <div className="flex justify-center">
        <div className="grid  md:grid-cols-2 gap-5">
          {blogsData.map((m) => (
            <Link key={m.id} to={`/blog/${m.id}`}>
              <div>
                <div className="h-[400px] w-[800px]  bg-gray-200"></div>
                <h3 className="uppercase bg-gray-200 text-transparent mt-4 lg:text-lg">
                  {m.title}
                </h3>
                <h3 className="mt-4 bg-gray-200  text-transparent ">
                  {m.Date}
                </h3>
                <h3 className="bg-gray-200 text-transparent">{m.Genere}</h3>
                <h3 className="bg-gray-200 text-transparent text-sm mb-6">
                  {m.Time}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeltonLoader;
