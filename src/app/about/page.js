import PageUI from "./Ui";

export const metadata = {
    title: 'About Contrails AI: AI Safety and Governance Team',
    description: 'Contrails AI bridges technology and policy to deliver AI trust & safety solutions for content moderation, fraud prevention, and compliance.',
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
        url: 'https://contrails.ai/about',
        title: 'About Contrails AI: AI Safety and Governance Team',
        description: 'Contrails AI bridges technology and policy to deliver AI trust & safety solutions for content moderation, fraud prevention, and compliance.',
        siteName: 'Contrails AI',
        images: [
            {
                url: '/og-image.png', // Replace with your actual image
                width: 1200,
                height: 630,
                alt: 'About Contrails AI: AI Safety and Governance Team',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Contrails AI: AI Safety and Governance Team',
        description: 'Contrails AI bridges technology and policy to deliver AI trust & safety solutions for content moderation, fraud prevention, and compliance.',
        creator: '@Contrails AI', // Replace with your Twitter handle
        images: ['/og-image.png'], // Replace with your actual image
    },
    alternates: {
        canonical: 'https://contrails.ai/about',
    },
};

const Page = ()=>{
    return (
        <>
            <PageUI />
        </>
    )
}

export default Page;