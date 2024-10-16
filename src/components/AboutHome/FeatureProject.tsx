"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { machines, Featureheading } from "../Constants/About/AboutUsPage.json"; // Adjust the import path as needed
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GoArrowRight } from "react-icons/GoArrowRight";

interface Machine {
  id: number;
  title: string;
  description: string;
  mainImage: string;
}

interface FeatureProjectProps {
  customTextStyles?: string; // Add props for custom styles
  heading?: string;
}

gsap.registerPlugin(ScrollTrigger);

const FeatureProject: React.FC<FeatureProjectProps> = ({}) => {
  const [selectedMachine, setSelectedMachine] = useState<Machine>(machines[0]);
  const [isMobile, setIsMobile] = useState(false);

  const horizontalLineRef = useRef<HTMLDivElement | null>(null);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const wordLimit = 20;

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "."
      : text;
  };

  const handleMachineClick = (machine: Machine) => {
    setSelectedMachine(machine);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed (768px for mobile/tablet)
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalLineRef.current,
        start: "top 80%",
        once: true, // Trigger the animation only once
      },
    });

    // Animate the horizontal line
    tl.fromTo(
      horizontalLineRef.current,
      { width: 0 },
      {
        width: "100%",
        duration: 2,
        ease: "power3.out",
      }
    );

    // Animate the vertical lines and images after the horizontal line animation
    verticalLinesRef.current.forEach((line, index) => {
      if (line) {
        tl.fromTo(
          line,
          { y: 0, height: 0 }, // Start off-screen (above)
          {
            y: 0, // Slide into view
            height: "30rem",
            z: 10,
            duration: 2, // 3-second duration for smooth transition
            ease: "power3.out",
            delay: 0.3, // Staggered delay based on index for visual effect
          },
          "-=2" // Start animation for vertical lines 2 seconds before the horizontal line animation ends
        );

        const image = imagesRef.current[index];
        if (image) {
          tl.fromTo(
            image,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "-=2" // Start animation for images 2 seconds before the vertical lines animation ends
          );
        }
      }
    });
  }, []);

  return (
    <div
      className={`relative flex flex-col w-full lg:h-full bg-white h-full overflow-hidden lg:pt-10 pt-5`}
    >
      <h1
        className={`lg:text-3xl text-2xl font-medium text-[#33246e] font-poppins lg:pl-10 pl-8`}
      >
        {Featureheading.title}
      </h1>
      {isMobile ? (
        // Mobile view layout
        <div className="flex flex-col items-center w-full px-8 md:px-10  relative top-10 ">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="flex flex-col items-center mb-8 border h-[13rem] bg-[#ededed] rounded-2xl w-full relative justify-center"
            >
              <div className="flex flex-row items-center">
                <div className="w-[40%]  h-full ">
                  <Image
                    src={machine.mobileimg}
                    alt={machine.title}
                    width={300}
                    height={300}
                    priority
                    className="object-contain h-full w-full md:h-[13rem] md:w-[18rem]"
                  />
                </div>
                <div className="h-[70%] w-[60%]  ">
                  <h2 className="text-xl md:text-2xl font-bold relative w-[10rem] text-[#483d73] mx-3 font-poppins">
                    {machine.title}
                  </h2>
                  <p className="text-xs md:text-sm font-regular text-black mt-2   mx-3 font-poppins">
                    {isMobile
                      ? truncateText(selectedMachine.description, wordLimit)
                      : selectedMachine.description}
                  </p>
                </div>
              </div>
              <div className="flex absolute bottom-2 flex-row border border-[#6f6f6f] rounded-md bg-black  group p-1  cursor-pointer ">
                <p className="text-white font-regular font-poppins text-xs   ">
                  View Machine
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // desktop view
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-12 relative lg:space-x-8">
          {/* Left: Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-5xl font-semibold italic text-gray-600 lg:ml-0 lg:mr-auto lg:w-1/3 mb-6 lg:mb-0 relative top-32 pl-10">
            {selectedMachine.title}
          </h2>

          {/* Center: Image */}
          <div className="relative flex justify-center lg:justify-center lg:w-1/3 lg:mx-0">
            <Image
              src={selectedMachine.mainImage}
              alt={selectedMachine.title}
              width={400}
              height={400}
              priority
              className="object-cover z-20 h-[18rem] sm:h-[20rem] lg:h-[21rem] w-[22rem] sm:w-[24rem] lg:w-[25rem]"
            />
          </div>

          {/* Right: Description */}
          <div className="lg:w-1/3 z-10 lg:text-right font-poppins  justify-center text-center pr-5 ml top-20 relative">
            <p className="text-sm font-regular  text-gray-600">
              {selectedMachine.description}
            </p>
          </div>
        </div>
      )}

      {/* Horizontal Line */}
      <div
        ref={horizontalLineRef}
        className="relative w-full h-1 bg-[#3a2a79] -mt-32 lg:visible invisible "
      >
        {/* Vertical Lines */}
        <div className="relative w-full flex justify-around   ">
          {machines.map((machine, index) => (
            <div key={machine.id} className="relative flex justify-center ">
              <div
                ref={(el) => {
                  verticalLinesRef.current[index] = el;
                }}
                className="w-[0.10rem] bg-[#b0aac5] h-[30rem] mask-gradient-featuredproject  relative opacity-25 "
              ></div>
              <div
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                className={`border-2 border-x-gray-200 h-[9rem] rounded-2xl transform transition-transform duration-300 hover:scale-100 ${
                  machine.id === 1
                    ? "mt-28"
                    : machine.id === 2
                    ? "mt-10"
                    : machine.id === 3
                    ? "mt-32"
                    : machine.id === 4
                    ? "mt-16"
                    : machine.id === 5
                    ? "mt-32"
                    : "mt-5"
                } -ml-${
                  machine.id === 1
                    ? 5
                    : machine.id === 2
                    ? 8
                    : machine.id === 3
                    ? 24
                    : machine.id === 4
                    ? 20
                    : machine.id === 5
                    ? 24
                    : 20
                } z-20 bg-white cursor-pointer ${
                  selectedMachine.id === machine.id ? "-ml-7 " : "-ml-10"
                }`}
                onClick={() => handleMachineClick(machine)}
              >
                <Image
                  src={machine.mainImage}
                  alt={machine.title}
                  width={200}
                  height={200}
                  className="object-cover h-[9rem] w-[9rem] -mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center ">
        <button className="lg:mt-[20rem] mt-[10rem] mb-3 w-[8rem] h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10  ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default FeatureProject;
