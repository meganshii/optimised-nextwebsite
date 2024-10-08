"use client";
import { useMemo } from "react";
import Image from "next/image";
import data from "../Constants/hero.json";

const ImageSlider: React.FC = () => {
  // Extract the HeroSection data and get the first image
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  const images = useMemo(() => homeData?.images || [], [homeData]);
  const singleImageSrc = images.length > 0 ? images[0] : ""; // Get the first image

  if (!singleImageSrc) {
    return <p>No images available.</p>; // Fallback if there are no images
  }

  return (
    <div className="relative w-full mx-auto h-full">
      <div className="w-full h-full bg-white rounded-3xl bg-center">
        <Image
          priority
          src="https://www.nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-making-machine.webp"
          alt="Single Image"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/..." // Use your low-res image or environment variable
          loading="eager"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImageSlider;