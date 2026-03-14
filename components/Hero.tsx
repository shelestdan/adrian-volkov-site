"use client";

import { motion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame";
import { easing } from "@/lib/animations";
import { hero } from "@/lib/site-content";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export default function Hero() {
  const { reducedMotion } = useSafeReducedMotion();

  return (
    <section id="top" className="scene pb-[calc(var(--scene-space)*0.85)] pt-6 lg:pt-8">
      <div className="shell-inner">
        <div className="relative overflow-hidden rounded-[calc(var(--frame-radius)+0.35rem)] border border-white/10 bg-[#050505] shadow-[0_42px_120px_rgba(0,0,0,0.34)]">
          <MediaFrame
            asset={hero.primaryMedia}
            className="h-[38rem] rounded-[calc(var(--frame-radius)+0.15rem)] sm:h-[42rem] md:h-[46rem] lg:h-[52rem]"
            sizes="(min-width: 1280px) 92rem, 100vw"
            parallax={18}
            showCaption={false}
          />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(110deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_38%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.72)_100%)]" />
          <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,rgba(0,0,0,0.34)_100%)]" />

          <div className="absolute inset-0 z-[5] flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easing }}
              className="eyebrow max-w-fit"
            >
              {hero.eyebrow}
            </motion.p>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.618fr)] lg:items-end lg:gap-[clamp(2rem,3vw,3.75rem)]">
              <div className="min-w-0 max-w-[42rem] space-y-7">
                <h1 className="font-display text-[clamp(3.4rem,8vw,7.3rem)] leading-[0.88] tracking-[-0.075em] text-white">
                  {hero.headline.map((line, index) => (
                    <motion.span
                      key={line}
                      initial={{ opacity: 0, y: 44 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.95,
                        ease: easing,
                        delay: 0.08 + index * 0.08,
                      }}
                      className="block balance"
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: easing, delay: 0.24 }}
                  className="max-w-2xl text-[1.02rem] leading-8 text-[#CCCCCC] sm:text-[1.12rem]"
                >
                  {hero.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easing, delay: 0.32 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <a href={hero.primaryCta.href} className="button-primary">
                    {hero.primaryCta.label}
                  </a>
                  <a href={hero.secondaryCta.href} className="button-secondary">
                    {hero.secondaryCta.label}
                  </a>
                </motion.div>

                <motion.dl
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easing, delay: 0.4 }}
                  className="grid max-w-[38rem] gap-3 sm:grid-cols-3"
                >
                  {hero.proofRail.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.35rem] border border-white/10 bg-black/46 px-4 py-4 backdrop-blur-md"
                    >
                      <dt className="meta-label">{item.label}</dt>
                      <dd className="mt-2 text-sm leading-6 text-white sm:text-[0.96rem]">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>

              <motion.div
                animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
                transition={
                  reducedMotion
                    ? undefined
                    : { duration: 7.2, repeat: Infinity, ease: "easeInOut" }
                }
                className="hidden min-w-0 justify-end lg:flex"
              >
                <div className="w-full max-w-[18rem] xl:max-w-[19.5rem]">
                  <MediaFrame
                    asset={hero.secondaryMedia}
                    className="aspect-[3/4] xl:aspect-[4/5]"
                    sizes="(min-width: 1280px) 19rem, 0px"
                    parallax={8}
                    showCaption={false}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-[4] h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
