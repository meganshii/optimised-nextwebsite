import Image from "next/image";
import React from "react";
import { branchesData } from "../Constants/contact/branches.json";

const Branches: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 lg:h-screen h-full ">
        <div className="container mx-auto px-10 pt-5">
          <h1 className="text-2xl font-medium font-poppins text-center ">
            Nessco India <span className="text-[#483d73]">Branches</span>
          </h1>

          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-5 gap-8 mt-24 justify-center relative items-center">
            {branchesData.map((branch) => (
              <div
                key={branch.id}
                className=" text-center  shadow-lg h-[22rem] rounded-3xl relative bg-white hover:shadow-2xl hover:scale-80  transform transition-transform duration-300 group flex flex-col overflow-hidden"
              >
                <div className="p-6">
                <div className=" flex relative">
                  {/* Flag on the left */}
                  <div className="left-0 top-0">
                    <Image
                      src={branch.flag}
                      width={80}
                      height={80}
                      className="w-14 h-14"
                      alt={`${branch.country} Flag`}
                    />
                  </div>

                  {/* Location image on the right, positioned at the top */}
                  <div className="absolute top-2 right-0">
                    <Image
                      src={branch.location}
                      width={70}
                      height={70}
                      className="w-9 h-9"
                      alt="Location"
                    />
                  </div>
                </div>

                <h1 className="text-xl text-[#3a3a79] font-medium font-poppins text-center  top-6 relative ">
                  {branch.office}
                </h1>
                <p className="text-black w-full px-5 text-sm font-poppins font-regular top-8 relative">
                  {branch.address}
                </p>
                </div>
                <div className=" absolute  w-full bottom-0">
                  <Image
                    src={branch.image}
                    width={300}
                    height={300}
                    className="w-full"
                    alt="image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Branches;
