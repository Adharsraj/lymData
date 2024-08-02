import React from 'react';

const Benefits = () => {
  return (
    <div className="p-6 flex">
      <div className=" flex flex-col justify-center ml-10">
        <h2 className="text-xl font-bold text-[#2FA7E3] mb-2">BENEFITS</h2>
        <h1 className='text-2xl font-bold text-white'>Trusted agency for your business</h1>
        <p className="text-gray-400 w-[550px] mt-3">
        Experience enhanced efficiency and impactful results with our customized solutions tailored to your unique needs.
        </p>
      </div>
      <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 ml-[60px]">
        <div className="flex flex-col items-center p-4 border border-[#2FA7E3] rounded-lg bg-[#212121] h-[250px] w-[330px]">
        <img
          className="h-[70px] w-[230px]"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/professionalteam.svg"
          alt="featured"
        />
          <h3 className="text-lg font-bold text-white mt-4">Professional Team</h3>
          <p className="text-gray-400 mt-1 text-center">
          Work with our expert team committed to delivering innovative and high-quality solutions.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border border-[#2FA7E3] rounded-lg bg-[#212121] h-[250px] w-[330px]">
        <img
          className="h-[70px] w-[230px]"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/creativepeople.svg"
          alt="featured"
        />
          <h3 className="text-lg font-bold text-white mt-4">Creative People</h3>
          <p className="text-gray-400 mt-1 text-center">
          Innovative minds crafting exceptional solutions with creativity and expertise.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border border-[#2FA7E3] rounded-lg bg-[#212121] h-[250px] w-[330px]">
        <img
          className="h-[70px] w-[230px]"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/freindlysupport.svg"
          alt="featured"
        />
          <h3 className="text-lg font-bold text-white mt-4">Friendly Support</h3>
          <p className="text-gray-400 mt-1 text-center">
          Enjoy responsive and approachable support that makes every interaction smooth and reassuring.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border border-[#2FA7E3] rounded-lg bg-[#212121] h-[250px] w-[330px]">
        <img
          className="h-[70px] w-[230px]"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/service/fastdelivery.svg"
          alt="featured"
        />
          <h3 className="text-lg font-bold text-white mt-4">Fast Delivery</h3>
          <p className="text-gray-400 mt-1 text-center">
          Swift and timely delivery ensures your solutions are up and running in no time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
