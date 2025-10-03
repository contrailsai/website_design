import UI_page from "./Ui";

export const metadata = {
    title: 'Talk to Contrails AI | Enterprise AI Safety Support',
    description: 'Reach out to our AI safety specialists to discuss deepfake detection, content integrity, and moderation solutions for your business.',
    keywords: 'digital security, AI protection, online safety, trust technology, multimodal AI, cybersecurity, digital trust, safe online communities',
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
        url: 'https://contrails.ai/contact',
        title: 'Talk to Contrails AI | Enterprise AI Safety Support',
        description: 'Reach out to our AI safety specialists to discuss deepfake detection, content integrity, and moderation solutions for your business.',
        siteName: 'Contrails AI',
        images: [
            {
                url: '/og-image.png', // Replace with your actual image
                width: 1200,
                height: 630,
                alt: 'Talk to Contrails AI | Enterprise AI Safety Support',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Talk to Contrails AI | Enterprise AI Safety Support',
        description: 'Reach out to our AI safety specialists to discuss deepfake detection, content integrity, and moderation solutions for your business.',
        creator: '@Contrails AI', // Replace with your Twitter handle
        images: ['/og-image.png'], // Replace with your actual image
    },
    alternates: {
        canonical: 'https://contrails.ai/contact',
    },
};

const Page = () => {
    return (
        <UI_page/>
    )
}

export default Page;