import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS / Tailwind", level: 88 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 78 },
  { name: "Laravel", level: 70 },
  { name: "MySQL", level: 65 },
  { name: "Database Design", level: 75 },
  { name: "Git & GitHub", level: 82 },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col justify-center items-center py-24 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_#d946ef]">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Technologies I work with daily</p>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-fuchsia-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-4 sm:w-190 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                  className="h-full bg-linear-to-r from-fuchsia-600 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;