import { notFound } from "next/navigation";
import BlogDetail from "@/components/blog/BlogDetail";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import ContactSection from "@/components/ContactSection";
import { getAllBlogs, getSingleBlog, getRelatedBlogs, getTrendingBlogs } from "@/lib/api";

import type { SlugPageProps } from "@/lib/types";
import { unwrapBlogList } from "@/lib/types";

export async function generateStaticParams() {
  const [blogs, trending] = await Promise.all([getAllBlogs(), getTrendingBlogs()]);
  const list = unwrapBlogList(blogs);
  const extra = [...(trending?.topreads || []), ...(trending?.trendingtopics || [])];
  const slugs = new Set([...list, ...extra].map((b) => b?.slug).filter(Boolean));
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) return { title: "Blog | Flyte Solutions Ltd." };
  return {
    title: blog.meta_title || `${blog.title} | Flyte Solutions Ltd.`,
    description: blog.meta_description || blog.short_description,
    keywords: blog.meta_keyword,
    alternates: { canonical: `/company/news-and-blogs/${slug}` },
  };
}

export default async function BlogDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const [blog, related] = await Promise.all([getSingleBlog(slug), getRelatedBlogs()]);
  if (!blog) notFound();

  return (
    <div>
      <BlogDetail blog={blog} slug={slug} />
      <RelatedBlogs blogs={unwrapBlogList(related)} />
      <ContactSection />
    </div>
  );
}
