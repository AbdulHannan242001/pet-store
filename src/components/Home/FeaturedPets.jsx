"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

import beagle from "../../../public/Pets/beagle.jpg";
import bettaFish from "../../../public/Pets/bettaFish.jpg";
import hamster from "../../../public/Pets/hamster.jpg";
import lovebird from "../../../public/Pets/lovebird.jpg";
import persianCat from "../../../public/Pets/persianCat.jpg";
import Image from "next/image";

const FeaturedPets = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => swiperRef.current?.swiper?.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.swiper?.autoplay.start();

  // Text animation variants
  const parentVariants = {
    hidden: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        staggerChildren: 0.3,
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const imageArray = [
    {
      media: beagle,
      shortTitle: "Bella",
      heading: "Beagle – Playful Companion",
      description:
        "Bella is a 6-month-old Beagle who loves to play fetch and cuddle. She’s great with kids and ready to join your family!",
    },
    {
      media: persianCat,
      shortTitle: "Luna",
      heading: "Persian Cat – Elegant Beauty",
      description:
        "Luna is a 1-year-old Persian with a fluffy coat and a calm demeanor. She enjoys lounging in sunny spots and being pampered.",
    },
    {
      media: bettaFish,
      shortTitle: "Bubbles",
      heading: "Betta Fish – Vibrant Swimmer",
      description:
        "Bubbles is a stunning blue Betta fish with flowing fins. He’s low-maintenance and perfect for adding color to your home!",
    },
    {
      media: lovebird,
      shortTitle: "Kiwi",
      heading: "Lovebird Parrot – Chatty Friend",
      description:
        "Kiwi is a 9-month-old Lovebird who loves to chirp and mimic sounds. He’s social and thrives on interaction!",
    },
    {
      media: hamster,
      shortTitle: "Coco",
      heading: "Dwarf Hamster – Tiny Explorer",
      description:
        "Coco is a curious Dwarf Hamster who enjoys running on his wheel and burrowing. He’s perfect for small pet lovers!",
    },
  ];

  return (
    <main className="py-[60px] flex flex-col gap-[30px] max-w-[1600px] mx-auto">
      <p className="text-center mx-auto text-5xl font-bold">Featured Pets</p>
      <section className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Text Section */}
        <main className="md:w-4/12 flex flex-col justify-center h-full px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={parentVariants}
              initial="hidden"
              animate="animate"
              exit="exit"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-black text-secondary leading-none pb-1"
              >
                {imageArray[currentSlide].shortTitle}
              </motion.h3>
              <motion.h1
                variants={childVariants}
                className="text-4xl font-semibold text-primary pb-3"
              >
                {imageArray[currentSlide].heading}
              </motion.h1>
              <motion.p
                variants={childVariants}
                className="text-lg text-gray-600"
              >
                {imageArray[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Swiper Section */}
        <main className="w-full md:w-7/12 h-full flex flex-col justify-center">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
                1300: { slidesPerView: 2 },
              }}
              loop={true}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              ref={swiperRef}
            >
              {imageArray.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${
                      index === currentSlide
                        ? "w-full md:w-[400px] h-auto md:h-[530px] shadow-lg"
                        : "mt-[25px] shadow"
                    } bg-white w-full h-auto md:w-[380px] md:h-[480px] object-cover rounded-md`}
                  >
                    <Image
                                        src={data.media}
                                        alt={data.shortTitle}
                                        className='w-full h-full cursor-grab hover:scale-105 transition-all ease-in rounded-md'
                                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </section>
    </main>
  );
};

export default FeaturedPets;
