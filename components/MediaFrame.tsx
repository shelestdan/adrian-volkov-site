"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MediaAsset } from "@/lib/site-content";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

type MediaFrameProps = {
  asset: MediaAsset;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  parallax?: number;
  showCaption?: boolean;
  bare?: boolean;
};

const cropPositions: Record<MediaAsset["cropIntent"], string> = {
  "negative-space-left": "72% center",
  "negative-space-right": "28% center",
  "centered-athlete": "50% center",
  "detail-close": "50% 52%",
  "wide-environment": "50% center",
};

export default function MediaFrame({
  asset,
  className = "",
  imageClassName = "",
  sizes = "100vw",
  parallax = 0,
  showCaption = true,
  bare = false,
}: MediaFrameProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const { isMounted, reducedMotion } = useSafeReducedMotion();
  const motionEnabled = isMounted && !reducedMotion;
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, parallax * -1]);
  const treatmentClass =
    asset.treatment === "monochrome-strong"
      ? "grayscale contrast-[1.08] brightness-[0.92]"
      : asset.treatment === "monochrome-soft"
        ? "grayscale contrast-[1.02] brightness-[0.97]"
        : "";
  const transformClass = asset.mirror ? "-scale-x-100" : "";
  const objectPositionStyle = asset.objectPositionClassName
    ? undefined
    : { objectPosition: asset.objectPosition ?? cropPositions[asset.cropIntent] };

  return (
    <motion.div
      ref={frameRef}
      className={`${bare ? "relative isolate overflow-hidden" : "media-frame"} ${className}`}
      initial={
        motionEnabled
          ? { opacity: 1, scale: 0.992, y: 12 }
          : false
      }
      whileInView={
        motionEnabled
          ? { opacity: 1, scale: 1, y: 0 }
          : undefined
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        style={motionEnabled && parallax !== 0 ? { y } : undefined}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={asset.priority}
          loading={asset.priority ? "eager" : undefined}
          sizes={sizes}
          className={`object-cover ${transformClass} ${treatmentClass} ${asset.objectPositionClassName ?? ""} ${imageClassName}`}
          style={objectPositionStyle}
        />
      </motion.div>
      {showCaption ? (
        <div className="media-caption">
          <div className="space-y-2">
            <p className="meta-label text-[#CCCCCC]">{asset.caption}</p>
            <p className="max-w-xs text-sm leading-6 text-white/84">{asset.alt}</p>
          </div>
          <span className="media-chip">{asset.meta}</span>
        </div>
      ) : null}
    </motion.div>
  );
}
