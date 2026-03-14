import ContactForm from "@/components/ContactForm";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactMeta } from "@/lib/site-content";

export default function Contact() {
  return (
    <section id="booking" className="scene pb-[calc(var(--scene-space)*0.9)]">
      <div className="shell-inner space-y-[var(--golden-gap)]">
        <div className="golden-grid xl:items-start">
          <div className="golden-minor min-w-0 space-y-8">
            <SectionHeading
              eyebrow={contactMeta.eyebrow}
              title={contactMeta.title}
              description={contactMeta.description}
            />
          </div>

          <Reveal delay={0.12} className="golden-major min-w-0">
            <ContactForm />
          </Reveal>
        </div>

        <div className="golden-grid xl:items-stretch">
          <Reveal delay={0.16} className="golden-minor min-w-0 h-full">
            <MediaFrame
              asset={contactMeta.media}
              className="h-full min-h-[22rem] aspect-[16/11] sm:aspect-[4/3] xl:aspect-auto xl:min-h-[28rem]"
              sizes="(min-width: 1024px) 34vw, 100vw"
              parallax={10}
              showCaption={false}
            />
          </Reveal>

          <Reveal delay={0.2} className="golden-major min-w-0 h-full">
            <div className="editorial-panel flex h-full flex-col justify-between p-5 sm:p-6 xl:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="meta-label">Location</p>
                  <p className="text-lg text-white">{contactMeta.location}</p>
                </div>
                <div className="space-y-2">
                  <p className="meta-label">Email</p>
                  <a
                    href={`mailto:${contactMeta.email}`}
                    className="text-lg text-white transition hover:text-[#CCCCCC]"
                  >
                    {contactMeta.email}
                  </a>
                </div>
                <div className="space-y-3 sm:col-span-2">
                  <p className="meta-label">Session types</p>
                  <div className="flex flex-wrap gap-2">
                    {contactMeta.sessionTypes.map((item) => (
                      <span key={item} className="media-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <p className="meta-label">Booking process</p>
                  <p className="max-w-3xl text-sm leading-6 text-[#888888]">
                    {contactMeta.note}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="meta-label text-[#CCCCCC]">{contactMeta.media.meta}</p>
                <span className="section-note text-[#888888]">
                  Direct contact / session planning
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
