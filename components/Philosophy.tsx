"use client";

import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import { storyFrames } from "@/lib/site-content";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const methodFrames = storyFrames.slice(1);
const methodNotes = [
  "Stroke correction / repeatable cue",
  "Footwork control / early balance",
  "Live points / pressure transfer",
];
const methodPrinciples = [
  {
    label: "Observe",
    value: "Strip the motion back to one cue the player can own immediately.",
  },
  {
    label: "Refine",
    value: "Tighten spacing, timing, and footwork before asking for more speed.",
  },
  {
    label: "Transfer",
    value: "Raise the pressure only after the correction survives live tempo.",
  },
];

export default function Philosophy() {
  const { reducedMotion } = useSafeReducedMotion();

  return (
    <section id="method" className="scene">
      <div className="shell-inner golden-grid">
        <div className="golden-minor min-w-0 space-y-8 lg:story-sticky lg:pr-8">
          <Reveal>
            <p className="eyebrow">Method</p>
          </Reveal>
          <div className="space-y-4">
            <TextReveal
              as="p"
              text="Technique builds confidence."
              className="balance font-display text-[clamp(2.8rem,5.4vw,5.4rem)] leading-[0.92] tracking-[-0.075em] text-white"
            />
            <TextReveal
              as="p"
              delay={0.08}
              text="Confidence wins matches."
              className="balance font-display text-[clamp(2.8rem,5.4vw,5.4rem)] leading-[0.92] tracking-[-0.075em] text-[#CCCCCC]"
            />
          </div>
          <Reveal delay={0.1} className="max-w-xl">
            <p className="text-[1rem] leading-8 text-[#CCCCCC] sm:text-[1.08rem]">
              The work is simple in principle and demanding in execution: clean
              the movement, sharpen the contact, then make the change survive
              under live point pressure.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="editorial-panel space-y-4 p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {methodPrinciples.map((item) => (
                  <div key={item.label} className="info-card p-4 sm:p-5">
                    <p className="meta-label">{item.label}</p>
                    <p className="mt-3 text-[0.98rem] leading-7 text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="meta-label text-[#CCCCCC]">
                  Build quiet mechanics. Keep the cue. Raise the pace late.
                </p>
                <span className="section-note text-[#888888]">
                  Session structure / on-court progression
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="golden-major min-w-0 space-y-[var(--golden-gap)]">
          {methodFrames.map((frame, index) => (
            <motion.article
              key={frame.id}
              whileHover={reducedMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`story-surface golden-panel ${reducedMotion ? "" : "story-card"} gap-6 p-6 sm:p-8 xl:p-9`}
            >
              <Reveal
                delay={index * 0.05}
                className={`golden-panel-copy min-w-0 space-y-5 self-start ${index % 2 === 0 ? "order-1" : "order-2"}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="media-chip">{frame.eyebrow}</span>
                  <span className="meta-label text-[#CCCCCC]">0{index + 1} / 03</span>
                </div>
                <p className="meta-label text-[#CCCCCC]">{frame.kicker}</p>
                <h3 className="balance font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.94] tracking-[-0.06em] text-white">
                  {frame.title}
                </h3>
                <p className="text-[1rem] leading-8 text-[#CCCCCC] sm:text-[1.06rem]">
                  {frame.copy}
                </p>
                <p className="section-note border-t border-white/8 pt-4 text-[#888888]">
                  {methodNotes[index]}
                </p>
              </Reveal>

              <Reveal
                delay={0.08}
                className={`golden-panel-media min-w-0 self-stretch ${index % 2 === 0 ? "order-2" : "order-1"} lg:hidden`}
              >
                <MediaFrame
                  asset={frame.media}
                  className="aspect-[5/4] sm:aspect-[4/3]"
                  sizes="100vw"
                  parallax={0}
                  showCaption={false}
                />
              </Reveal>

              <Reveal
                delay={0.1}
                className={`golden-panel-media hidden min-w-0 self-stretch lg:block ${index % 2 === 0 ? "order-2" : "order-1"}`}
              >
                <MediaFrame
                  asset={frame.media}
                  className="aspect-[4/5] w-full lg:min-h-[24rem] xl:aspect-[5/6]"
                  sizes="(min-width: 1024px) 26vw, 0px"
                  parallax={6}
                  showCaption={false}
                />
              </Reveal>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
