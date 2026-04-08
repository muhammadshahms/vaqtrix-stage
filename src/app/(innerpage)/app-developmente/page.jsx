import BreadCumb from '@/app/Components/Common/BreadCumb';
import Services3 from '@/app/Components/Services/Services3';
import TechStack from '@/app/Components/Services/TechStack';
import Pricing2 from '@/app/Components/Pricing/Pricng2';
import WhyChoose4 from '@/app/Components/WhyChoose/WhyChoose4';
import PdfGallery from "../../Components/Services/PdfGallery"
import ContactInfo1 from '../../Components/ContactInfo/ContactInfo1';
// import Blog1 from '../../Components/Blog/Blog1';
import Faq1 from '../../Components/Faq/Faq1';
import Marquee3 from '../../Components/Marquee/Marquee3';
import SecurityGrowth from "../../Components/Services/SecurityGrowth"
import React from 'react';
import ServicesData from "../../data/services.json"
import Testimonial1 from '../../Components/Testimonial/Testimonial1';


const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Vaqtrix Builds Scalable Mobile Apps for Growth"
      ></BreadCumb>
      <WhyChoose4 categoryId="App" />
      <SecurityGrowth category="Mobile App Development Services Built to Scale" />
      <PdfGallery categoryId="App" />
      <Pricing2

        pricingDataKey="app"
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={false}

      />
             <TechStack category='app'/> 
        <Services3 category={ServicesData.App} />
      <WhyChoose4 categoryId="Ai2.0" />
      <Faq1 addclass="faq-section section-padding " category="app" ></Faq1>
      <Marquee3 category="app" />
<Testimonial1 category="app" />
      <ContactInfo1></ContactInfo1>
     {/* <Blog1
        subTitle="BLOG & INSIGHTS"
        heading={<>Mobile App Development & Design Insights</>}
        category="Mobile App Development"
      /> */}

    </div>
  );
};

export default page;