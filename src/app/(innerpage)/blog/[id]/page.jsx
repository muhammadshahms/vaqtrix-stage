import BreadCumb from '@/Components/Common/BreadCumb';
import BlogDetailContent from '@/Components/Blog/BlogDetailContent';
import blogData from '@/data/blog.json';
import { notFound } from 'next/navigation';

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  
  const postId = parseInt(id, 10);
  const post = blogData.posts.find(p => p.id === postId);

  if (!post) {
    return notFound();
  }

  const relatedPosts = blogData.posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div>
       <BreadCumb
          bgimg="/assets/img/breadcrumb.jpg"
          Title="Insights, Ideas & Digital Innovation From Vaqtrix"
      ></BreadCumb>     
      <BlogDetailContent post={post} relatedPosts={relatedPosts} />
    </div>
  );
}
