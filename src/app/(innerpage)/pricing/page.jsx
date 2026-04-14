import BreadCumb from '@/app/Components/Common/BreadCumb';
import Faq1 from '@/app/Components/Faq/Faq1';
import Pricing2 from "@/Components/Pricing/Pricng2';
import React from 'react';


const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Explore Vaqtrix Service Packages & Solutions"
      ></BreadCumb>
      <Pricing2
        pricingDataKey={["home", "website", "app", "seo", "branding", "socialmedia", "googleads", "logodesign", "ecom"]}
        buttonLabels={{
          home: "Ai Development",
          website: "Website Development",
          app: "Mobile App Development",
          seo: "Search Engine Optimization",
          branding: "Design & Branding",
          socialmedia: "Social Media Management",
          googleads: "Google Ads (PPC)",
          logodesign: "Logo Design",
          ecom: "E-Commerce Development",
        }}
        monthlyAndYearly={false}
        showButton={true}
        showPlanSelector={true}
        showSubtitle={false}

      />
      {/* <Faq1 addclass="faq-section section-padding pt-0"></Faq1> */}
    </div>
  );
};

export default page;