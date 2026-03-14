"use client";

import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { proofItems } from "@/lib/site-content";

export default function Testimonials() {
  const [featuredItem, ...secondaryItems] = proofItems;

  return (
    <section id="results" className="scene">
      <div className="shell-inner space-y-[var(--golden-gap-tight)] xl:space-y-[var(--golden-gap)]">
        <div className="golden-grid xl:items-stretch">
          <div className="golden-minor min-w-0 space-y-8">
            <SectionHeading
              eyebrow="Results"
              title="Results that stay visible when the score tightens."
              description="Proof matters more than promises. The measure is simple: cleaner mechanics, calmer decisions, and changes that survive real match tempo."
              titleClassName="max-w-lg text-[clamp(2.7rem,5.3vw,4.9rem)]"
              descriptionClassName="max-w-md"
            />
          </div>

          <Reveal delay={0.08} className="golden-major min-w-0">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group editorial-panel relative h-full overflow-hidden p-5 sm:p-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8"
            >
              <div className="min-w-0 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="media-chip">{featuredItem.label}</span>
                  <span className="meta-label text-[#CCCCCC]">{featuredItem.value}</span>
                </div>
                <p className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.045em] text-white">
                  &quot;{featuredItem.quote}&quot;
                </p>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC]">
                    {featuredItem.author}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#888888]">
                    {featuredItem.detail}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="meta-label text-[#888888]">{featuredItem.media.meta}</p>
                <span className="section-note text-[#888888]">
                  Featured testimonial
                </span>
              </div>

              <div className="pointer-events-none absolute right-5 top-5 hidden rounded-full border border-white/8 px-4 py-2 lg:block">
                <span className="font-display text-[1.35rem] leading-none tracking-[-0.04em] text-white/70">
                  {featuredItem.value}
                </span>
              </div>
            </motion.article>
          </Reveal>
        </div>

        <div className="golden-grid xl:items-stretch">
          <Reveal delay={0.12} className="golden-minor min-w-0 h-full">
            <div className="editorial-panel h-full p-4 sm:p-5">
              <MediaFrame
                asset={featuredItem.media}
                className="h-full min-h-[22rem] aspect-[16/11] sm:aspect-[5/6] xl:aspect-auto xl:min-h-[27rem]"
                sizes="(min-width: 1280px) 34vw, 100vw"
                parallax={12}
                showCaption={false}
              />
            </div>
          </Reveal>

          <div className="golden-major min-w-0 grid gap-4">
            {secondaryItems.map((item, index) => (
              <Reveal key={item.author} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="group editorial-panel relative overflow-hidden p-5 sm:p-6"
                >
                  <div className="min-w-0 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="media-chip">{item.label}</span>
                      <span className="meta-label text-[#CCCCCC]">{item.value}</span>
                    </div>
                    <p className="font-display text-[1.55rem] leading-[1.18] tracking-[-0.045em] text-white sm:text-[1.85rem]">
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
                      Player feedback
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
      </div>
    </section>
  );
}
