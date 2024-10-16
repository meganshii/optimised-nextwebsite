"use client";

import Image from "next/image";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
// import { IoAddCircle } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
import { cards, Heading } from "../Constants/About/AboutUsPage.json";
import dynamic from "next/dynamic";
// import { IoIosCloseCircle } from "react-icons/io";


const Ideaicon =dynamic(()=> import("../Icons/about/Ideaicon"),{ssr:false});
const Quality =dynamic(()=> import("../Icons/about/Quality"),{ssr:false});

const Customer =dynamic(()=> import("../Icons/about/Customer"),{ssr:false});

const Sustainabilityicon =dynamic(()=> import("../Icons/about/Sustainabilityicon"),{ssr:false});


const Svglist=[Ideaicon,Quality,Customer,Sustainabilityicon]



const truncateText = (text: string, maxWords: number) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length > maxWords) {
    return wordsArray.slice(0, maxWords).join(" ") + "...";
  }
  return text; // Return full text if it's within the limit
};

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const maxWordsForMobile = 10;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setActive(null);
  };

  useEffect(() => {
    cards.forEach((card) => {
      const preloadimg = new window.Image();
      preloadimg.src = card.video;
    });
  }, [cards]);

  return (
    <div className="lg:h-[48rem] md:h-[55rem] h-[50rem] w-full bg-white overflow-hidden relative lg:pt-10 pt-5">
      <h2 className="lg:text-3xl text-2xl font-medium text-[#3a2a79] mb-2  font-poppins relative lg:pl-10 pl-8 ">
        {Heading.title}
      </h2>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] backdrop-blur-md">
            <div className=" relative top-5">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-0"
              onClick={handleClose}
            >
               <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30" // Adjust the width as needed
      height="30" // Adjust the height as needed
      viewBox="0 0 24 24"
   
    >
      {/* Circular background */}
      <circle cx="12" cy="12" r="10" fill="#3a2a79" />
      {/* Cross sign */}
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[20rem] lg:w-[20rem]  lg:h-[23rem] md:h-[40rem] lg:mt-8 mt-10 md:w-[35rem]  flex flex-col bg-[#f7f7f7] dark:bg-neutral-900 sm:rounded-3xl overflow-hidden rounded-xl"
            >
              <div className="relative w-full h-52 lg:h-[20rem] md:h-[17rem] sm:rounded-tr-lg sm:rounded-tl-lg overflow-hidden ">
                {/* Background video */}
                <Image
                  src={active.video}
                  alt="gif"
                  width={100}
                  height={100}
                  
                  className="absolute inset-0 w-full h-full object-cover bg-[#3a2a79]"
                />

                {/* Title */}
                <h1 className="absolute font-poppins bottom-2 left-0 right-0 text-center font-bold text-lg md:text-xl text-white z-10">
                  {active.title}
                </h1>

                {/* Overlay image */}
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <Image
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-20 h-20 md:w-36 md:h-36 lg:h-24 lg:w-24 sm:rounded-lg object-cover "
                  />
                </motion.div>
              </div>

              <div className="">
                <div className="pt-4 relative p-12 md:p-10 top-3 text-center">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-xl lg:text-sm font-regular font-poppins h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.description === "function"
                      ? active.description
                      : active.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="  lg:space-y-3 grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:flex-col lg:p-10 p-7 ">
        {cards.map((card, index) => {
          const Icons=Svglist[index]
          return(
            <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className=" lg:flex flex  flex-col-reverse lg:flex-row justify-between items-center bg-[#f7f7f7] dark:hover:bg-neutral-800 rounded-2xl cursor-pointer group lg:w-full lg:h-full h-[18rem] md:h-[20rem] relative p-3 lg:p-0"
          >
            <div className="md:flex md:flex-row gap-4 flex-col lg:flex-row lg:p-6 grid grid-cols-1  ">
              <div className=" col-span-1">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-black font-poppins text-center  lg:text-left lg:w-[70vw] lg:text-sm font-regular text-xs  lg:px-0 px-2  lg:ml-0"
                >
                  {/* Title */}
                  <span className="text-center  lg:left-0 lg:text-left lg:text-md text-sm lg:-mt-0 relative lg:-top-0  font-medium lg:text-[#3a2a79] text-black font-poppins block h-[3rem]  mb-2 lg:mb-0 lg:h-5 ">
                    {card.title}
                  </span>

                  {/* Paragraph */}
                  <span className="block">
                    {/* Conditionally render a shorter version on mobile */}
                    <span className="block lg:hidden relative md:text-center lg:left-0  overflow-hidden h-[3rem] md:h-[]">
                      {/* Use utility function to truncate text */}
                      {truncateText(card.description, maxWordsForMobile)}
                    </span>

                    {/* Full description for larger screens */}
                    <span className="hidden lg:block font-poppins">
                      {card.description}
                    </span>
                  </span>
                  <span className="absolute lg:right-0 block lg:hidden text-[#3a2a79] md:right-5 top-2 right-2 ">
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30" // Adjust the width as needed
      height="30" // Adjust the height as needed
      viewBox="0 0 24 24"
      
    >
      {/* Circular background */}
      <circle cx="12" cy="12" r="10" fill="#3a2a79" />
      {/* Plus sign */}
      <path
        d="M12 5v14m-7-7h14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
                  </span>
                  {/* <IoAddCircle
                    className="absolute lg:right-0 block lg:hidden text-[#3a2a79] md:right-5 top-2 right-2 "
                    size={30}
                  />  */}
                </motion.p>

                <div className=" lg:visible invisible relative  top-[1.9rem] h-[1.3px] w-[20rem] bg-[#2d1f66] rounded-sm "></div>
              </div>
            </div>
            <div className="flex  ">
              <div className=" lg:visible invisible relative -left-3  w-[2px] bg-[#2d1f66] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                key={index}
                className=" lg:p-6 md:p-16 h-[10rem] w-[10rem] lg:w-[9rem] lg:h-[8rem] md:h-[15rem] md:w-[15rem] flex items-center justify-center  lg:bg-[#000088] lg:rounded-tr-2xl lg:rounded-br-2xl transition-colors duration-300 p-7 group "
              >
                <Icons/>
              </div>
            </div>
          </motion.div>
          )
})}
      </ul>
      <div className="flex justify-center bg-slate-50">
        <button aria-label="read-more" className=" absolute bottom-3 w-[8rem]  text-base hover:font-medium font-normal font-poppins h-[2rem] items-center justify-center text-center border border-[#6f6f6f] hover:bg-black text-[#6f6f6f] hover:text-white  rounded-md z-10 ">
          Read More
        </button>
      </div>
    </div>
  );
}
