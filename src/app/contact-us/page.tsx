import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <main id="contact" className="w-full h-auto md:h-[755px] bg-transparent">
        <div className="d-content-container w-4/5 h-3/5 m-auto flex justify-center items-center">
          <div className="d-content w-full h-auto flex justify-center items-center gap-10 flex-col text-center p-5 text-white">
            <h1 className="text-xl xl:text-6xl font-extrabold">
              Let's discuss for a project
            </h1>
            <p className="text-base xl:text-xl">
              Got a new project in mind? Let's start conversation! by clicking
              'Start Talking' button. During this session we will discuss about
              a project that is in your mind, And we can build project Together
              To enhance Our Skill. If you are interested click button below.
            </p>

            <button className="py-2 px-5 bg-[#2F80ED] rounded font-normal border-2 border-solid border-transparent hover:bg-transparent transition-all duration-500 hover:border-2 hover:border-solid hover:border-[#2F80ED]">
              <a href="tel:8603804266" target="_blank">
                Start Talking
              </a>
            </button>
          </div>
        </div>

        <div className="footer-links w-4/5 h-1/5 m-auto flex justify-between items-center py-10">
          <div className="footer-nav-links w-full h-full flex justify-center items-center md:block">
            <ul className="flex items-center gap-8 h-full md:gap-12 text-white text-base md:text-lg">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="social-links hidden  md:flex items-center gap-12 text-2xl ">
            <a
              className="border-2 border-solid border-gray-500 text-white hover:text-black rounded duration-500 hover:bg-[#2F80ED] h-10 w-10 text-center flex justify-center items-center"
              href="https://www.facebook.com/rajeshsonmurmur"
              target="_blank"
            >
              {/* <i className="fa-brands fa-facebook"></i> */}
              <FaFacebook />
            </a>
            <a
              className="border-2 border-solid border-gray-500 text-white hover:text-black rounded duration-500 hover:bg-[#2F80ED] h-10 w-10 text-center flex justify-center items-center"
              href="https://www.instagram.com/rajeshsonmurmu/"
              target="_blank"
            >
              {/* <i className="fa-brands fa-instagram"></i> */}
              <FaInstagram />
            </a>
            <a
              className="border-2 border-solid border-gray-500 text-white hover:text-black rounded duration-500 hover:bg-[#2F80ED] h-10 w-10 text-center flex justify-center items-center"
              href="https://twitter.com/RajeshsonMurmur"
              target="_blank"
            >
              {/* <i className="fa-brands fa-twitter"></i> */}
              <FaXTwitter />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
