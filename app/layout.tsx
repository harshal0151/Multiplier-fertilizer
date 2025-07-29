import type { Metadata } from "next";
import Script from "next/script";
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
    "Multiplier Fertilizer, Kad Multiplier, Kad Multiplier 5KG Box, Kad Multiplier 10KG, Narayanastra, Narayanastra Box, organic fertilizer, organic pest control, sustainable farming, crop yield booster, eco-friendly fertilizer, soil health, natural pest solution, multiplier fertilizer organic fertilizer",
  authors: [{ name: "Multiplier Fertilizer" }],
  robots: "index, follow",

  openGraph: {
    title: "Multiplier Fertilizer | Boost Crop Yield Naturally",
    description:
      "Premium organic fertilizers and natural pest control solutions designed for sustainable farming and high-yield crops.",
    url: "https://multiplierfertilizer.com/",
    siteName: "Multiplier Fertilizer",
    images: [
      {
        url: "https://multiplierfertilizer.com/images/fertilizer-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Multiplier Fertilizer Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://multiplierfertilizer.com/",
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-QLKYVMZFXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QLKYVMZFXX');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NWBCS52V');
          `}
        </Script>

        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWBCS52V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Nav />
        <div className="mt-[60px] md:mt-[70px]">{children}</div>
        <Toaster richColors theme="light" position="top-right" expand />
        <Footer />
      </body>
    </html>
  );
}
