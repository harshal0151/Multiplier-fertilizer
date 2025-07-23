import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// Site-wide SEO metadata
export const metadata: Metadata = {
  title: "Multiplier Fertilizer | Organic Fertilizers & Pest Control",
  description:
    "Multiplier Fertilizer provides premium organic fertilizers and pest control solutions like Kad Multiplier and Narayanastra to boost crop yield, improve soil health, and ensure sustainable farming.",
  keywords:
    "Multiplier Fertilizer, Kad Multiplier, Kad Multiplier 5KG Box, Kad Multiplier 10KG, Narayanastra, Narayanastra Box, organic fertilizer, organic pest control, sustainable farming, crop yield booster, eco-friendly fertilizer, soil health, natural pest solution",
  authors: [{ name: "Multiplier Fertilizer" }],
  robots: "index, follow",

  openGraph: {
    title: "Multiplier Fertilizer | Boost Crop Yield Naturally",
    description:
      "Premium organic fertilizers and natural pest control solutions designed for sustainable farming and high-yield crops.",
    url: "https://multiplier-fertilizer.vercel.app/",
    siteName: "Multiplier Fertilizer",
    images: [
      {
        url: "https://yourdomain.com/images/fertilizer-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Multiplier Fertilizer Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  alternates: {
    canonical: "https://multiplier-fertilizer.vercel.app/",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="mt-[90px]">{children}</div>
        <Toaster richColors theme="light" position="top-right" expand />
        <Footer />
      </body>
    </html>
  );
}
