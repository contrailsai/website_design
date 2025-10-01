import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Contrails AI - AI Solutions for Digital Content Safety ",
  description: "Contrails AI provides solutions to detect manipulated media, misinformation, and harmful content. Protect your digital ecosystem with our advanced AI technology.",
  keywords: "AI, digital security, media verification, misinformation detection, content moderation, artificial intelligence, deepfake detection",
  authors: [{ name: "Contrails AI" }],
  creator: "Contrails AI",
  publisher: "Contrails AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://contrails.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Contrails AI - AI Solutions for Digital Content Safety ",
    description: "Contrails AI provides solutions to detect manipulated media, misinformation, and harmful content. Protect your digital ecosystem with our advanced AI technology.",
    url: 'https://contrails.ai',
    siteName: 'Contrails AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contrails AI - Digital Content Safety Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contrails AI - AI Solutions for Digital Content Safety ",
    description: "Contrails AI provides solutions to detect manipulated media, misinformation, and harmful content. Protect your digital ecosystem with our advanced AI technology.",
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
      <body
        className={` bg-black ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
