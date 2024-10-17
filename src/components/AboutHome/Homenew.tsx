


import { Page1Data } from "@/components/Constants/About/AboutUsPage.json";
import { gsap } from "gsap";
// import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const Homeicon =dynamic(()=>import("../Icons/about/Homeicon"),{ssr:false});

const Icon=[Homeicon,Homeicon,Homeicon,Homeicon,Homeicon];


gsap.registerPlugin(ScrollTrigger);

// const imageWidths = [
//   "lg:w-[3rem] w-[2rem]",
//   "lg:w-[3rem] w-[2rem]",
//   "lg:w-[10rem] w-[6rem]",
//   "lg:w-[3rem] w-[2rem]",
//   "lg:w-[3rem] w-[2rem]",
// ];
// const imagebottoms = [
//   "justify-end lg:mb-3 mb-2",
//   "justify-end lg:mb-3 mb-2",
//   "justify-start",
//   "justify-end lg:mb-3 mb-2",
//   "justify-end lg:mb-3 mb-2",
// ];

const Home:React.FC = () => {
  console.log('Running custom Webpack config');

  return (
    <>
      <div className="mb-14  lg:mt-0 mt-14 w-full font-poppins font-regular overflow-hidden">
     
        <div className="w-full lg:h-screen h-[35rem] relative flex items-center justify-center">
          <video
            id="background-video"
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster ={Page1Data.video}
          >
            <source src={Page1Data.video} type="video/mp4" />
       

          </video>
          <div className="absolute top-0 h-full w-full bg-black opacity-50"></div>
          <div className="absolute lg:top-28 top-12 space-y-4 flex flex-col  items-center w-full">
            <h1 className="text-white font-semibold lg:text-3xl text-3xl">
              {Page1Data.title}
            </h1>
            <p className="font-normal lg:w-[50%] w-[85%]  text-center lg:text-[0.8rem] text-[0.7rem] text-white">
              {Page1Data.description}
            </p>
          </div>
          <button className="bg-white w-[8rem] h-[2rem] rounded-[1rem] flex items-center absolute bottom-40 lg:hidden">
            <p className="text-black text-[0.8rem] text-center w-full">
              {Page1Data.getaQuote}
            </p>
            <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-5 h-5"
            >
              <circle cx="32" cy="32" r="32" className="fill-[#483d73]" />
              <path
                d="M25 20l12 12-12 12"
                className="stroke-white stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round"
              />
            </svg>
            </div>
          </button>
          <div className="absolute bottom-10 flex justify-center w-full lg:space-x-0 -space-x-5 ">
          {Icon.map((Icon, index) => (
              <Icon key={index} className="w-10 h-10" /> // Pass any className here
            ))}

          
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
