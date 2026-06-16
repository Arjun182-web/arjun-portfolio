"use client";

import { motion } from "framer-motion";

export default function Loader({
  onEnter,
}: {
  onEnter: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="
        fixed
        inset-0
        bg-black
        z-[9999]
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          ARJUN ROY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-4 text-zinc-400"
        >
          Software Developer

        </motion.p>
        <button
  onClick={onEnter}
  className="
    mt-10
    px-8
    py-3
    bg-red-600
    text-white
    rounded-xl
    hover:bg-red-700
    transition-all
  "
>
  ENTER PORTFOLIO
</button>
        <motion.div
  initial={{ width: 0 }}
  animate={{ width: "250px" }}
  transition={{
    duration: 2,
    ease: "easeInOut",
  }}
  className="
    h-[3px]
    bg-red-500
    mt-8
    mx-auto
    rounded-full
  "
/>

      </div>
    </motion.div>
  );
}