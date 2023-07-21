import React from "react";
import arrowright from "../../assets/assets/asset 60.svg";
const Contact = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-[1640px]  mx-auto p-4  text-[#040404] ">
        <div className="  md:px-20">
          <div className="mt-10 lg:mt-16   ">
            <h1 className="text-5xl mt-32  lg:text-8xl xxl:text-9xl ">
              ready when <br /> you are—It’s time <br /> to accelerate{" "}
            </h1>
            <div className="flex group   hover:cursor-pointer gap-4 top-[270px] lg:top-[500px] xl:top-[370px] w-full mb-10 md:mt-5   mx-auto">
              <h1 className="p-1  mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                Get in touch
              </h1>
              <h1 className="p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#282728]">
                <img src={arrowright} />
              </h1>
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
              you can also send us a plain email if you want too ;) <br />
              info@dhnn.com
            </h1>
          </div>
        </div>
        <div className="md:flex justify-around items-center md:px-10 xxl:px-16 ">
          <div className="md:w-[400px] xxl:w-full">
            <h1 className="mt-5 md:mt-0">
              Dotspace Edapally <br />
              Total Tower Near Devankulangara <br /> Behind Changapuzha Park{" "}
              <br /> Elamakara, Edappally, Kochi, Kerala <br /> 682024
            </h1>
          </div>
          <div>
            <iframe
              className="  md w-full xxl:w-[500px] h-[300px] lg:mt-16  mt-10 mb-10 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991079733446!2d76.29998647382259!3d10.017594172734224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2e430b5527%3A0x19cf2b36ac16c7f8!2sDotspace%20Edapally!5e0!3m2!1sen!2sin!4v1689835845317!5m2!1sen!2sin"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:px-10 xxl:px-16">
            <div>
                <h1 className="text-xl mt-3 mb-3">Contact us :</h1>
                <h1 className="text-2xl mt-3 mb-3">9553432489</h1>
            </div>
            <div>
<h1 className="text-xl mt-3 mb-3">Email: </h1>
<h1 className="text-2xl mt-3 mb-3">lym@gmail.com</h1>
            </div>

            <div className="flex justify-end">
                <img className="w-32 h-[100px]" src="https://media4.giphy.com/media/KpOqvmCFdNMhF0pQb7/giphy.gif?cid=ecf05e477yl24655ubg2yxbn0u2txl4zx88cap1fznfn6xyq&ep=v1_gifs_search&rid=giphy.gif&ct=g"  />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
