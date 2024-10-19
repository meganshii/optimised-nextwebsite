import React from "react";
import branchesData from '../Constants/contact/contactContent.json'; // Adjust the path as necessary


const Reach: React.FC = () => {
  return (
    <>
      <section className=" lg:py-10 lg:h-full h-screen flex flex-row bg-gray-100 mt-10 p-9">
        <div className="container  h-full w-full bg-white rounded-3xl p-5">
          <h1 className="text-2xl font-medium font-poppins text-center mb-2">
            {branchesData.heading[2].reachtitle} <span className="text-[#483d73]">{branchesData.heading[3].reachhighlight} </span>
          </h1>
          <div className=" flex flex-row ">
            <iframe
              src={branchesData.heading[4].reachmap}
              width="100%"
              height="400"
              className="border-0"
              loading="lazy"
              title="Google Maps"
            ></iframe>

        
          </div>
        </div>
      </section>
    </>
  );
};

export default Reach;
