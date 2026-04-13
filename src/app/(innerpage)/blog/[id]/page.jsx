import BreadCumb from '@/app/Components/Common/BreadCumb';
import BlogDetailContent from '@/app/Components/Blog/BlogDetailContent';
import blogData from '@/app/data/blog.json';
import { notFound } from 'next/navigation';

const normalize = (value = '') => {
  try {
    return decodeURIComponent(String(value)).trim().toLowerCase();
  } catch {
    return String(value).trim().toLowerCase();
  }
};

const firstQueryValue = (value) => (Array.isArray(value) ? value[0] : value);

export default async function BlogDetailsPage({ params, searchParams }) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const id = Number(resolvedParams?.id);
  if (!id) notFound();

  const serviceParamRaw = firstQueryValue(resolvedSearchParams?.service);
  const serviceParam = serviceParamRaw ? normalize(serviceParamRaw) : '';

  const byIdAndService = blogData.posts.find(
    (post) => Number(post.id) === id && (!serviceParam || normalize(post.category) === serviceParam)
  );

  const post = byIdAndService || blogData.posts.find((item) => Number(item.id) === id);
  if (!post) notFound();

  const relatedPosts = blogData.posts.filter((p) => p.category === post.category && Number(p.id) !== id).slice(0, 2);

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
