"use client";

import { motion } from "framer-motion";
import {
  FaBolt,
  FaMobileAlt,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    title: "Fast Performance",
    description: "Optimized websites with fast loading speed.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Perfect experience on Mobile, Tablet and Desktop.",
  },
  {
    icon: FaSearch,
    title: "SEO Friendly",
    description: "Clean code and SEO optimized pages.",
  },
  {
    icon: FaHandshake,
    title: "Reliable Support",
    description: "Quick communication and timely delivery.",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Hire Me?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-700"
              >
                <Icon className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}