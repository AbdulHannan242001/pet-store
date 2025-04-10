"use client";

import React from "react";
import OverlapButton from "../Buttons/OverlapButton";
import banner from "../../../public/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[70vh] px-[10px] lg:px-[30px] flex flex-col md:flex-row items-center justify-between max-w-[1600px] mx-auto md:pt-[100px] gap-[30px]">
      <div className="flex flex-col items-start justify-start md:w-6/12">
        <p className="text-sm md:text-base font-extrabold text-secondary uppercase pb-1">
          Your neighborhood pet haven!
        </p>
        <p className="text-3xl md:text-5xl font-bold max-w-xs md:max-w-md pb-3">
          Find Your New <span className="text-secondary"> Best Friend </span>{" "}
          Today!
        </p>
        <p className="max-w-full md:max-w-lg pb-3">
          Whether you're looking for a playful pup, a cuddly kitten, or the
          perfect gear to pamper your pet — we’ve got it all under one roof.
          Come meet your next companion in person!
        </p>
        <OverlapButton text={"Visit Our Store"} onClick={() => {}} />
      </div>
      <div className="relative md:w-6/12 h-full">
        <Image
          src={banner}
          alt="A group of pet animals"
          className="w-auto h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Banner;
