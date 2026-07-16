"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Web Development Intern",
    company: "SyntecxHub",
    duration: "1 Month",
    icon: FaBriefcase,
    description:
      "Worked on Employee Management System and responsive web interfaces using HTML, CSS and JavaScript.",
  },
  {
    title: "Billing Executive",
    company: "Escorts Kubota",
    duration: "1.5 Years",
    icon: FaBriefcase,
    description:
      "Handled billing operations, documentation and data management while working in a professional team environment.",
  },
  {
    title: "B.Tech (Computer Science Engineering)",
    company: "J.C. Bose University of Science and Technology",
    duration: "Expected 2026",
    icon: FaGraduationCap,
    description:
      "Currently pursuing Final Year B.Tech with focus on Web Development and Software Engineering.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience & Education
        </h2>

        <div className="space-y-8">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-blue-400 mt-1">
                      {item.company}
                    </p>

                    <p className="text-sm text-slate-400 mb-3">
                      {item.duration}
                    </p>

                    <p className="text-slate-300 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}