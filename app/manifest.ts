import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Somniate Solutions",
    short_name: "Somniate",
    description: "Data-driven solutions for smarter & safer cities",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1f17",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
