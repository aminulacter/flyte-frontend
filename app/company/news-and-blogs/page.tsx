import PageHero from "@/components/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import { TrendingTopics, TopReads } from "@/components/blog/BlogSidebar";
import ContactSection from "@/components/ContactSection";
import { getAllBlogs, getTrendingBlogs } from "@/lib/api";
import { unwrapBlogList } from "@/lib/types";

export const metadata = {
  title: "News & Blogs | Flyte Solutions Ltd.",
  description:
    "Explore expert perspectives, industry trends, and practical advice through Flyte Solutions' news and blogs.",
  alternates: { canonical: "/company/news-and-blogs" },
};

export default async function NewsAndBlogsPage() {
  const [blogs, trending] = await Promise.all([getAllBlogs(), getTrendingBlogs()]);
  const list = unwrapBlogList(blogs);

  return (
    <div>
      <PageHero
        eyebrow="Insights, Trends & Expert Advice"
        title="Stay Informed with Our Latest Insights!"
        description="Explore expert perspectives, industry trends, and practical advice through our news and blogs."
      />

      <div className="container py-10">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-stretch gap-5">
          <div className="w-full lg:w-1/2 flex-1">
            <TrendingTopics trending={trending} />
          </div>
          <div className="w-full lg:w-1/2 flex-1">
            <TopReads trending={trending} />
          </div>
        </div>
      </div>

      <div
        className="py-5 lg:py-10"
        style={{
          backgroundImage: "url('/images/BlogSectionBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="w-full text-center text-[#161c2d] font-bold leading-10">
          <h1 className="text-base">News &amp; Blogs</h1>
        </div>
        <div className="container py-5 lg:py-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((blog, i) => (
            <div key={blog.id || i}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
