import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somniate Solutions | Data-Driven Solutions for Smarter & Safer Cities",
  description:
    "Advanced traffic surveys, geospatial intelligence, engineering and data analytics for urban, infrastructure and mobility development.",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Somniate", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#0a1f17",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
