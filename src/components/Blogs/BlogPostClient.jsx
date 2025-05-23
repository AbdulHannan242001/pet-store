"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import OverlapButton from "../Buttons/OverlapButton";
import Link from "next/link";

const BlogPostClient = ({ post }) => {
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
    <main
      id="blog-post"
      className="py-[60px] bg-background max-w-[1600px] mx-auto px-[10px] md:px-[30px]"
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-primary text-center mb-4 pt-[60px]"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
      >
        {post.title}
      </motion.h1>
      <motion.p
        className="text-sm text-secondary uppercase text-center mb-8"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1.5}
      >
        {post.date}
      </motion.p>
      <motion.div
        ref={containerRef}
        className="mb-8"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={2}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </motion.div>
      <div className="prose max-w-3xl mx-auto">{post.content}</div>
      <motion.div
        className="flex justify-center gap-4 mt-12"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={3}
      >
        {" "}
        <a
          href="https://www.google.com/maps/place/90210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <OverlapButton text="Get Directions" onClick={() => {}} />
        </a>
      </motion.div>
    </main>
  );
};

export default BlogPostClient;
