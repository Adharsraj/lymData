import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#212121] text-white p-6 rounded-lg flex flex-col items-center w-[1300px] h-[250px]">
      <h2 className="text-[40px] font-bold mb-2">Take the next step.</h2>
      <p className="mb-2 font-bold text-[40px]">Let’s give your project a go!</p>
      <button className="bg-[#2FA7E3]  text-white py-2 px-4 rounded-lg flex items-center mt-4">
        Contact Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l8 8-8 8M4 12h16" />
        </svg>
      </button>
    </div>
  );
};

export default ContactUs;
