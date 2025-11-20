import UI_page from "./Ui";

export const metadata = {
    title: 'Privacy Policy | Contrails AI',
    description: 'Read the Privacy Policy for Contrails AI. Learn how Safetrails Infotech collects, processes, and secures data for deepfake detection, content authenticity services, and AI-driven analytics.',
    keywords: 'privacy policy, data protection, Safetrails Infotech, Contrails AI, deepfake detection, content authenticity, AI ethics, data security, user rights, GDPR compliance, misinformation defense',
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
        url: 'https://contrails.ai/privacy-policy',
        title: 'Privacy Policy | Contrails AI',
        description: 'Read the Privacy Policy for Contrails AI. Learn how Safetrails Infotech collects, processes, and secures data for deepfake detection, content authenticity services, and AI-driven analytics.',
        siteName: 'Contrails AI',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Contrails AI Privacy Policy and Data Protection Practices',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | Contrails AI',
        description: 'Read the Privacy Policy for Contrails AI. Learn how Safetrails Infotech collects, processes, and secures data for deepfake detection, content authenticity services, and AI-driven analytics.',
        creator: '@contrails_ai',
        images: ['/og-image.png'], 
    },
    alternates: {
        canonical: 'https://contrails.ai/privacy-policy', 
    },
};

export const Page = () => {
    return(
        <UI_page/>
    )
}

export default Page;