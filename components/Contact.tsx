"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <span>anshu05082000@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-400 text-2xl" />
              <span>+91-8882015472</span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-400 text-2xl" />
              <a
                href="https://github.com/anshu05082000-sketch"
                target="_blank"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-400 text-2xl" />
              <a
                href="https://linkedin.com/in/anshu-sharma-3526a5339"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

          </div>

          {/* Right */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            />

            <textarea
              rows={6}
              placeholder="Message"
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            />

            <button
              className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}