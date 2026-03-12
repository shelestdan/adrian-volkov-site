"use client";

import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { proofItems } from "@/lib/site-content";

export default function Testimonials() {
  return (
    <section id="results" className="scene">
      <div className="shell-inner grid gap-12 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
        <div className="min-w-0 space-y-8">
          <SectionHeading
            eyebrow="Results"
            title="Results that stay visible when the score tightens."
            description="Proof matters more than promises. The measure is simple: cleaner mechanics, calmer decisions, and changes that survive real match tempo."
            titleClassName="max-w-lg text-[clamp(2.7rem,5.3vw,4.9rem)]"
            descriptionClassName="max-w-md"
          />
          <Reveal delay={0.12}>
            <div className="editorial-panel p-4 sm:p-5">
              <MediaFrame
                asset={proofItems[0].media}
                className="aspect-[16/11] sm:aspect-[5/6] xl:aspect-[4/5]"
                sizes="(min-width: 1280px) 34vw, 100vw"
                parallax={12}
              />
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 grid gap-4">
          {proofItems.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`group editorial-panel relative overflow-hidden p-5 sm:p-6 ${
                  index === 0
                    ? "lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8"
                    : ""
                }`}
              >
                <div className="min-w-0 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="media-chip">{item.label}</span>
                    <span className="meta-label text-[#CCCCCC]">{item.value}</span>
                  </div>
                  <p
                    className={`font-display tracking-[-0.045em] text-white ${
                      index === 0
                        ? "text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08]"
                        : "text-[1.55rem] leading-[1.18] sm:text-[1.85rem]"
                    }`}
                  >
                    &quot;{item.quote}&quot;
                  </p>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC]">
                      {item.author}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#888888]">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="meta-label text-[#888888]">{item.media.meta}</p>
                  <span className="section-note text-[#888888]">
                    {index === 0 ? "Featured testimonial" : "Player feedback"}
                  </span>
                </div>

                <div className="pointer-events-none absolute right-5 top-5 hidden rounded-full border border-white/8 px-4 py-2 lg:block">
                  <span className="font-display text-[1.35rem] leading-none tracking-[-0.04em] text-white/70">
                    {item.value}
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
