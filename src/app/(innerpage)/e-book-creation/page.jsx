import BreadCumb from '@/Components/Common/BreadCumb';
import CaseStudy4 from '@/Components/CaseStudy/CaseStudy4';
import { Suspense } from 'react';
import Services3 from '@/Components/Services/Services3';
// import TechStack from '@/Components/Services/TechStack';
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
        Title="E-Book Creation"
      ></BreadCumb>
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <CaseStudy4 category={["All"]} />
      </Suspense>
      <Services3 category={ServicesData.Ebook} />
      <WhyChoose4 categoryId="Ebook" />
      <SecurityGrowth category="Ebook" />
      {/* <PdfGallery categoryId="Ebook" /> */}
      <Pricing2

        pricingDataKey="Ebook"
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={false}

      />
      {/* <TechStack></TechStack> */}
      <WhyChoose4 categoryId="Ebook2.0" />
      <Faq1 addclass="faq-section section-padding " category="ebook" ></Faq1>
      <Marquee3 category="ebook" />
<Testimonial1 category="ebook" />
      <ContactInfo1></ContactInfo1>
    <Blog1
        subTitle="BLOG & INSIGHTS"
        heading={<>E-Book Creation & Content Strategy Insights</>}
        category="E-book Creations"
      />

    </div>
  );
};

export default page;