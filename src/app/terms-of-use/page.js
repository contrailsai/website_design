import UI_page from "./Ui";

export const metadata = {
    title: 'Terms of Use | Contrails AI',
    description: 'Review the Terms of Use for Contrails AI. This legal agreement outlines the conditions for accessing our AI-powered trust and safety analytics, data processing practices, and acceptable use policies.',
    keywords: 'terms of use, legal agreement, privacy policy, data protection, AI ethics, acceptable use, deepfake detection, Contrails AI, Safetrails Infotech',
    authors: [{ name: 'Contrails AI' }],
    creator: 'Contrails AI',
    publisher: 'Contrails AI',
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
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://contrails.ai/terms-of-use', 
        title: 'Terms of Use | Contrails AI',
        description: 'Review the Terms of Use for Contrails AI. This legal agreement outlines the conditions for accessing our AI-powered trust and safety analytics, data processing practices, and acceptable use policies.',
        siteName: 'Contrails AI',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Contrails AI Terms of Use and Legal Information',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terms of Use | Contrails AI',
        description: 'Review the Terms of Use for Contrails AI. This legal agreement outlines the conditions for accessing our AI-powered trust and safety analytics, data processing practices, and acceptable use policies.',
        creator: '@contrails_ai', 
        images: ['/og-image.png'],
    },
    alternates: {
        canonical: 'https://contrails.ai/terms-of-use', 
    },
};

export const Page = () => {
    return(
        <UI_page/>
    )
}

export default Page;