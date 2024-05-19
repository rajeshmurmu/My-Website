import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function () {
  return (
    <div>
      {/* <!-- ############################## Hero-container ##################################### --> */}
      <div className="hero-container">
        <div className="flex justify-center w-full items-center h-[500px] md:h-[900px] relative z-10 bg-gradient-to-r bg-cover bg-no-repeat bg-center before:bg-cover from-violet-500 to-purple-500 before:bg-[url(/about/man.png)] before:content[''] before:absolute before:bottom-0 before:left-0 before:w-[314px] before:h-[300px] xl:before:w-[724px] xl:before:h-[724px] before:-z-10">
          <div className="w-full h-full text-center flex justify-center items-center">
            <div>
              <h1 className="text-2xl md:hidden text-white z-50 font-black">
                Hello This Is Rajeshson
              </h1>
              <h1 className="hidden md:block text-7xl text-white z-50 font-black">
                Hello This Is Rajeshson
              </h1>
              <h3 className="text-base md:text-5xl font-medium relative text-white before:content[''] before:absolute md:before:w-14 before:h-[2px] md:before:h-1 before:left-[40px] md:before:left-36 before:w-8 py-5 before:top-1/2 before:bg-white">
                Web Developer
              </h3>
            </div>
          </div>
          <div className="grid-dots hidden absolute bottom-0 right-36">
            <img src="/about/grid.png" alt="" />
          </div>
          <div className="hero-social-links hidden md:flex flex-col items-center justify-center gap-3 z-20 absolute top-1/2 right-20 -translate-y-1/2 text-2xl">
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r text-2xl from-violet-500 to-purple-500"
              href="https://www.facebook.com/rajeshsonmurmur"
              target="_blank"
            >
              {/* <i className="fa-brands fa-facebook"></i> */}
              <FaFacebook size={20} />
            </a>
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r from-violet-500 to-purple-500"
              href="https://www.instagram.com/rajeshsonmurmu/"
              target="_blank"
            >
              {/* <i className="fa-brands fa-instagram"></i> */}
              <FaInstagram size={20} />
            </a>
            <a
              className="flex justify-center items-center p-3 text-white border-gray-400 border-solid border-2 rounded hover:bg-gradient-to-r from-violet-500 to-purple-500"
              href="https://twitter.com/RajeshsonMurmur"
              target="_blank"
            >
              {/* <i className="fa-brands fa-twitter"></i> */}
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- End Hero-container --> */}
    </div>
  );
}
