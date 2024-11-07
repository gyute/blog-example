import Link from "next/link";

import { formatDate } from "@/lib/date";
import { Post, getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts: (Post | null)[] = getAllPosts();

  return (
    <div className="container mx-auto">
      {posts?.map((post) => {
        if (post === null || !post.date || !post.slug || !post.title)
          return null;

        const date = formatDate(post.date);

        return (
          <div
            key={post.slug}
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 md:gap-0"
          >
            <div className="text-base text-gray-500">{date}</div>
            <h3 className="ml-7">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
