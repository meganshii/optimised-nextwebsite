
import Image from "next/image";

const ImageSlider: React.FC = () => {

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
