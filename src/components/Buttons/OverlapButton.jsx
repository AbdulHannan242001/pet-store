'use client';

import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const OverlapButton = ({text, onClick}) => {
  const divVariants = {
    initial: {
      scale: 0,
      y: "100%",
      originY: 1,
    },
    hover: {
      scale: 2.5,
      y: 0,
      originY: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <main className="">
      <motion.button
        className="hover:text-white relative z-0 flex items-center cursor-pointer gap-2 overflow-hidden whitespace-nowrap rounded-md border border-secondary px-5 py-3 text-secondary"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{scale: 1}}
        onClick={() => {onClick()}}
      >
        <motion.div
          className="absolute inset-0 z-10 rounded-[100%] bg-secondary"
          variants={divVariants}
        />
        <p className="relative z-20">{text}</p>
        <span className="relative z-20">
          <TbArrowRight />
        </span>
      </motion.button>
    </main>
  );
};

export default OverlapButton;
