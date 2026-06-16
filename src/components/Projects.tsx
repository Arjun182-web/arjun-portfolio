"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Synthetic DNA Data Storage Encoder & Decoder",
      image: "/projects/dna.png",
      description:
        "A desktop application that simulates storing digital information using synthetic DNA encoding techniques with compression and encryption.",
      tech: "Python • Flask • DNA Encoding • Encryption",
      github:
        "https://github.com/Arjun182-web/Synthetic-DNA-Data-Storage-Encoder-Decoder",
      live:
        "https://github.com/Arjun182-web/Synthetic-DNA-Data-Storage-Encoder-Decoder/releases/tag/v1.0",
    },

    {
      title: "Graphic Designer Portfolio Website",
      image: "/projects/designer.png",
      description:
        "A responsive portfolio website developed for a graphic designer with modern UI and user experience.",
      tech: "HTML • CSS • JavaScript",
      github:
        "https://github.com/Arjun182-web/graphic-designer-website",
      live:
        "https://graphic-designer-website-eight.vercel.app",
    },

    {
      title: "NextGen Internship Website",
      image: "/projects/nextgen.png",
      description:
        "A modern internship and career-focused website designed to provide internship opportunities and career development resources.",
      tech: "Next.js • Tailwind • React",
      github:
        "https://github.com/Arjun182-web/nextgen-internship",
      live:
        "https://nextgen-internship.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-red-500 uppercase tracking-[4px] mb-4">
          Projects
        </p>

        <h2 className="text-6xl font-bold mb-16">
          Featured Work.
        </h2>

        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                border border-zinc-800
                rounded-3xl
                overflow-hidden
                bg-zinc-950/40
                backdrop-blur-sm
                hover:border-red-500
                transition-all
                duration-500
              "
            >
              <div className="grid lg:grid-cols-2">

                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={600}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition-all
                      duration-700
                    "
                  />
                </div>

                <div className="p-10 flex flex-col justify-center">

                  <span className="text-red-500 text-sm mb-3">
                    Project {index + 1}
                  </span>

                  <h3 className="text-4xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    {project.description}
                  </p>

                  <p className="text-red-500 mb-8">
                    {project.tech}
                  </p>

                  <div className="flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        flex items-center gap-2
                        px-5 py-3
                        rounded-xl
                        border border-zinc-700
                        hover:border-red-500
                      "
                    >
                      GitHub
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      className="
                        flex items-center gap-2
                        px-5 py-3
                        rounded-xl
                        bg-red-600
                        hover:bg-red-700
                      "
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}