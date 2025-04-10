'use client';

import React from "react";
import OverlapButton from "../Buttons/OverlapButton";
import banner from "../../../public/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[70vh] px-[30px] flex items-center justify-between relative max-w-[1600px] mx-auto">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 z-10">
        <Image
          src={banner}
          alt="A group of pet animals"
          className="w-auto h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-1/2">
        <p className="text-base font-extrabold text-secondary uppercase pb-1">
          Your neighborhood pet haven!
        </p>
        <p className="text-5xl font-bold max-w-md pb-3">
          Find Your New <span className="text-secondary"> Best Friend </span>{" "}
          Today!
        </p>
        <p className="max-w-lg pb-3">
          Whether you're looking for a playful pup, a cuddly kitten, or the
          perfect gear to pamper your pet — we’ve got it all under one roof.
          Come meet your next companion in person!
        </p>
        <OverlapButton text={"Visit Our Store"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default Banner;
