"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import HamburgerButton from "../Buttons/HamburgerButton";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  // Animation variants for the mobile dropdown menu
  const dropdownVariants = {
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hide: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  // Animation variants for the mobile menu links
  const linkVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full sticky top-0 z-[100] backdrop-blur-md shadow-md bg-[var(--primary)]">
      {/* Main Navbar */}
      <div className="max-w-[1600px] mx-auto flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-3">
        {/* Logo */}
        <div className="flex flex-row items-center gap-x-2 sm:gap-x-3">
          <Image
            src={logo}
            alt="Pet Paradise Logo"
            width={40}
            height={40}
            className="h-[25px] sm:h-[30px] md:h-[40px] w-auto border-2 border-[var(--secondary)] rounded-md object-cover"
          />
          <p className="text-base sm:text-lg md:text-xl font-['Poppins'] font-bold text-[var(--background)] leading-tight">
            Pet Paradise
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-row gap-3 sm:gap-4 md:gap-6 items-center">
          {[
            { name: "Home", to: "home" },
            { name: "Services", to: "services" },
            { name: "Visit Us", to: "visit-us" },
          ].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative group flex flex-row gap-1 items-center text-[var(--background)] text-sm sm:text-base md:text-lg font-['Poppins'] font-medium transition-colors cursor-pointer"
              >
                {item.name}
                <motion.span className="absolute right-0 top-[-50%] text-[var(--secondary)] group-hover:block hidden">
                  🐾
                </motion.span>
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="md:hidden" onClick={handleClick}>
          <HamburgerButton active={active} aria-label={active ? "Close menu" : "Open menu"} />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        variants={dropdownVariants}
        initial="hide"
        animate={active ? "show" : "hide"}
        className="md:hidden w-full bg-[var(--primary)] shadow-md overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col items-start px-4 sm:px-6 py-2">
          {[
            { name: "Home", to: "home" },
            { name: "Services", to: "services" },
            { name: "Visit Us", to: "visit-us" },
          ].map((item) => (
            <motion.div
              key={item.name}
              variants={linkVariants}
              className="py-2 w-full"
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setActive(false)}
                className="flex flex-row gap-2 items-center text-[var(--background)] text-base sm:text-lg font-['Poppins'] font-medium transition-colors cursor-pointer"
                tabIndex={active ? 0 : -1}
              >
                {item.name}
                <span className="text-[var(--secondary)]">🐾</span>
              </ScrollLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;