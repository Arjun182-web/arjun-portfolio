"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";



export default function Home() {

  const [entered, setEntered] = useState(false);
  const [heroKey, setHeroKey] = useState(0);

  return (
    <>
    {!entered && (
  <Loader
    onEnter={() => {
      setEntered(true);
    }}
  />
)}
      <Navbar setHeroKey={setHeroKey} />
      <PageTransition />
      <Hero
  key={heroKey}
  entered={entered}
/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}