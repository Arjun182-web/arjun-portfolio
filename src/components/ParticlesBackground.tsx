"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-0"
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 25,
          },

          color: {
            value: "#ef4444",
          },

          opacity: {
            value: 0.15,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.8,
          },

          links: {
            enable: true,
            color: "#ef4444",
            opacity: 0.08,
            distance: 150,
          },
        },
      }}
    />
  );
}