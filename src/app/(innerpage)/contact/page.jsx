import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo2 from '@/app/Components/ContactInfo/ContactInfo2';
import React from 'react';

const page = () => {
  return (
    <div>
          <BreadCumb
            bgimg="/assets/img/breadcrumb.jpg"
            Title="Let’s Build Your Next Digital Solution"
        ></BreadCumb>  
        <ContactInfo2/>     
    </div>
  );
};

export default page;