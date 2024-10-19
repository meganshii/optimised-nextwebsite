"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Page4 from "./carasoul";
import { companyContent,missionvissionContent } from "../Constants/About/AboutUsPage.json"; // Adjust path as needed
// import MobileCarousel from "./Mobilecarasouel";
import dynamic from "next/dynamic";

const MobileCarousel = dynamic(() => import("./Mobilecarasouel"));

const Ourcompanybgimg =dynamic (()=>import("../Icons/about/Ourcompanybgimg"),{ssr:false})




const OurCompany: FC = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Detect screen size for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint if needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative lg:h-[39rem] h-[45rem] md:h-[50rem] bg-white text-white lg:flex lg:flex-col items-center lg:pt-10 pt-5">
      {/* Background image */}
      <div className="absolute inset-0">
       <Ourcompanybgimg  />

      </div>

      <div className="relative inset-0 ml-[85rem] lg:-mt-[60vh] ">
        <Image
          src="/assets/about/ourcompany/13.svg"
          alt="Background Image"
          width={100}
          height={100}
          className="h-[10vh] w-[10vw] "
        />
      </div>

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#171033] to-[#300675] opacity-60 z-[-1]"></div> */}

      <h1 className="lg:text-3xl text-2xl font-medium font-poppins z-10  absolute w-full lg:pl-10 text-[#3a2a79] pl-8 ">
        {companyContent.title}
      </h1>
      {/* <div className=" lg:invisible visible border mt-2 absolute top-0 z-10"></div> */}
      <div className="lg:flex lg:flex-row w-full lg:h-3/5 h-full  lg:absolute relative lg:top-[6rem] top-20  flex flex-col">
        {/* <div className="bg-gray-200 bg-opacity-45 rounded-2xl p-3 shadow-lg  w-[50%] absolute -left-5 ">
          <Carousel />
       
        </div> */}

        {isMobile ? (
          <MobileCarousel /> // Use a custom mobile carousel component
        ) : (
          <Page4 /> // Existing carousel for desktop view
        )}

        <div className="lg:p-14  p-8 flex-1 font-poppins lg:font-regular lg:text-sm text-xs text-center text-black lg:w-[55%] w-full lg:h-full h-[50%] md:h-[36%] absolute lg:right-0 bottom-0  lg:px-8 lg:flex lg:flex-col justify-center items-center overflow-hidden">
          <p className=" lg:mt-0 ">{companyContent.description}</p>
        </div>
      </div>
      <div className="flex justify-center bg-slate-50">
        <button aria-label="read-more" className=" absolute bottom-3  text-base hover:font-medium font-normal font-poppins w-[8rem] h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
          {missionvissionContent.button}
        </button>
      </div>
    </div>
  );
};

export default OurCompany;
