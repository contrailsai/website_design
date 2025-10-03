import { Space_Grotesk } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Suspense } from 'react';

import Analytics from "@/components/Analytics";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Contrails AI | AI-First Trust & Safety Solution for the Generative Era ",
  description: "Safeguard your brand with multi-modal AI that detects deepfakes, harmful content, and misinformation across formats.",
  keywords: "AI, digital security, media verification, misinformation detection, content moderation, artificial intelligence, deepfake detection",
  authors: [{ name: "Contrails AI" }],
  creator: "Contrails AI",
  publisher: "Contrails AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.contrails.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Contrails AI | AI-First Trust & Safety Solution for the Generative Era ",
    description: "Safeguard your brand with multi-modal AI that detects deepfakes, harmful content, and misinformation across formats.",
    url: 'https://www.contrails.ai',
    siteName: 'Contrails AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contrails AI | AI-First Trust & Safety Solution for the Generative Era',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contrails AI | AI-First Trust & Safety Solution for the Generative Era",
    description: "Safeguard your brand with multi-modal AI that detects deepfakes, harmful content, and misinformation across formats.",
    images: ['/og-image.png'],
    creator: '@contrailsai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <body
        className={` bg-black ${spaceGrotesk.className} antialiased`}
      >
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
