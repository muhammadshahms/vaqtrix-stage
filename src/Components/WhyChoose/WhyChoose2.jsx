"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import Link from "next/link";

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#1A4002"/>
    </svg>
);

const ServiceLink = ({ href, children }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                color: hovered ? "#81EA06" : "#1C4401",
                textDecoration: hovered ? "underline" : "none",
                textUnderlineOffset: "4px",
                fontWeight: 600,
                transition: "color 0.3s ease, text-decoration 0.3s ease",
            }}
        >
            <span>{children}</span>
        </Link>
    );
};

const WhyChoose2 = () => {

    const chooseContent = {
        subtitle: "OUR SERVICES",
        title: "Let's Explore AI-Powered Solutions Built for Your Business",
        content: "Whether you're looking to build intelligent software, automate operations, or scale your digital growth, our AI-driven services are designed to adapt to your goals, industry, and future ambitions.",
        img:"/assets/img/About Graphics/Let\u2019s-Explore-AI-Powered-Solutions-Built-for-Your-Business.png",         
        listCol1: [
            'AI-Driven Digital Marketing',
            'AI Development',
            'Website Development',
        ],
        listCol2: [
            'App Development',
            'E-Commerce Solutions',
            'E-Book Creation',
        ],
    }

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="team-section fix section-padding bg-cover" style={{ overflow: 'hidden' }}>

            <div className="container py-5">
                <div className="row g-4 align-items-center">

                    {/* LEFT — Image */}
                    <div className="col-12 col-lg-6 text-center">
                        <Image
                            src={chooseContent.img}
                            alt="AI Solutions"
                            className="wow img-custom-anim-left img-fluid"
                            width={391}
                            height={539}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>

                    {/* RIGHT — Content */}
                    <div className="col-12 col-lg-6">
                        <div className="team-content">

                            {/* Sub Title */}
                            <div className="section-title mb-3">
                                <div className="sub-title bg-color-2 wow fadeInUp d-inline-flex mb-2">
                                    <span>{chooseContent.subtitle}</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    {chooseContent.title}
                                </h2>
                            </div>

                            {/* Paragraph */}
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                {chooseContent.content}
                            </p>

                            {/* List — 2 columns */}
                            <div className="row g-2 my-3 wow fadeInUp" data-wow-delay=".3s">

                                {/* Column 1 */}
                                <div className="col-12 col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        {chooseContent.listCol1.map((item, i) => (
                                            <li key={i} className="d-flex align-items-center gap-2 mb-2">
                                                <CheckIcon />
                                                <ServiceLink href="/">{item}</ServiceLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Column 2 */}
                                <div className="col-12 col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        {chooseContent.listCol2.map((item, i) => (
                                            <li key={i} className="d-flex align-items-center gap-2 mb-2">
                                                <CheckIcon />
                                                <ServiceLink href="/">{item}</ServiceLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            {/* Button */}
                            {/* <div className="main-button wow fadeInUp mt-3" data-wow-delay=".5s">
                                <Link href="/undercunstraction">
                                    <span className="theme-btn">Explore Our Packages</span>
                                </Link>
                            </div> */}

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default WhyChoose2;