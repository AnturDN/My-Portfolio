import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/AnturDN" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/antur-deb-nath" },
  { icon: <FaXTwitter />, url: "https://x.com/AnturDebNath" },
  { icon: <FaWhatsapp />, url:"https://wa.me/8801770125058"},
];

const Home = () => (
  <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 gap-10 md:gap-20 min-h-screen text-center md:text-left pt-5 md:pt-0">
    <motion.div
      className="flex flex-col gap-4 backdrop-blur-xl p-6 sm:p-8 md:p-10 w-full md:w-1/2 text-white rounded-3xl border border-fuchsia-500 shadow-[0_0_20px_rgba(255,0,255,0.5)]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h4 className="font-bold text-3xl md:text-4xl">
        Hi, I'm{" "}
        <span className="font-serif text-transparent bg-clip-text bg-linear-to-r from-fuchsia-700 to-fuchsia-600">
          Antur Deb Nath
        </span>
      </h4>
      <span className="text-2xl md:text-3xl font-semibold">
        Creative Web Developer
      </span>
      <p className="text-base md:text-lg mt-2 text-gray-200">
        A frontend developer specializing in React.js and Laravel. I build
        responsive, user-friendly apps with clean code.
      </p>

      <a
        href="/Antur_Deb_Nath's_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-lg bg-fuchsia-900 px-6 py-3 rounded-3xl mt-4 inline-block text-center transition-shadow hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] duration-300"
      >
        My Resume
      </a>

      <div className="flex justify-center md:justify-start gap-6 mt-4">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl md:text-3xl text-fuchsia-400 drop-shadow-lg hover:drop-shadow-[0_0_25px_rgba(217,70,239,0.9)] transition-all duration-100"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="relative flex justify-center items-center mt-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="/profile.png"
        alt="Profile"
        className="rounded-full backdrop-blur-lg border border-fuchsia-500 shadow-[0_0_20px_rgba(255,0,255,0.5)] w-48 sm:w-60 md:w-72"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FF00FF" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      />
    </motion.div>
  </div>
);

export default Home;
