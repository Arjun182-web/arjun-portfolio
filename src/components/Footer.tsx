"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col items-center text-center gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              ARJUN
              <span className="text-red-500">.</span>
            </h2>

            <p className="text-zinc-500 mt-4 max-w-md">
              Building software solutions that combine
              functionality, performance, and modern user experiences.
            </p>
          </div>

          <div className="flex justify-center gap-8 mt-6 text-2xl">
  <a
    href="https://github.com/Arjun182-web"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-500 transition text-white"
  >
    <FaGithub />
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-500 transition text-white"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:arjunroy2355@gmail.com"
    className="hover:text-red-500 transition text-white"
  >
    <FaEnvelope />
  </a>
</div>

        </div>

        <div className="mt-10 pt-6 border-t border-zinc-900 text-center text-zinc-600 text-sm">

          © {new Date().getFullYear()} Arjun Roy.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}