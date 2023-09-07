import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShownPopupBefore = localStorage.getItem('popupShown');

    if (!hasShownPopupBefore) {
      setIsVisible(true);
      localStorage.setItem('popupShown', 'true');
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-lg">
          <div className="absolute bg-white shadow-lg p-8 rounded-lg w-full sm:w-full lg:w-[500px]">
            <h2 className="text-4xl font-bold mb-8 text-black">Get a Free Consultation</h2>
            <h3>Let's discover the possibilities of working together.</h3>
            <h3>Schedule an introductory call.</h3>
            <form className="">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Full Name *"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Email *"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Mobile Number *"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Company Name *"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                  placeholder="Message *"
                />
              </div>
            </form>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="p-3 mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r bg-black hover:from-indigo-400 hover:to-cyan-400"
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
