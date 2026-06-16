"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "Flask",
    "Flutter",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "VS Code",
    "ChatGPT",
    "OpenAI Codex",
    "Data Structures",
    "Algorithms",
    "OOP",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <motion.div
  className="max-w-6xl mx-auto px-8 w-full"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

        <p className="text-red-500 uppercase tracking-[4px] mb-4">
          Skills
        </p>

        <h2 className="text-5xl font-bold mb-12">
          Technologies I work with.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
    key={skill}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.4,
      delay: index * 0.25,
    }}
              className="
                border border-zinc-800
                rounded-2xl
                p-6
                bg-zinc-950/40
                backdrop-blur-sm
                hover:border-red-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]
                transition-all
                duration-300
                cursor-pointer
                "
            >
            
                {skill}
            </motion.div>
        ))}
        </div>

      </motion.div>
    </section>
  );
}