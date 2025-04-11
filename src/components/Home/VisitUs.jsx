"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Image from "next/image";
import storefront from "../../../public/storefront.jpg";
import OverlapButton from "../Buttons/OverlapButton";

const VisitUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.3 },
    }),
  };

  return (
    <section id="visit-us" ref={containerRef} className="bg-background py-[60px]">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Column: Storefront Image */}
        <div className="w-full lg:w-6/12 p-[10px] md:p-[30px]">
          <motion.div
            initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
            animate={{
              boxShadow: isInView
                ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
                : "0px 0px 0px rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded overflow-clip"
          >
            <Image
              src={storefront}
              alt="Pet Paradise storefront"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column: Location and Contact Info */}
        <div className="w-full lg:w-6/12 p-4 md:p-8 flex flex-col justify-center items-start">
          <motion.h2
            className="text-3xl md:text-5xl text-primary font-bold tracking-tighter mb-4"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            Visit <span className="text-secondary">Pet Paradise</span> Today!
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 mb-6 max-w-lg"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1.5}
          >
            Come meet our adorable pets and explore our wide range of
            accessories!
          </motion.p>

          {/* Address and Contact Info */}
          <motion.div
            className="space-y-4"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary" size={20} />
              <p className="text-primary text-base">
                456 Pawsome Avenue, Furrytown, CA 90210, USA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-secondary" size={20} />
              <p className="text-primary text-base">(555) 987-6543</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-secondary" size={20} />
              <p className="text-primary text-base">hello@petparadise.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-secondary" size={20} />
              <p className="text-primary text-base">
                Mon-Sat: 9 AM – 7 PM, Sun: 10 AM – 5 PM
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-row gap-4 mt-8"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2.5}
          >
            <a
              href="https://www.google.com/maps/place/90210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OverlapButton text="Get Directions" onClick={() => {}} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
