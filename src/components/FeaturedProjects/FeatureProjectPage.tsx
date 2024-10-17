"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  machines,
  Featureheading,
  grid as gridItems,
} from "../Constants/About/AboutUsPage.json"; // Adjust the import path as needed
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GridItem {
  id: number;
  title: string;
  description: string;
  mainImage: string;
}


interface Machine {
  id: number;
  title: string;
  description: string;
  mainImage: string;
}

interface FeatureProjectProps {
  marginTop?: string;
  customTextStyles?: string; // Add props for custom styles
  heading?: string;
}

gsap.registerPlugin(ScrollTrigger);

const FeatureProjectPage: React.FC<FeatureProjectProps> = ({}) => {
  const [selectedMachine, setSelectedMachine] = useState<Machine>(machines[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedGrid, setSelectedGrid] = useState<GridItem | null>(null); // Updated type for selected grid
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (grid: GridItem) => {
    setSelectedGrid(grid); // Set selected grid item
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedGrid(null); // Reset selected grid
  };

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);

  const horizontalLineRef = useRef<HTMLDivElement | null>(null);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMachineClick = (machine: Machine) => {
    setSelectedMachine(machine);
  };

  const wordLimit = 20;

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "."
      : text;
  };

  const wordLimitdesktop = 20;

  const truncateTextdesktop = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "...."
      : text;
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
    // Set a delay for 5 seconds before the animation starts
    const timeoutId = setTimeout(() => {
      // Create a GSAP timeline without ScrollTrigger
      const tl = gsap.timeline();
  
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
              height: "17rem",
              z: 10,
              duration: 2, // 2-second duration for smooth transition
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
    }, 5000); // Delay the animation by 5 seconds
  
    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <div className="h-full relative overflow-hidden">
      <div
        className={`relative flex flex-col w-full bg-white overflow-hidden `}
      >
        <h1
          className={`lg:text-5xl mt-14 text-2xl bg-gradient-to-r from-[#483d73] from-2% via-red-700 via-20% to-red-700   text-transparent bg-clip-text h-[7rem] font-semibold font-poppinsmt-16 lg:ml-[2rem] ml-4`}
        >
          <span className="block"> {Featureheading.featuredpage} </span>
          <span> {Featureheading.featuredpagehighlight} </span>
        </h1>

        {isMobile ? (
          // Mobile view layout
          <div className="flex flex-col  items-center w-full  relative">
            <div className="flex flex-row items-center  w-full bg-white rounded-2xl mt-5 h-32">
              <div className="w-2/5 h-full">
                <Image
                  src={selectedMachine.mainImage}
                  alt={selectedMachine.title}
                  width={300}
                  height={300}
                  priority
                  className=" h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col w-3/5 p-2">
                <div className="relative pl-2">
                  <h2 className="text-xl font-bold relative  text-black italic  font-poppins">
                    {selectedMachine.title}
                  </h2>
                </div>

                <div className="px-2">
                  <p className="text-xs text-gray-500 mt-2 text-left font-poppins">
                    {isMobile
                      ? truncateText(selectedMachine.description, wordLimit)
                      : selectedMachine.description}
                  </p>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-6 gap-2 mt-4 p-4">
              {machines.map((machine, index) => (
                <div
                  key={index}
                  className={`border border-gray-300 rounded-lg overflow-hidden cursor-pointer 
      ${selectedMachine.id === machine.id ? "border-2 border-black" : ""}`}
                  onClick={() => handleMachineClick(machine)}
                >
                  <Image
                    src={machine.mainImage}
                    alt={machine.title}
                    width={100}
                    height={100}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop view
          <div className="flex flex-col lg:flex-row items-center lg:items-start  h-[18rem] relative lg:space-x-8 ">
            {/* Left: Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-4xl font-regular italic text-gray-600 lg:ml-0 lg:mr-auto lg:w-1/3 mb-6 lg:mb-0 relative top-0 pl-10">
              {selectedMachine.title}
            </h1>

            {/* Center: Image */}
            <div className="relative flex justify-center lg:justify-center lg:w-1/3 lg:mx-0 -top-28">
              <Image
                src={selectedMachine.mainImage}
                alt={selectedMachine.title}
                width={300}
                height={300}
                priority
                className="object-cover z-20 h-[18rem] sm:h-[20rem] lg:h-[15rem] w-[17rem] sm:w-[24rem] lg:w-[25rem]"
              />
            </div>

            {/* Right: Description */}
            <div className="lg:w-1/3 z-10 lg:text-right font-poppins justify-center text-center pr-5 ml -top-10 relative">
              <p className="text-sm lg:text-xs font-regular text-gray-600">
                {selectedMachine.description}
              </p>
            </div>
          </div>
        )}

        {/* Horizontal Line */}
        <div
          ref={horizontalLineRef}
          className="relative w-full h-1 bg-[#3a2a79] -top-[14rem] lg:visible invisible "
        >
          {/* Vertical Lines */}
          <div className="relative w-full flex justify-around ">
            {machines.map((machine, index) => (
              <div key={machine.id} className="relative flex justify-center ">
                <div
                  ref={(el) => {
                    verticalLinesRef.current[index] = el;
                  }}
                  className="w-[0.10rem] bg-[#b0aac5] h-[17rem] mask-gradient-featuredproject relative opacity-25 "
                ></div>
                <div
                  ref={(el) => {
                    imagesRef.current[index] = el;
                  }}
                  className={`border-2 border-x-gray-200 h-[7rem] rounded-2xl  ${
                    machine.id === 1
                      ? "mt-28"
                      : machine.id === 2
                      ? "mt-10"
                      : machine.id === 3
                      ? "mt-24"
                      : machine.id === 4
                      ? "mt-16"
                      : machine.id === 5
                      ? "mt-28"
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
                    width={300}
                    height={300}
                    priority
                    className="object-cover h-[7rem] w-[7rem] -mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-16 mb-12 px-6 " ref={carouselRef}>
        <p className="text-2xl lg:text-3xl font-normal">
          <span className="block mb-3"> {Featureheading.banner1}</span>{" "}
          <span
            ref={gradientRef}
            className="bg-gradient-to-r from-transparent to-[#a397d3] text-[#483d73] px-1  bg-[length:0%_100%] bg-left bg-no-repeat rounded-lg"
          >
            {Featureheading.banner2}
          </span>
        </p>
      </div>

      {isModalOpen && selectedGrid && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 flex lg:flex-row flex-col justify-center items-center transition-all duration-700 ease-in-out transform">
          <div className="bg-white rounded-3xl flex lg:flex-row flex-col lg:w-[45rem] lg:h-[20rem] h-[40rem] w-[23rem]  transition-all duration-700 ease-in-out transform">
            {/* Left side: Image */}
            <div className="lg:w-1/2 lg:h-full h-1/2 p-4 ">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={selectedGrid.mainImage} // Assuming selectedGrid contains an image source
                  alt={selectedGrid.title}
                  height={300}
                  width={300}
                  className="rounded-2xl h-[40rem] w-[30rem] -mt-24"
                />
              </div>
            </div>

            {/* Right side: Title and Description */}
            <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col justify-between relative lg:p-0 p-3 ">
              <div className="p-4 ">
                <h1 className="text-sm mb-2 font-poppins font-semibold text-black w-[18rem]">
                  {selectedGrid.title}
                </h1>
                <p className="font-poppins font-regular text-[0.66rem] w-[15rem] mt-5 h-[13rem]  overflow-hidden text-ellipsis break-words">
                  {selectedGrid.description}
                </p>
              </div>

              {/* Close button */}
              <div className="absolute lg:top-2 lg:right-3 right-1 -top-[19.7rem] hover:text-[#483d73] cursor-pointer">
                <button
                  aria-label="close button"
                  className="cursor-pointer font-bold"
                  onClick={closeModal}
                >
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="#3a2a79" /* Fill color */
  viewBox="0 0 24 24"
  width="25" /* Size similar to IoCloseCircleSharp */
  height="25"
  className="hover:fill-[#483d73] transition-all duration-700 ease-in-out" /* Hover effect */
>
  <circle cx="12" cy="12" r="12" fill="#3a2a79" /> {/* Circle background */}
  <path
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.536 8.464L12 12m0 0L8.464 8.464m3.536 3.536L8.464 15.536m3.536-3.536l3.536 3.536"
  />
</svg>
                </button>
              </div>

              <div className="flex absolute lg:bottom-3 lg:right-3 space-x-1 bottom-3 right-3 group cursor-pointer">
                <p className="font-poppins font-regular text-[0.70rem] mt-[] hover:text-red-700">
                  {Featureheading.button}
                </p>

                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon flat-line group-hover:stroke-red-700 transition-all duration-300 ease-in-out"
                  width="15" /* Size matching the previous icon */
                  height="15"
                >
                  <g id="SVGRepo_iconCarrier">
                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      style={{
                        stroke:
                          "#3a2a79" /* Change this to the desired color */,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></line>
                    <polyline
                      points="18 15 21 12 18 9"
                      style={{
                        stroke: "#3a2a79" /* Same color for consistency */,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></polyline>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paragraph and grid below */}
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1  gap-4 p-4 mt-8 relative">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg p-1"
          >
            <Image
              src={item.mainImage}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-44 object-cover rounded-t-md "
            />

            <h1 className="mt-2 text-sm font-medium text-gray-800 lg:w-[15rem] ml-2 md:w-[16rem]">
              {item.title}
            </h1>
            <div className="flex-col flex space-y-4 first-letter: p-2  relative -ml-7">
              <p className="text-gray-600 text-xs font-poppins font-regular mt-3 px-7 h-[5rem] ">
                {truncateTextdesktop(
                  selectedMachine.description,
                  wordLimitdesktop
                )}
              </p>
            </div>
            <button
              aria-label="open-button"
              className="ml-56 cursor-pointer md:ml-80 absolute bottom-2 right-2 hover:text-[#483d73] transition-all duration-700 ease-in-out"
              onClick={() => openModal(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#3a2a79" /* Fill color */
                viewBox="0 0 24 24"
                width="30" /* Size similar to IoAddCircle */
                height="30"
                className="hover:fill-[#483d73] transition-all duration-700 ease-in-out" /* Hover effect */
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-4H7v-2h4V7h2v4h4v2h-4v4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProjectPage;
