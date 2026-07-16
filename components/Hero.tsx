"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold mt-2">
            Anshu Kumari
          </h1>

          <h2 className="text-2xl text-slate-300 mt-4">
            Frontend & WordPress Developer
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            I build modern, responsive and user-friendly websites
            using React.js, Next.js and WordPress.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-600 transition"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/anshu05082000-sketch"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/anshu-sharma-3526a5339"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Anshu Kumari"
            width={360}
            height={360}
            className="rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}