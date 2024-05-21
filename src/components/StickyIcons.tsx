import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function StickyIcons() {
  return (
    <>
      <div className="social-links sticky bottom-24 right-2 flex-col items-center text-2xl ">
        {/* <a
          className="border-2 border-solid border-gray-500 text-white hover:text-black rounded duration-500 hover:bg-[#2F80ED] h-10 w-10 text-center flex justify-center items-center"
          href="https://www.facebook.com/rajeshsonmurmur"
          target="_blank"
        >
          <FaFacebook />
        </a> */}
        <a
          className="border-2 border-solid border-gray-500 text-white hover:text-black rounded duration-500 hover:bg-[#2F80ED] h-10 w-10 text-center flex justify-center items-center"
          href="https://www.linkedin.com/in/rajeshsonmurmu/"
          target="_blank"
        >
          <FaLinkedin />
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
        <a
          className="border-2 border-solid border-gray-500 text-white hover:text-black rounded duration-500 hover:bg-[#2F80ED] h-10 w-10 text-center flex justify-center items-center"
          href="https://wa.me/08603804266"
          target="_blank"
        >
          {/* <i className="fa-brands fa-twitter"></i> */}
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
