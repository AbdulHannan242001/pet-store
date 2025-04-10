"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbPawFilled } from "react-icons/tb";
import OverlapButton from "../Buttons/OverlapButton";
import service from "../../../public/service.jpg";
import Image from "next/image";

const Services = () => {
  // Ref for the animation container
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.3 },
    }),
  };

  return (
    <main className="flex items-center max-w-[1600px] mx-auto">
      <div
        ref={containerRef}
        className="flex flex-col-reverse md:flex-row w-full"
      >
        <div className="p-[10px] md:p-[30px] h-fit w-full md:w-6/12 flex items-center justify-between">
          <div className="w-full md:w-10/12 h-[400px] relative rounded overflow-clip">
            <Image
              src={service}
              alt="dog getting a bath"
              className="w-full h-full object-cover"
              initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              animate={{
                boxShadow: isInView
                  ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 0px 0px rgba(0, 0, 0, 0)",
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.div
              className="w-full h-[400px] bg-background absolute top-0 z-50"
              initial={{ height: "400px" }}
              animate={{ height: isInView ? "0px" : "400px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="w-full md:w-6/12 h-fit flex flex-col justify-center items-start p-[10px] md:p-[30px] ">
          <motion.span
            className="text-secondary text-sm font-semibold uppercase"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            Services
          </motion.span>
          <motion.p
            className=" text-xl md:text-5xl text-primary font-bold tracking-tighter pb-[20px]"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2.5}
          >
            Pamper Your Pet with Our <span className="text-secondary">Pawsome</span> Services!
          </motion.p>
          <ul className="">
            <motion.li
              className="text-base md:text-xl flex flex-row gap-4 items-center text-zinc-600 font-semibold max-w-lg tracking-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2.75}
            >
              <TbPawFilled className="text-secondary" size={24} />
              <p>Grooming & Spa</p>
            </motion.li>
            <motion.li
              className="text-base md:text-xl flex flex-row gap-4 items-center text-zinc-600 font-semibold max-w-lg tracking-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3.0}
            >
              <TbPawFilled className="text-secondary" size={24} />
              <p>Pet Daycare</p>
            </motion.li>
            <motion.li
              className="text-base md:text-xl flex flex-row gap-4 items-center text-zinc-600 font-semibold max-w-lg tracking-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3.25}
            >
              <TbPawFilled className="text-secondary" size={24} />
              <p>Health Checkups</p>
            </motion.li>
          </ul>
          <motion.div
            className="flex flex-row gap-4 pt-[40px]"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3.5}
          >
            <OverlapButton text={"Learn More"} onClick={() => {}} />
            <OverlapButton text={"Book Now"} onClick={() => {}} />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Services;
