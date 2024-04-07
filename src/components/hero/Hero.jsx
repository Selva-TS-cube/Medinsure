import React from "react";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-blue-300  `}>
      <div className=" container mx-auto pt-9 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, Step into a World of Assurance and Trust
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Secure your Life with PNB Metlife.",
                2000,
                "Shielding your family with PNB Metlife",
                2000,
                "Let's Safeguard your Tomorrow, Together!",
                2000,
                ""
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            
            <a
              href="https://medinsurerec.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border- text-[2rem] bg-white border-black px-8 py-8 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
            >
              <div className="flex items-center gap-1">
                Update Details <FiDownload />
              </div>
            </a>
          </div>
          {/* Click here to enter details 👆 */}
        </div>
        
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src='https://i.postimg.cc/NjVrtM2J/Untitled-design-21.png'
              // src={mine}
              alt="mine"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
