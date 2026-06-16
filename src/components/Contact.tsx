"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-8 w-full">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-red-500 uppercase tracking-[4px] mb-4">
            Contact
          </p>

          <h2 className="text-6xl font-bold mb-8">
            Let's Build Something Together.
          </h2>

          <p className="text-zinc-400 max-w-2xl mb-12">
            I'm currently seeking internship opportunities,
            freelance projects, and collaborations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <a
              href="mailto:arjunroy2355@gmail.com"
              className="
                border border-zinc-800
                rounded-3xl
                p-8
                hover:border-red-500
                transition-all
              "
            >
              <FaEnvelope className="mb-4 text-red-500 text-2xl" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-zinc-400">
                arjunroy2355@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Arjun182-web"
              target="_blank"
              className="
                border border-zinc-800
                rounded-3xl
                p-8
                hover:border-red-500
                transition-all
              "
            >
              <FaGithub className="mb-4 text-red-500 text-2xl" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-zinc-400">
                github.com/Arjun182-web
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-roy-13646732a"
              target="_blank"
              className="
                border border-zinc-800
                rounded-3xl
                p-8
                hover:border-red-500
                transition-all
              "
            >
              <FaLinkedin className="mb-4 text-red-500 text-2xl" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-zinc-400">
                Connect with me
              </p>
            </a>

            <a
                href="https://wa.me/917902759375?text=Hi%20Arjun,%20I%20saw%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="
                border border-zinc-800
                rounded-3xl
                p-8
                hover:border-red-500
                transition-all
                "
            >
            <FaWhatsapp className="mb-4 text-green-500 text-2xl" />

            <h3 className="font-semibold mb-2">
                WhatsApp
            </h3>

            <p className="text-zinc-400">
                +91 7902759375
            </p>
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}