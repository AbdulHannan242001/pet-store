"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import OverlapButton from "../../components/Buttons/OverlapButton";
// import pets from "../../public/pets.png";
// import customer1 from "../../public/customer1.jpg";
// import customer2 from "../../public/customer2.jpg";
// import customer3 from "../../public/customer3.jpg";
// import team1 from "../../public/team1.jpg";
// import team2 from "../../public/team2.jpg";

const About = () => {
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.3 },
    }),
  };

  const testimonials = [
    {
      name: "Sarah M.",
      quote: "The grooming service at Pet Paradise is top-notch! My poodle, Max, always comes out looking and feeling great.",
      image: '',
    },
    {
      name: "James T.",
      quote: "I found the perfect collar for my dog, Buddy, and the staff was so helpful in recommending the right fit!",
      image: '',
    },
    {
      name: "Emily R.",
      quote: "The daycare service is a lifesaver. My kitten, Luna, loves playing there, and I trust the team completely.",
      image: '',
    },
  ];

  const team = [
    {
      name: "Dr. Lisa Paws",
      role: "Veterinarian",
      bio: "Dr. Lisa ensures every pet gets top-notch health checkups with a caring touch.",
      image: '',
    },
    {
      name: "Mike Tails",
      role: "Groomer & Trainer",
      bio: "Mike’s expertise in grooming and training makes every pet look and behave their best.",
      image: '',
    },
  ];

  return (
    <main id="about" className="py-[60px] bg-background max-w-[1600px] mx-auto px-[10px] md:px-[30px]">
      {/* About Section */}
      <section ref={aboutRef} className="flex flex-col lg:flex-row justify-between mb-[60px] min-h-[80vh] items-center">
        <motion.div
          className="w-full lg:w-5/12 flex flex-col"
          variants={textVariant}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          custom={1}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-primary pb-[30px]">
            More Than a Pet Store — We’re a <span className="text-secondary">Family</span> for Pet Lovers!
          </h1>
          <p className="pb-[20px] max-w-xl text-gray-600">
            At <span className="text-secondary">Pet Paradise</span>, we don’t just sell pets — we welcome you into a community that truly cares. Our journey began with a simple mission: to give animals the love, care, and comfort they deserve, and to help pet parents find everything they need under one roof.
          </p>
          <p className="pb-[30px] max-w-xl text-gray-600">
            From playful pups and chirpy birds to adorable hamsters and curious cats, every animal here is raised with care and compassion. Whether you’re looking for a new best friend or the perfect accessory for your furry companion — we’re here to help, guide, and grow with you.
          </p>
        </motion.div>
        <motion.div
          className="w-full lg:w-6/12 mt-6 lg:mt-0"
          variants={textVariant}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          custom={1.5}
        >
          <Image
            src={''}
            alt="Pets at Pet Paradise"
            className="w-full h-[400px] object-cover border-2 border-secondary rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="mb-[60px]">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary text-center mb-8"
          variants={textVariant}
          initial="hidden"
          animate={isTestimonialsInView ? "visible" : "hidden"}
          custom={1}
        >
          What Our <span className="text-secondary">Pet Parents</span> Say
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-600 text-center mb-12 max-w-2xl mx-auto"
          variants={textVariant}
          initial="hidden"
          animate={isTestimonialsInView ? "visible" : "hidden"}
          custom={1.5}
        >
          Hear from our happy customers who love the care and products at Pet Paradise!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              variants={textVariant}
              initial="hidden"
              animate={isTestimonialsInView ? "visible" : "hidden"}
              custom={2 + index * 0.2}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-secondary"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="mb-[60px]">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary text-center mb-8"
          variants={textVariant}
          initial="hidden"
          animate={isTeamInView ? "visible" : "hidden"}
          custom={1}
        >
          Meet Our <span className="text-secondary">Pawsome</span> Team
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-600 text-center mb-12 max-w-2xl mx-auto"
          variants={textVariant}
          initial="hidden"
          animate={isTeamInView ? "visible" : "hidden"}
          custom={1.5}
        >
          Our dedicated team at Pet Paradise is passionate about pets and ready to help you!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              variants={textVariant}
              initial="hidden"
              animate={isTeamInView ? "visible" : "hidden"}
              custom={2 + index * 0.2}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-secondary"
              />
              <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-secondary mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary mb-8"
          variants={textVariant}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          custom={1}
        >
          Join the <span className="text-secondary">Pet Paradise</span> Family!
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto"
          variants={textVariant}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          custom={1.5}
        >
          Visit us today to meet our adorable pets, explore our products, or book a service. Let’s make your pet’s life pawsome!
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          variants={textVariant}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          custom={2}
        >
          <a href="https://www.google.com/maps/place/90210" target="_blank" rel="noopener noreferrer">
            <OverlapButton text="Get Directions" onClick={() => {}} />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default About;