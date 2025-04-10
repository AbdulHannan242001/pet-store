"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerButton from "../Buttons/HamburgerButton";
import logo from "../../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const navVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    hide: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  const linkVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hide: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden h-[100vh]">
      <motion.div
        variants={navVariants}
        initial="hide"
        animate={active ? "show" : "hide"}
        className={`h-[100vh] w-full absolute bg-primary top-0 left-0 z-[50] flex flex-col items-start justify-center  
                            ${
                              active
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                            }`}
      >
        {[
          { name: "Home", link: "/" },
          { name: "About Us", link: "/about" },
          { name: "Contact", link: "/contact" },
        ].map((item) => (
          <motion.h1
            key={item.name}
            variants={linkVariants}
            className="text-white text-3xl md:text-5xl font-bold max-w-[1600px] px-[10px] lg:px-[30px] w-full mx-auto cursor-pointer"
          >
            <motion.button
              className="p-[10px]"
              whileHover={{ scale: 1.1, rotateZ: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.button>
          </motion.h1>
        ))}
      </motion.div>

      {/* Navbar */}
      <div className="w-full sticky top-0 z-[100] backdrop-blur-[8px] pt-0 pb-1">
        <div className="max-w-[1600px] flex flex-row justify-between mx-auto items-center px-[10px] lg:px-[30px]">
          <div className="flex flex-row items-end justify-center gap-x-2">
            <Image
              src={logo}
              alt="Logo"
              className="md:h-[60px] h-[40px] border-[2px] rounded border-secondary w-auto object-center object-cover"
            />
            <p
              className={`leading-none text-lg lg:text-2xl font-bold transition-colors ease-in duration-100 delay-500 ${
                active ? "text-white" : "text-primary"
              }`}
            >
              Pet <br /> Paradise
            </p>
          </div>
          {/* Hamburger Button */}
          <div onClick={handleClick} className="">
            <HamburgerButton active={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
