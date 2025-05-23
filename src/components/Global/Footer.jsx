"use client";

import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--primary)]">
      <main className="bg-[var(--background)] border-b border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center p-[30px] max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link href="/" className="flex items-end gap-2">
              <Image
                src={logo}
                alt="Pet Paradise Logo"
                className="border-2 border-[var(--secondary)] rounded p-1"
                width={50}
                height={50}
              />
              <span className="text-2xl leading-none font-['Poppins'] font-bold text-[var(--secondary)]">
                Pet <br /> Paradise
              </span>
            </Link>
            <p className="mt-2 italic text-sm text-gray-600 flex items-center gap-1">
              <span className="text-[var(--secondary)]">🐾</span>
              All the Love Your Pet Needs
              <span className="text-[var(--secondary)]">🐾</span>
            </p>
          </div>
          <div className="w-full md:w-auto max-w-md text-center md:text-left">
            <h3 className="text-lg font-['Poppins'] font-bold text-[var(--secondary)] mb-2">
              Join Our Pet-Loving Community!
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get updates on new pets, deals, and pet care tips.
            </p>
            <form className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="p-2 bg-[var(--secondary)] text-white rounded-md text-sm hover:bg-[var(--secondary)]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              Sign up for a free pet care guide!
            </p>
          </div>
        </div>
      </main>
      <main className="bg-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between p-[30px]">
          <div className="flex-1 min-w-[200px] mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-base font-['Poppins'] font-bold text-[var(--secondary)] mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/" },
                { name: "Services", to: "/#services" },
                { name: "About", to: "/about" },
                { name: "Blog", to: "/blog" },
                { name: "Find Us", to: "/#visit-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.to}
                    className="text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-base font-['Poppins'] font-bold text-[var(--secondary)] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">Grooming & Spa</li>
              <li className="text-sm">Training Classes</li>
              <li className="text-sm">Health Checkups</li>
              <li className="text-sm">Pet Daycare</li>
              <li className="text-sm">Custom Pet Diets</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-base font-['Poppins'] font-bold text-[var(--secondary)] mb-4">
              Visit Us
            </h3>
            <p className="text-sm text-[var(--primary)] mb-2">
              456 Pawsome Avenue, Furrytown, CA 90210, USA
            </p>
            <p className="text-sm text-[var(--primary)] mb-2">
              Phone: (555) 987-6543
            </p>
            <p className="text-sm text-[var(--primary)] mb-2">
              Email: hello@petparadise.com
            </p>
            <p className="text-sm text-[var(--primary)] mb-2">
              Mon-Sat: 9 AM – 7 PM, Sun: 10 AM – 5 PM
            </p>
            <a
              href="https://www.google.com/maps/place/90210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--secondary)] hover:text-red-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </main>
      <div className="flex flex-col md:flex-row justify-between items-center px-[30px] py-[10px] bg-[var(--background)] max-w-[1600px] mx-auto">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-sm font-['Poppins'] font-bold text-[var(--secondary)] mb-2">
            Follow Us for Pet Fun!
          </h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-500">
            © 2025 Pet Paradise. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;