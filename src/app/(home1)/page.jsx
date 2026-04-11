import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo';
import About1 from '../Components/About/About1';
import CaseStudy1 from '../Components/CaseStudy/CaseStudy1';
import SuccessStories from '../Components/SuccessStories/SuccessStories';
import Pricing2 from '../Components/Pricing/Pricng2';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import ContactInfo1 from '../Components/ContactInfo/ContactInfo1';
import Blog1 from '../Components/Blog/Blog1';
import Faq1 from '../Components/Faq/Faq1';
import Marquee3 from "../Components/Marquee/Marquee3"




const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <WhatWeDo></WhatWeDo>
            <About1></About1>
            <CaseStudy1></CaseStudy1>
            <Pricing2

                pricingDataKey="home"
                monthlyAndYearly={false}
                showPlanSelector={false}
                showButton={true}

            />
            <SuccessStories></SuccessStories>
            <Faq1 addclass="faq-section section-padding " category="home" ></Faq1>
            <Marquee3 category="home" />


            <Testimonial1 category="home" />
            <ContactInfo1></ContactInfo1>
            <Blog1
                subTitle="BLOG & INSIGHTS"
                heading={<>AI, SEO & Digital Growth Insights<br />to Scale Your Business</>}
                category="General"
            />
        </div>

    );
};

export default page;