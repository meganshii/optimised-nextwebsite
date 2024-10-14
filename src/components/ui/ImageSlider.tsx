import { useRef, useEffect, useState } from "react";
import data from "../Constants/hero.json";
import Image from "next/image";

const ImageSlider: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  const videoSources = homeData?.video?.sources || [];
  const imageSources = homeData?.images;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Initially show the image for 10 seconds
    const timer = setTimeout(() => {
      setShowVideo(true); // Switch to video after 10 seconds
      if (videoRef.current) {
        videoRef.current.load(); // Load the video
      }
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, []);

  if (!videoSources.length && !imageSources?.length) {
    return <p>No media available.</p>;
  }

  return (
    <div className="relative w-full mx-auto h-full">
      {showVideo && videoSources.length > 0 ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl"
          autoPlay={true}
          loop
          muted
          controls={false}
          playsInline
          preload="auto" // Preload the video to start playing smoothly
        >
          {videoSources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        imageSources && (
          <Image
            src={imageSources[0]} 
            alt="Hero Image"
            height={200}
            width={200}
            priority
            className="w-full h-full object-cover rounded-2xl"
          />
        )
      )}
    </div>
  );
};

export default ImageSlider;
