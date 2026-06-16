"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavbarProps = {
  setHeroKey: React.Dispatch<React.SetStateAction<number>>;
};

export default function Navbar({ setHeroKey }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const handleTransition = (sectionId: string) => {
  setTransitioning(true);

  setTimeout(() => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 400);

  setTimeout(() => {
    setTransitioning(false);
  }, 1000);
};
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.3) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    threshold: [0.2, 0.3, 0.5, 0.7],
  }
);

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
  return (
    <>
      {transitioning && (
      <motion.div
      className="fixed inset-0 bg-red-600 z-[9999]"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    />
    )}

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/30 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <h1 className="font-bold text-xl">
          ARJUN<span className="text-red-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8">

  {navItems.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className="
        relative
        text-sm
        transition-colors
      "
    >
      <span
        className={
          activeSection === item.id
            ? "text-red-500"
            : "text-zinc-400 hover:text-white"
        }
      >
        {item.label}
      </span>

      {activeSection === item.id && (
        <motion.div
          layoutId="activeNav"
          className="
            absolute
            left-0
            -bottom-2
            h-[3px]
            rounded-full
            w-full
            bg-gradient-to-r
            from-red-400
            to-red-600
          "
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      )}

    </a>
  ))}

</div>

      </div>
    </nav>
    </>
  );
}