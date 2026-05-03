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
import SecurityGrowth from "@/Components/Services/SecurityGrowth";
import React from 'react';
import ServicesData from "@/data/services.json";
import Testimonial1 from "@/Components/Testimonial/Testimonial1";

const Page = () => {
	return (
		<div>
			<BreadCumb
				bgimg="/assets/img/hero/Sample-Hero-1.png"
				Title="Scalable App Development Solutions"
			/>
			<WhyChoose4 categoryId="App" />
			<SecurityGrowth category="Mobile App Development Services Built to Scale" />
			<TechStack category='app' />
			<Services3 category={ServicesData.App} />
			<WhyChoose4 categoryId="App2.0" />
			<Faq1 addclass="faq-section section-padding " category="app" />
			<Marquee3 category="app" />
			<Testimonial1 category="app" />
			
			<Suspense fallback={<div>Loading Portfolio...</div>}>
				<CaseStudy4 defaultCategory="App Development" hideFilters={true} />
			</Suspense>

			{/* <PdfGallery categoryId="App" /> */}
			{/* <Pricing2
				pricingDataKey="app"
				monthlyAndYearly={false}
				showButton={true}
				showPlanSelector={false}
			/> */}
			
			<Blog1
				subTitle="BLOG & INSIGHTS"
				heading={<>Mobile App Development & Design Insights</>}
				category="Mobile App Development"
			/>

			<ContactInfo1 />
		</div>
	);
};

export default Page;
