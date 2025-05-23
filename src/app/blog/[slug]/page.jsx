import { notFound } from "next/navigation";
import { blogPosts } from "../../lib/blogPost";
import BlogPostClient from "../../../components/Blogs/BlogPostClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}