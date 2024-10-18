
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './client.module.css'; // Import CSS module

// Square data
import clienteleData from '@/components/Constants/Clientele/clientele.json';


// Utility function to get a sliding animation class
const getSlidingDirectionClass = () => {
  const directions = [
    styles['animation-slide-in-left'],
    styles['animation-slide-in-right'],
    styles['animation-slide-in-top'],
    styles['animation-slide-in-bottom'],
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};
const { squares } = clienteleData;


// Generate square components
const generateSquares = (data: typeof squares, isFadingOut: boolean) => {
  return data.map((sq) => {
    const animationClass = getSlidingDirectionClass();
    return (
      <div
        key={sq.id}
        className={`relative border border-[#262626] rounded-lg flex items-center justify-center overflow-hidden 
        ${sq.bgClass} 
        ${isFadingOut ? 'opacity-0' : 'opacity-100'} 
        transition-opacity duration-4000 ease-in-out`} // Fading effect
      >
        <div className={`absolute inset-0 flex items-center justify-center lg:p-0 p-3 ${animationClass}`}>
          <Image
            src={sq.src}
            alt={`image-${sq.id}`}
            width={110}
            height={110}
            className="transform transition-transform duration-4000"
          />
        </div>
      </div>
    );
  });
};

// Main ShuffleGrid component
const ShuffleGrid = () => {
  const [Squares, setSquares] = useState(generateSquares(squares, false));
  const [ isFadingOut, setIsFadingOut] = useState(false); // Track fading state

  useEffect(() => {
    const shuffleSquares = () => {
      setIsFadingOut(true); // Start fading out

      // After fade-out, change squares and fade in
      setTimeout(() => {
        setSquares(generateSquares(squares, false)); // Update squares
        setIsFadingOut(false); // Fade back in
      }, 4000); // Matches the fade-out duration
    };

    const interval = setInterval(shuffleSquares, 4000); // Total cycle: 4s fade-out + 4s fade-in

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="lg:h-[40rem] lg:w-full w-full h-[40rem] bg-black lg:p-10">
      <div className={`grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-2 lg:h-full lg:w-full h-full w-full ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
        {Squares}
      </div>
    </div>
  );
};

export default ShuffleGrid;



