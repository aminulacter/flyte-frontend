import BlogCard from "./BlogCard";

import type { Blog } from "@/lib/types";

export default function RelatedBlogs({ blogs = [] }: { blogs?: Blog[] }) {
  if (!blogs?.length) return null;
  return (
    <div className="py-5 lg:py-10 container">
      <div>
        <h2 className="mb-4 text-[#161c2d] text-2xl text-center font-bold">You May Also Like</h2>
      </div>
      <div className="py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <div key={blog.id || i}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
