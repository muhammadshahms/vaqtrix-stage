import BreadCumb from '@/Components/Common/BreadCumb';
import Services3 from '@/Components/Services/Services3';
import TechStack from '@/Components/Services/TechStack';
import Pricing2 from '@/Components/Pricing/Pricng2';
import WhyChoose4 from '@/Components/WhyChoose/WhyChoose4';
import PdfGallery from "@/Components/Services/PdfGallery"
import ContactInfo1 from "@/Components/ContactInfo/ContactInfo1";
import Blog1 from "@/Components/Blog/Blog1";
import Faq1 from "@/Components/Faq/Faq1";
import Marquee3 from "@/Components/Marquee/Marquee3";
import SecurityGrowth from "@/Components/Services/SecurityGrowth"
import React from 'react';
import ServicesData from "@/data/services.json"
import Testimonial1 from "@/Components/Testimonial/Testimonial1";


const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Vaqtrix Builds Scalable E-commerce Platforms"
      ></BreadCumb>
      <WhyChoose4 categoryId="Ecom" />
      <SecurityGrowth category="Vaqtrix E-Commerce Solutions Built To Scale" />
      <PdfGallery categoryId="Ecom" />
      <Pricing2

        pricingDataKey="ecom"
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={false}

      />
       <TechStack category='ecom'/>   
      <Services3 category={ServicesData.Ecom} />
      <WhyChoose4 categoryId="Ecom2.0" />
      <Faq1 addclass="faq-section section-padding " category="ecom" ></Faq1>
      <Marquee3 category="ecom" />
      <Testimonial1 category="ecom" />
      <ContactInfo1></ContactInfo1>
      <Blog1
        subTitle="BLOG & INSIGHTS"
        heading={<>E-commerce Growth & Online Store Insights</>}
        category="E-commerce Solutions"
      />

    </div>
  );
};

export default page;