"use client";

import { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { easing, viewport } from "@/lib/animations";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

type RevealProps = PropsWithChildren<
  HTMLMotionProps<"div"> & {
    delay?: number;
    amount?: number;
    distance?: number;
  }
>;

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  distance = 36,
  transition,
  ...rest
}: RevealProps) {
  const { isMounted, reducedMotion } = useSafeReducedMotion();
  const motionEnabled = isMounted && !reducedMotion;
  const restingDistance = Math.min(distance, 18);

  return (
    <motion.div
      className={className}
      initial={
        motionEnabled ? { opacity: 1, y: restingDistance } : false
      }
      whileInView={
        motionEnabled ? { opacity: 1, y: 0 } : undefined
      }
      viewport={{ ...viewport, amount }}
      transition={{
        duration: 0.72,
        ease: easing,
        delay,
        ...transition,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
