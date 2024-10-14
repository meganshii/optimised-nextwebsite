
import Image from "next/image";

const ImageSlider: React.FC = () => {

  return (
    <div className="relative w-full mx-auto h-full">
      <Image
            src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp"
            alt="Hero Image"
            height={1200}
            width={800}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            className="w-full h-full object-cover rounded-2xl"
          />
    </div>
  );
};

export default ImageSlider;
