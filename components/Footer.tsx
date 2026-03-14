import { contactMeta } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-[var(--page-gutter)]">
      <div className="shell-inner golden-grid gap-6 py-8 text-sm text-[#888888] xl:items-end">
        <div className="golden-minor space-y-3">
          <p className="font-display text-[1.35rem] tracking-[-0.04em] text-white">
            Adrian Volkov
          </p>
          <p className="max-w-md leading-6">
            Private tennis coaching in Stockholm for players rebuilding
            technique, movement quality, and match execution.
          </p>
        </div>

        <div className="golden-major flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="flex flex-wrap gap-4 uppercase tracking-[0.18em]">
            <a href="#authority" className="transition hover:text-white">
              Authority
            </a>
            <a href="#method" className="transition hover:text-white">
              Method
            </a>
            <a href="#programs" className="transition hover:text-white">
              Programs
            </a>
            <a href="#results" className="transition hover:text-white">
              Results
            </a>
            <a href="#booking" className="transition hover:text-white">
              Booking
            </a>
          </div>

          <a
            href={`mailto:${contactMeta.email}`}
            className="text-white transition hover:text-[#CCCCCC]"
          >
            {contactMeta.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
