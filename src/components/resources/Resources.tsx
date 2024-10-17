import React from "react";
import Image from "next/image";
import resourceContent from "../Constants/resources/resources.json"; // Adjust the path as necessary

const Resources: React.FC = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        {/* // First Div */}
        <div className="bg-white w-full h-[15rem] flex px-6 lg:px-0">
          <div className="w-3/4 lg:pl-10 pl-3 ">
            <h1 className="bg-gradient-to-r from-[#483d73] from-2% via-red-700 via-20% to-red-700 bg-clip-text text-transparent font-medium font-poppins relative lg:text-5xl text-2xl top-[4rem] ">
              {resourceContent.pageHeader.mainTitle} <span className="block">{resourceContent.pageHeader.highlightTitle}</span>
            </h1>
            <p className="text-gray-600 font-poppins text-sm  font-regular relative lg:top-[5rem] lg:w-[30rem] w-[13rem] top-[5rem]">
              {resourceContent.pageHeader.description}
            </p>
          </div>
          <div className="w-2/6 relative">
            <Image
              src={resourceContent.pageHeader.image.src}
              alt={resourceContent.pageHeader.image.alt}
              width={resourceContent.pageHeader.image.width}
              height={resourceContent.pageHeader.image.height}
              priority
              className="absolute lg:-top-5  lg:scale-80  left-0 bottom-0 "
            />
          </div>
        </div>

        {/* // Cards Section */}
        <div className=" grid lg:grid-row-1 lg:grid-cols-5 gap-5 flex-col p-9">
          {resourceContent.cards.map((card, index) => (
            <div key={index} className=" lg:h-[20rem] h-[20rem]  items-center py-10 rounded-xl flex flex-col relative  shadow-lg hover:shadow-2xl hover:scale-80  transform transition-transform duration-300 group bg-gradient-to-t from-[#f2f2f2] to-white ">
              <h1 className="font-poppins font-semibold text-3xl  relative text-center text-[#636363] group-hover:text-red-600">{card.title}</h1>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={100}
                height={100}
                className=" bottom-10 absolute"
              />
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  width="25"
  height="25"
  className="absolute bottom-4 right-2 hover:fill-black transition-all duration-700 ease-in-out" /* Optional hover effect */
>
  <path
    d="M14 3h7v7m-1.879-8.121L10.121 13.879M17 17H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;
