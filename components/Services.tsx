"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaWordpress,
  FaMobileAlt,
  FaBug,
  FaShoppingCart,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: FaLaptopCode,
    description:
      "Modern, responsive and fast websites using React.js & Next.js.",
  },
  {
    title: "WordPress Development",
    icon: FaWordpress,
    description:
      "Business websites, portfolios and blog websites with WordPress.",
  },
  {
    title: "Responsive Design",
    icon: FaMobileAlt,
    description:
      "Websites optimized for Mobile, Tablet and Desktop.",
  },
  {
    title: "Bug Fixing",
    icon: FaBug,
    description:
      "Fix HTML, CSS, JavaScript and React issues quickly.",
  },
  {
    title: "E-Commerce Website",
    icon: FaShoppingCart,
    description:
      "Modern online stores with clean UI and smooth experience.",
  },
  {
    title: "Website Redesign",
    icon: FaPaintBrush,
    description:
      "Convert old websites into modern and attractive designs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          My Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <Icon className="text-5xl text-blue-400 mb-5" />

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-7">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}