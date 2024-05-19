"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  //   const [currentPostion, setCurrentPosition] = useState();

  const onScroll = useCallback(() => {
    // const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    // setCurrentPosition(window.pageYOffset);

    if (window.scrollY >= 800) {
      setFixedNavbar(true);
      // console.log("test", window.scrollY);
    } else {
      setFixedNavbar(false);
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
        //    { passive: true }
      );
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* <!-- ############################## Navbar ##################################### --> */}
      <nav
        id="nav"
        className={` bg-black md:bg-[#43147bed] h-[80px] md:h-[70px] z-50 w-full flex justify-center items-center fixed left-0 top-0 ${
          fixedNavbar ? "md:bg-[#43147bed]" : "md:bg-transparent"
        }`}
      >
        <div
          id="nav-bar"
          className="flex text-white justify-between w-full px-5 md:w-4/5 m-auto items-center"
        >
          <div className="logo">
            <h1 className="text-lg font-black">
              <a className="md:text-4xl" href="#">
                {"{ Rajeshson }"}
              </a>
            </h1>
          </div>

          {/* Small Device / Mobile Menu */}

          <div className="hamburger md:hidden relative">
            {/* <i id="hamburger" className="fa fa-bars text-2xl"></i> */}
            <GiHamburgerMenu
              size={20}
              onClick={handleMobileMenu}
              onBlur={() => {
                setTimeout(() => {
                  setShowMenu(false);
                  console.log("Hii");
                }, 300);
              }}
            />
            <div
              id="menu"
              className={`absolute top-12 w-[150px] ${
                showMenu ? "" : "translate-x-full"
              } ease-linear duration-500 right-[-20px] bg-black md:hidden`}
            >
              <ul className="">
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <a href="/">Home</a>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <a href="/about">About</a>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <a href="/services">Servies</a>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <a href="blogs">Blog</a>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <a href="#projects">Projects</a>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bigger Device Menu */}

          <div className="nav-links hidden md:block">
            <ul className="flex items-center">
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <a href="/">Home</a>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <a href="/about">About</a>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <a href="services">Servies</a>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <a href="blogs">Blog</a>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <a href="#projects">Projects</a>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-contact-btn hidden md:block">
            <button className="py-2 px-5 rounded bg-fuchsia-500">
              <a href="https://wa.me/8603804266" target="_blank">
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* <!-- End navbar --> */}
    </>
  );
}
