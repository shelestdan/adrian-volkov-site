export type MediaAsset = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait" | "square";
  cropIntent:
    | "negative-space-left"
    | "negative-space-right"
    | "centered-athlete"
    | "detail-close"
    | "wide-environment";
  priority?: boolean;
  caption: string;
  meta: string;
  treatment?: "monochrome-soft" | "monochrome-strong" | "clean";
  objectPosition?: string;
  objectPositionClassName?: string;
  mirror?: boolean;
};

export type StoryFrame = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  kicker: string;
  media: MediaAsset;
};

export type ProgramCard = {
  title: string;
  description: string;
  tag: string;
  emphasis: "wide" | "tall" | "compact";
  media: MediaAsset;
};

export type ProofItem = {
  quote: string;
  author: string;
  detail: string;
  label: string;
  value: string;
  media: MediaAsset;
};

export const navLinks = [
  { href: "#authority", label: "Authority" },
  { href: "#programs", label: "Programs" },
  { href: "#method", label: "Method" },
  { href: "#results", label: "Results" },
  { href: "#booking", label: "Book" },
];

export const hero = {
  eyebrow: "Stockholm / Former ATP Challenger / Private coaching",
  headline: ["Build A Game", "That Holds Under Pressure"],
  description:
    "Adrian Volkov works with ambitious players who need quieter technique, cleaner movement patterns, and training blocks designed to survive live match tempo.",
  proofRail: [
    { label: "Base", value: "Stockholm" },
    { label: "Background", value: "Former ATP Challenger" },
    { label: "Focus", value: "Technique / Movement / Composure" },
  ],
  primaryCta: { label: "Book A Session", href: "#booking" },
  secondaryCta: { label: "View Programs", href: "#programs" },
  primaryMedia: {
    src: "/images/hero-photo.jpg",
    alt: "Black-and-white tennis court scene with a player framed in dramatic light and strong editorial negative space",
    orientation: "landscape" as const,
    cropIntent: "negative-space-left" as const,
    priority: true,
    caption: "Hero frame",
    meta: "Shot 01 / hero / wide court light",
    treatment: "monochrome-strong" as const,
    objectPositionClassName:
      "object-[70%_46%] sm:object-[72%_46%] md:object-[74%_48%] lg:object-[76%_50%]",
  },
  secondaryMedia: {
    src: "/images/portrait-photo.jpg",
    alt: "Black-and-white portrait of a tennis player framed with calm authority and enough negative space for a hero side panel",
    orientation: "portrait" as const,
    cropIntent: "negative-space-right" as const,
    caption: "Portrait crop",
    meta: "Shot 02 / portrait / authority side frame",
    treatment: "monochrome-strong" as const,
    objectPositionClassName:
      "object-[56%_26%] sm:object-[58%_30%] lg:object-[62%_36%] xl:object-[66%_40%]",
  },
};

export const storyFrames: StoryFrame[] = [
  {
    id: "authority",
    eyebrow: "Authority",
    title: "15 years inside competitive tennis.",
    kicker: "From international circuits to detail-led private coaching.",
    copy:
      "After years of international competition, Adrian now coaches with the same discipline he demanded from his own game: remove noise, sharpen patterns, and make each technical change survive real pace.",
    media: {
      src: "/images/portrait-photo.jpg",
      alt: "Monochrome portrait of a tennis player looking toward the court with calm expression",
      orientation: "portrait",
      cropIntent: "negative-space-right",
      caption: "Authority portrait",
      meta: "Shot 02 / portrait / quiet expression",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[58%_30%] sm:object-[60%_34%] lg:object-[64%_40%] xl:object-[68%_44%]",
    },
  },
  {
    id: "method-1",
    eyebrow: "Method / 01",
    title: "Correct the stroke before adding speed.",
    kicker: "Technique first. Tempo second.",
    copy:
      "Sessions begin by isolating inefficient mechanics, rebuilding contact quality, and making every cue simple enough to repeat without hesitation.",
    media: {
      src: "/images/serve-photo.jpg",
      alt: "Black-and-white action photo of a tennis serve in motion",
      orientation: "portrait",
      cropIntent: "centered-athlete",
      caption: "Serve mechanics",
      meta: "Shot 03 / action / service chain",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[52%_20%] sm:object-[50%_22%] lg:object-[48%_28%]",
    },
  },
  {
    id: "method-2",
    eyebrow: "Method / 02",
    title: "Make movement quieter and decisions faster.",
    kicker: "Footwork is the first layer of confidence.",
    copy:
      "Movement patterns are cleaned up before tactical layers are added, so players stop arriving late and start seeing the ball from balanced positions.",
    media: {
      src: "/images/session-photo.jpg",
      alt: "Black-and-white tennis session frame with court action and strong contrast",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Coach-athlete session",
      meta: "Shot 04 / interaction / court spacing",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[46%_42%] sm:object-[34%_46%] lg:object-[22%_50%] xl:object-[18%_52%]",
    },
  },
  {
    id: "method-3",
    eyebrow: "Method / 03",
    title: "Pressure-proof the change with match context.",
    kicker: "Repetition matters only when it transfers.",
    copy:
      "Every correction is stress-tested with decision making, point construction, and match-like tempo so the new habit stays present when the score matters.",
    media: {
      src: "/images/detail-photo.jpg",
      alt: "Black-and-white detail photo focusing on hands, racket texture, and close contact mechanics",
      orientation: "square",
      cropIntent: "detail-close",
      caption: "Detail study",
      meta: "Shot 05 / detail / hands and grip",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[72%_48%] sm:object-[68%_49%] lg:object-[62%_50%]",
    },
  },
];

