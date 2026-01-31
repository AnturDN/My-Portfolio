import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectInfo = [
  {
    img: "/inventory.png",
    title: "Inventory Management",
    desc: "Automated Inventory Management system with real-time tracking and insights.",
    tech: ["React", "Laravel","Framer Motion","Tailwind CSS", "OpenAI"],
    live: "#",
    github: "#",
  },
  {
    img: "/erp.webp",
    title: "ERP System",
    desc: "ERP system for managing inventory, finance, users, and operations in one platform.",
    tech: ["React","Tailwind CSS","Framer Motion","Laravel", "Grok"],
    live: "#",
    github: "#",
  },
  {
    img: "/ecom.png",
    title: "Ecommerce Website",
    desc: "E-commerce website for online product browsing, cart management, and order processing.",
    tech: ["React", "Tailwind CSS","Framer Motion", "Grok"],
    live: "#",
    github: "#",
  },
  {
    img: "/portfolio.png",
    title: "Portfolio Website",
    desc: "Personal portfolio website showcasing projects, skills, and professional experience.",
    tech: ["React", "Tailwind CSS","Framer Motion", "Vanta.JS"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 flex flex-col justify-center items-center bg-purple-900/10 backdrop-blur-sm min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-fuchsia-500 drop-shadow-[0_0_10px_#d946ef]">
          Projects
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Here are some of my highlighted works.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
        {ProjectInfo.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
  
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-fuchsia-500 shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all"
            whileHover={{ y: -20 }}
            style={{ transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)" }}
          >
            <div className="absolute  inset-0 bg-linear-to-br from-fuchsia-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="overflow-hidden">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="relative p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 rounded-full border border-fuchsia-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                   whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 12px #d946ef, 0 0 20px #d946ef",
                  }}
                  className="text-fuchsia-400 font-medium text-sm flex items-center gap-1 hover:text-fuchsia-300 transition-colors duration-300"
                >
                  GitHub →
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                   whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 12px #d946ef, 0 0 20px #d946ef",
                  }}
                  className="text-fuchsia-400 font-medium text-sm flex items-center gap-1 hover:text-fuchsia-300 transition-colors duration-300"
                >
                  Live →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
