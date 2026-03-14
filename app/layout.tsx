import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Adrian Volkov | Professional Tennis Coach",
  description:
    "Private tennis coaching in Stockholm for competitive players who need cleaner technique, sharper movement, and match-ready training blocks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
