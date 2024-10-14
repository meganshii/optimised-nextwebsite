
import Image from "next/image";

const ImageSlider: React.FC = () => {

  return (
    <div className="relative w-full mx-auto h-full">
      <Image
            src="https://www.nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-making-machine.webp"
            alt="Hero Image"
            height={200}
            width={200}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
    </div>
  );
};

export default ImageSlider;
