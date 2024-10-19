"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";
import { footerData } from "../Constants/footer/footer";
// import { FaTelegram } from "react-icons/fa";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaYoutubeSquare } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname() || "";
  const componentCode = pathname.split("/")[2]?.toLowerCase();
  const componentCodeourCompany = pathname.split("/")[3]?.toLowerCase();

  const isDarkBackground =
    ["knowledge-center", "clientele", "our-company"].includes(componentCode) ||
    ["our-company"].includes(componentCodeourCompany);

  const textColor = isDarkBackground ? "text-white" : "text-black";
  // const iconColorClass = isDarkBackground ? "text-white" : "text-black";
  // const mapColorClass = isDarkBackground ? "opacity-10" : "opacity-100";
  const certificateColorClass = isDarkBackground ? "invert" : "";

  return (
    <>
      <div className="border "></div>
      {/* <PolicyHeader /> */}
      <footer
        className={`${isDarkBackground ? "bg-[#222222]" : "bg-white"} ${
          styles.footer
        }`}
      >
        <div className={`${styles.bgimagefooter}`}>
          {isDarkBackground && <div className={`${styles.overlay} `}></div>}
        </div>
        <div className="w-full relative m-auto mt-6 lg:p-0 p-3 md:p-5 z-20">
          <div className="flex flex-col-reverse  lg:flex-row  justify-evenly items-start w-[100%] lg:px-5  mb-[-0.10rem] ">
            <div className="flex flex-row-reverse lg:flex-row mt-7 lg:mt-0 ">
              <div
                className={`${styles.footerlistabout} lg:order-none order-last -ml-[30rem] lg:ml-0 `}
              >
                <h1
                  className={` font-poppins text-sm md:text-xl lg:text-sm font-semibold  md:w-[10rem] w-[7rem] ${textColor} `}
                >
                  {footerData.storeTitle}
                </h1>
                <div
                  className={`flex flex-col hover:text-red-600 -space-y-6 font-poppins  w-[3rem] font-light  text-xs lg:text-xs md:text-lg  `}
                >
                  {footerData.stores.map((store, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`${styles.footeratags} ${textColor}`}>
                        {store}
                      </p>
                    </Link>
                  ))}
                </div>
                <h1
                  className={`${styles.footerdesctitle} font-poppins text-sm  md:text-xl lg:text-sm font-semibold mt-4 lg:w-[10rem] w-[10rem] md:w-[13rem]  ${textColor} `}
                >
                  {footerData.businessTitle}
                </h1>
                <p
                  className={`mt-3 font-light text-xs lg:text-xs md:text-lg lg:w-[9rem] md:w-[12rem] w-[10rem] font-poppins hover:text-red-600 cursor-pointer ${textColor}`}
                >
                  {footerData.businessPartners}
                </p>
                <h1
                  className={`${styles.footerdesctitle} font-poppins text-sm md:text-xl lg:text-sm font-semibold mt-4 lg:w-[10rem] md:w-[14rem] w-[10rem]  ${textColor} `}
                >
                  {footerData.languageTitle}
                </h1>
                <p
                  className={`mt-3 font-light text-xs lg:text-xs md:text-lg font-poppins hover:text-red-600 cursor-pointer  lg:w-[7rem] md:w-[10rem] w-[7rem]  ${textColor}`}
                >
                  India | English
                </p>
                <h1
                  className={`${styles.footerdesctitle} font-semibold font-poppins invert-0 text-sm md:text-xl lg:text-sm mt-8 lg:w-[14rem] md:w-[20rem] w-[15rem]  ${textColor}`}
                >
                  {footerData.awarTitle}
                </h1>
                <div className="flex flex-row  lg:w-[35rem] lg:h-[3rem] w-[24rem]  mb-5">
                 
                    <p aria-label="Footer Icon" >
                      <a
                        href="https://www.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="https://assets.nesscoindustries.com/public/assets/footer/certificate.webp"
                          alt="award"
                          width={200} // Adjust the size as needed
                          height={200} // Adjust the size as needed
                         
                          className={` transform transition-transform duration-300 h-full w-full object-cover ${certificateColorClass}`}
                        />
                      </a>
                    </p>
              
                </div>
              </div>

              <div className="flex flex-col w-[18%] relative left-[10rem] lg:left-16 md:left-[18rem] ">
                <h1
                  className={`font-semibold font-poppins text-sm md:text-xl lg:text-sm  ${textColor}`}
                >
                  {footerData.clienteleTitle}
                </h1>
                <div className={styles.footerlistslink}>
                  <Link href="/" passHref>
                    <p
                      className={`font-poppins text-xs lg:text-xs md:text-lg font-light mt-4 w-[5rem] md:w-[7rem] hover:text-red-600 cursor-pointer   ${textColor}`}
                    >
                      {footerData.clients}
                    </p>
                  </Link>
                </div>
                <h1
                  className={`font-semibold text-sm lg:text-xs md:text-lg  font-poppins mt-5  ${textColor}`}
                >
                  {footerData.carrersTitle}
                </h1>
                <div className="text-xs lg:text-xs md:text-lg font-light font-poppins -space-y-7 hover:text-red-600 cursor-pointer  w-[3rem]">
                  {footerData.careers.map((career, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`${styles.footeratags}   ${textColor}`}>
                        {career}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-row flex lg:flex-none  lg:mt-0 mt-6 lg:-ml-[30vw]">
              <div className="w-[20%] ">
                <h1
                  className={`font-semibold text-sm md:text-xl lg:text-sm font-poppins  ${textColor}`}
                >
                  {footerData.linkTitle}
                </h1>
                <div className="font-poppins text-xs lg:text-xs md:text-lg font-light space-y-10 hover:text-red-600   md:w-[5rem]  w-[4rem]">
                  {footerData.links.map((link, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`${styles.footeratags}  ${textColor}`}>
                        {link}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-[20%]  lg:ml-20 md:ml-[13rem] ml-10">
                <h1
                  className={`font-semibold text-sm md:text-xl lg:text-sm font-poppins  ${textColor}`}
                >
                  {footerData.linkSecond}
                </h1>
                <div className="font-poppins text-xs lg:text-xs md:text-lg font-light space-y-10 hover:text-red-600 w-[4rem] md:w-[5rem] ">
                  {footerData.links.map((link, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`${styles.footeratags}  ${textColor}`}>
                        {link}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col  w-[30%] lg:ml-20 md:ml-[8rem] ml-10 ">
                <h1
                  className={`font-semibold font-poppins text-sm md:text-xl lg:text-sm   ${textColor}`}
                >
                  {footerData.serviceTitle}
                </h1>
                <div className="font-poppins hover:text-red-600 font-light text-xs lg:text-xs md:text-lg w-[8.5rem] lg:w-[8.5rem] md:w-[13rem]  cursor-pointer">
                  {footerData.services.map((service, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`${styles.footeratags}  ${textColor}`}>
                        {service}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[20%] ">
              <h1
                className={`${styles.footerdesctitle} font-poppins invert-0 text-sm md:text-xl lg:text-sm font-semibold text-center lg:text-left  ${textColor}`}
              >
                {footerData.subscribeTitle}
              </h1>
              <div className="flex">
                <input
                  placeholder="Enter your email address"
                  className=" lg:w-[20rem] w-[22rem] md:w-[47rem]  mt-2 h-[2.5rem] rounded-xl border p-2 border-black font-poppins font-light text-xs"
                />
                {/* <FaTelegram
                  size={30}
                  className={`relative top-3 lg:-left-8 -left-10 hover:scale-80 hover:transition-shadow transition-transform duration-300  `}
                /> */}
              </div>

              <div className="flex lg:flex-col ">
                <div className="  ">
                  <h1
                    className={`${styles.footerdesctitle} font-semibold   text-sm md:text-xl lg:text-sm font-poppins mt-[1.6rem]  ${textColor}`}
                  >
                    {footerData.contactusTitle}
                  </h1>
                  <div
                    className={`${styles.footerlistslink} hover:text-red-600 cursor-pointer font-poppins text-xs lg:text-xs md:text-lg font-light  w-[7rem] md:w-[10rem] `}
                  >
                    {footerData.contacts.map((contact, index) => (
                      <Link key={index} href={contact.href} passHref>
                        <p className={`${styles.footeratags}  ${textColor}`}>
                          {contact.name}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-row space-x-2 mt-5  ">
                    {/* <FaSquareFacebook size={30} className={`${textColor}`} />
                    <FaSquareXTwitter size={30} className={`${textColor}`}/>
                    <FaYoutubeSquare size={30} className={`${textColor}`}/>
                    <FaSquareInstagram size={30} className={`${textColor}`}/>
                    <FaLinkedin size={30} className={`${textColor}`}/> */}
                  </div>
                </div>
                <div>
                  <h1
                    className={`${styles.footerdesctitle} font-poppins  text-sm md:text-xl lg:text-sm md:ml-[20rem] lg:ml-0 font-semibold lg:mt-5 mt-7  ${textColor}`}
                  >
                    {footerData.addressTitle}
                  </h1>
                  <div className="font-poppins hover:text-red-600 cursor-pointer text-xs lg:text-xs md:text-lg font-light mt-2 lg:ml-0  md:ml-[20rem]">
                    <p
                      className={` lg:w-[14rem] w-[12rem] md:w-[15rem] hover:text-red-600 ${textColor}`}
                    >
                      {footerData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={`${styles.footerrights} ${
          isDarkBackground ? "bg-[#222222]" : "bg-white"
        } relative`}
      >
        {isDarkBackground && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        )}

        <div className={`${styles.footercontainerx} relative z-20`}>
          <p className={`lg:ml-9 font-poppins text-sm font-light ${textColor}`}>
            {footerData.copyright}
          </p>
          <div className="border h-[2rem] border-gray-400 ml-5"></div>
          <Link href="/privacy-policy/" passHref>
            <p className={`font-poppins text-sm font-light ml-5 ${textColor}`}>
              {footerData.privacyPolicy}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
