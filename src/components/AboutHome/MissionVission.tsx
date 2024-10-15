"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { GiDjedPillar } from "react-icons/gi";
import Image from "next/image";
import styles from "./featureproject.module.css";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/about/carousel";

// Import TypeScript content object
import { missionvissionContent } from "../Constants/About/AboutUsPage.json";

const Missionvission: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();


  const images = [
    "/assets/about/mission/line.svg", // Image for the first slide
    "/assets/about/mission/2.svg", // Image for the second slide
    "/assets/about/mission/3.svg", // Image for the third slide
  ];

  const imageClasses = [
    styles["image-slide-0"], // Class for the first slide
    styles["image-slide-1"], // Class for the second slide
    styles["image-slide-2"], // Class for the third slide
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentSlide);
    }
  }, [currentSlide, carouselApi]);

  const renderDots = () => (
    <div className="flex justify-center mt-5 lg:hidden">
      {missionvissionContent.slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-2 h-2 rounded-full mx-2 ${
            currentSlide === index ? "bg-[#3a2a79]" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  );

  return (
    <div className="relative lg:w-full md:h-[50rem] w-full lg:h-[41rem] h-[48rem] lg:pt-10 pt-5 bg-white">
      <h2 className="lg:text-3xl font-medium text-[#3a2a79] lg:mb-8 lg:top-[10] font-poppins text-2xl lg:pl-10 pl-8">
        {missionvissionContent.title}
      </h2>
     


      <div className="flex w-full relative items-center p-8">
        <div className="lg:w-[70%] w-full ">
      <Carousel
        className="lg:w-full lg:max-w-screen-md relative lg:h-[27rem] h-[35.5rem]"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {missionvissionContent.slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="lg:flex items-center justify-center p-3  relative lg:mt-0 mt-3">
                    <div className="flex flex-col lg:mb-[rem]">
                      <h3 className="lg:text-3xl font-poppins font-normal pl-5  lg:text-left  ">
                        {slide.title}
                      </h3>
                      <div className="lg:flex lg:flex-row  flex flex-col  items-center justify-center lg:space-x-20 lg:mr-10  w-full">
                        <div className="flex-shrink-0 relative lg:left-0 flex justify-center lg:justify-start lg:bottom-0  ">
                          <Image
                            src={slide.imageSrc}
                            alt={`${slide.title} Icon`}
                            height={100}
                            width={100}
                            className="w-48 h-48 object-cover lg:mb-2"
                            style={{ height: "15rem", width: "15rem" }}
                          />
                        </div>
                        <p className="lg:text-sm text-xs font-semi-medium text-center lg:w-[26rem] font-poppins lg:mb-3 lg:right-10 relative  lg:bottom-0 w-[18rem] ">
                          {slide.description}
                        </p>
                      </div>

                      {slide.points && (
                        <div className="lg:flex lg:flex-row grid grid-cols-2 gap-5 lg:gap-0 text-sm lg:w-full lg:font-bold  text-left lg:p-3 justify-center  w-full lg:h-[4rem] p-2  z-10 ">
                          {slide.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex  gap-2 lg:gap-2 ">
                              <p className=" lg:w-7 lg:h-7 w-4 h-4 rounded-full bg-[#312465] text-white flex items-center justify-center lg:font-bold ">
                                {pointIndex + 1}
                              </p>
                              <p className=" lg:w-[8rem] w-[8rem] text-left text-xs  lg:text-[#6f6f6f] font-medium  font-poppins lg:font-medium  relative">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.values && (
                       
                        <div className="lg:flex lg:flex-row grid grid-cols-2 gap-5 lg:gap-0 text-sm lg:w-full lg:font-bold  text-left lg:p-3 justify-center  w-full lg:h-[4rem]  p-2  z-10  ">
                        {slide.values.map((value, valueIndex) => (
                          <div key={valueIndex} className="flex  gap-2 lg:gap-0 ">
                            <Image
                                src={value.imageSrc}
                                alt={`Value ${valueIndex + 1}`}
                                width={100}
                                height={100}
                                className="w-6 h-7 object-cover -mt-6 "
                                style={{ height: "5rem", width: "5rem" }}
                              />
                            <p className=" w-[8rem] text-left text-xs  lg:text-[#6f6f6f] font-medium  font-poppins lg:font-medium  relative">
                              {value.text}
                            </p>
                          </div>
                        ))}
                      </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        
        <CarouselNext onClick={handleNext} />
      </Carousel>

      {/* Dots for mobile view */}
      {renderDots()}

      <div className=" overflow-hidden lg:visible invisible w-[30%] absolute right-0 top-0 p-5">
        <Image
          src={images[currentSlide]}
          alt="Graphic"
          width={100}
          height={100}
          className={`${imageClasses[currentSlide]} h-full w-full transition-transform duration-1000 ease-in-out opacity-100 transform`}
        />
      </div>
      </div>
      </div>

      <div className="flex justify-center bg-slate-50 ">
        <button className=" absolute bottom-3  w-[8rem] text-base hover:font-medium font-normal font-poppins h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Missionvission;
