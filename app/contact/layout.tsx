import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Patchworx | Get Started with IceShield®",
  description: "Contact the Patchworx team to schedule a pilot program, request a demo, or learn more about IceShield® for your municipality.",
  keywords: ["contact", "demo request", "pilot program", "support", "inquiry"],
  openGraph: {
    title: "Contact Patchworx | Get Started with IceShield®",
    description: "Contact Patchworx to learn more about IceShield® or schedule a pilot program.",
    images: [
      {
        url: "https://patchworx-ice.com/patchworx-ice-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Patchworx",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
