import CaseStudy4 from '@/Components/CaseStudy/CaseStudy4';
import BreadCumb from '@/Components/Common/BreadCumb';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Explore Vaqtrix Portfolio of Digital Innovation"
            ></BreadCumb>       
            <Suspense fallback={<div>Loading...</div>}>
              <CaseStudy4></CaseStudy4>        
            </Suspense>
    </div>
  );
};

export default page;