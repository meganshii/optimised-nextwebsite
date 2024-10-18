import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";

const Contactnew: React.FC = () => {
  return (
    <div className="h-full bg-gray-100 items-center flex flex-col font-poppins relative">
      {/* Main content */}
      <div className="mt-12 p-5 ">
        <p className="font-poppins font-semibold lg:text-2xl text-lg flex items-center w-[40rem]  justify-center ">
          Revolutionising
          <span className="h-[3rem] lg:w-[5rem] ml-1 lg:rounded-xl rounded-2xl">
            <Image
              src="/assets/contact/himg2.png"
              height={48} // 3rem height
              width={64} // 4rem width
              alt="img"
              priority
              className="lg:rounded-xl rounded-2xl lg:object-cover object-cover h-full w-full "
            />
          </span>
          <span className="text-[#483d73] ml-1"> Paper Packaging Machinery</span>
        </p>

        <p className="font-poppins font-semibold lg:text-2xl text-lg flex items-center justify-center mt-1  w-full">
          for a <span className="text-[#483d73] ml-1">Sustainable Future </span>
          <span className="lg:h-[3rem] lg:w-[5rem] ml-2 h-[2rem] w-[3.5rem]">
            <Image
              src="/assets/contact/himg.png"
              height={48} // 3rem height
              width={64} // 4rem width
              alt="img"
              priority
              className="lg:rounded-xl rounded-lg object-cover h-full w-full"
            />
          </span>
        </p>
      </div>

      <p className="text-black font-medium text-sm">Have a Project in Mind?</p>
      <p className="text-[#483d73] font-semibold text-lg">Contact Us</p>

      <div className="p-5 text-sm">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                id="name"
                className="block w-full border-[1.75px] border-[#483d73] rounded-xl shadow-sm p-2"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="block w-full border-[1.75px] border-[#483d73] rounded-xl shadow-sm p-2"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                className="block w-full border-[1.75px] border-[#483d73] rounded-xl shadow-sm p-2"
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="block w-full border-[1.75px] border-[#483d73] rounded-xl shadow-sm p-2"
                placeholder="Subject"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                id="message"
                className="block w-full border-[1.75px] border-[#483d73] h-[5rem] rounded-xl shadow-sm p-2"
                placeholder="Message"
                rows={4}
              ></textarea>
            </div>
          </div>

          <div className="mt-5">
            <button
            aria-label="submit button"
              type="submit"
              className="w-full bg-[#483d73] text-white p-3 rounded-xl transition duration-200 font-bold"
            >
              Get In Touch
            </button>
          </div>
          <p className="text-xs font-regular text-center mt-2">
            we ll never share your information with anyone
          </p>
        </form>
      </div>

      <div className="lg:p-2 p-8">
        <div className="bg-[#483d73] border flex lg:flex-row flex-col rounded-3xl p-5 lg:gap-5 gap-3">
          <div className="flex lg:w-[33%] ">
            <Image
              src="/assets/contact/new1.svg"
              alt="Marker"
              height={100}
              width={100}
              className="h-[2.5rem] w-[2.5rem]"
            />
            <div className="flex flex-col">
              <h1 className="text-white font-semibold text-center lg:text-lg text-xs">Head Office</h1>
              <p className="text-white font-regular lg:text-sm text-xs text-center mt-3">
                E-186, Apparel Park, RIICO Industrial Area, Mahal Road,
                Jagatpura, Jaipur (Rajasthan) - 302022, INDIA
              </p>
            </div>
          </div>

          <div className="border lg:h-[6rem]  border-gray-100"></div>

          <div className="flex lg:w-[33%]">
            <Image
              src="/assets/contact/new2.svg"
              alt="Marker"
              height={100}
              width={100}
              priority
              className="h-[2.5rem] w-[2.5rem] "
            />
            <div className="flex flex-col w-full">
              <h1 className="text-white font-semibold text-center lg:text-lg text-xs">Company Email</h1>
              <p className="text-white font-regular lg:text-sm text-xs text-center mt-3">
                info@gmail.com
              </p>
            </div>
          </div>

          <div className="border lg:h-[6rem] border-gray-100"></div>

          <div className="flex lg:w-[33%]">
            <Image
              src="/assets/contact/new3.svg"
              alt="Marker"
              height={100}
              width={100}
              priority
              className="h-[2.5rem] w-[2.5rem]"
            />
            <div className="flex flex-col w-full">
              <h1 className="text-white font-semibold text-center lg:text-lg text-xs">Contact Us</h1>
              <p className="text-white font-regular lg:text-sm text-xs text-center mt-3">
                +91 95494 44484
                <br />
                +91 95494 44484
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cup Image on the right side */}
      <div className={`absolute right-0 top-[8rem] rounded-full  mb-8 mr-8 lg:visible invisible  ${styles.cupslide}`}>
        <Image
          src="/assets/contact/cup3.svg"
          alt="Cup"
          height={200}
          width={200}
          priority
          className="object-cover"
        />
      </div>
      <div className={`absolute left-[13rem] top-[6rem]  mb-8 mr-8 lg:visible invisible ${styles.cupslide}`}>
        <Image
          src="/assets/contact/cup2.svg"
          alt="Cup"
          height={100}
          width={100}
           priority
          className="object-cover"
        />
      </div>
      <div className={`absolute left-0 top-[20rem]  mb-8 mr-8 lg:visible invisible ${styles.cupslide} `}>
        <Image
          src="/assets/contact/cup1.svg"
          alt="Cup"
          height={200}
          width={200}
           priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Contactnew;
