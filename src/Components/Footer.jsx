import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { icon: <FaWhatsapp />, url:"https://wa.me/8801770125058"},
  ];


  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <motion.footer
      {...fadeUp}
      viewport={{ once: true }}
      className="bg-gray-900/60 text-gray-300 py-8 border-t border-fuchsia-500 shadow-[0_0_20px_rgba(255,0,255,0.3)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6 text-center md:text-left">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl font-semibold"
        >
          Made by 
          <span className="text-fuchsia-500 font-bold ml-2">Antur DebNath</span>
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            },
          }}
          className="flex gap-6"
        >
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl md:text-3xl text-fuchsia-400 hover:text-fuchsia-300 drop-shadow-lg hover:drop-shadow-[0_0_20px_rgba(217,70,239,0.5)] transition-all duration-200"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Antur — All Rights Reserved
        </motion.p>

      </div>
    </motion.footer>
  );
};

export default Footer;

