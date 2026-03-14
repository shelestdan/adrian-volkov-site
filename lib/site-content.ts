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
  { href: "#method", label: "Method" },
  { href: "#programs", label: "Programs" },
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
    src: "/images/hero-clay-shadow.jpg",
    alt: "Player shadow stretching across a clay court",
    orientation: "landscape" as const,
    cropIntent: "negative-space-left" as const,
    priority: true,
    caption: "Hero frame",
    meta: "Shot 01 / hero / clay shadow",
    treatment: "monochrome-strong" as const,
    objectPositionClassName:
      "object-[70%_24%] sm:object-[72%_24%] md:object-[74%_26%] lg:object-[76%_28%]",
  },
  secondaryMedia: {
    src: "/images/hero-studio-portrait.jpg",
    alt: "Coach portrait framed on an indoor court",
    orientation: "portrait" as const,
    cropIntent: "negative-space-right" as const,
    caption: "Portrait crop",
    meta: "Shot 02 / portrait / indoor authority",
    treatment: "monochrome-strong" as const,
    objectPositionClassName:
      "object-[50%_18%] sm:object-[50%_20%] lg:object-[50%_22%] xl:object-[50%_24%]",
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
      src: "/images/authority-racket-ball.jpg",
      alt: "Coach holding racket and ball before a session",
      orientation: "portrait",
      cropIntent: "negative-space-right",
      caption: "Authority portrait",
      meta: "Shot 03 / portrait / pre-session focus",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[54%_26%] sm:object-[56%_28%] lg:object-[58%_30%] xl:object-[60%_32%]",
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
      src: "/images/program-private-rally.jpg",
      alt: "Player working through a full stroke on court",
      orientation: "portrait",
      cropIntent: "centered-athlete",
      caption: "Serve mechanics",
      meta: "Shot 04 / action / stroke rehearsal",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[50%_32%] sm:object-[50%_34%] lg:object-[48%_36%]",
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
      src: "/images/program-elite-net.jpg",
      alt: "Black-and-white tennis session frame with court action and strong contrast",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Coach-athlete session",
      meta: "Shot 05 / environment / court geometry",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[68%_44%] sm:object-[74%_48%] lg:object-[80%_52%] xl:object-[84%_54%]",
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
      src: "/images/method-coaching-session.jpg",
      alt: "Coach feeding balls across the net during a live drill",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Transfer drill",
      meta: "Shot 06 / transfer / live drill",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[50%_36%] sm:object-[50%_38%] lg:object-[52%_42%]",
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
      src: "/images/method-player-action.jpg",
      alt: "Player driving through a forehand on an outdoor court",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Program frame",
      meta: "Private / live correction",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[52%_40%] sm:object-[54%_42%] lg:object-[56%_44%] xl:object-[60%_46%]",
    },
  },
  {
    title: "Junior Development",
    description:
      "Long-term athlete development focused on mechanics, movement quality, emotional regulation, and repeatable match habits.",
    tag: "Long-term build",
    emphasis: "tall",
    media: {
      src: "/images/program-junior-shadow.jpg",
      alt: "Long player shadow stretched over a marked court",
      orientation: "portrait",
      cropIntent: "centered-athlete",
      caption: "Movement frame",
      meta: "Junior / movement rhythm",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[50%_54%] sm:object-[50%_54%] lg:object-[50%_56%]",
    },
  },
  {
    title: "Technique Analysis",
    description:
      "Stroke-by-stroke rebuilds with video-ready training logic, clean sequencing, and cues that hold up under tempo.",
    tag: "Diagnostic",
    emphasis: "compact",
    media: {
      src: "/images/program-technique-detail.jpg",
      alt: "Close technical detail of legs and racket under tension",
      orientation: "portrait",
      cropIntent: "detail-close",
      caption: "Technical detail",
      meta: "Analysis / kinetic detail",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[52%_38%] sm:object-[54%_40%] lg:object-[56%_42%]",
    },
  },
  {
    title: "Elite Player Program",
    description:
      "High-performance blocks for tournament players preparing for pressure moments, travel rhythm, and sharper execution in live matches.",
    tag: "High performance",
    emphasis: "compact",
    media: {
      src: "/images/results-court-shadow.jpg",
      alt: "Court lines cutting through a tall player shadow",
      orientation: "landscape",
      cropIntent: "wide-environment",
      caption: "Performance frame",
      meta: "Elite / composure under load",
      treatment: "monochrome-soft",
      objectPositionClassName:
        "object-[46%_50%] sm:object-[48%_52%] lg:object-[50%_54%]",
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
      src: "/images/method-ball-detail.jpg",
      alt: "Single tennis ball resting on clay before the next point",
      orientation: "square",
      cropIntent: "detail-close",
      caption: "Proof image",
      meta: "Result / detail under pressure",
      treatment: "monochrome-strong",
      objectPositionClassName:
        "object-[52%_48%] sm:object-[52%_48%] lg:object-[52%_48%]",
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
    src: "/images/booking-racket-still-life.jpg",
    alt: "Racket and ball arranged in a quiet black-and-white still life",
    orientation: "portrait" as const,
    cropIntent: "detail-close" as const,
    caption: "Booking still life",
    meta: "Shot 07 / booking / calm close-up",
    treatment: "monochrome-strong" as const,
    objectPositionClassName:
      "object-[52%_36%] sm:object-[54%_40%] lg:object-[56%_44%] xl:object-[58%_46%]",
  },
};
