import BreadCumb from '@/Components/Common/BreadCumb';
import CaseStudy4 from '@/Components/CaseStudy/CaseStudy4';
import { Suspense } from 'react';
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
        bgimg="/assets/img/hero/Sample-Hero-1.png"
        Title="Vaqtrix Builds AI-Powered Websites That Convert & Scale
"
      ></BreadCumb>
      <WhyChoose4 categoryId="Website" />
      <SecurityGrowth category="High Performance Website Development Services" />
      <TechStack category='website' bgColor="#EBF4EB" />
      <Services3 category={ServicesData.Website} />
      <WhyChoose4 categoryId="Website2.0" />
      <Faq1 addclass="faq-section section-padding " category="website" ></Faq1>
      <Marquee3 category="website" />
      <Testimonial1 category="website" />
      
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <CaseStudy4 defaultCategory="Website Development" />
      </Suspense>

      {/* <PdfGallery categoryId="Website" /> */}
      {/* <Pricing2
        pricingDataKey="Website"
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={false}
      /> */}
      
      <Blog1
        subTitle="BLOG & INSIGHTS"
        heading={<>Website Development & Design Insights <br/>  For Modern Businesses</>}
        category="Website Development"
      />

      <ContactInfo1></ContactInfo1>

    </div>
  );
};

export default page;