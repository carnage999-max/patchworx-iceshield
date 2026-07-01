import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Patchworx IceShield",
    short_name: "IceShield",
    description:
      "Advanced anti-adhesion and engineered traction for winter road safety without salt.",
    start_url: "/",
    display: "standalone",
    background_color: "#030B18",
    theme_color: "#0F2C4D",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
