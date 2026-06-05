import type { Metadata } from "next";
import "@/app/css/style.css";
import PrintHeader from "@/components/print/print-header";
import PrintFooter from "@/components/print/print-footer";

export const metadata: Metadata = {
  title: "GoldSky Print & Media | Design • Print • Advertising",
  description: "Professional printing, design, and advertising services in Kanata, Ottawa. We bring your ideas to life with high-quality printing, 3D printing, vehicle wraps, and custom branding solutions.",
  keywords: "printing services Ottawa, Kanata print shop, graphic design, vehicle wraps, 3D printing, custom t-shirts, business cards, banners, signs",
  openGraph: {
    title: "GoldSky Print & Media | Design • Print • Advertising",
    description: "We Bring Your Ideas to Life! Professional printing and design services in Ottawa.",
    url: "https://print.goldsky.ca",
    siteName: "GoldSky Print & Media",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <PrintHeader />
        <main className="flex-grow">
          {children}
        </main>
        <PrintFooter />
      </body>
    </html>
  );
}
