import React from "react";

const Reach: React.FC = () => {
  return (
    <>
      <section className=" lg:py-10 lg:h-full h-screen flex flex-row bg-gray-100 mt-10 p-9">
        <div className="container  h-full w-full bg-white rounded-3xl p-5">
          <h1 className="text-2xl font-medium font-poppins text-center mb-2">
            How To <span className="text-[#483d73]">Reach </span>
          </h1>
          <div className=" flex flex-row ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6906406902926!2d75.86234927478176!3d26.78612946552013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db577a120875b%3A0x3912582d92baafea!2sNessco%20Paper%20Cup%20Machine!5e0!3m2!1sen!2sin!4v1714119835373!5m2!1sen!2sin"
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
