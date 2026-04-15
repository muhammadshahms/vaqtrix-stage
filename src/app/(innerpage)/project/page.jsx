import CaseStudy4 from '@/Components/CaseStudy/CaseStudy4';
import BreadCumb from '@/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Explore Vaqtrix Portfolio of Digital Innovation"
            ></BreadCumb>       
            <CaseStudy4></CaseStudy4>        
    </div>
  );
};

export default page;