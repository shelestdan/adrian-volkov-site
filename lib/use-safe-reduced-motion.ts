"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

export function useSafeReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  return {
    isMounted: mounted,
    reducedMotion: mounted ? prefersReducedMotion : false,
  };
}
