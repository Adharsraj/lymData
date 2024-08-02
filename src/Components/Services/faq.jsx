import React from 'react';

const FAQ = () => {
  return (
    <div className="p-6 text-black flex flex-col">
      <div className="flex items-center justify-around"> 
        <div className="w-1/3 flex justify-start items-center">
          <div className="border-t border-gray-400 w-[700px]" /> 
        </div>
        <div className="flex flex-col w-1/2">
          <h2 className="text-xl font-bold mb-2 text-[#2FA7E3] ">FAQ</h2>
          <h1 className='text-2xl text-white font-bold mt-2'>Frequently Asked Questions</h1>
          <p className="text-gray-300 w-[700px] mt-2">
            Our process is designed to streamline project execution, ensuring seamless integration and tailored solutions for every client. We prioritize collaboration, innovation, and efficiency at every step.
          </p>
        </div>
      </div>
      
      <div className="flex justify-around gap-6 mt-6">
        <div className="p-4 rounded-lg shadow">
          <h3 className="text-md font-bold text-white">What services do you offer?</h3>
          <div className="border-t border-gray-400 mt-7" /> 
          <p className="text-gray-300 mt-2 w-[350px]">
            Research involves in-depth analysis to understand market trends, user needs, and technological advancements, ensuring that solutions are innovative and relevant.
          </p>
        </div>
        <div className="p-4 rounded-lg shadow">
          <h3 className="text-md font-bold text-white">What is your pricing structure?</h3>
          <div className="border-t border-gray-400 mt-7" /> 
          <p className="text-gray-300 mt-2 w-[350px]">
            Our pricing is based on the scope and complexity of the project. We offer flexible pricing models including fixed-price, hourly rates, and retainer agreements. Contact us for a detailed quote.
          </p>
        </div>
        <div className="p-4 rounded-lg">
          <h3 className="text-md font-bold text-white w-[300px]">How do you ensure the quality of your software?</h3>
          <div className="border-t border-gray-400 mt-1" /> 
          <p className="text-gray-300 mt-2 w-[350px]">
            We follow rigorous quality assurance processes including testing, debugging, and code reviews. Our team adheres to industry best practices and standards to deliver high-quality solutions.
          </p>
        </div>
      </div>
      <div className="flex justify-around gap-6 mt-6">
        <div className="p-4 rounded-lg shadow">
          <h3 className="text-md font-bold text-white">What is your pricing structure?</h3>
          <div className="border-t border-gray-400 mt-7" /> 
          <p className="text-gray-300 mt-2 w-[350px]">
            Our development process follows Agile methodologies, ensuring flexibility and collaboration throughout the project lifecycle.
          </p>
        </div>
        <div className="p-4 rounded-lg shadow">
          <h3 className="text-md font-bold text-white w-[300px]">How do you ensure the quality of your software?</h3>
          <div className="border-t border-gray-400 " /> 
          <p className="text-gray-300 mt-2 w-[350px]">
            Yes, we offer ongoing support and maintenance to ensure your project runs smoothly and efficiently even after launch.
          </p>
        </div>
        <div className="p-4 rounded-lg">
          <h3 className="text-md font-bold text-white w-[300px]">What services do you offer?</h3>
          <div className="border-t border-gray-400 mt-6" /> 
          <p className="text-gray-300 mt-2 w-[350px]">
            Absolutely! We can integrate seamlessly with your existing team to provide the additional expertise and resources you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
