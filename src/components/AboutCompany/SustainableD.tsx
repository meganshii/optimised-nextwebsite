"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import { SlArrowRight } from 'react-icons/sl';
import { gsap } from 'gsap/gsap-core';
import styles from '../AboutCompany/about.module.css';
import { sustainableContent } from '../../components/Constants/ourcompany/OurcompanyPage.json'; // Import the dynamic content
import style  from './Sustainable.module.css'

const SustainableD = () => {
  const { heading, highlight, description, buttonText } = sustainableContent;

  return (
    <>
      <div className="relative h-full bg-black  overflow-hidden w-full justify-center">
       
        <div className={`${style.imagecontainer} ` }>
        <div className="absolute w-full h-full ">
          <Image 
            src={sustainableContent.image} 
            alt="Background Image"
            width={400}
            height={400}
            className=' object-cover h-full  w-full'     />
          {/* <div className="absolute inset-0 bg-black opacity-85"></div> */}
          <div className={`${style.gradientoverlay}`}>
            <div className={`${style.gradientleft}`}></div>
            <div className={`${style.gradientright}`}></div>
          </div>
        </div>
        </div>
       

        <div className="relative  flex flex-col items-center justify-center text-center text-white min-h-screen lg:top-0 top-5">
          <h1 className="lg:text-4xl text-2xl font-poppins font-medium">
            {heading} <span className="text-green-500">{highlight}</span>
          </h1>
          <p className="mt-10 text-sm font-poppins font-regular px-4 md:px-32 text-center">
            {description}
          </p>
          <div className={`${styles.container}`}>
            <button className={styles.button}>
              {buttonText}
              {/* <SlArrowRight className={styles.icon} />  */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SustainableD;
