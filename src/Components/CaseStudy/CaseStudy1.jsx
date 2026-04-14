"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import caseStudies from "@/data/caseStudiesData.json";
import MotionText from "../AnimateOnScroll/MotionText";
import MotionImage from "../AnimateOnScroll/MotionImage";
import { fadeUp, staggerContainer } from "../AnimateOnScroll/motion";

const CaseStudy1 = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="case-study-section fix section-padding">
            <div className="container">

                {/* 🔹 HEADING */}
                <MotionText>
                    <div className="section-title-area">
                        <div className="section-title section-title-center">
                            <div className="sub-title">
                                <span>OUR SERVICES</span>
                            </div>
                            <h2>
                                AI-Powered Software & Digital Solutions Built for Real Business Growth
                            </h2>
                        </div>
                    </div>
                </MotionText>

                {/* 🔹 SHAPES */}
                <MotionImage direction="left">
                    {/* <div className="overlay-shape">
                        <Image src="/assets/img/case-studies/overlay-shape.png" alt="overlay" width={411} height={1006} />
                    </div> */}
                </MotionImage>

                {/* <MotionImage direction="left">
                    <div className="left-shape float-bob-x">
                        <Image src="/assets/img/case-studies/left-shape.png" alt="left" width={186} height={225} />
                    </div>
                </MotionImage> */}

                {/* <MotionImage direction="right">
                    <div className="right-shape float-bob-x">
                        <Image src="/assets/img/case-studies/right-shaape.png" alt="right" width={127} height={135} />
                    </div>
                </MotionImage> */}

                {/* 🔹 CARDS */}
                <motion.div
                    className="case-study-wrapper"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <div className="main-box">
                                {caseStudies.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        variants={fadeUp}
                                        className={`box ${item.bg} ${activeIndex === index ? "active" : ""}`}
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        <div className="title-items">
                                           
                                            <h3>
                                                <Link href={item.blink}>{item.title}</Link>
                                            </h3>
                                            <span className="number">{item.number}</span>
                                        </div>

                                        <span className="number-hover">{item.number}</span>

                                        <div className="project-content text-start px-3">
                                            <h3>
                                                <Link href={item.blink}>{item.title}</Link>
                                            </h3>
                                            <p>{item.description}</p>
                                            {/* ✅ Button updated */}
                                            <Link href={item.blink} className="link-btn">
                                                {item.bname} <i className="bi bi-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CaseStudy1;