"use client";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import ParticlesBackground from "./ParticlesBackground";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";



export default function Hero({
  entered,
}: {
  entered: boolean;
}) {

  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
  if (entered) {
    videoRef.current?.play();
  }
}, [entered]);
  
useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".hero-welcome", {
    opacity: 0,
    y: 50,
    duration: 1,
  })

  .from(".hero-letter", {
  opacity: 0,
  y: 120,
  stagger: 0.5,
  duration: 0.5
})

    .from(".hero-subtitle", {
      opacity: 0,
      y: 40,
      duration: 1,
    })

    .from(".hero-description", {
      opacity: 0,
      y: 40,
      duration: 1,
    })

    .from(".hero-buttons", {
      opacity: 0,
      y: 40,
      duration: 0.8,
    })

},{ scope: heroRef }); 

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen pt-24 lg:pt-0  pb-20
lg:pb-0 bg-black text-white flex items-center overflow-hidden">
       <ParticlesBackground />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/20 blur-[200px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid
grid-cols-1
lg:grid-cols-2
gap-10
lg:gap-16
items-center">

       <motion.div className="text-center lg:text-left"
>
          <motion.p
  className="hero-welcome text-red-500 tracking-[6px] uppercase mb-4"
>
            Welcome To My Portfolio
          </motion.p>

          
            <h1
  className="
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
font-bold
leading-none
"
>
  {"ARJUN ROY".split("").map((letter, index) => (
    <span
      key={index}
      className="
hero-letter
inline-block
text-white
"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h1>
          

          <motion.h2 className="hero-subtitle">
            Computer Science Engineer • Software Developer • AI Enthusiast
          </motion.h2>

          <motion.p
  className="hero-description text-zinc-500 max-w-xl mb-8"
>
            Building software solutions that combine functionality,
            performance, and modern user experiences.
          </motion.p>

          <motion.div
  className="
hero-buttons
flex
flex-col
sm:flex-row
gap-4
mt-6
justify-center
lg:justify-start
"
>
            <a href="#projects">
  <MagneticButton className="bg-red-600 px-6 py-3 rounded-xl">
    View Projects
  </MagneticButton>
</a>

            <a href="#contact">
  <MagneticButton className="border border-zinc-700 px-6 py-3 rounded-xl">
    Contact Me
  </MagneticButton>
</a>
          </motion.div>
        </motion.div>

        <motion.div

  className="hero-image relative flex justify-center"
>
          <div className="absolute w-[300px] h-[300px] bg-red-600/10 blur-[180px] rounded-full -z-10"></div>

          
 <video
  ref={videoRef}
  src="/videos/avatar-intro.mp4"
  playsInline
  controls={false}
  className="
  w-full
max-w-[350px]
sm:max-w-[450px]
lg:max-w-[500px]
rounded-3xl
    rounded-3xl
    border
    border-zinc-800
    object-cover
  "
>
</video>
            </motion.div>
        

      </div>
    </section>
  );
}