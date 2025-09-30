// app/blog/[slug]/page.tsx

import Navbar from '@/components/Navbar';
import { headers } from 'next/headers';
// import type { Metadata } from "next";
import BlogContent from "@/components/blogs/BlogContent"; // Import the new client component
// import Top_navbar_title from "@/components/Top_navbar_title";
import Footer from '@/components/Footer';
import Link from "next/link";
import { Undo2 } from "lucide-react";

// generateMetadata function - now with async params
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const res = await fetch(`${protocol}://${host}/api/blogs/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return { title: "Blog Not Found" };
    }
    const blog = await res.json();
    return {
        title: blog.title,
        description: blog.meta_description || blog.description || "",
        keywords: blog.meta_keywords || "",
        openGraph: {
            title: blog.title,
            description: blog.meta_description || "",
            images: blog.featured_image ? [{ url: blog.featured_image }] : [],
        },
    };
}

// This is now a clean Server Component for data fetching
export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const res = await fetch(`${protocol}://${host}/api/blogs/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        console.error("Failed to fetch blog");

        return (
            <>
                <Navbar />
                {/* <Top_navbar_title show_links={true} /> */}
                <div className='p-20 flex flex-col items-center justify-center'>
                    <div className='text-5xl font-bold'>Blog not found!</div>
                    <Link href="/blogs" className='cursor-pointer bg-primary text-white flex items-center px-4 py-2 my-10 rounded-full shadow-md shadow-white hover:shadow-gray-400 transition-all'>
                        Go back to Blogs
                        <Undo2 className=" ml-2 size-6" />
                    </Link>
                </div>
            </>
        )
    }

    const blog = await res.json();

    return (
        <div className=''>
            <div className="md:px-15 relative min-h-screen bg-gradient-to-b from-blue-800 to-black/20">
                <Navbar />
                {/* <Top_navbar_title show_links={true} /> */}
                <article className="max-w-4xl mx-auto py-10 px-4">
                    {/* breadcrumb     */}
                    <div className="flex items-center gap-2 mb-5 text-white">
                        <Link className=" text-gray-200" href="/blogs">Blog</Link>
                        /
                        <Link className=" text-white" href={"/blogs/" + slug}>{slug}</Link>
                    </div>

                    {/* Pass the server-fetched data to the client component */}
                    <BlogContent blog={blog} />
                </article>
            </div>
            <Footer />
        </div>
    );
}