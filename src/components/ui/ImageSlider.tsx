import { useRef, useState, useEffect } from "react";
import Image from "next/image"; // Next.js Image for optimized images
import data from "../Constants/hero.json";

const ImageSlider: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  const videoSources = homeData?.video?.sources || [];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Automatically play video after 2000ms if there are video sources
  useEffect(() => {
    if (videoSources.length === 0) return; // Do nothing if no video sources

    const timer = setTimeout(() => {
      if (videoRef.current) {
        setIsVideoPlaying(true);
        videoRef.current.play().catch((error) => {
          console.error("Failed to play the video:", error);
        });
      }
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [videoSources]);

  if (!videoSources.length) {
    return <p>No video available.</p>;
  }

  return (
    <div className="relative w-full h-full aspect-w-16 aspect-h-9">
      {/* Optimized Image Placeholder using Next/Image */}
      {!isVideoPlaying && homeData?.images?.length && (
        <Image
          src={homeData.images[0]} // Use the first image in the array as the placeholder
          alt="Hero Image"
          fill
          quality={100} // High quality for large hero images
          className="rounded-2xl"
          priority // Prioritize loading of this image
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
          isVideoPlaying ? "opacity-100" : "opacity-0"
        }`}
        autoPlay={false}
        loop
        muted
        controls={false}
        playsInline
        preload="metadata"
      >
        {videoSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ImageSlider;
