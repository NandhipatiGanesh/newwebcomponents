"use client";
import React from "react";
import { motion } from "framer-motion";
import './super.css';
import Header from './super-header';

export default function SuperHero() {
  return (
    <section className="relative w-full h-screen p-4">
<section className="relative hero-gradient-overlay_wrapper  lg:rounded-xl md:rounded-2xl rounded-none sm:rounded-xl ">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bb48a044162cd47729a3f4_db7ba73d032ce61b4aac9e791ea29a83ed25cfdc.webp"
          className="w-full h-full object-cover"
        >
          <source
            src="https://superpower-website.b-cdn.net/superpower-100-year-potential-video-hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>
      <div className="w-full">  <Header /></div>
    
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock your new <br />
          health intelligence
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          100+ lab tests. Every year. Detect early signs of 1,000+ conditions. All
          for only <span className="font-semibold">$17/month</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/signup"
            className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Join Today
          </a>
          <span className="text-sm text-white/80">✔ HSA/FSA eligible</span>
        </motion.div>
      </div>
      <div>{""}</div>
    </section>
    </section>
    
  );
}
