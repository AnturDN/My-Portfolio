import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 18,
    },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_088pk2t",
        "template_lfvxztr",
        form.current,
        "Cu80uOvW3eyxqGIO2"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-fuchsia-600/25 blur-3xl rounded-full" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-lg w-full mx-auto"
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_#d946ef]">
            Get In Touch
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Have a project? Let's build something together.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 text-center"
          variants={container}
        >
          {[
            { type: "text", name: "user_name", placeholder: "Your name" },
            { type: "email", name: "user_email", placeholder: "Your email" },
            { type: "text", name: "user_subject", placeholder: "Subject" },
          ].map((field) => (
            <motion.input
              key={field.name}
              variants={item}
              {...field}
              required
              className="w-full px-6 py-4 bg-white/5 border border-fuchsia-500/40 rounded-xl text-white placeholder-gray-400 focus:border-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20 backdrop-blur-xl"
            />
          ))}

          <motion.textarea
            variants={item}
            rows="6"
            name="message"
            placeholder="Your message"
            required
            className="w-full px-6 py-4 bg-white/5 border border-fuchsia-500/40 rounded-xl text-white placeholder-gray-400 focus:border-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20 backdrop-blur-xl"
          />

          <motion.button
            variants={item}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-14 py-4 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-xl hover:shadow-fuchsia-500/40 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.p
          variants={item}
          className="text-center text-gray-400 mt-10"
        >
          Or email me directly:{" "}
          <a
            href="mailto:anturdebnath.dev@gmail.com"
            className="text-fuchsia-400 hover:underline"
          >
            anturdebnath.dev@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
