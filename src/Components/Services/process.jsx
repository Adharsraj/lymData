import React from 'react';

const Process = () => {
  return (
    <div className="p-6 bg-white text-black"> 
      <div className="flex items-center justify-around"> 
        <div className="flex flex-col w-1/2">
          <h2 className="text-xl font-bold mb-2 text-[#2FA7E3] ">PROCESS</h2>
          <h1 className='text-2xl text-black font-bold mt-2'>How do we solve the problems?</h1>
          <p className="text-gray-600 w-[600px] mt-2">
            Our process is designed to streamline project execution, ensuring seamless integration and tailored solutions for every client. We prioritize collaboration, innovation, and efficiency at every step.
          </p>
        </div>
        <div className="w-1/3 flex justify-start items-center">
          <div className="border-t border-gray-400 w-[500px]" /> 
        </div>
      </div>

      <div className="mt-8 flex justify-around gap-6">
        <div className="flex flex-col items-left p-4">
          <h3 className="text-5xl font-bold">01</h3>
          <div className="border-t border-gray-400 w-[300px] mt-2" />
          <h4 className="text-xl font-bold mt-4">Research</h4>
          <p className="text-gray-600 w-[350px] mt-3">
          Research involves in-depth analysis to understand market trends, user needs, and technological advancements, ensuring that solutions are innovative and relevant.
          </p>
        </div>
        <div className="flex flex-col items-left p-4">
          <h3 className="text-5xl font-bold">02</h3>
          <div className="border-t border-gray-400 w-[300px] mt-2" />
          <h4 className="text-xl font-bold mt-4">Analysis</h4>
          <p className="text-gray-600 w-[350px] mt-3">
          Comprehensive analysis to assess requirements and define objectives, ensuring a clear roadmap. This process lays the foundation for project execution and success.
          </p>
        </div>
        <div className="flex flex-col items-left p-4">
          <h3 className="text-5xl font-bold">03</h3>
          <div className="border-t border-gray-400 w-[300px] mt-2" />
          <h4 className="text-xl font-bold mt-4">Solution</h4>
          <p className="text-gray-600 w-[350px] mt-3">
          Developing tailored solutions to address identified needs and challenges, ensuring the delivery of effective and efficient results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
