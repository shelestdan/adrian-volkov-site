"use client";

import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { programCards } from "@/lib/site-content";

export default function Programs() {
  return (
    <section id="programs" className="scene">
      <div className="shell-inner grid gap-12 xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] xl:items-start">
        <div className="min-w-0 space-y-8 xl:pt-4">
          <SectionHeading
            eyebrow="Programs"
            title="Focused coaching blocks built for pressure."
            description="Each offer keeps the same standard: diagnose quickly, simplify mechanics, and build a training rhythm that still works under pressure."
            titleClassName="max-w-lg text-[clamp(2.6rem,5.2vw,4.8rem)]"
            descriptionClassName="max-w-md"
          />
          <Reveal delay={0.12} className="max-w-md">
            <p className="section-note leading-7 text-[#888888]">
              Photo-first program architecture. Clear hierarchy. Consistent
              motion language.
            </p>
          </Reveal>
        </div>

        <div className="grid min-w-0 gap-5 md:grid-cols-2 lg:gap-6">
          {programCards.map((program, index) => {
            const emphasisClass =
              program.emphasis === "wide"
                ? "md:col-span-2 min-h-[24rem] lg:min-h-[27rem]"
                : program.emphasis === "tall"
                  ? "min-h-[28rem] lg:min-h-[31rem]"
                  : "min-h-[22rem] lg:min-h-[24rem]";
            const layoutClass =
              program.emphasis === "wide"
                ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch"
                : "";
            const mediaWrapClass =
              program.emphasis === "wide"
                ? "order-1 lg:order-2"
                : "order-1";
            const copyWrapClass =
              program.emphasis === "wide"
                ? "order-2 lg:order-1"
                : "order-2";
            const mediaClass =
              program.emphasis === "wide"
                ? "aspect-[16/10] lg:h-full lg:min-h-[23rem]"
                : program.emphasis === "tall"
                  ? "aspect-[4/5]"
                  : program.media.orientation === "portrait"
                    ? "aspect-[5/6]"
                    : "aspect-[16/10]";

            return (
              <Reveal key={program.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`group editorial-panel relative overflow-hidden ${emphasisClass}`}
                >
                  <div className={`grid h-full min-w-0 gap-5 p-4 sm:p-5 lg:gap-6 lg:p-6 ${layoutClass}`}>
                    <div className={`${mediaWrapClass} min-w-0`}>
                      <MediaFrame
                        asset={program.media}
                        showCaption={false}
                        className={`${mediaClass} w-full`}
                        imageClassName="scale-[1.02] transition duration-700 group-hover:scale-[1.05]"
                        sizes="(min-width: 1280px) 42vw, (min-width: 768px) 50vw, 100vw"
                        parallax={program.emphasis === "tall" ? 10 : 6}
                      />
                    </div>

                    <div className={`flex min-w-0 h-full flex-col justify-between ${copyWrapClass}`}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="media-chip">{program.tag}</span>
                        <span className="meta-label text-[#CCCCCC]">0{index + 1}</span>
                      </div>

                      <div className="max-w-2xl min-w-0 space-y-4 py-4 lg:py-6">
                        <h3 className="max-w-[12ch] font-display text-[clamp(2rem,4vw,3.15rem)] leading-[0.94] tracking-[-0.06em] text-white">
                          {program.title}
                        </h3>
                        <p className="max-w-[34ch] text-[0.98rem] leading-8 text-[#CCCCCC]">
                          {program.description}
                        </p>
                      </div>

                      <div className="grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                        <p className="meta-label text-[#CCCCCC]">{program.media.meta}</p>
                        <span className="section-note text-[#888888]">
                          Scroll reveal / hover lift
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
