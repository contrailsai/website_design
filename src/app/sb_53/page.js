import UI_page from "./Ui";

export const metadata = {
    title: 'SB 53 | Contrails AI',
    description: 'Learn more about our enterprise AI safety solution that is built to protect digital trust across commerce, content platforms, and global online communities.',
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
        url: 'https://contrails.ai/use-cases',
        title: 'Contrails AI Protects Digital Trust Across All Interactions',
        description: 'Learn more about our enterprise AI safety solution that is built to protect digital trust across commerce, content platforms, and global online communities.',
        siteName: 'Contrails AI',
        images: [
            {
                url: '/og-image.png', // Replace with your actual image
                width: 1200,
                height: 630,
                alt: 'Contrails AI Protects Digital Trust Across All Interactions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contrails AI Protects Digital Trust Across All Interactions',
        description: 'Learn more about our enterprise AI safety solution that is built to protect digital trust across commerce, content platforms, and global online communities.',
        creator: '@Contrails AI', // Replace with your Twitter handle
        images: ['/og-image.png'], // Replace with your actual image
    },
    alternates: {
        canonical: 'https://contrails.ai/use-cases',
    },
};

export const Page = () => {
    return(
        <UI_page/>
    )
}

export default Page;