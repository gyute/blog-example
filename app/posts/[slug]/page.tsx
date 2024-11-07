import { notFound } from "next/navigation";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import { formatDate } from "@/lib/date";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(slug);
  if (!post?.content) {
    return notFound();
  }

  const html = (
    await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(post.content)
  ).toString();

  return (
    <>
      <div className="container mx-auto">
        <h1 className="my-5 text-2xl font-bold">{post.title}</h1>
        <p className="mb-12 text-lg text-gray-500">{formatDate(post.date)}</p>
        <div
          className="prose my-3 text-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const params = getPostSlugs().map((slug) => ({ slug }));
  if (params.length === 0) {
    return [{ slug: "not-found" }];
  }
  return params;
}
