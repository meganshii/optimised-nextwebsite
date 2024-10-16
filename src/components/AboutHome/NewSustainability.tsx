"use client";
import * as React from "react";
import { useState } from "react";
import { Card,CardContent } from "../ui/card"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/about/carousel";

import {
  slides,
  Sustainabilityheading,
} from "../Constants/About/AboutUsPage.json";
import dynamic from "next/dynamic";

const Icon1 =dynamic(()=>import("../Icons/about/Icon1"),{ssr:false});
const Icon2 =dynamic(()=>import("../Icons/about/Icon2"),{ssr:false});

const Icon3 =dynamic(()=>import("../Icons/about/Icon3"),{ssr:false});

const Icon4 =dynamic(()=>import("../Icons/about/Icon4"),{ssr:false});
const Icon5 =dynamic(()=>import("../Icons/about/Icon5"),{ssr:false});

const Icons=[Icon1,Icon2,Icon3,Icon4,Icon5];


const NewSustainability: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleHover = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full  bg-white lg:h-[36rem] h-[55rem] overflow-hidden md:h-[60rem] lg:pt-10 pt-5">
      <h2 className="lg:text-3xl text-2xl font-medium text-[#3a2a79] mb-8 font-poppins  lg:pl-10 pl-8">
        {Sustainabilityheading.title}
      </h2>

      <div className="lg:flex lg:flex-row flex flex-col lg:items-start items-center relative  h-full lg:h-[73%]">
        <div className="lg:w-[60%] lg:h-full h-[45%]  w-full ">
          <Carousel className="lg:w-full lg:max-w-screen-sm relative lg:top-0 top-[20rem] md:top-[15rem]">
            <CarouselContent>
              {slides.map((slide, index) => {
                const Svglist=Icons[index]
                return(
                  <CarouselItem
                  key={slide.id}
                  className={currentSlide === index ? "block" : "hidden"}
                >
                  <div className="lg:p-1 p-5">
                    <Card>
                      <CardContent className="flex items-center justify-center  h-full relative ">
                        <div className="flex flex-col space-x-3   ">
                          <h3 className="lg:text-3xl  font-poppins font-normal  lg:text-black text-[#138808] absolute top-16 lg:left-14 md:left-14   md:top-[7.5rem] lg:top-10 text-center lg:p-0 lg:text-left w-full text-2xl ">
                            {slide.title}
                          </h3>
                          <div className="flex flex-row relative w-full mb-3 top-3 md:top-24 lg:hidden">
                            <p className="lg:invisible visible relative text-[#138808] left-24">
                              {" "}
                              {/* <IoArrowRedoSharp size={20} /> */}
                            </p>
                            <h4 className="lg:invisible visible  text-black relative text-sm left-24 pl-1  font-bold">
                              Our Approach
                            </h4>
                          </div>

                          <div className="flex items-center justify-center lg:space-x-12  relative lg:top-0 top-14 md:top-20 w-full h-[10rem] md:h-[15rem]">
                            <div className="flex-shrink-0 ">
                              <Svglist/>
                            </div>
                            <p className="lg:text-sm lg:font-regular md:text-sm md:font-regular lg:w-[21rem] w-[21rem] text-xs font-poppins relative text-left px-5 lg:px-0 ">
                              {slide.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                )
               
})}
            </CarouselContent>

            {/* Arrow buttons with onClick handlers */}
            <div
              className="absolute lg:right-10 right-16 lg:top-[90%] md:top-[25rem] top-[20rem] transform -translate-y-1/2 text-2xl z-10 text-gray-400 hover:text-black cursor-pointer"
              onClick={handlePrevious}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-8 h-8"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  className="fill-gray-400 hover:fill-black"
                />
                <path
                  d="M39 20l-12 12 12 12"
                  className="stroke-white stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round "
                />
              </svg>
            </div>
            <div
              className="absolute lg:right-0 right-5 lg:top-[90%] md:top-[25rem] top-[20rem] transform -translate-y-1/2 text-2xl z-10 text-gray-400  hover:text-black cursor-pointer"
              onClick={handleNext}
            >
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
            </div>
          </Carousel>
        </div>
        {/* Circle Images */}
        <div className=" lg:w-[40%] w-full lg:h-full h-[40%] absolute lg:right-0 lg:top-9 ">
          <div className=" flex items-center justify-center">
            <div className="border-4 border-gray-300 w-[20rem] h-[20rem] rounded-full  items-center ">
              <p className=" text-center  relative top-[9rem] text-lg font-bold text-[#138808] w-full">
                {slides[currentSlide]?.title}
              </p>

              {slides.map((slide, index) => {
                const Sideicon=Icons[index]
                return(
                  <div
                  key={slide.id}
                  className={`bg-white relative w-20 h-20 rounded-full ${
                    index === 0
                      ? "top-[13rem] right-[1rem]"
                      : index === 1
                      ? "-top-[4rem] right-[1rem]"
                      : index === 2
                      ? "left-[11rem] -top-[13rem]"
                      : index === 3
                      ? "left-[17rem] -top-[7rem]"
                      : "-top-[5rem] left-[9rem]"
                  }`}
                  onMouseEnter={() => handleHover(index)}
                >
                  {/* <Image
                    src={slide.img}
                    alt={`icon ${index}`}
                    width={70}
                    height={70}
                    className={`transition-transform duration-300 ${
                      currentSlide === index
                        ? "opacity-100 scale-110"
                        : "opacity-50 hover:opacity-100 hover:scale-90"
                    }`}
                  /> */}
                  <div >
                                    <Sideicon className={`transition-transform duration-300 h-[5rem] w-[5rem] ${
                      currentSlide === index
                        ? "opacity-100 scale-110"
                        : "opacity-50 hover:opacity-100 hover:scale-90"
                    }`}/>
                                    </div>

                </div>
                )
              }
               
              )}
            </div>
          </div>

          <div className="flex justify-center  md:mt-[16rem] mt-[23rem] lg:invisible visible">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 mx-2 rounded-full cursor-pointer transition-all ${
                  currentSlide === index
                    ? "bg-gray-800"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button aria-label="read-more" className="bottom-3 absolute text-center font-poppins border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white rounded-md z-10 w-[8rem] h-[2rem]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewSustainability;
