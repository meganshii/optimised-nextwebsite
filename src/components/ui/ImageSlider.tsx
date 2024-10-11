import { useRef, useEffect, useState } from "react";
import data from "../Constants/hero.json";
import Image from "next/image";

const ImageSlider: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  const videoSources = homeData?.video?.sources || [];
  const imageSources = homeData?.images;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount and on resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Example breakpoint: 1024px for larger screens
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!videoSources.length && !imageSources?.length) {
    return <p>No media available.</p>;
  }

  return (
    <div className="relative w-full mx-auto h-full">
      <Image
            src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp" // Use a fallback image for smaller screens
            alt="Hero Image"
            fill
            priority
            className="w-full h-full object-cover rounded-2xl"
          />
    </div>
  );
};

export default ImageSlider;
