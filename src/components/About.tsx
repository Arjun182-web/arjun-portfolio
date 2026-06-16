"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white pb-8 lg:pb-12 flex items-center"
    >
      <motion.div
        className="max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >

        <p className="text-red-500 uppercase tracking-[4px] mb-4">
          About Me
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Building software that solves real problems.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          I am Arjun Roy, a Computer Science and Engineering undergraduate passionate about software development, artificial intelligence, and modern web technologies. I enjoy transforming complex ideas into practical, real-world solutions through clean code, efficient system design, and user-focused development. My experience includes building desktop applications, web platforms, and innovative projects such as a Synthetic DNA Data Storage Encoder & Decoder that combines encryption, compression, and DNA encoding concepts. I work with technologies including Python, Java, JavaScript, Flask, Flutter, SQL, and modern development tools, while actively leveraging AI-assisted engineering workflows to enhance productivity and innovation. Beyond coding, I am passionate about creating intuitive user experiences, exploring emerging technologies, and continuously expanding my technical expertise. My goal is to build impactful software that solves meaningful problems and contributes to the future of technology.

        </p>

      </motion.div>
    </section>
  );
}