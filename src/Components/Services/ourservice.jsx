import React from 'react';

const OurServices = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-[#004B85] mb-2">OUR SERVICES</h2>
        <h1 className="text-2xl font-bold text-white">What we do for your business?</h1>
        <p className="text-gray-400 mx-auto mt-2 w-[1150px]">
          We offer innovative software solutions, from custom application development to system integrations, designed to enhance business efficiency and drive growth. Our services include software engineering, cloud solutions, and ongoing support to meet your unique technological needs.        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col items-center p-6 rounded-lg shadow h-[350px] w-[320px] bg-[#212121]">
          <img
            className="mx-auto"
            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/productdiscovery.svg"
            alt="featured"
          />
          <h3 className="text-lg font-bold text-white mt-2">Product Discovery</h3>
          <p className="text-gray-400 mt-3 text-center">
            Discovering innovative solutions through in-depth research and analysis. Our product discovery process uncovers new opportunities for growth and development.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg shadow h-[350px] w-[320px] bg-[#212121]">
          <img
            className="mx-auto"
            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/technology.svg"
            alt="featured"
          />
          <h3 className="text-lg font-bold text-white mt-6">Technology</h3>
          <p className="text-gray-400 mt-3 text-center text-center">
            Leveraging cutting-edge technology to create robust, scalable solutions. Our expertise spans a wide range of modern tech stacks, ensuring optimal performance and innovation in every project.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg shadow h-[350px] w-[320px] bg-[#212121]">
          <img
            className="mx-auto"
            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/design.svg"
            alt="featured"
          />
          <h3 className="text-lg font-bold text-white mt-6">Design</h3>
          <p className="text-gray-400 mt-3 text-center text-center">
            Designing intuitive and aesthetically pleasing interfaces that prioritize user experience. Our team combines creativity with usability to create visual and functional designs that resonate with users.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-6  rounded-lg shadow h-[340px] w-[320px] bg-[#212121]">
          <img
            className="mx-auto"
            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/mobile%26web.svg"
            alt="featured"
          />
          <h3 className="text-lg font-bold text-white text-center w-[200px] mt-5">Web & Mobile Development</h3>
          <p className="text-gray-400 mt-3 text-center">
            Our team delivers responsive, high-performance solutions that seamlessly integrate with your business, ensuring a smooth and engaging user experience across all devices."
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg shadow h-[340px] w-[320px] bg-[#212121]">
          <img
            className="h-[80px] w-[150px]"
            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/growthmarketing.svg"
            alt="featured"
          />
          <h3 className="text-lg font-bold text-white text-center w-[160px] mt-4">Growth, Marketing & Sales</h3>
          <p className="text-gray-400 mt-3 text-center">
            We leverage data-driven insights and creative campaigns to enhance your brand presence, attract new customers, and boost sales.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurServices;
