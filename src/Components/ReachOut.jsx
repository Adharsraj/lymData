import React from "react";
import { BsArrowRight } from "react-icons/bs";
const ReachOut = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4 text-[#040404]">
      <span className="text-5xl font-times lg:mx-20 md:mt-16  lg:text-6xl lg:ml-40 lg:mt-16   ">
        Reach out.
      </span>
      <h3 className="mt-10 md:mt-20 mx-auto md:w-[450px] lg:w-[550px] md:flex  md:justify-center sm:text-lg ">
        Thanks for your interest in working with us. Please complete the details
        below and we’ll get back to you within one business day.
      </h3>

      <div className="p-2 font-dm mt-10 mx-auto md:w-[450px] lg:w-[550px] md:flex md:flex-col  md:justify-center sm:text-lg ">
        <h4 className="font-dm text-sm mt-8 mb-8">Required*</h4>
        <form action="">
          <label className="block mb-3" htmlFor="FirstName">
            First name
          </label>
          <input
            className=" mb-8 border-b w-full border-b-gray-950 outline-none"
            type="text"
          />

          <label className="block mb-3" htmlFor="Last name">
            Last name
          </label>
          <input
            className=" mb-8 border-b w-full border-b-gray-950 outline-none"
            type="text"
          />

          <label className="block mb-3" htmlFor="Email address">
            Email address
          </label>
          <input
            className="border-b w-full border-b-gray-950 mb-8 outline-none"
            type="text"
          />

          <label className="block mb-3" htmlFor="Organisation">
            Organisation
          </label>
          <input
            className="border-b w-full border-b-gray-950 mb-8 outline-none"
            type="text"
          />

          <label className="block mb-3" htmlFor="How can we help?">
            How can we help?
          </label>
          <input
            className="border-b w-full border-b-gray-950 mb-8 outline-none"
            type="text"
          />
        </form>
        <h4>
          By submitting this form, you agree to our Privacy Policy and Terms of
          Use
        </h4>

        <div className="w-[132px] h-[63px] mt-12 mb-6 bg-[#F2F626] hover:-rotate-45 transition-transform">
          <span className="flex justify-end">
            <BsArrowRight size={30} />
          </span>
          <h1 className="flex justify-center">Submit form</h1>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
