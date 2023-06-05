import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
function Navbar(props) {
  const navbarRef = useRef();

  const navbar = ["Home", "About", "Program", "Contact"];
  const [navbarShow, setNavbarShow] = useState(false);

  useEffect(() => {
    const elementHeight = navbarRef.current.offsetHeight;
    console.log(elementHeight);
    props.setHeightNavbar(elementHeight);
  }, []);

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className={` h-[103px] justify-between fixed text-base w-full px-6 bg-bgColor flex items-center z-[99] `}
    >
      <a href="#">
        <Image src="/assets/icon/logo.png" width={60} height={60} />
      </a>
      <div className="text-white  flex items-center gap-x-2">
        <button
          onClick={() => setNavbarShow(!navbarShow)}
          id="hamburger"
          name="hamburger"
          type="button"
          className="block absolute right-4 lg:hidden"
        >
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
        <nav
          className={`${
            navbarShow ? "block" : "hidden"
          } lg:block absolute lg:static top-full right-0 w-full lg:max-w-full max-w-[250px] bg-opacity-80 bg-bgColor lg:bg-opacity-0 lg:bg-inherit shadow-lg lg:shadow-none rounded-b-lg`}
        >
          <ul className=" lg:gap-x-24 capitalize flex flex-col lg:flex-row  gap-y-5">
            {navbar.map((item) => {
              return (
                <li
                  className="hover:text-color3 hover:cursor-pointer font-bold px-4 md:text-2xl py-2"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
