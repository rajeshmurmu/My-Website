import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function () {
  return (
    <div>
      {/* <!-- ############################## Hero-container ##################################### --> */}
      <div className="hero-container">
        <div className="flex justify-center w-full items-center h-[400px] lg:h-[900pxx] relative">
          <div className="w-full h-full text-center flex justify-center items-center">
            <div>
              <h1 className="text-2xl md:text-4xl lg:hidden text-white z-50 font-black">
                Hello This Is Rajeshson
              </h1>
              <h1 className="hidden lg:block text-7xl text-white z-50 font-black">
                Hello This Is Rajeshson
              </h1>
              <h3 className="text-base md:text-5xl font-medium relative text-white before:content[''] before:absolute md:before:w-14 before:h-[2px] lg:before:h-1 before:left-[40px] md:before:-left-8 lg:before:left-40 before:w-8 py-5 before:top-1/2 before:bg-white">
                Web Developer
              </h3>
            </div>
          </div>
          <div className="grid-dots hidden absolute bottom-0 right-36">
            <img src="/about/grid.png" alt="" />
          </div>
          {/* social links */}
          {/* <div className="hero-social-links hidden md:flex flex-col items-center justify-center gap-3 z-20 absolute top-1/2 right-20 -translate-y-1/2 text-2xl">
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r text-2xl from-violet-500 to-purple-500"
              href="https://www.linkedin.com/in/rajeshsonmurmu/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r from-violet-500 to-purple-500"
              href="https://www.instagram.com/rajeshsonmurmu/"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r from-violet-500 to-purple-500"
              href="https://twitter.com/RajeshsonMurmur"
              target="_blank"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r from-violet-500 to-purple-500"
              href="https://wa.me/08603804266"
              target="_blank"
            >
              <FaWhatsapp size={20} />
            </a>
          </div> */}
        </div>
        {/* </div> */}
      </div>

      {/* <!-- End Hero-container --> */}
    </div>
  );
}
