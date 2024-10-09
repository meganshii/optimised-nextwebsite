import Image from "next/image"; // Next.js Image for optimized images
import data from "../Constants/hero.json";

const ImageSlider: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;

  return (
    <div className="relative w-full h-full aspect-w-16 aspect-h-9">
      {/* Optimized Image Placeholder using Next/Image */}
      {homeData?.images?.length && (
        <Image
          src={homeData.images[0]} // Use the first image in the array as the placeholder
          alt="Hero Image"
          fill
          quality={100} // High quality for large hero images
          className="rounded-2xl"
          priority // Prioritize loading of this image
        />
      )}
    </div>
  );
};

export default ImageSlider;
