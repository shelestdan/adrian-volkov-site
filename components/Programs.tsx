"use client";

import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { programCards } from "@/lib/site-content";

const programHighlights = [
  { label: "Formats", value: "4 coaching blocks" },
  { label: "Build", value: "Technique to match play" },
  { label: "Players", value: "Competitive focus" },
];
const programFootnotes = [
  "Private court work / fast diagnosis",
  "Long-term progression / junior rhythm",
  "Stroke diagnostics / cleaner sequencing",
  "Tournament build / pressure preparation",
];

export default function Programs() {
  return (
    <section id="programs" className="scene">
      <div className="shell-inner space-y-10 xl:space-y-12">
        <div className="golden-grid">
          <div className="golden-minor min-w-0 space-y-8">
            <SectionHeading
              eyebrow="Programs"
              title="Focused coaching blocks built for pressure."
              description="Each offer keeps the same standard: diagnose quickly, simplify mechanics, and build a training rhythm that still works under pressure."
              titleClassName="max-w-[12ch] text-[clamp(2.9rem,6.6vw,5.5rem)]"
              descriptionClassName="max-w-xl"
            />
          </div>

          <Reveal delay={0.12} className="golden-major min-w-0">
            <div className="editorial-panel space-y-6 p-5 sm:p-6 xl:p-7">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-end">
                <div className="space-y-3">
                  <p className="section-note">Program structure</p>
                  <p className="max-w-[18ch] font-display text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.02] tracking-[-0.045em] text-white">
                    Private coaching formats for stroke correction, player
                    development, and tournament readiness.
                  </p>
                </div>
                <p className="max-w-none text-[1rem] leading-8 text-[#CCCCCC] sm:text-[1.04rem]">
                  From one-to-one correction to long-term development and
                  tournament preparation, each format is structured around a
                  clear training outcome rather than generic session volume.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {programHighlights.map((item) => (
                  <div key={item.label} className="info-card p-4">
                    <p className="meta-label">{item.label}</p>
                    <p className="mt-3 text-[0.98rem] leading-7 text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="golden-mosaic min-w-0 gap-5 md:grid-cols-2 lg:gap-6">
          {programCards.map((program, index) => {
            const isSplitLayout = index === 0 || index === 3;
            const shellClass =
              index === 0
                ? "golden-span-major md:col-span-2 min-h-[30rem] xl:min-h-[32rem]"
                : index === 1
                  ? "golden-span-minor md:col-span-2 min-h-[30rem] xl:min-h-[32rem]"
                  : index === 2
                    ? "golden-span-minor md:col-span-1 min-h-[27rem] xl:min-h-[29rem]"
                    : "golden-span-major md:col-span-1 min-h-[27rem] xl:min-h-[29rem]";
            const layoutClass = isSplitLayout
              ? "golden-panel xl:items-stretch"
              : "";
            const mediaWrapClass = isSplitLayout
              ? index === 0
                ? "golden-panel-media order-1 xl:order-2"
                : "golden-panel-media order-1"
              : "order-1";
            const copyWrapClass = isSplitLayout
              ? index === 0
                ? "golden-panel-copy order-2 xl:order-1"
                : "golden-panel-copy order-2"
              : "order-2";
            const mediaClass = isSplitLayout
              ? "aspect-[16/11] xl:h-full xl:min-h-[24rem]"
              : program.media.orientation === "portrait"
                ? "aspect-[5/6] xl:aspect-[4/5]"
                : "aspect-[16/10] xl:aspect-[16/11]";
            const titleClass = isSplitLayout
              ? "max-w-[9ch] text-[clamp(2.45rem,4vw,4rem)]"
              : "max-w-[10ch] text-[clamp(2.2rem,3.8vw,3.55rem)]";
            const sizes = isSplitLayout
              ? "(min-width: 1280px) 38vw, (min-width: 768px) 50vw, 100vw"
              : "(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw";

            return (
              <Reveal
                key={program.title}
                delay={index * 0.08}
                className={`min-w-0 ${shellClass}`}
              >
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group editorial-panel relative h-full overflow-hidden"
                >
                  <div className={`grid h-full min-w-0 gap-5 p-4 sm:p-5 lg:gap-6 lg:p-6 ${layoutClass}`}>
                    <div className={`${mediaWrapClass} min-w-0`}>
                      <MediaFrame
                        asset={program.media}
                        showCaption={false}
                        className={`${mediaClass} w-full`}
                        imageClassName="scale-[1.02] transition duration-700 group-hover:scale-[1.05]"
                        sizes={sizes}
                        parallax={program.media.orientation === "portrait" ? 10 : 6}
                      />
                    </div>

                    <div className={`flex min-w-0 h-full flex-col justify-between ${copyWrapClass}`}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="media-chip">{program.tag}</span>
                        <span className="meta-label text-[#CCCCCC]">0{index + 1}</span>
                      </div>

                      <div className={`min-w-0 space-y-4 py-4 lg:py-6 ${isSplitLayout ? "max-w-[32rem]" : "max-w-[28rem]"}`}>
                        <h3 className={`font-display leading-[0.94] tracking-[-0.06em] text-white ${titleClass}`}>
                          {program.title}
                        </h3>
                        <p className="max-w-[36ch] text-[0.98rem] leading-8 text-[#CCCCCC]">
                          {program.description}
                        </p>
                      </div>

                      <p className="section-note border-t border-white/8 pt-4 text-[#888888]">
                        {programFootnotes[index]}
                      </p>
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
