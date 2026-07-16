"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 95 },
  { name: "CSS3", icon: FaCss3Alt, level: 90 },
  { name: "JavaScript", icon: FaJs, level: 88 },
  { name: "TypeScript", icon: SiTypescript, level: 80 },
  { name: "React.js", icon: FaReact, level: 90 },
  { name: "Next.js", icon: SiNextdotjs, level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
  { name: "WordPress", icon: FaWordpress, level: 85 },
  { name: "Git", icon: FaGitAlt, level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-3xl text-blue-400" />
                  <span className="text-lg font-semibold">
                    {skill.name}
                  </span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-blue-500 h-3 rounded-full"
                  />
                </div>

                <p className="text-right mt-2 text-sm">
                  {skill.level}%
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}