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

                <MotionImage direction="left"></MotionImage>

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
                        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                        .case-study-section,
                        .case-study-section * {
                            font-family: 'Plus Jakarta Sans', sans-serif;
                        }

                        .case-study-section .section-title h2 {
                            font-weight: 800;
                            color: #1a3b11;
                        }

                        .case-study-section .sub-title span {
                            color: #1a3b11;
                        }

                        /* ── GRID LAYOUT ── */
                        .bento-grid {
                            display: grid;
                            gap: 1rem;
                            grid-template-columns: 1fr;
                            margin-top: 2rem;
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
                            .bento-item-6 { grid-column: 1 / -1; grid-row: 3 / 4; }
                        }

                        /* ── BASE CARD ── */
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

                        /* Outer section background */
                        .case-study-section {
                            background-color: #ebf4eb;
                        }

                        /* dark-green cards → solid dark panels */
                        .bento-card.dark-green {
                            background: #1a3b11;
                            border: none;
                            color: #fff;
                        }

                        /* pale-green card (index 3) → lime */
                        .bento-card.pale-green {
                            background: #e3fdb4;
                            border: none;
                            color: #0e2800;
                        }

                        /* ── NUMBER BADGE ── */
                        .bento-number {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            padding: 3px 12px;
                            border-radius: 20px;
                            font-size: 0.75rem;
                            font-weight: 600;
                            margin-bottom: 0.75rem;
                            width: fit-content;
                        }
                        .dark-green .bento-number {
                            background: rgba(129, 234, 6, 0.12);
                            color: #f1f1f1;
                        }
                        .pale-green .bento-number {
                            background: rgba(26, 59, 17, 0.12);
                            color: #1a3b11;
                        }

                        /* ── HEADINGS ── */
                        .bento-card h3 {
                            font-size: 1.25rem;
                            font-weight: 700;
                            margin-bottom: 0.5rem;
                            line-height: 1.25;
                        }
                        .dark-green h3  { color: #ffffff; }
                        .pale-green h3  { color: #0e2800; font-size: 1.5rem; }

                        /* ── BODY TEXT ── */
                        .bento-card p {
                            font-size: 0.875rem;
                            font-weight: 400;
                            line-height: 1.6;
                            margin-bottom: 1rem;
                        }
                        .dark-green p  { color: rgba(255, 255, 255, 0.65); }
                        .pale-green p  { color: rgba(14, 40, 0, 0.65); }

                        /* ── CTA BUTTON ── */
                        .bento-link {
                            display: inline-flex;
                            align-items: center;
                            gap: 0.4rem;
                            padding: 0.55rem 1rem;
                            border-radius: 0.6rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            font-size: 0.68rem;
                            letter-spacing: 0.06em;
                            border: 1px solid;
                            transition: all 0.25s ease;
                            text-decoration: none;
                            width: max-content;
                            margin-top: 0.5rem;
                        }
                        .dark-green .bento-link {
                            color: #81ea06;
                            border-color: rgba(129, 234, 6, 0.35);
                            background: transparent;
                        }
                        .dark-green .bento-link:hover {
                            background: rgba(129, 234, 6, 0.08);
                            border-color: rgba(129, 234, 6, 0.6);
                        }
                        .pale-green .bento-link {
                            color: #0e2800;
                            border-color: rgba(14, 40, 0, 0.3);
                            background: transparent;
                        }
                        .pale-green .bento-link:hover {
                            background: rgba(14, 40, 0, 0.07);
                        }

                        /* ── TAGS (card 1) ── */
                        .flex-tags {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 0.3rem;
                            margin-bottom: 0.75rem;
                        }
                        .flex-tags span {
                            padding: 0.25rem 0.65rem;
                            border-radius: 2rem;
                            background: rgba(255, 255, 255, 0.08);
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            font-size: 0.68rem;
                            font-weight: 600;
                            color: rgba(255, 255, 255, 0.85);
                        }

                        /* ── BIG STAT (card 1) ── */
                        .bento-stats-main {
                            font-size: 3rem;
                            font-weight: 800;
                            line-height: 1;
                            letter-spacing: -2px;
                            color: #81ea06;
                            margin-top: auto;
                            margin-bottom: 0.5rem;
                        }
                        .bento-stats-main span {
                            display: block;
                            font-size: 0.65rem;
                            font-weight: 600;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.5);
                            margin-top: 0.2rem;
                        }

                        /* ── INLINE STATS (card 5) ── */
                        .bento-stats {
                            display: flex;
                            gap: 1.25rem;
                            margin-bottom: 0.75rem;
                            margin-top: auto;
                        }
                        .stat-num {
                            font-size: 1.6rem;
                            font-weight: 800;
                            color: #81ea06;
                            line-height: 1;
                            margin-bottom: 0.2rem;
                        }
                        .bento-stats span {
                            font-size: 0.65rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.5);
                        }
                    `}} />
                </motion.div>

            </div>
        </section>
    );
};

export default CaseStudy1;