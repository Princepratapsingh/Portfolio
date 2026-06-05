import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prince Pratap Singh | Business Analyst & Product Builder",
  description:
    "Business Analyst at Alienkind building AI-powered operational products. Turning business problems into scalable software solutions through data analysis, product thinking, and AI-assisted development.",
  keywords: [
    "Business Analyst",
    "Product Builder",
    "Vibe Coder",
    "AI Development",
    "Operational Technology",
    "Alienkind",
    "Demand Forecasting",
    "Restaurant Technology",
    "Gurgaon",
    "India",
  ],
  authors: [{ name: "Prince Pratap Singh" }],
  creator: "Prince Pratap Singh",
  metadataBase: new URL("https://princepratapsingh.vercel.app"),
  openGraph: {
    title: "Prince Pratap Singh | Business Analyst & Product Builder",
    description:
      "Building AI-powered operational products at the intersection of business analysis and technology.",
    type: "website",
    locale: "en_IN",
    url: "https://princepratapsingh.vercel.app",
    siteName: "Prince Pratap Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prince Pratap Singh — Business Analyst & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Pratap Singh | Business Analyst & Product Builder",
    description:
      "Building AI-powered operational products at the intersection of business analysis and technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prince Pratap Singh",
              jobTitle: "Business Analyst",
              worksFor: {
                "@type": "Organization",
                name: "Alienkind",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gurgaon",
                addressCountry: "IN",
              },
              url: "https://princepratapsingh.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/prince-pratap-singh-443480241/",
                "https://github.com/Princepratapsingh",
              ],
              description:
                "Business Analyst at Alienkind building AI-powered operational products at the intersection of business analysis, product thinking, and technology.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#0A0A0A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
