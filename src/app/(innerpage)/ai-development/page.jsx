import BreadCumb from '@/Components/Common/BreadCumb';
import CaseStudy4 from '@/Components/CaseStudy/CaseStudy4';
import { Suspense } from 'react';
import Services3 from '@/Components/Services/Services3';
import TechStack from '@/Components/Services/TechStack';
// import Pricing2 from '@/Components/Pricing/Pricng2';
import WhyChoose4 from '@/Components/WhyChoose/WhyChoose4';
// import PdfGallery from "@/Components/Services/PdfGallery"
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
        Title="Vaqtrix Creates AI-Driven Business Systems"
      ></BreadCumb>
      <WhyChoose4 categoryId="Ai" />
      <SecurityGrowth category="Vaqtrix AI Automation Solutions We Deliver" />
        
      {/* <PdfGallery categoryId="Ai" /> */}
      {/* <Pricing2

        pricingDataKey="Ai"
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={false}

      /> */}
                  <TechStack category='ai' bgColor="#EBF4EB"/> 
      <Services3 category={ServicesData.Ai} />
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <CaseStudy4 defaultCategory="All" />
      </Suspense>
      <WhyChoose4 categoryId="Ai2.0" />
      <Faq1 addclass="faq-section section-padding " category="ai" ></Faq1>
      <Marquee3 category="ai" />
      <Testimonial1 category="ai" />
       <ContactInfo1></ContactInfo1>
      <Blog1
        subTitle="BLOG & INSIGHTS"
        heading={<>AI Development & Automation Insights</>}
        category="AI Development"
      />

    </div>
  );
};

export default page;