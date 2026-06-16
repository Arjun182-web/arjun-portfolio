"use client";

import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      className="
      fixed
      inset-0
      bg-red-600
      z-[9999]
      pointer-events-none
      "
      initial={{
        scaleX: 0,
        transformOrigin: "left",
      }}
      animate={{
        scaleX: 0,
      }}
    />
  );
}