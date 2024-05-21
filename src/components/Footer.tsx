import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#001D38] border-t-2 border-gray-500 border-solid">
        <div className="footer-bottom w-full md:w-4/5 h-auto md:h-1/6 m-auto text-white ">
          <p className="text-xs text-center md:text-base py-8">
            Copyright &copy;2023 All rights reseved | rajeshsonmurmu
          </p>
        </div>
      </footer>
      {/* <!-- End footer --> */}
    </div>
  );
}
