import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import emailjs from "@emailjs/browser";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [sucess, setsucess] = useState(false);

  // template_fbloykc
  // service_lg0sfcn
  // K7UCOY8ZVCrNGalrE
  useEffect(() => {
    // Delay showing the popup for 3 seconds
    const delay = setTimeout(() => {
      const hasShownPopupBefore = localStorage.getItem("popupShown");

      if (!hasShownPopupBefore) {
        setIsVisible(true);
      }
    }, 4000);

    // Clear the delay timeout on unmount to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  const handleCloseClick = () => {
    setIsVisible(false);
    localStorage.setItem("popupShown", "true");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the email using Email.js
      await emailjs.send(
        "service_lg0sfcn",
        "template_fbloykc",
        {
          from_name: formData.fullName,
          to_name: "Adarsh",
          from_email: formData.email,
          to_email: "3301ad@gmail.com",
          message: formData.message,
        },
        "K7UCOY8ZVCrNGalrE"
      );
      setLoading(false);

      setsucess(true);
      resetForm(); // Reset the form fields
      const delay = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("popupShown", "true");

      }, 2000);

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumWidth, setIsMediumWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerHeight <= 600);
      setIsMediumWidth(window.innerWidth >= 1200 && window.innerWidth <= 1350);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 md:mt-14 mt-24 flex justify-center items-center backdrop-blur-lg">
          <div className="absolute bg-white shadow-lg p-6 rounded-lg w-full sm:w-full lg:w-[500px]">
            {isSmallScreen && isMediumWidth ? (
              <div>
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
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
                <h2 className="text-2xl font-bold mb-0 text-black">
                  Get a Free Consultation
                </h2>
                <h3>Let's discover the possibilities of working together.</h3>
                <h3>Schedule an introductory call.</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3"
                      placeholder="Full Name *"
                      required
                    />
                  </div>
                  <div className="mb-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-1">
                    <input
                      type="number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3"
                      placeholder="Mobile Number *"
                    />
                  </div>
                  <div className="mb-1">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3"
                      placeholder="Company Name *"
                    />
                  </div>
                  <div className="mb-1">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3"
                      placeholder="Message *"
                    />
                  </div>
                  <div className="flex justify-center items-center">
    {sucess ? (
       <h2 className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white text-center w-[300px] p-2">
       Mail sent successfully, our team will get in touch with you soon
     </h2>
    ) : (
      <button
        type="submit"
        className={`p-3 md:mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r from-indigo-400 to-cyan-400  ${
          loading ? "bg-black" : "hover:from-indigo-400 hover:to-cyan-400"
        }`}
        disabled={loading}
      >
        {loading ? (
           <svg
           className="animate-spin h-5 w-5 text-black mx-auto"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
         >
           <circle
             className="opacity-25"
             cx="12"
             cy="12"
             r="10"
             stroke="currentColor"
             strokeWidth="4"
           ></circle>
           <path
             className="opacity-75"
             fill="currentColor"
             d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4 4a1 1 0 00-.3.7V12"
           ></path>
         </svg>
        ) : (
          "Submit"
        )}
      </button>
    )}
  </div>
                </form>
              </div>
            ) : (
              <div>
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
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
                <h2 className="text-4xl font-bold mb-4 text-black">
                  Get a Free Consultation
                </h2>
                <h3>Let's discover the possibilities of working together.</h3>
                <h3>Schedule an introductory call.</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                      placeholder="Full Name *"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                      placeholder="Mobile Number *"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                      placeholder="Company Name *"
                    />
                  </div>
                  <div className="mb-2">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                      placeholder="Message *"
                    />
                  </div>
                  <div className="flex justify-center items-center">
    {sucess ? (
      <h2 className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white text-center w-[300px] p-2">
        Mail sent successfully, our team will get in touch with you soon
      </h2>
    ) : (
      <button
        type="submit"
        className={`p-3 md:mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r from-indigo-400 to-cyan-400 ${
          loading ? "bg-black" : "hover:from-indigo-400 hover:to-cyan-400"
        }`}
        disabled={loading}
      >
        {loading ? (
           <svg
           className="animate-spin h-5 w-5 text-black mx-auto"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
         >
           <circle
             className="opacity-25"
             cx="12"
             cy="12"
             r="10"
             stroke="currentColor"
             strokeWidth="4"
           ></circle>
           <path
             className="opacity-75"
             fill="currentColor"
             d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4 4a1 1 0 00-.3.7V12"
           ></path>
         </svg>
        ) : (
          "Submit"
        )}
      </button>
    )}
  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
