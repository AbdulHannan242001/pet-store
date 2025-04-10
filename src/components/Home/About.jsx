"use client";

import React from "react";
import OverlapButton from "../Buttons/OverlapButton";
import Image from "next/image";

import pets from "../../../public/pets.png";

const About = () => {
  return (
    <main className="px-[30px] flex bg-primary my-[60px] text-background">
      <section className="flex flex-row justify-between max-w-[1600px] w-full mx-auto py-[60px]">
        <div className="w-5/12 flex flex-col">
          <p className="text-5xl font-bold pb-[30px]">
            More Than a Pet Store —We’re a{" "}
            <span className="text-secondary">Family</span> for Pet Lovers!
          </p>
          <p className="pb-[20px] max-w-xl">
            At <span className="text-secondary">Pet Paradise</span>, we don’t
            just sell pets — we welcome you into a community that truly cares.
            Our journey began with a simple mission: to give animals the love,
            care, and comfort they deserve, and to help pet parents find
            everything they need under one roof.
          </p>
          <p className="pb-[30px] max-w-xl">
            From playful pups and chirpy birds to adorable hamsters and curious
            cats, every animal here is raised with care and compassion. Whether
            you're looking for a new best friend or the perfect accessory for
            your furry companion — we're here to help, guide, and grow with you.
          </p>
        </div>
        <div className="w-6/12">
          <Image
            src={pets}
            alt="dog getting a bath"
            className="w-full h-full object-fit border-2 border-secondary rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
