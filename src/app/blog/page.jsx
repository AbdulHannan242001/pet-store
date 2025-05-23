"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../lib/blogPost";
import OverlapButton from "@/components/Buttons/OverlapButton";

const Blog = () => {
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
      id="blog"
      className="py-[60px] bg-background max-w-[1600px] mx-auto px-[10px] md:px-[30px]"
    >
      <div ref={containerRef} className="relative min-h-[80vh]">
        <Image
          src=""
          alt="A group of pet animals"
          className="w-full h-full object-cover object-center"
        />
        <div className="flex flex-col items-center justify-center absolute inset-0 h-full w-full bg-black/20">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-primary text-center mb-8 "
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            Pet Paradise <span className="text-secondary">Blog</span>
          </motion.h1>
          <motion.p
            className="text-lg text-zinc-600 text-center mb-12 max-w-2xl mx-auto"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1.5}
          >
            Stay updated with pet care tips, store news, and fun stories from
            our community!
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[60px]">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2 + index * 0.2}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-secondary uppercase mb-2">
                {post.date}
              </p>
              <h2 className="text-xl font-semibold text-primary mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <OverlapButton text="Read More" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex justify-center mt-12"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={3}
      >
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

export default Blog;
