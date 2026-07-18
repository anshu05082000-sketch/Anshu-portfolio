"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Face Recognition Attendance System",
    image: "/projects/face-recognition.png",
    description:
      "Attendance system using Face Recognition with React, Flask and OpenCV.",
    tech: ["React", "Next.js", "Flask", "Python"],
    github: "https://github.com/anshu05082000-sketch",
    live: "#",
  },
  {
    title: "My-Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Portfolio  using HTML, CSS, React, next.js, tailwind.css, and JavaScript.",
    tech: ["HTML", "CSS", "Next.js", "Flask", "React", "JavaScript"],
    github: "https://github.com/anshu05082000-sketch/Anshu-portfolio",
    live: "https://anshu-portfolio-3bx8.vercel.app/",
  },
  {
    title: "Food Website",
    image: "/projects/food-website.png",
    description:
      "Responsive food ordering website with modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshu05082000-sketch/Food-website",
    live: "#",
  },
];



export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}