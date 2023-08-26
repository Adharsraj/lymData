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
      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] overflow-hidden">
        <div className=" md:px-20">
          {/* <div className=" "> */}
            <div className="min-h-screen mt-10 md:mt-0 lg:mt-0 relative border border-transparent ">
            <div className="text-[200px] md:text-[350px] lg:text-[500px] font-extrabold absolute lg:mt-0 mt-48 md:mt-40 ml-[-30px] md:ml-[-130px] lg:ml-[-130px]">
  <span className="bg-clip-text text-transparent bg-gray-200 ">
    Hello 
  </span>
</div>
          <h1 className="text-5xl mt-80 md:mt-96 lg:mt-72 font-extrabold font-sans md:text-8xl lg:text-[150px] animate-slide-up "
          style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}>
              Let's talk
            </h1>
            <ul>
            <li>
                    <div className="flex item-center gap-5 text-2xl lg:gap-14 mt-7 mb-48 lg:mb-20 px-1 lg:mt-10 lg:px-5 lg:text-4xl animate-slide-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path fill-rule="evenodd" d="M27.83 2H4.09C2.93 2 2 2.93 2 4.02v23.96C2 29.07 2.93 30 4.1 30h23.8c1.17 0 2.1-.93 2.1-2.02V4.02A2.2 2.2 0 0 0 27.83 2ZM6.1 12.5h4.11v13.38h-4.1V12.5Zm2.1-6.61c1.31 0 2.4 1.09 2.4 2.41a2.42 2.42 0 0 1-2.4 2.41A2.42 2.42 0 0 1 5.8 8.3c0-1.4 1.09-2.41 2.4-2.41Zm8.6 6.61h-3.95v13.22h4.19v-6.6c0-1.72.3-3.43 2.48-3.43 2.17 0 2.17 2.02 2.17 3.58v6.53h4.11v-7.31c0-3.58-.77-6.38-4.96-6.38a4.34 4.34 0 0 0-3.96 2.18h-.08V12.5Z" clip-rule="evenodd"></path></svg>
                      

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2C8.27 2 2 8.3 2 16.09 2 23.12 7.12 28.94 13.81 30v-9.84h-3.55v-4.07h3.55v-3.1c0-3.54 2.1-5.49 5.3-5.49 1.52 0 3.12.28 3.12.28v3.46h-1.76c-1.74 0-2.28 1.09-2.28 2.2v2.65h3.88l-.62 4.07h-3.26V30A14.06 14.06 0 0 0 30 16.09C30 8.3 23.73 2 16 2Z"></path></svg>
                
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path fill-rule="evenodd" d="M16 8.81a7.2 7.2 0 1 0 0 14.38 7.2 7.2 0 0 0 0-14.38Zm0 11.85a4.67 4.67 0 1 1 0-9.33 4.67 4.67 0 0 1 0 9.33Z" clip-rule="evenodd"></path><path d="M25.14 8.52a1.68 1.68 0 1 1-3.35 0 1.68 1.68 0 0 1 3.35 0Z"></path><path fill-rule="evenodd" d="M16 2c-3.8 0-4.28.02-5.78.08-1.49.07-2.5.3-3.4.65-.91.36-1.7.84-2.47 1.62a6.94 6.94 0 0 0-1.62 2.48c-.34.89-.58 1.9-.65 3.4C2.02 11.72 2 12.2 2 16s.02 4.28.08 5.77c.07 1.49.3 2.5.65 3.4.36.92.84 1.7 1.62 2.48a6.94 6.94 0 0 0 2.48 1.62c.89.34 1.9.58 3.4.65 1.5.06 1.96.08 5.77.08 3.8 0 4.28-.02 5.77-.08 1.5-.07 2.5-.3 3.4-.65.92-.36 1.7-.84 2.48-1.62a6.94 6.94 0 0 0 1.62-2.48c.34-.89.58-1.9.65-3.4.06-1.5.08-1.97.08-5.77s-.02-4.28-.08-5.78c-.07-1.49-.3-2.5-.65-3.4a6.82 6.82 0 0 0-1.62-2.48 6.94 6.94 0 0 0-2.48-1.61c-.89-.35-1.9-.59-3.4-.65C20.27 2.02 19.8 2 16 2Zm0 2.52c3.73 0 4.17.02 5.65.09 1.37.06 2.1.28 2.6.48.66.26 1.12.56 1.61 1.04.49.5.8.96 1.05 1.62.18.49.42 1.23.48 2.6.07 1.47.08 1.91.08 5.65s-.01 4.18-.08 5.66a7.64 7.64 0 0 1-.48 2.6 4.34 4.34 0 0 1-1.05 1.61c-.49.49-.95.8-1.61 1.05-.5.18-1.23.42-2.6.48-1.48.07-1.92.08-5.66.08-3.73 0-4.17-.01-5.65-.08a7.64 7.64 0 0 1-2.6-.48 4.34 4.34 0 0 1-1.61-1.05c-.5-.49-.8-.95-1.05-1.61a7.78 7.78 0 0 1-.48-2.6A97.15 97.15 0 0 1 4.52 16c0-3.74.01-4.18.08-5.65.06-1.37.29-2.11.48-2.6.26-.66.56-1.13 1.05-1.62.49-.48.95-.8 1.6-1.04.5-.19 1.24-.42 2.6-.48A92.1 92.1 0 0 1 16 4.52Z" clip-rule="evenodd"></path></svg>
                      
                    </div>
                  </li>
            </ul>
            <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-9xl pointer-events-none opacity-25 z-[-1]">
    Hello
  </div>
            </div>

            <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-96 lg:w-[700px] bg-gray-100 p-8 mt-0 md:mt-0 lg:mt-0 rounded shadow-md ">
        <h2 className="text-4xl font-bold mb-8 ">How can I help you?</h2>
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
        
          <a  className="p-3 mt-8 flex justify-center rounded-full w-[120px] text-white bg-[#282728] cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]" >
                Submit
              </a>
        </form>
      </div>
    </div>


            {/* <h1 className="text-5xl mt-10 md:mt-0 lg:mt-0 xxl:mt-40 lg:text-8xl xxl:text-9xl ">
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
            </h1> */}
          {/* </div> */}
        </div>
        <div className="md:flex justify-around items-center md:bg-[#262626] md:text-white  lg:rounded-3xl md:px-10 xxl:px-16 mb-10 ">
          <div className="md:w-[400px] xxl:w-full">
            <h1 className="mt-7 md:mt-0 lg:mt-0 xxl:mt-0 lg:text-xl font-bold">
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
