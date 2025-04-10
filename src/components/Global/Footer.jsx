import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background text-primary">
      {/* Top Section: Logo, Tagline, and Newsletter */}
      <main className="bg-background border-b border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center p-[30px] max-w-[1600px] mx-auto">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Link href="/" className="flex items-end gap-2">
            <Image src={logo} alt="Pet Paradise Logo" className="border-2 border-secondary rounded p-1" width={50} height={50} />
            <span className="text-2xl leading-none font-bold text-secondary">
              Pet <br /> Paradise
            </span>
          </Link>
          <p className="mt-2 italic text-sm text-gray-600 flex items-center gap-1">
            <span className="text-secondary">🐾</span>
            All the Love Your Pet Needs
            <span className="text-secondary">🐾</span>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full md:w-auto max-w-md text-center md:text-left">
          <h3 className="text-lg font-bold text-secondary mb-2">
            Join Our Pet-Loving Community!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get updates on new pets, deals, and pet care tips.
          </p>
          <form className="flex gap-2 mb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="p-2 bg-secondary text-white rounded-md text-sm hover:bg-secondary/90 transition-colors "
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

      {/* Middle Section: Navigation, Services, and Contact */}
      <main className="bg-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between p-[30px]">
          {/* Quick Links */}
          <div className="flex-1 min-w-[200px] mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-base font-bold text-secondary mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pets"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Featured Pets
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[200px] mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-base font-bold text-secondary mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/grooming"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Grooming & Spa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/training"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Training Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/health"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Health Checkups
                </Link>
              </li>
              <li>
                <Link
                  href="/services/daycare"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Pet Daycare
                </Link>
              </li>
              <li>
                <Link
                  href="/services/diets"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  Custom Pet Diets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-base font-bold text-secondary mb-4">
              Visit Us
            </h3>
            <p className="text-sm text-primary mb-2">
              123 Pet Lane, Petville, CA 90210
            </p>
            <p className="text-sm text-primary mb-2">Phone: (555) 123-4567</p>
            <p className="text-sm text-primary mb-2">
              Email: info@petparadise.com
            </p>
            <p className="text-sm text-primary mb-2">Mon-Sat, 9 AM – 6 PM</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-red-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Section: Social Media and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center px-[30px] py-[10px] bg-background max-w-[1600px] mx-auto">
        {/* Social Media */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-sm font-bold text-secondary)] mb-2">
            Follow Us for Pet Fun!
          </h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-primary)] hover:text-secondary)] transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-primary)] hover:text-secondary)] transition-colors"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              className="text-primary)] hover:text-secondary)] transition-colors"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
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
