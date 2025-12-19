import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";

const cards = [
  {
    icon: <MdCodeOff />,
    title: "Development",
    desc: "I can build clean, scalable, and modern web applications using React.js, Tailwind CSS, Laravel APIs, and the MERN stack.",
  },
  {
    icon: <FaPaintbrush />,
    title: "Design",
    desc: "I can create simple and responsive user interfaces using Tailwind CSS and Framer Motion to give smooth user experiences.",
  },
  {
    icon: <FaBolt />,
    title: "Performance",
    desc: "I focus on fast-loading apps by reducing re-renders, optimizing APIs, and writing efficient code.",
  },
];

// Parent container variant
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // cards appear one after another
      delayChildren: 0.2,
    },
  },
};

// Each card variant
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="px-4 sm:px-6 py-24 bg-black/40 min-h-screen flex items-center justify-center"
    >
      <section className="w-full max-w-6xl mx-auto">

        {/* Heading */}
        <motion.span
          className="block text-center text-3xl sm:text-4xl font-bold text-fuchsia-500 drop-shadow-[0_0_10px_#d946ef] mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.span>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.08 }}
              className="p-8 rounded-3xl backdrop-blur-xl bg-gray-900/40 border border-fuchsia-500 shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all flex flex-col items-center text-center"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="w-20 h-20 mb-6 flex items-center justify-center rounded-full border-2 border-fuchsia-500 text-fuchsia-300 text-4xl shadow-[0_0_20px_rgba(255,0,255,0.5)]"
              >
                {card.icon}
              </motion.div>

              <h2 className="text-2xl font-bold text-fuchsia-400 mb-3">
                {card.title}
              </h2>

              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
