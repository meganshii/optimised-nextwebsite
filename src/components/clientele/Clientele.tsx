"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import contentData from "../Constants/Clientele/clientele.json";

const Clientele: React.FC = () => {
  const leftHandRef = useRef<HTMLDivElement>(null);
  const rightHandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Check screen width to determine mobile or desktop behavior
    const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint

    const mobileX = 40;  // Movement for mobile screens
    const desktopX = 100; // Movement for desktop screens

    const moveX = isMobile ? mobileX : desktopX; // Choose based on screen size

    // Add a delay before starting the animation
    tl.to(leftHandRef.current, {
      x: moveX, // Move right
      duration: 4,
      ease: "power2.inOut",
      delay: 1, // Delay before starting the animation
    })
      .to(rightHandRef.current, {
        x: -moveX, // Move left
        duration: 4,
        ease: "power2.inOut",
      }, "<") // "<" syncs the two animations
     
  }, []);

  const { title, boldHeading, peraOne, peraTwo,lefthand,righthand } = contentData.content.heading;

  return (
    <>
      <div className="lg:h-full lg:w-full h-[50rem] w-full bg-black">
        <h1 className="relative font-poppins font-medium text-5xl left-7 lg:top-[5rem] top-[5rem] text-white ">
          {title}
        </h1>
        <div className="flex justify-between relative lg:top-0 top-32">
          {/* Left Hand */}
          <div className="relative lg:top-14 lg:left-[8rem] z-10" ref={leftHandRef} >
            <Image
              src={lefthand}
              alt="lefthand"
              height={500}
              width={500}
              className="object-cover"
              priority // Prioritize loading this image
            />
          </div>

          {/* Right Hand */}
          <div className="relative lg:right-[8rem] lg:top-5 -top-3" ref={rightHandRef} >
            <Image
              src={righthand}
              alt="righthand"
              height={500}
              width={500}
              className="object-cover"
              priority // Prioritize loading this image
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-row flex-col w-full font-poppins lg:pl-5 text-white relative ">
          <div className="lg:w-2/5 text-5xl font-medium lg:top-0 relative top-32 text-left pl-3">
            <p className="lg:w-[16rem]">{boldHeading}</p>
          </div>

          <div className="lg:w-3/5 relative lg:text-right lg:pr-8 p-2 lg:p-0 lg:top-0 top-[10rem] text-left w-[80%] text-sm font-poppins font-regular">
            <p>{peraOne}</p>
            <p className="font-bold pt-2 text-md">{peraTwo}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientele;
