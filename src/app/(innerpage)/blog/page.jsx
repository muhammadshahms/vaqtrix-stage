import BlogCard from '@/Components/Blog/Blog4';
import BreadCumb from '@/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Insights, Ideas & Digital Innovation From Vaqtrix"
            ></BreadCumb>     
         <BlogCard />
            
    </div>
  );
};

export default page;