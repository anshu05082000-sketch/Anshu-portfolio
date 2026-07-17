"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold mt-2">
            Anshu Kumari
          </h1>

          <h2 className="text-3xl mt-4 font-semibold text-blue-400">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "WordPress Developer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
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

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-400">2+</h3>
              <p className="text-slate-400">Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-400">8+</h3>
              <p className="text-slate-400">Technologies</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-400">Available</h3>
              <p className="text-slate-400">For Freelance</p>
            </div>

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
            src="/profile.jpeg"
            alt="Anshu Kumari"
            width={360}
            height={360}
            loading="eager"
            priority
            className="rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

