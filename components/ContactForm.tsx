"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Complete all fields before creating the booking draft.");
      return;
    }

    const subject = encodeURIComponent(`Training enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    setStatus("Opening your email client with a prefilled booking draft.");
    window.location.href = `mailto:book@volkovtennis.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="booking-sheet overflow-hidden">
      <div className="space-y-8 p-6 sm:p-8">
        <div className="space-y-3">
          <p className="meta-label">Inquiry sheet</p>
          <p className="balance font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.94] tracking-[-0.06em] text-white">
            Book training with a calmer, more exact starting point.
          </p>
        </div>

        <div className="booking-divider pt-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-3">
              <span className="meta-label">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border-b border-white/14 bg-transparent px-0 pb-4 pt-2 text-base text-white outline-none placeholder:text-[#666666] transition focus:border-white/40"
              />
            </label>
            <label className="space-y-3">
              <span className="meta-label">Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full border-b border-white/14 bg-transparent px-0 pb-4 pt-2 text-base text-white outline-none placeholder:text-[#666666] transition focus:border-white/40"
              />
            </label>
          </div>
        </div>

        <div className="booking-divider pt-6">
          <label className="space-y-3">
            <span className="meta-label">Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell Adrian about your level, goals, and preferred training schedule."
              className="w-full border-b border-white/14 bg-transparent px-0 pb-4 pt-2 text-base text-white outline-none placeholder:text-[#666666] transition focus:border-white/40"
            />
          </label>
        </div>

        <div className="booking-divider flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm space-y-2">
            <p className="meta-label">Flow</p>
            <p className="text-sm leading-6 text-[#888888]">
              {status ??
                "Submitting opens a prefilled email draft so the booking experience works cleanly without backend wiring in v1."}
            </p>
          </div>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="button-primary"
          >
            Book Training
          </motion.button>
        </div>
      </div>
    </form>
  );
}
