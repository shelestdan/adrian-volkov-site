import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MediaFrame from "@/components/MediaFrame";
import { storyFrames } from "@/lib/site-content";

export default function About() {
  const authorityFrame = storyFrames[0];
  const authorityStats = [
    { label: "Specialization", value: "Private coaching" },
    { label: "Development", value: "Junior athlete systems" },
    { label: "Preparation", value: "Elite match focus" },
  ];

  return (
    <section id="authority" className="scene">
      <div className="shell-inner golden-grid">
        <SectionHeading
          eyebrow={authorityFrame.eyebrow}
          title={authorityFrame.title}
          description={authorityFrame.copy}
          className="golden-minor min-w-0 max-w-xl"
          titleClassName="max-w-lg"
        />

        <Reveal delay={0.12} className="golden-major">
          <div className="editorial-panel golden-panel p-4 sm:p-5 xl:p-6">
            <div className="golden-panel-media order-2 min-w-0 lg:order-1">
              <MediaFrame
                asset={authorityFrame.media}
                className="aspect-[4/5] w-full lg:h-full lg:min-h-[32rem]"
                sizes="(min-width: 1280px) 44vw, 100vw"
                parallax={12}
                showCaption={false}
              />
            </div>

            <div className="golden-panel-copy order-1 flex min-w-0 h-full flex-col justify-between gap-5 lg:order-2">
              <div className="space-y-4">
                <div className="info-card p-5 sm:p-6">
                  <p className="section-note">Competitive background</p>
                  <p className="mt-4 max-w-md text-[1.25rem] leading-[1.45] tracking-[-0.03em] text-white sm:text-[1.5rem]">
                    {authorityFrame.kicker}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {authorityStats.map((item) => (
                    <div key={item.label} className="info-card p-4 sm:p-5">
                      <p className="meta-label">{item.label}</p>
                      <p className="mt-3 text-[1rem] leading-7 text-white sm:text-[1.06rem]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="meta-label text-[#CCCCCC]">{authorityFrame.media.meta}</p>
                <span className="section-note text-[#888888]">
                  Match-tested coaching / individual precision
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
