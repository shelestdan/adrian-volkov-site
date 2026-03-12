"use client";

import { ElementType } from "react";
import { motion } from "framer-motion";
import { easing, viewport } from "@/lib/animations";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

type TextRevealProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  text: string;
};

export default function TextReveal({
  as: Tag = "div",
  className,
  delay = 0,
  text,
}: TextRevealProps) {
  const { isMounted, reducedMotion } = useSafeReducedMotion();
  const motionEnabled = isMounted && !reducedMotion;
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="inline"
        initial={motionEnabled ? "hidden" : false}
        whileInView={motionEnabled ? "show" : undefined}
        viewport={{ ...viewport, amount: 0.6 }}
        variants={
          motionEnabled
            ? {
                hidden: {},
                show: {
                  transition: {
                    delayChildren: delay,
                    staggerChildren: 0.045,
                  },
                },
              }
            : undefined
        }
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={`inline-block align-bottom ${
              index < words.length - 1 ? "mr-[0.22em]" : ""
            }`}
          >
            <motion.span
              className="inline-block"
              variants={
                motionEnabled
                  ? {
                      hidden: { opacity: 1, y: "0.18em" },
                      show: {
                        opacity: 1,
                        y: "0em",
                        transition: {
                          duration: 0.72,
                          ease: easing,
                        },
                      },
                    }
                  : undefined
              }
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
