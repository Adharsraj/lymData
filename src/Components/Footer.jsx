import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer
 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="hidden md:block max-w-[1640px]  mx-auto xl:px-32 md:px-16    pb-10   md:text-xl bg-[#131313] text-white ">
        <div className=" md:flex justify-between  border-b pb-10 pt-10">
          <div className="">
            <h3 className="mb-4 font-bold text-xl">LYMDATA</h3>
            <div className="md:flex gap-4 hidden ">
              <Link to="/about">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">About us</h4>
              </Link>
              <Link to="/works">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Works</h4>
              </Link>
              

              <Link to="/careers">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Careers</h4>
              </Link>
              <Link to="/services">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Services</h4>
              </Link>
              <Link to="/blog">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Blogs</h4>
              </Link>
            </div>
            <div className="md:hidden gap-4 flex justify-between ">
              <div>
                <Link>
                  <h4 className="pb-1 text-[#c1bfbf] hover:text-white">About us</h4>
                </Link>
                <Link>
                  <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Works</h4>
                </Link>
              </div>
              <div>
                <Link>
                  <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Careers</h4>
                </Link>
                <Link>
                  <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Services</h4>
                </Link>
                <Link to="/blogs">
                  <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Blogs</h4>
                </Link>
              </div>
            </div>
            <div className="lg:hidden md:pb-10 pt-10  w-[280px]">
              <label htmlFor="stay uptodate mb-5" className="text-[#c1bfbf] ">Stay upto date</label>
              <div className="md:flex gap-3 mt-5">
                <input
                  type="text"
                  className="border rounded-sm md:rounded-full mb-2 p-2"
                />
                <button className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white rounded-sm md:rounded-full p-2">
                  subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <label htmlFor="stay uptodate" className=" ">Stay upto date</label>
            <div className="flex mt-3">
              <div className=" flex">
                <input
                  type="text"
                  className="border text-black focus:outline-none rounded-full p-1 px-8"
                  placeholder="Enter your email"
                />
                <button
                  className="bg-gradient-to-r from-indigo-400 to-cyan-400 w-28 text-white rounded-full p-1 ml-[-34px] border-1  overflow-hidden group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? "➜" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex justify-between lg:pt-10">
          <div>
            <h3 className="text-[#c1bfbf] ">2023 Lymdata.All rights reserved</h3>
          </div>
          <div className="flex gap-10">
            <Link to="/terms">
              <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Terms</h4>
            </Link>
            <Link to="/privacy">
              <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Privacy policy</h4>
            </Link>
            <Link to="/sitemap">
              <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Sitemap</h4>
            </Link>
          </div>
        </div>
        <div className="  md:hidden justify-between">
          <div className="flex gap-10">
            <Link to="/terms">
              <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Terms</h4>
            </Link>
            <Link to="/privacy">
              <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Privacy policy</h4>
            </Link>
          </div>
          <div>
            <h3 className="text mt-5 text-[#c1bfbf] ">2023 Lymdata.All rights reserved</h3>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-[#131313] text-white">
        <div className="">
          <h1 className="px-2 mt-5 mb-5 font-bold text-xl">LymData</h1>
          <div className="flex gap-28 mb-5 px-4">
            <div>
              <Link to="/about">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">About us</h4>
              </Link>
              <Link to="/works">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Works</h4>
              </Link>
            </div>
            <div>
              <Link to="/careers">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Careers</h4>
              </Link>
              <Link to="/services">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Services</h4>
              </Link>
              <Link to="/blog">
                <h4 className="pb-1 text-[#c1bfbf] hover:text-white">Blogs</h4>
              </Link>
            </div>
          </div>
          <label className="px-3 font-bold text-[#c1bfbf] " htmlFor="sta ">
            Stay upto date
          </label>
          <div className=" gap-3 mt-5 px-3 mb-5 border-b pb-6">
            <input
              type="text"
              className="border rounded-full   md:rounded-full w-full mb-2 p-2 px-5"
              placeholder="Enter your email"
            />
            <button className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white rounded-full md:rounded-full w-full p-2">
              subscribe
            </button>
          </div>
          <div className=" justify-between px-3">
            <div className="flex gap-10">
              <Link to="/terms">
                <h4 className="text-[#c1bfbf] hover:text-white">Terms</h4>
              </Link>
              <Link to="/privacy">
                <h4 className="text-[#c1bfbf] hover:text-white">Privacy policy</h4>
              </Link>
              <Link to="/sitemap">
                <h4 className="text-[#c1bfbf] hover:text-white">Sitemap</h4>
              </Link>
            </div>
            <div>
              <h3 className="text mt-5 pb-5 text-[#c1bfbf] ">
                2023 Lymdata.All rights reserved
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer
;
