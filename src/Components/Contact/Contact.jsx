import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Contact = () => {
  const handleContactClick = () => {
    const toAddress = 'example@example.com'; 
    const subject = 'Contact Us';

    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&to=${toAddress}&su=${encodeURIComponent(subject)}`;

    window.open(gmailLink);
  };

  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] ">
        <div className="  md:px-20">
          <div className="mt-10 lg:mt-16   ">
          <h1 className="text-5xl mt-32 font-bold lg:text-8xl xxl:text-9xl ">
              Let's talk
            </h1>
            <ul>
            <li>
                    <div className="flex gap-5 text-xl lg:gap-14 mt-5 px-5 lg:mt-10 lg:px-32 lg:text-2xl">
                    <span
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/company/lymdata-labs",
                            "_blank"
                          )
                        }
                        className="  cursor-pointer text-black"
                      >
                        <SlSocialLinkedin />
                      </span>
                      <span
                        onClick={() =>
                          window.open(
                            "https://www.facebook.com/lymdatalabs/",
                            "_blank"
                          )
                        }
                        className="  cursor-pointer text-black"
                      >
                        <SlSocialFacebook />
                      </span>
                
                      <span
                        onClick={() =>
                          window.open(
                            "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                            "_blank"
                          )
                        }
                        className="  cursor-pointer text-black"
                      >
                        <SlSocialInstagram />
                      </span>
                      
                    </div>
                  </li>
            </ul>

            <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-96 lg:w-[700px] bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-4xl font-bold mb-12">How can I help you?</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Company</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Please, tell me what you're after</label>
            <textarea
              className="w-full border rounded py-2 px-3 h-32"
            />
          </div>
          {/* <button
            type="submit"
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white py-2 px-4 rounded w-full"
          >
            Submit
          </button> */}
          <a  className="p-3 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] hover:bg-orange-600 cursor-pointer" >
                Submit
              </a>
        </form>
      </div>
    </div>


            <h1 className="text-5xl mt-12  lg:text-8xl xxl:text-9xl ">
              ready when <br /> you are—It’s time <br /> to accelerate{" "}
            </h1>
            <div className="flex group hover:cursor-pointer gap-4 top-[270px] lg:top-[500px] xl:top-[370px] w-full mb-10  md:mt-5 mx-auto">
              <a  className="p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]" onClick={handleContactClick}>
                Get in touch
              </a>
              <a  className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
                <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" alt="Contact Icon" onClick={handleContactClick}/>
              </a>
            </div>

            <div></div>
            <div className="  flex gap-3 ">
              <h2 className="w-10 h-10  rounded-full border flex items-center justify-center border-black">
                +
              </h2>
              <h2 className="w-10 h-10 rounded-full border border-black border-dashed flex items-center justify-center">
                *
              </h2>
            </div>
            <h1 className="mt-5 mb-5">
              {" "}
              you can also send us a plain email if you want too <br />
              info@lymdata.com
            </h1>
          </div>
        </div>
        <div className="md:flex justify-around items-center md:bg-[#262626] md:text-white  lg:rounded-3xl md:px-10 xxl:px-16 mb-10 ">
          <div className="md:w-[400px] xxl:w-full">
            <h1 className="mt-5 md:mt-0 lg:text-xl font-bold">
              4th floor <br />
              Dotspace Business Center <br />
              Total Tower Near Devankulangara <br /> Behind Changapuzha Park{" "}
              <br /> Elamakara, Edappally, Kochi, Kerala <br /> 682024
            </h1>
          </div>
          <div>
            <iframe
              className=" w-full lg:w-[600px] lg:rounded-3xl xxl:w-[800px] md:h-[400px] h-[300px] lg:mt-16  mt-10 mb-10 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991079733446!2d76.29998647382259!3d10.017594172734224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2e430b5527%3A0x19cf2b36ac16c7f8!2sDotspace%20Edapally!5e0!3m2!1sen!2sin!4v1689835845317!5m2!1sen!2sin"
              width="600"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
