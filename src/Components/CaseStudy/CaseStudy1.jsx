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
                    <div className="bento-grid">
                        {caseStudies.slice(0, 6).map((item, index) => {
                            let cardThemeClass = "dark-green";
                            if (index === 0) cardThemeClass = "light-green";
                            if (index === 3) cardThemeClass = "pale-green";
                            
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={fadeUp}
                                    className={`bento-card bento-item-${index + 1} ${cardThemeClass}`}
                                >
                                    <div>
                                        <div className="bento-number">{item.number}</div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        
                                        {/* Card specific decorations based on the image */}
                                        {index === 0 && (
                                            <>
                                                <div className="flex-tags">
                                                    <span>SEO</span><span>PPC</span><span>Email</span><span>Social</span>
                                                </div>
                                                <div className="bento-stats-main">
                                                    75%
                                                    <span>AVG GROWTH RATE</span>
                                                </div>
                                            </>
                                        )}
                                        {index === 4 && (
                                            <div className="bento-stats">
                                                <div>
                                                    <div className="stat-num">50+</div>
                                                    <span>STORES</span>
                                                </div>
                                                <div>
                                                    <div className="stat-num">98%</div>
                                                    <span>UPTIME</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <Link href={item.blink} className="bento-link">
                                        {item.bname} <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                    
                    <style dangerouslySetInnerHTML={{__html: `
                        .bento-grid {
                            display: grid;
                            gap: 1.25rem;
                            grid-template-columns: 1fr;
                            margin-top: 2rem;
                        }
                        .bento-card {
                            padding: 1.5rem;
                            border-radius: 1.25rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            text-align: left;
                            transition: transform 0.3s ease;
                            min-height: max-content;
                        }
                        .bento-card:hover {
                            transform: translateY(-5px);
                        }
                        @media (min-width: 768px) {
                            .bento-grid {
                                grid-template-columns: repeat(2, 1fr);
                            }
                            .bento-item-1 { grid-column: 1 / -1; }
                            .bento-item-6 { grid-column: 1 / -1; }
                        }
                        @media (min-width: 1024px) {
                            .bento-grid {
                                grid-template-columns: repeat(3, 1fr);
                                grid-auto-rows: max-content;
                                grid-auto-flow: dense;
                            }
                            .bento-item-1 { grid-column: 1 / 2; grid-row: 1 / 3; }
                            .bento-item-2 { grid-column: 2 / 3; grid-row: 1 / 2; }
                            .bento-item-3 { grid-column: 3 / 4; grid-row: 1 / 2; }
                            .bento-item-4 { grid-column: 2 / 3; grid-row: 2 / 3; }
                            .bento-item-5 { grid-column: 3 / 4; grid-row: 2 / 3; }
                            .bento-item-6 { 
                                grid-column: 1 / -1; 
                                grid-row: 3 / 4; 
                            }
                        }
                        
                        .bento-card.dark-green { background-color: #1a3b11; color: #fff; }
                        .bento-card.light-green { background-color: #82fc28; color: #000; }
                        .bento-card.pale-green { background-color: #e3fdb4; color: #000; }
                        
                        .bento-number {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                            font-size: 0.8rem;
                            font-weight: 700;
                            margin-bottom: 0.75rem;
                        }
                        .dark-green .bento-number { color: #82fc28; background: #265213; }
                        .light-green .bento-number { color: #000; background: rgba(0,0,0,0.1); margin-bottom: 0.5rem; }
                        .pale-green .bento-number { color: #000; background: rgba(0,0,0,0.1); }
                        
                        .bento-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 700; }
                        .dark-green h3 { color: #fff; }
                        .light-green h3 { color: #000; font-size: 1.6rem; line-height: 1.1; margin-bottom: 0.5rem; }
                        .pale-green h3 { color: #000; }
                        
                        .bento-card p { font-size: 0.9rem; opacity: 0.9; margin-bottom: 1.25rem; line-height: 1.5; }
                        .dark-green p { color: #e0e0e0; }
                        .light-green p { color: #222; font-size: 0.875rem; margin-bottom: 0.75rem; line-height: 1.4; }
                        .pale-green p { color: #333; }
                        
                        .bento-link {
                            display: inline-flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.6rem 1rem;
                            border-radius: 0.5rem;
                            font-weight: 600;
                            text-transform: uppercase;
                            font-size: 0.7rem;
                            letter-spacing: 0.5px;
                            border: 1px solid rgba(255,255,255,0.2);
                            transition: all 0.3s ease;
                            text-decoration: none;
                            width: max-content;
                            margin-top: 0.25rem;
                        }
                        .dark-green .bento-link { color: #fff; border-color: rgba(255,255,255,0.3); }
                        .dark-green .bento-link:hover { background: #fff; color: #1a3b11; border-color: #fff; }
                        
                        .light-green .bento-link { color: #000; border-color: rgba(0,0,0,0.2); margin-top: 0;}
                        .light-green .bento-link:hover { background: #000; color: #82fc28; border-color: #000; }
                        
                        .pale-green .bento-link { color: #000; border-color: rgba(0,0,0,0.2); background: rgba(255,255,255,0.4); }
                        .pale-green .bento-link:hover { background: #000; color: #e3fdb4; border-color: #000; }

                        .flex-tags {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 0.3rem;
                            margin-bottom: 0.75rem;
                        }
                        .flex-tags span {
                            padding: 0.2rem 0.5rem;
                            border-radius: 2rem;
                            background: rgba(0,0,0,0.05);
                            border: 1px solid rgba(0,0,0,0.1);
                            font-size: 0.65rem;
                            font-weight: 600;
                        }
                        .bento-stats-main {
                            font-size: 2.5rem;
                            font-weight: 800;
                            line-height: 1;
                            margin-bottom: 0.5rem;
                            margin-top: auto;
                        }
                        .bento-stats-main span {
                            display: block;
                            font-size: 0.65rem;
                            font-weight: 600;
                            letter-spacing: 1px;
                            opacity: 0.7;
                            margin-top: 0.15rem;
                        }
                        .bento-stats {
                            display: flex;
                            gap: 1.25rem;
                            margin-bottom: 0.75rem;
                            margin-top: auto;
                        }
                        .stat-num {
                            font-size: 1.5rem;
                            font-weight: 800;
                            color: #82fc28;
                            line-height: 1;
                            margin-bottom: 0.25rem;
                        }
                        .bento-stats span {
                            font-size: 0.65rem;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                            opacity: 0.8;
                        }
                    `}} />
                </motion.div>

            </div>
        </section>
    );
};

export default CaseStudy1;