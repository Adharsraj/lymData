import React, { useState } from "react";
import { accordionData } from "../../assets/Data/data/";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="font-times max-w-[1640px]  mx-auto">
      <div className="lg:mx-36 mb-10  ">
        <h1 className=" lg:text-8xl md:text-6xl text-4xl text-center mt-10 ">
          Frequently Asked{" "}
        </h1>
        <h1 className="lg:text-8xl md:text-6xl text-4xl text-center mb-5 mt-2">
          {" "}
          Questions
        </h1>
        <h2 className="text-center text-3xl mb-10">The most common queries.</h2>
        {accordionData.map((item, index) => (
          <div key={index}>
            <button
              className="flex items-center justify-between w-full p-4  text-gray-700 font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              <span className="lg:text-xl md:text-lg text-left font-zuume">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  index === activeIndex ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {index === activeIndex && (
              <div className="p-4 xl:w-[900px] lg:w-[700px] font-dm ">
                <p className="lg:text-lg ">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

// const Accordion = () => {
//   const accordionData = [
//     {
//       title: 'Accordion Item 1',
//       content: 'Content for Accordion Item 1',
//     },
//     {
//       title: 'Accordion Item 2',
//       content: 'Content for Accordion Item 2',
//     },
//     {
//       title: 'Accordion Item 3',
//       content: 'Content for Accordion Item 3',
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div>
//       {accordionData.map((item, index) => (
//         <div key={index}>
//           <button
//             className="flex items-center justify-between w-full p-4 bg-gray-200 text-gray-700 font-bold"
//             onClick={() => toggleAccordion(index)}
//           >
//             <span>{item.title}</span>
//             <svg
//               className={`w-5 h-5 transition-transform ${
//                 index === activeIndex ? 'transform rotate-180' : ''
//               }`}
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {index === activeIndex && (
//             <div className="p-4 bg-white">
//               <p>{item.content}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;
