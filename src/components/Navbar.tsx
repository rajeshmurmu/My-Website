"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const { data: session } = useSession();
  console.log(
    "This data is using for development to get session in production it will be deleted",
    session
  );

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
        className={` bg-black h-[80px] md:h-[70px] z-50 w-full flex justify-center items-center sticky left-0 top-0 ${
          fixedNavbar ? "md:bg-[#43147bed]" : ""
        }`}
      >
        <div
          id="nav-bar"
          className="flex text-white px-4 justify-between md:px-4 w-full xl:px-5 xl:w-4/5 m-auto items-center"
        >
          <div className="logo">
            <h1 className="text-lg font-black">
              <Link className="md:text-4xl" href="#">
                {"{ Rajeshson }"}
              </Link>
            </h1>
          </div>

          {/* Small Device / Mobile Menu */}

          <div className="hamburger lg:hidden relative">
            {/* <i id="hamburger" className="fa fa-bars text-2xl"></i> */}
            <GiHamburgerMenu
              size={20}
              onClick={handleMobileMenu}
              onBlur={() => {
                setTimeout(() => {
                  setShowMenu(false);
                }, 300);
              }}
            />
            <div
              id="menu"
              className={`absolute top-12 w-[150px] ${
                showMenu ? "" : "translate-x-full hidden"
              } ease-linear duration-500 right-[-20px] bg-black lg:hidden`}
            >
              <ul className="">
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <Link href="/">Home</Link>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <Link href="/about">About</Link>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <Link href="/services">Servies</Link>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <Link href="blogs">Blog</Link>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <Link href="/#projects">Projects</Link>
                </li>
                <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bigger Device Menu */}

          <div className="nav-links hidden lg:block">
            <ul className="flex items-center">
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <Link href="/about">About</Link>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <Link href="services">Servies</Link>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <Link href="blogs">Blog</Link>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="mx-5 my-1 relative py-1 after:absolute after:left-0 after:transition-[width] after:duration-500 after:bottom-0 after:content-[''] after:h-1 after:w-0 after:bg-fuchsia-500 hover:after:w-full">
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-contact-btn hidden lg:block lg:flex justify-center items-center gap-x-2">
            <Link href={"https://wa.me/8603804266"} target="_blank">
              {/* <button className="py-2 px-5 rounded bg-fuchsia-500 hover:bg-fuchsia-600">
                Contact Me
              </button> */}
            </Link>
            {session ? (
              <button
                onClick={() => signOut()}
                className="py-2 px-5 rounded bg-fuchsia-500 hover:bg-fuchsia-600"
              >
                Logout
              </button>
            ) : (
              <Link href={"/login"}>
                <button className="py-2 px-5 rounded bg-fuchsia-500 hover:bg-fuchsia-600">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* <!-- End navbar --> */}
    </>
  );
}
