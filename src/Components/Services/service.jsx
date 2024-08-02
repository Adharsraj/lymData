import React from 'react';

const Service = () => {
  return (
    <div className="relative p-6 flex h-[500px]">
      <div className="w-1/2 pr-4 ml-[80px] mt-[230px]">
        <h2 className="text-[50px] font-bold text-[#2FA7E3] mb-2">Services</h2>
        <h1 className="text-[25px] font-bold text-white">This is What We Do Best</h1>
      </div>
      <div className="relative overflow-hidden ml-[600px] mt-[100px]">
        <img
          className="w-[300px] h-[400px] opacity-30"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/box.svg"
          alt="featured"
        />
      </div>
    </div>
  );
};

export default Service;
