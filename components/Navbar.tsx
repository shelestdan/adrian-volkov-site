"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/lib/site-content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-[var(--page-gutter)] pt-5">
      <div className="shell-inner">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="chrome-bar flex items-center justify-between gap-4 px-4 py-3 sm:px-5"
        >
          <a href="#top" className="font-display text-sm tracking-[0.32em] text-white sm:text-base">
            ADRIAN VOLKOV
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.72rem] uppercase tracking-[0.28em] text-[#CCCCCC] transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#booking" className="button-secondary px-4 py-3 text-[0.68rem]">
            Book Now
          </a>
        </motion.div>
      </div>
    </header>
  );
}
