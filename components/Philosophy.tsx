"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import { storyFrames } from "@/lib/site-content";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const methodFrames = storyFrames.slice(1);

export default function Philosophy() {
  const { reducedMotion } = useSafeReducedMotion();
  const [activeId, setActiveId] = useState(methodFrames[0].id);

  return (
    <section id="method" className="scene">
      <div className="shell-inner grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="min-w-0 space-y-8 lg:story-sticky lg:pr-8">
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

          {!reducedMotion ? (
            <div className="relative hidden aspect-[4/5] lg:block">
              {methodFrames.map((frame) => (
                <motion.div
                  key={frame.id}
                  animate={
                    frame.id === activeId
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0.24, scale: 0.96, y: 18 }
                  }
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <MediaFrame
                    asset={frame.media}
                    className="h-full"
                    sizes="(min-width: 1024px) 34vw, 0px"
                    parallax={10}
                  />
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="min-w-0 space-y-10 lg:space-y-12">
          {methodFrames.map((frame, index) => (
            <motion.article
              key={frame.id}
              onViewportEnter={() => setActiveId(frame.id)}
              viewport={{ amount: 0.45 }}
              className={`story-surface ${reducedMotion ? "" : "story-card"} grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:p-9`}
            >
              <Reveal delay={index * 0.05} className="min-w-0 space-y-5 self-start">
                <p className="eyebrow">{frame.eyebrow}</p>
                <p className="meta-label text-[#CCCCCC]">{frame.kicker}</p>
                <h3 className="balance font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.94] tracking-[-0.06em] text-white">
                  {frame.title}
                </h3>
                <p className="text-[1rem] leading-8 text-[#CCCCCC] sm:text-[1.06rem]">
                  {frame.copy}
                </p>
              </Reveal>

              <Reveal delay={0.08} className="min-w-0 self-stretch lg:hidden">
                <MediaFrame
                  asset={frame.media}
                  className="aspect-[5/4] sm:aspect-[4/3]"
                  sizes="100vw"
                  parallax={0}
                />
              </Reveal>

              <Reveal delay={0.1} className="hidden min-w-0 self-stretch lg:block">
                <MediaFrame
                  asset={frame.media}
                  className="aspect-[4/5] w-full lg:min-h-[24rem] xl:aspect-[5/6]"
                  sizes="(min-width: 1024px) 26vw, 0px"
                  parallax={6}
                />
              </Reveal>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
