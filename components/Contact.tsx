import ContactForm from "@/components/ContactForm";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactMeta } from "@/lib/site-content";

export default function Contact() {
  return (
    <section id="booking" className="scene pb-[calc(var(--scene-space)*0.9)]">
      <div className="shell-inner golden-grid">
        <div className="golden-minor min-w-0 space-y-8">
          <SectionHeading
            eyebrow={contactMeta.eyebrow}
            title={contactMeta.title}
            description={contactMeta.description}
          />

          <Reveal delay={0.1}>
            <MediaFrame
              asset={contactMeta.media}
              className="aspect-[5/6] sm:aspect-[4/3] lg:aspect-[4/5] xl:aspect-[5/6]"
              sizes="(min-width: 1024px) 34vw, 100vw"
              parallax={10}
              showCaption={false}
            />
          </Reveal>

          <Reveal
            delay={0.16}
            className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2"
          >
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
              <p className="max-w-2xl text-sm leading-6 text-[#888888]">
                {contactMeta.note}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="golden-major min-w-0">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
