import BreadCumb from '@/app/Components/Common/BreadCumb';
import BlogCard from '@/app/Components/Blog/Blog4';

const normalize = (value = '') => {
  try {
    return decodeURIComponent(String(value)).trim().toLowerCase();
  } catch {
    return String(value).trim().toLowerCase();
  }
};

const firstQueryValue = (value) => (Array.isArray(value) ? value[0] : value);

export default async function BlogDetailsPage({ searchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const serviceParamRaw = firstQueryValue(resolvedSearchParams?.service);
  const normalizedService = serviceParamRaw ? normalize(serviceParamRaw) : '';

  // Keep tab selection consistent with query values from card links.
  const initialCategory = serviceParamRaw
    ? decodeURIComponent(String(serviceParamRaw)).trim()
    : 'All';

  return (
    <div>
       <BreadCumb
          bgimg="/assets/img/breadcrumb.jpg"
          Title="Insights, Ideas & Digital Innovation From Vaqtrix"
      ></BreadCumb>     
      <BlogCard initialCategory={normalizedService ? initialCategory : 'All'} />
    </div>
  );
}
