"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="text-slate-300 text-lg leading-9 mt-10 text-center max-w-4xl mx-auto"
        >
          I&apos;m Anshu Kumari, a Final Year B.Tech Computer Science student
          passionate about Frontend Development and WordPress.

          I build responsive, fast and modern websites using React.js,
          Next.js, JavaScript and WordPress.

          Currently, I&apos;m looking for Freelance Projects and Frontend
          Developer opportunities.
        </motion.p>

      </div>
    </section>
  );
}