export const programCards: ProgramCard[] = [
  {
    title: "Private Coaching",
    description:
      "One-to-one work for players who need precise diagnosis, measured repetition, and a coach who can simplify technical decisions fast.",
    tag: "One-to-one",
    emphasis: "wide",
    media: {
      src: "/images/session-photo.jpg",
      alt: "Wide black-and-white training frame with movement and court geometry",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Program frame",
      meta: "Private / live court work",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[30%_44%] sm:object-[22%_48%] lg:object-[14%_52%] xl:object-[12%_54%]",
    },
  },
  {
    title: "Junior Development",
    description:
      "Long-term athlete development focused on mechanics, movement quality, emotional regulation, and repeatable match habits.",
    tag: "Long-term build",
    emphasis: "tall",
    media: {
      src: "/images/coach-photo.jpg",
      alt: "Monochrome portrait frame focused on coach presence and composure",
      orientation: "portrait",
      cropIntent: "centered-athlete",
      caption: "Coach portrait",
      meta: "Junior / progression block",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[50%_24%] sm:object-[52%_28%] lg:object-[55%_34%]",
    },
  },
  {
    title: "Technique Analysis",
    description:
      "Stroke-by-stroke rebuilds with video-ready training logic, clean sequencing, and cues that hold up under tempo.",
    tag: "Diagnostic",
    emphasis: "compact",
    media: {
      src: "/images/detail-photo.jpg",
      alt: "Black-and-white close-up detail of hands and racket used for technical analysis framing",
      orientation: "square",
      cropIntent: "detail-close",
      caption: "Technical detail",
      meta: "Analysis / contact quality",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[72%_52%] sm:object-[66%_55%] lg:object-[58%_58%]",
    },
  },
  {
    title: "Elite Player Program",
    description:
      "High-performance blocks for tournament players preparing for pressure moments, travel rhythm, and sharper execution in live matches.",
    tag: "High performance",
    emphasis: "compact",
    media: {
      src: "/images/serve-photo.jpg",
      alt: "Black-and-white action frame with athletic tension and upward motion",
      orientation: "portrait",
      cropIntent: "centered-athlete",
      caption: "Performance frame",
      meta: "Elite / match-ready intensity",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[58%_16%] sm:object-[57%_18%] lg:object-[56%_18%]",
      mirror: true,
    },
  },
];

export const proofItems: ProofItem[] = [
  {
    quote:
      "Adrian completely changed my serve technique and, more importantly, made it hold up in real matches.",
    author: "Lukas H.",
    detail: "Competitive adult player",
    label: "Result",
    value: "Serve rebuild",
    media: {
      src: "/images/hero-photo.jpg",
      alt: "Black-and-white court environment emphasizing scale and pressure",
      orientation: "portrait",
      cropIntent: "wide-environment",
      caption: "Proof image",
      meta: "Result / technical transfer",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[72%_46%] sm:object-[74%_47%] lg:object-[76%_48%]",
    },
  },
  {
    quote:
      "My son improved dramatically in three months and started competing with much more belief.",
    author: "Sofia L.",
    detail: "Parent of junior player",
    label: "Timeline",
    value: "12 weeks",
    media: {
      src: "/images/portrait-photo.jpg",
      alt: "Monochrome portrait used to support long-term player trust",
      orientation: "portrait",
      cropIntent: "negative-space-right",
      caption: "Environment image",
      meta: "Junior / long-term trust",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[54%_28%] sm:object-[56%_32%] lg:object-[60%_38%]",
    },
  },
  {
    quote:
      "The sessions are demanding, precise, and focused on details other coaches missed.",
    author: "Mikael R.",
    detail: "National-level player",
    label: "Focus",
    value: "Detail first",
    media: {
      src: "/images/session-photo.jpg",
      alt: "Black-and-white training context used to emphasize repeatability and court spacing",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Detail image",
      meta: "Confidence / repeatability",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[72%_40%] sm:object-[80%_44%] lg:object-[86%_46%]",
      mirror: true,
    },
  },
];

export const contactMeta = {
  eyebrow: "Booking",
  title: "Build the next training block around what actually wins points.",
  description:
    "Use the inquiry sheet to outline your level, goals, and schedule. Sessions are structured around match transfer, technical clarity, and long-term repeatability.",
  email: "book@volkovtennis.com",
  location: "Stockholm, Sweden",
  sessionTypes: [
    "Private coaching",
    "Junior athlete development",
    "Technique rebuild",
    "Tournament preparation",
  ],
  note:
    "V1 uses a prefilled email draft instead of a backend booking flow. The layout is already ready for a future integrated form.",
  media: {
    src: "/images/coach-photo.jpg",
    alt: "Black-and-white portrait of the coach with a composed expression, used to anchor the booking section with a more personal frame",
    orientation: "portrait" as const,
    cropIntent: "centered-athlete" as const,
    caption: "Booking portrait",
    meta: "Shot 06 / contact / composed portrait",
    treatment: "monochrome-strong" as const,
    objectPositionClassName:
      "object-[50%_18%] sm:object-[52%_22%] lg:object-[54%_28%] xl:object-[56%_32%]",
  },
};
