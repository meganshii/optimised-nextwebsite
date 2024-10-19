
import Image from 'next/image';
import { landingPageContent } from '../Constants/pinkcity/PinkcityPage.json'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col p-5  h-full lg:p-6 lg:h-[40rem] overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full lg:h-[27rem]  lg:mt-10 mt-16 lg:left-0 h-[36rem] bg-gray-50">
        <Image
          src={landingPageContent.backgroundImg}
          alt="Jaipur"
          height={600}
          width={600}
          priority
          objectPosition="right center"
          className="object-cover w-full h-full rounded-lg lg:rounded-2xl "
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[30rem] bg-gradient-to-t from-black to-transparent rounded-b-lg lg:invisible"></div>
      </div>

      {/* Title */}
      <div className='w-full absolute top-[15rem] justify-center text-center right-0 lg:relative lg:-top-16 lg:w-0  lg:-mt-52 lg:left-12'>
      <h2 className="    font-poppins text-white text-8xl lg:text-9xl ">
        {landingPageContent.jaipur}
      </h2>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-full flex flex-col items-center mt-20 lg:mt-7 relative">
        {/* Corner Image */}
        <div className="absolute -left-20 -top-8 lg:visible invisible  ">
          <Image
            src={landingPageContent.cornerLayerImg}
            alt="Stroke"
            width={300}
            height={300}
            priority
          />
        </div>

        {/* Description and Sticker Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-screen relative py-10 lg:py-0">
  {/* Description */}
  <div className="flex-1 text-center lg:text-left lg:absolute lg:left-14 lg:top-20 absolute md:-top-[22rem] -top-[20rem]  p-2">
    <p className="text-white lg:text-black font-poppins lg:text-sm text-xs md:text-xl font-regular lg:w-[29vw] w-[80vw] mx-auto lg:mx-0">
      {landingPageContent.description}
    </p>
  </div>

  {/* Sticker Image */}
  <div className="flex-shrink-0 p-0 lg:p-0 lg:-bottom-12 md:bottom-6 bottom-20 absolute lg:flex lg:justify-center lg:items-center lg:w-1/3 lg:h-1/3 mx-auto">
    <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] flex items-center justify-center">
      <Image
        src={landingPageContent.stickerImg}
        alt="The Pink City"
        width={300}
        height={300}
        priority
        className="object-contain"
      />
    </div>
  </div>

  {/* Title & Subtitle */}
  <div className=" flex-1 lg:absolute lg:right-7 lg:top-14 -top-28 absolute text-center lg:text-center mt-10 lg:mt-0 bg-red-200n w-full">
    <h2 className="font-poppins font-regular text-lg md:text-4xl lg:text-5xl flex lg:flex-col justify-between  items-center lg:items-end text-left">
      {landingPageContent.title}
      <span className="font-poppins font-regular text-red-800 text-xl lg:text-6xl text-right md:text-5xl ">
        {landingPageContent.subtitle}
      </span>
    </h2>
  </div>
</div>

      </div>
    </div>
  );
};

export default LandingPage;
























