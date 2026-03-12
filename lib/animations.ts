import { Variants } from "framer-motion";

export const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.2,
};

export function wordContainer(delay = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.06,
      },
    },
  };
}

export const wordReveal: Variants = {
  hidden: {
    y: "110%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.9,
      ease: easing,
    },
  },
};
