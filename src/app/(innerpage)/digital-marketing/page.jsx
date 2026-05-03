import BreadCumb from '@/Components/Common/BreadCumb';
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
import CaseStudy4 from '@/Components/CaseStudy/CaseStudy4';
import Testimonial1 from "@/Components/Testimonial/Testimonial1";


const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Vaqtrix Drives Brand Growth With Digital Marketing"
      ></BreadCumb>
      <WhyChoose4 categoryId="Digital" />
      <SecurityGrowth category="Vaqtrix Digital Marketing Solutions Built For Real Growth" />
      <TechStack category='digital'/> 
      <Services3 category={ServicesData.Digital} />
      <WhyChoose4 categoryId="Digital2.0" />
      <Faq1 addclass="faq-section section-padding " category="digital" ></Faq1>
      <Marquee3 category="digital" />
      <Testimonial1 category="digital" />

      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <CaseStudy4
          category={[
            "Mascot Logos",
            "Social Media",
            "Design Logo"
          ]}
          topHeading="Digital Marketing Campaigns That Deliver Real Growth"
          topText="Explore a selection of digital marketing and branding projects delivered by Vaqtrix."
          hideFilters={true}
        />
      </Suspense>

      {/* <PdfGallery categoryId="Digital" /> */}
      <Pricing2
        pricingDataKey={["seo", "branding", "socialmedia", "googleads", "logodesign"]}
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={true}
      />
      
      <Blog1
        subTitle="BLOG & INSIGHTS"
        heading={<>Digital Marketing & Brand Design Insights</>}
        category="Digital Marketing & Branding"
      />

      <ContactInfo1></ContactInfo1>

    </div>
  );
};

export default page;