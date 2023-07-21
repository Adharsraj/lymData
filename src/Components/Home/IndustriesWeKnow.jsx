import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import phone from "../../assets/Videos/home-phones.mp4";

const IndustriesWeKnow = () => {

    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 2;
      }
    }, []);
  

  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm">
     

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div>
          <h1 className="text-xl italic font-times text-gray-500">Industries we know and understand</h1>
          <h2 className="text-6xl  lg:mt-20 lg:text-[135px]">
            experi <br /> ence
          </h2>
        </div>
        <div>
          <video
            className="w-full  md:flex h-full object-cover filter "
            src={phone}
            autoPlay
            loop
            muted
            ref={videoRef}

          ></video>{" "}
        </div>

        <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="80"
            viewBox="0 0 60 60"
            fill="none"
            className="  md:w-[200px]   mt-10 md:mt-2 md:ml-12 lg:ml-32 md:flex hover:animate-spin "
            style={{ animationDuration: '5s' }}

          >
            <g clipPath="url(#clip0_286_233)">
              <path

clipRule="evenodd"
                d="M26.8112 0V7.23512L29.178 27.7775C29.1756 27.7783 29.1732 27.7792 29.1708 27.78L16.1576 11.6487L11.0416 6.53273L8.87019 8.70416L6.53269 11.0426L11.6487 16.1586L27.7996 28.9723C27.7933 28.9845 27.787 28.9967 27.7809 29.009L7.23512 26.8109H0V29.8817V33.1888H7.23512L27.626 30.8394C27.6352 30.8699 27.645 30.9001 27.6554 30.9301L11.6486 43.8429L6.53258 48.9589L8.70359 51.1299L11.0417 53.4688L16.1577 48.3528L28.8715 32.3278C28.9109 32.3479 28.9509 32.3671 28.9915 32.3852L26.8112 52.7646V59.9997H29.8817L33.1888 59.9999V52.7647L30.8482 32.4498C30.8907 32.4344 30.9326 32.4178 30.974 32.4001L43.8422 48.3516L48.9583 53.4676L51.1297 51.2962L53.4672 48.9575L48.3512 43.8415L32.2816 31.0923C32.2945 31.0623 32.3067 31.032 32.3184 31.0013L52.7649 33.1888H60V30.1181V26.8111H52.7649L32.2923 29.1698C32.2863 29.1553 32.2802 29.1409 32.2739 29.1266L48.3514 16.1568L53.4674 11.0408L51.2965 8.86985L48.9583 6.53106L43.8423 11.6471L30.9918 27.8444C30.9893 27.8433 30.9867 27.8422 30.9842 27.8411L33.1888 7.23512V0H30.1183H26.8112Z"
                fill="#282728"
              />
            </g>
            <defs>
              <clipPath id="clip0_286_233">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-gray-500 text-lg lg:mt-20 lg:text-2xl">We know what
we're doing
</h1>
<h1 className="text-gray-500 text-lg lg:mt-6 lg:text-2xl">We have spent 15+ years creating and re-creating digital solutions, and learned what makes great businesses stay in business.

</h1>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeKnow;