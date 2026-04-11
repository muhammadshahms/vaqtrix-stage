import About2 from '@/app/Components/About/About2';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Counter3 from '@/app/Components/Counter/Counter3';
// import Team2 from '@/app/Components/Team/Team2';
import WhyChoose2 from '@/app/Components/WhyChoose/WhyChoose2';
import Value1 from '@/app/Components/Value/Value1';
import ContactInfo1 from '@/app/Components/ContactInfo/ContactInfo1';
import Blog1 from '@/app/Components/Blog/Blog1';
import React from 'react';
import Faq1 from '@/app/Components/Faq/Faq1';
import Marquee3 from '@/app/Components/Marquee/Marquee3';
import OverMition from "../../Components/About/OverMetion"
import Gamecard from "../../Components/About/Gameccards"
import Testimonial1 from '../../Components/Testimonial/Testimonial1';

const page = () => {
    return (
        <div>
            <BreadCumb

                Title="about us"

            ></BreadCumb>
            <About2 addclass="about-section-2 fix section-padding"></About2>
            <OverMition />
            <Counter3></Counter3>
            <Value1></Value1>
            {/* <Team2></Team2> */}
            < WhyChoose2></WhyChoose2>
            <Gamecard />
            <Faq1 addclass="faq-section section-padding " category="about" ></Faq1>
            <Marquee3 category="about" />
            <Testimonial1  category="about"/>
            <ContactInfo1></ContactInfo1>
            <Blog1
                subTitle="BLOG & INSIGHTS"
                heading={<>Vaqtrix Insights & Company Updates</>}
                category="About Vaqtrix"
            />
        </div>
    );
};

export default page;