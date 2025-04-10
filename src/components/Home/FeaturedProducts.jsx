"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import castle from "../../../public/Products/castle.jpg";
import collar from "../../../public/Products/collar.jpg";
import parrotToy from "../../../public/Products/parrotToy.jpg";
import scratchingPost from "../../../public/Products/scratchingPost.jpg";
import Image from "next/image";

const FeaturedProducts = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const imageArray = [
    {
      img: collar,
      name: "Paws & Play Dog Collar",
      description:
        "A durable, adjustable collar with a fun paw print design, perfect for your playful pup.",
    },
    {
      img: scratchingPost,
      name: "Whisker Tower Scratching Post",
      description:
        "A tall, sturdy scratching post with a cozy perch for your cat to relax and play.",
    },
    {
      img: castle,
      name: "Aqua Castle Tank Decoration",
      description:
        "A colorful castle to brighten up your fish tank, giving your Betta a fun hideout.",
    },
    {
      img: parrotToy,
      name: "Feather Fiesta Parrot Toy",
      description:
        "A vibrant, chewable toy with bells to keep your parrot entertained for hours.",
    },
  ];

  return (
    <main className="py-[60px] flex flex-col gap-[30px] max-w-[1600px] mx-auto">
      <section className="flex flex-col justify-center">
        <div className="px-8">
          <div className="flex flex-row items-center justify-between mb-6">
            <h2 className="text-5xl font-bold">Featured Products</h2>
            <div className="flex flex-row gap-x-6">
              <span
                onClick={handlePrev}
                className="font-mono text-lg flex justify-center items-center border border-secondary text-secondary rounded-full size-[40px] hover:bg-secondary hover:text-white transition-all duration-200 ease-linear cursor-pointer"
              >
                <MdArrowBack />
              </span>
              <span
                onClick={handleNext}
                className="font-mono text-lg flex justify-center items-center border border-secondary text-secondary rounded-full size-[40px] hover:bg-secondary hover:text-white transition-all duration-200 ease-linear cursor-pointer"
              >
                <MdArrowForward />
              </span>
            </div>
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              ref={swiperRef}
            >
              {imageArray.length > 0 &&
                imageArray.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-primary relative cursor-grab w-[350px] h-[450px] rounded overflow-hidden">
                      <Image
                        src={data.img}
                        alt={index}
                        className="w-[350px] h-[450px] object-cover"
                      />
                      <div className="flex flex-col justify-end  absolute top-0 left-0 w-[350px] h-[450px] bg-gradient-to-t from-black/70 from-[10%] to-[40%] to-transparent">
                        <div className="px-2 py-4 space-y-2">
                          <h2 className="text-white text-2xl font-semibold max-w-[260px]">
                            {data.name}
                          </h2>
                          <p className="pr-10 text-white">{data.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturedProducts;
