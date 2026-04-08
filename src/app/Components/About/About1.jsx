"use client"
import { useEffect } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";
import MotionText from "../AnimateOnScroll/MotionText";
import MotionImage from "../AnimateOnScroll/MotionImage";

const About1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 5 } },
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
            { breakpoint: 400, settings: { slidesToShow: 2 } },
        ]
    };

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const brandContent = [
        { img: '/assets/img/Home Icons/Logos/Flutter.png', alt: 'Flutter' },
        { img: '/assets/img/Home Icons/Logos/Laravel.png', alt: 'Laravel' },
        { img: '/assets/img/Home Icons/Logos/MongoDB.png', alt: 'MongoDB' },
        { img: '/assets/img/Home Icons/Logos/Next JS.png', alt: 'Next JS' },
        { img: '/assets/img/Home Icons/Logos/Node JS.png', alt: 'Node JS' },
        { img: '/assets/img/Home Icons/Logos/Python.png', alt: 'Python' },
        { img: '/assets/img/Home Icons/Logos/React (2).png', alt: 'React' },
        { img: '/assets/img/Home Icons/Logos/React.png', alt: 'React Native' },
        { img: '/assets/img/Home Icons/Logos/Shopify.png', alt: 'Shopify' },
        { img: '/assets/img/Home Icons/Logos/Vercel.png', alt: 'Vercel' },
        { img: '/assets/img/Home Icons/Logos/WIX.png', alt: 'WIX' },
        { img: '/assets/img/Home Icons/Logos/Wordpress.png', alt: 'Wordpress' },
    ];

    const aboutContent = {
        bg: '/assets/img/Home/Hero-BG.png',
        img: '/assets/img/about/01.png',
        subtitle: "ABOUT COMPANY",
        title: 'AI-Driven Expertise to Build, Scale & Future Proof Businesses',
        content: 'Vaqtrix is an AI-centric software and digital solutions company focused on building intelligent, automation driven systems that help businesses grow faster, operate smarter, and stay competitive in global markets. We combine advanced AI, scalable technology, and performance driven strategies to deliver measurable business impact',
        number1: '95%',
        content2: 'AI-Optimised Search & Visibility Growth',
        number2: '90%',
        content3: 'Automation Driven Performance & ROI Delivery',
    };

    return (
        <section
            className="about-section fix section-padding"
            data-background={aboutContent.bg}
            style={{
                paddingBottom: "50px",
                backgroundImage: `url(${aboutContent.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll", /* 'fixed' breaks on iOS Safari */
            }}
        >
            <div className="container">

                {/* ── Brand / Logo Slider ── */}
                <div className="brand-wrapper mb-4 mb-md-5">
                    <MotionText>
                        <h4 className="brand-title text-center text-md-start mb-3">
                            1k + Brands Trust Us
                        </h4>
                    </MotionText>

                    <div className="brand-slider">
                        <Slider {...settings}>
                            {brandContent.map((item, i) => (
                                <div key={i}>
                                    <div
                                        className="brand-img d-flex align-items-center justify-content-center px-2 px-sm-3 py-2"
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.alt}
                                            width={120}
                                            height={120}
                                            style={{
                                                width: "100%",
                                                maxWidth: "100px",
                                                height: "auto",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* ── About Content ── */}
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">

                        {/* Left – Video */}
                        <div className="col-12 col-lg-6">
                            <div className="about-image w-100">
                                <MotionImage>
                                    <video
                                        className="w-100 rounded"
                                        style={{ height: "auto", display: "block" }}
                                        controls
                                    >
                                        <source src="/assets/video/song.mp4" type="video/mp4" />
                                    </video>
                                </MotionImage>
                            </div>
                        </div>

                        {/* Right – Text */}
                        <div className="col-12 col-lg-6">
                            <div className="about-content text-white">

                                {/* Section title */}
                                <div className="section-title mb-3">
                                    <MotionText>
                                        <div className="sub-title bg-color-2-about wow fadeInUp mb-2">
                                            <span>{aboutContent.subtitle}</span>
                                        </div>
                                        <h2
                                            className="wow fadeInUp text-white fs-2 fs-md-1"
                                            data-wow-delay=".3s"
                                        >
                                            {aboutContent.title}
                                        </h2>
                                    </MotionText>
                                </div>

                                {/* Description */}
                                <MotionText>
                                    <p
                                        className="wow fadeInUp mt-2 mt-md-3"
                                        data-wow-delay=".5s"
                                    >
                                        {aboutContent.content}
                                    </p>
                                </MotionText>

                                {/* Stats – circular progress */}
                                <div
                                    className="circle-progress-bar-wrapper my-3 my-md-4 d-flex flex-column flex-md-row"
                                    style={{ gap: "24px" }}
                                >
                                    {/* Stat 1 */}
                                    <div
                                        className="single-circle-bar wow fadeInUp"
                                        data-wow-delay=".3s"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            flex: "1 1 0",
                                            minWidth: 0,
                                        }}
                                    >
                                        <div
                                            className="circle-bar"
                                            data-duration="2000"
                                            style={{ flexShrink: 0 }}
                                        >
                                            <div className="circle-border-area">
                                                <span className="text-white">{aboutContent.number1}</span>
                                            </div>
                                        </div>
                                        <div className="content" style={{ minWidth: 0 }}>
                                            <h6
                                                className="mb-0 text-white"
                                                style={{ fontSize: "0.85rem", lineHeight: "1.4" }}
                                            >
                                                {parse(aboutContent.content2)}
                                            </h6>
                                        </div>
                                    </div>

                                    {/* Stat 2 */}
                                    <div
                                        className="single-circle-bar wow fadeInUp"
                                        data-wow-delay=".5s"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            flex: "1 1 0",
                                            minWidth: 0,
                                        }}
                                    >
                                        <div
                                            className="circle-bar"
                                            data-duration="2000"
                                            style={{ flexShrink: 0 }}
                                        >
                                            <div className="circle-border-area">
                                                <span className="text-white">{aboutContent.number2}</span>
                                            </div>
                                        </div>
                                        <div className="content" style={{ minWidth: 0 }}>
                                            <h6
                                                className="mb-0 text-white"
                                                style={{ fontSize: "0.85rem", lineHeight: "1.4" }}
                                            >
                                                {parse(aboutContent.content3)}
                                            </h6>
                                        </div>
                                    </div>

                                </div>

                                {/* CTA Button */}
                                <Link
                                    href="/contact"
                                    className="main-button wow fadeInUp d-inline-block"
                                    data-wow-delay=".3s"
                                >
                                    <span className="theme-btn">Explore Our Expertise</span>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About1;
