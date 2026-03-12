import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Adrian Volkov | Professional Tennis Coach",
  description:
    "Cinematic editorial coaching website for Adrian Volkov, former ATP Challenger player and elite tennis coach based in Stockholm.",
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
