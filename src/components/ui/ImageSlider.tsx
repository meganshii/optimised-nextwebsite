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
    }, 10000); // 5 seconds delay

    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, []);

  if (!videoSources.length && !imageSources?.length) {
    return <p>No media available.</p>;
  }

  return (
    <div className="relative w-full mx-auto h-full">
      <Image
            src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp"
            alt="Hero Image"
            height={200}
            width={200}
            priority
            className="w-full h-full object-cover rounded-2xl"
          />
    </div>
  );
};

export default ImageSlider;
