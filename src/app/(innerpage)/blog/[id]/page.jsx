import BreadCumb from '@/app/Components/Common/BreadCumb';
import BlogCard from '@/app/Components/Blog/Blog4';
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

  return (
    <div>
       <BreadCumb
          bgimg="/assets/img/breadcrumb.jpg"
          Title="Insights, Ideas & Digital Innovation From Vaqtrix"
      ></BreadCumb>     
      {/* User requested the exact same UI as the main blog layout here */}
      <BlogCard initialCategory={post.category} />
    </div>
  );
}
