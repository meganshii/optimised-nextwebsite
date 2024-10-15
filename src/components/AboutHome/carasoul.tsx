"use client";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import React, {  useRef } from "react";
import Image from "next/image";
import { companyContent } from "../Constants/About/AboutUsPage.json";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

const Page4 = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* <div className="bg-red-500 "> */}
      {/* <div className="flex  pb-[5rem] px-[4rem] bg-green-400 "></div> */}
      <div className="lg:w-[45%] w-[100%] flex items-center  lg:-ml-[1vh] relative justify-start ">
        <div className="bg-gray-200 bg-opacity-45 py-[2.5vh] px-[1vw] rounded-[1rem] overflow-hidden">
          <button
            className="p-[0.4rem] absolute -bottom-12 right-10 group"
            onClick={scrollLeft}
          >
            {/* left arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-8 h-8"
            >
              <circle
                cx="32"
                cy="32"
                r="32"
                className="fill-gray-400 transition-colors duration-300 hover:fill-black"
              />
              <path
                d="M39 20 L27 32 L39 44"
                className="stroke-white stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round"
              />
            </svg>
          </button>

          <button
            className=" p-[0.4rem]  absolute -bottom-12 right-0 group"
            onClick={scrollRight}
          >
            {/* right arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-8 h-8"
            >
              <circle
                cx="32"
                cy="32"
                r="32"
                className="fill-gray-400 transition-colors duration-300 hover:fill-black"
              />
              <path
                d="M25 20 L37 32 L25 44"
                className="stroke-white stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round"
              />
            </svg>
          </button>
          <div
            className="overflow-auto lg:w-full scrollbar-hide "
            ref={carouselRef}
          >
            <div className="flex lg:justify-start  items-center lg:w-max">
              {companyContent.imageWithDescription.map((item, idx) => (
                <div
                  key={idx}
                  className="mx-[0.6vw]  lg:w-[20rem] w-full lg:h-[20rem] h-[20rem] bg-[#f2f2f2] flex flex-col items-center justify-center rounded-[1rem] overflow-hidden  hover:shadow-2xl cursor-pointer "
                >
                  <Image
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                    src={item.img}
                    priority
                    alt="image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Page4;
