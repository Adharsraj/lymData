import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay showing the popup for 3 seconds
    const delay = setTimeout(() => {
      const hasShownPopupBefore = localStorage.getItem('popupShown');

      if (!hasShownPopupBefore) {
        setIsVisible(true);
      }
    }, 4000);

    // Clear the delay timeout on unmount to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  const handleCloseClick = () => {
    setIsVisible(false);
    localStorage.setItem('popupShown', 'true');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 md:pt-[90px] mt-24 md:mt-20  flex justify-center items-center backdrop-blur-lg">
          <div className="absolute bg-white shadow-lg p-3 rounded-lg w-full sm:w-full lg:w-[500px]">
          
            <div className='flex items-center'>
            <h2 className="text-4xl font-bold mb-4 text-black">Get a Free Consultation</h2>
              <button
              className="absolute top-5  right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseClick}
            >
              {/* Close SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            </div>
            <h3>Let's discover the possibilities of working together.</h3>
            <h3>Schedule an introductory call.</h3>
            <form className="">
              <div className="mb-1">
                <input
                  type="text"
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Full Name *"
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  type="email"
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Email *"
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  type="number"
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Mobile Number *"
                />
              </div>
              <div className="mb-1">
                <input
                  type="text"
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Company Name *"
                />
              </div>
              <div className="mb-1">
                <textarea
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Message *"
                />
              </div>
            </form>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="p-3 md:mt-3 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r bg-black hover:from-indigo-400 hover:to-cyan-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
