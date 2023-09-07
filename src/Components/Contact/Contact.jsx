import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { FaLongArrowAltDown } from "react-icons/fa";
import img from "../../assets/Images/contact.jpeg"

const Contact = () => {
  const handleClicktoform = () => {
    const component2Element = document.getElementById("form");
    if (component2Element) {
      window.scrollTo({
        top: component2Element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      "#arrowbottom",
      {
        x: 0,
        y: 70,
        rotate: 0,
      },
      {
        x: 0,
        y: 100,
        rotate: 0,
        delay: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.from("h6 div", 1.5, {
      yPercent: 100,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.to("h6", 1.5, {
      clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  const handleContactClick = () => {
    const toAddress = 'example@example.com'; 
    const subject = 'Contact Us';

    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&to=${toAddress}&su=${encodeURIComponent(subject)}`;

    window.open(gmailLink);
  };


  // const [text, setText] = useState('');
  const sentences = ["ddrive conversion", "bbuild to scale", "iinspire action"];
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  // const sentences = ["How can I help you?", "Here's more text.", "This is additional text."];
  let sentenceIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typeText = () => {
      if (sentenceIndex < sentences.length) {
        if (charIndex < sentences[sentenceIndex].length) {
          setText((prevText) => prevText + sentences[sentenceIndex].charAt(charIndex));
          charIndex++;
          setTimeout(typeText, 40); // Adjust typing speed (in milliseconds)
        } else {
          setTimeout(() => {
            setShowCursor(false);
            setTimeout(eraseText, 500); // Delay before erasing (in milliseconds)
          }, 1000); // Delay after typing complete (in milliseconds)
        }
      } else {
        sentenceIndex = 0;
        setTimeout(typeText, 0); // Start typing the first sentence again immediately
      }
    };

    const eraseText = () => {
      if (charIndex > 0) {
        setText((prevText) => prevText.slice(0, -1));
        charIndex--;
        setTimeout(eraseText, 20); // Adjust erasing speed (in milliseconds)
      } else {
        setShowCursor(true);
        sentenceIndex++;
        setTimeout(typeText, 500); // Delay before typing the next sentence (in milliseconds)
      }
    };

    typeText();
  }, []); // Only run this effect once

  const verticalTextStyle = {
    writingMode: "vertical-rl", // Vertical text from right to left
    textOrientation: "upright", // Keeps the text upright
    whiteSpace: "nowrap", // Prevents text from wrapping
  };



  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] overflow-hidden">
        <div className=" md:px-20">
            <div className="relative flex flex-col justify-center items-center h-screen xl:mt-[-40px] ">
  <span className=" text-gray-300 opacity-50 font-extrabold absolute xl:text-[700px] xl:ml-48  md:text-[400px] text-[200px]  overflow-hidden  ">
    Hello 
  </span>
          <h1 className=" z-10 xl:text-[200px] md:text-8xl text-[60px] w-full animate-slide-up font-bold"
          >
              Let's talk
            </h1>
         
            <h2 className="flex  w-full gap-4 animate-slide-up xl:px-3 xl:mt-2">

                    <svg onClick={() =>
                          window.open(
                            "https://www.linkedin.com/company/lymdata-labs",
                            "_blank"
                          )
                        } 
                        className="z-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path fill-rule="evenodd" d="M27.83 2H4.09C2.93 2 2 2.93 2 4.02v23.96C2 29.07 2.93 30 4.1 30h23.8c1.17 0 2.1-.93 2.1-2.02V4.02A2.2 2.2 0 0 0 27.83 2ZM6.1 12.5h4.11v13.38h-4.1V12.5Zm2.1-6.61c1.31 0 2.4 1.09 2.4 2.41a2.42 2.42 0 0 1-2.4 2.41A2.42 2.42 0 0 1 5.8 8.3c0-1.4 1.09-2.41 2.4-2.41Zm8.6 6.61h-3.95v13.22h4.19v-6.6c0-1.72.3-3.43 2.48-3.43 2.17 0 2.17 2.02 2.17 3.58v6.53h4.11v-7.31c0-3.58-.77-6.38-4.96-6.38a4.34 4.34 0 0 0-3.96 2.18h-.08V12.5Z" clip-rule="evenodd"></path></svg>
                      

                    <svg onClick={() =>
                          window.open(
                            "https://www.facebook.com/lymdatalabs/",
                            "_blank"
                          )
                        }
                        className="z-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2C8.27 2 2 8.3 2 16.09 2 23.12 7.12 28.94 13.81 30v-9.84h-3.55v-4.07h3.55v-3.1c0-3.54 2.1-5.49 5.3-5.49 1.52 0 3.12.28 3.12.28v3.46h-1.76c-1.74 0-2.28 1.09-2.28 2.2v2.65h3.88l-.62 4.07h-3.26V30A14.06 14.06 0 0 0 30 16.09C30 8.3 23.73 2 16 2Z"></path></svg>
                
                    
                    <svg onClick={() =>
                          window.open(
                            "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                            "_blank"
                          )
                        }
                    className="z-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path fill-rule="evenodd" d="M16 8.81a7.2 7.2 0 1 0 0 14.38 7.2 7.2 0 0 0 0-14.38Zm0 11.85a4.67 4.67 0 1 1 0-9.33 4.67 4.67 0 0 1 0 9.33Z" clip-rule="evenodd"></path><path d="M25.14 8.52a1.68 1.68 0 1 1-3.35 0 1.68 1.68 0 0 1 3.35 0Z"></path><path fill-rule="evenodd" d="M16 2c-3.8 0-4.28.02-5.78.08-1.49.07-2.5.3-3.4.65-.91.36-1.7.84-2.47 1.62a6.94 6.94 0 0 0-1.62 2.48c-.34.89-.58 1.9-.65 3.4C2.02 11.72 2 12.2 2 16s.02 4.28.08 5.77c.07 1.49.3 2.5.65 3.4.36.92.84 1.7 1.62 2.48a6.94 6.94 0 0 0 2.48 1.62c.89.34 1.9.58 3.4.65 1.5.06 1.96.08 5.77.08 3.8 0 4.28-.02 5.77-.08 1.5-.07 2.5-.3 3.4-.65.92-.36 1.7-.84 2.48-1.62a6.94 6.94 0 0 0 1.62-2.48c.34-.89.58-1.9.65-3.4.06-1.5.08-1.97.08-5.77s-.02-4.28-.08-5.78c-.07-1.49-.3-2.5-.65-3.4a6.82 6.82 0 0 0-1.62-2.48 6.94 6.94 0 0 0-2.48-1.61c-.89-.35-1.9-.59-3.4-.65C20.27 2.02 19.8 2 16 2Zm0 2.52c3.73 0 4.17.02 5.65.09 1.37.06 2.1.28 2.6.48.66.26 1.12.56 1.61 1.04.49.5.8.96 1.05 1.62.18.49.42 1.23.48 2.6.07 1.47.08 1.91.08 5.65s-.01 4.18-.08 5.66a7.64 7.64 0 0 1-.48 2.6 4.34 4.34 0 0 1-1.05 1.61c-.49.49-.95.8-1.61 1.05-.5.18-1.23.42-2.6.48-1.48.07-1.92.08-5.66.08-3.73 0-4.17-.01-5.65-.08a7.64 7.64 0 0 1-2.6-.48 4.34 4.34 0 0 1-1.61-1.05c-.5-.49-.8-.95-1.05-1.61a7.78 7.78 0 0 1-.48-2.6A97.15 97.15 0 0 1 4.52 16c0-3.74.01-4.18.08-5.65.06-1.37.29-2.11.48-2.6.26-.66.56-1.13 1.05-1.62.49-.48.95-.8 1.6-1.04.5-.19 1.24-.42 2.6-.48A92.1 92.1 0 0 1 16 4.52Z" clip-rule="evenodd"></path></svg>
                      
                  </h2>

            
            </div>
            <div className=" md:flex absolute ">
            <div
              onClick={handleClicktoform}
              className="inline-block hover:cursor-pointer mt-[-85px] mb-20"
            >
              <button
                id="arrowcontainer"
                className="md:h-12 h-10 w-6 bg-gradient-to-r from-indigo-400 to-cyan-400  flex items-end justify-center rounded-full"
              ></button>
              <h1
                id="arrowbottom"
                className="md:h-16 h-32 mt-[-115px] w-6 bg-gradient-to-r from-indigo-400 to-cyan-400 z-50 rounded-full flex items-end justify-center"
              >
                <FaLongArrowAltDown color="black" size={38} />
              </h1>
            </div>
            </div>
           
            

            <div id="form" className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-full lg:w-full p-8 mt-14 md:mt-0 lg:mt-0 lg:mb-14 rounded ">
        <h2 className="text-4xl font-bold mb-8 border border-transparent lg:leading-[70px] h-36 lg:text-[71px]"> How can we <br /> help  
      <span className="text-[#233BD6]  ml-3">

      {text}{showCursor && '|'}
      </span>

</h2>
        <form className="">
                <div className="grid md:grid-cols-2 gap-16">
<div>

                <div className="mb-4 mt-14">
                  {/* <label className="block mb-1 font-semibold">
                    Name <span className="text-red-500 text-md">*</span>
                  </label> */}
                  <input
                    type="text"
                    className="w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3"
                    placeholder="Name *"
                    required
                  />
                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="mb-4">
                  {/* <label className="block mb-1 font-semibold">Company</label> */}
                  <input
                    type="text"
                    className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-4">
                  {/* <label className="block mb-1 font-semibold">
                    Email <span className="text-red-500 text-md">*</span>{" "}
                  </label> */}
                  <input
                    type="email"
                    className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                    placeholder="Email *"
                    required
                  />
                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                </div>
<div>

                <div className="mb-4 mt-14">
                  {/* <label className="block mb-1 font-semibold">
                    Phone Number
                  </label> */}
                  <input
                    type="number"
                    className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  {/* <label className="block mb-1 font-semibold">
                    Please, tell me what you're after
                  </label> */}
                  <textarea className="w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3 h-32" 
                  placeholder="Please, tell me what you're after" />
                </div>
                </div>
                </div>


                <div className="flex   justify-center items-center   gap-4 w-[600px] lg:ml-56 xl:mx-auto  xl:w-[570px] mx-auto lg:mb-7">
             
                <div className="flex  group  gap-2 ">
                  <button 
                    type="submit"
                    className="p-2 flex border  items-center justify-center mt-10 rounded-full w-[200px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                        Submit
                  </button>
                    
                  <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg" />
                  </h1>
                </div>
      
            </div>


              </form>
      </div>
    </div>


        
        </div>
        {/* <div className="md:flex justify-around items-center md:bg-[#262626] md:text-white  lg:rounded-3xl md:px-10 xxl:px-16 mb-10 ">
          <div className="md:w-[400px] xxl:w-full">
            <h1 className="mt-24 md:mt-0 lg:mt-0 xxl:mt-0 lg:text-xl font-bold">
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
        </div> */}
      </div>

      <div className=" hidden md:flex  h-screen">
        <div className="flex flex-col justify-around border border-transparent">
          <div>
            <h1 className="text-[12px] border border-transparent" style={verticalTextStyle}>
            37°29'16.25"N 122°14'10.01"W
            </h1>
          </div>
         
          <div>
            <h1 className="text-[12px] border border-transparent" style={verticalTextStyle}>
            60°F
            </h1>
          </div>

          <div>
          <h1 className="text-[12px] border border-transparent" style={verticalTextStyle}>
            4:47 AM
            </h1>
          </div>
        </div>

        <div className="border border-transparent w-1/2 flex flex-col gap-10 justify-center items-center text-left ">
          <div className="border border-transparent w-full pl-10">
          <h1> Silicon Valley</h1>
            <h1>Atlanta</h1>
             
             <h1>Indianapolis</h1>
            <h1> New York City</h1>
            <h1>Bengaluru</h1> 
          </div>
          <div className="border border-transparent w-full pl-10">
          <h1> 255 Shoreline Dr,</h1>
            <h1>Redwood City, 94065</h1>
             
             <h1>California</h1>
            <h1> (415) 839-8584</h1>
    
          </div>
        </div>
        <div>
          <img src={img}  className="h-full p-16" />
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-5">
      <img src={img}  className="h-full p-8" />
      <div className="border w-full pl-10">
          <h1> Silicon Valley</h1>
            <h1>Atlanta</h1>
             
             <h1>Indianapolis</h1>
            <h1> New York City</h1>
            <h1>Bengaluru</h1> 
          </div>
          <div className="border w-full pl-10">
          <h1> 255 Shoreline Dr, </h1>
            <h1>Redwood City, 94065</h1>
             
             <h1>California</h1>
            <h1> (415) 839-8584</h1> 
          </div>
      </div>
    </div>
  );
};

export default Contact;
