"use client";
import { bluePageContent } from'../Constants/pinkcity/PinkcityPage.json';

const Bluepage = () => {

  return (
    <div className="relative w-full h-full bg-gray-100 mt-10 p-12 overflow-hidden hidden lg:block">
    

      <div className="relative z-10 lg:w-[100%] lg:top-5 lg:h-[40rem] lg:left-0 h-[50vh] ">
        <video
          className="w-full object-fill h-full rounded-2xl "
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster ={bluePageContent.videoSrc}
        >
          <source src={bluePageContent.videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Bluepage;
