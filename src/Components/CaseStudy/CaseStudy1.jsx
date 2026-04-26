"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import caseStudies from "@/data/caseStudiesData.json";
import MotionText from "../AnimateOnScroll/MotionText";

const CaseStudy1 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

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

                {/* 🔹 ACCORDION CARDS */}
                <div className="service-accordion">
                    {caseStudies.slice(0, 6).map((item, index) => {
                        const isExpanded = activeIndex === index;

                        return (
                            <motion.div
                                key={item.id}
                                className={`service-card ${isExpanded ? "expanded" : "collapsed"}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                animate={{
                                    flex: isExpanded ? 4 : 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    duration: 0.5
                                }}
                                style={{
                                    backgroundColor: isExpanded ? "#8be031" : "#1a3b11",
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {isExpanded ? (
                                        <motion.div
                                            key="expanded-content"
                                            className="expanded-content"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="card-top">
                                                <div className="number-badge">{item.number}</div>
                                            </div>
                                            <div className="card-middle">
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                
                                                {index === 0 && (
                                                    <div className="stats-row">
                                                        <div className="stat-item">
                                                            <div className="stat-val">75%</div>
                                                            <div className="stat-label">AVG GROWTH RATE</div>
                                                        </div>
                                                    </div>
                                                )}
                                                {index === 4 && (
                                                    <div className="stats-row">
                                                        <div className="stat-item">
                                                            <div className="stat-val">50+</div>
                                                            <div className="stat-label">STORES</div>
                                                        </div>
                                                        <div className="stat-item">
                                                            <div className="stat-val">98%</div>
                                                            <div className="stat-label">UPTIME</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card-bottom">
                                                <Link href={item.blink} className="explore-btn">
                                                    {item.bname} <i className="bi bi-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="collapsed-content"
                                            className="collapsed-content"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="collapsed-title-wrap">
                                                <h3 className="vertical-title">{item.title}</h3>
                                            </div>
                                            <div className="number-badge-small">{item.number}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                    .case-study-section {
                        font-family: 'Plus Jakarta Sans', sans-serif;
                    }

                    .case-study-section * {
                        font-family: 'Plus Jakarta Sans', sans-serif;
                    }

                    .case-study-section .section-title h2 {
                        font-weight: 800;
                        color: #1a3b11;
                        margin-bottom: 2rem;
                    }

                    /* ── ACCORDION CONTAINER ── */
                    .service-accordion {
                        display: flex;
                        gap: 12px;
                        height: 440px;
                        margin-top: 3rem;
                        width: 100%;
                    }

                    @media (max-width: 991px) {
                        .service-accordion {
                            flex-direction: column;
                            height: auto;
                            gap: 12px;
                        }
                        .service-card {
                            height: 120px !important;
                            flex: none !important;
                        }
                        .service-card.expanded {
                            height: 350px !important;
                        }
                        .collapsed-content {
                            flex-direction: row !important;
                            padding: 20px 30px !important;
                        }
                        .vertical-title {
                            writing-mode: horizontal-tb !important;
                            transform: none !important;
                            margin: 0 !important;
                        }
                    }

                    /* ── SERVICE CARD ── */
                    .service-card {
                        position: relative;
                        border-radius: 40px;
                        overflow: hidden;
                        cursor: pointer;
                        display: flex;
                        flex-direction: column;
                        transition: background-color 0.4s ease;
                        box-shadow: 0 10px 30px rgba(26, 59, 17, 0.05);
                    }

                    /* ── EXPANDED STATE ── */
                    .service-card.expanded {
                        padding: 40px;
                        background-color: #8be031;
                        color: #fff;
                    }

                    .expanded-content {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .number-badge {
                        background: #fff;
                        color: #1a3b11;
                        width: 42px;
                        height: 42px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 700;
                        font-size: 0.95rem;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                    }

                    .card-middle h3 {
                        font-size: 2rem;
                        font-weight: 800;
                        margin-bottom: 0.5rem;
                        color: #fff;
                    }

                    .card-middle p {
                        font-size: 1rem;
                        line-height: 1.5;
                        color: #fff;
                        max-width: 90%;
                        font-weight: 400;
                        margin-bottom: 1rem;
                        text-align: justify;
                    }

                    .explore-btn {
                        font-size: 0.9rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                        color: #fff;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        transition: gap 0.3s ease;
                    }
                    .explore-btn:hover {
                        gap: 15px;
                    }

                    /* Stats in expanded card */
                    .stats-row {
                        display: flex;
                        gap: 2rem;
                        margin-top: 1rem;
                    }
                    .stat-val {
                        font-size: 2.5rem;
                        font-weight: 800;
                        color: #fff;
                        line-height: 1;
                    }
                    .stat-label {
                        font-size: 0.7rem;
                        font-weight: 700;
                        letter-spacing: 0.1em;
                        color: rgba(255, 255, 255, 0.85);
                        margin-top: 5px;
                    }

                    /* ── COLLAPSED STATE ── */
                    .service-card.collapsed {
                        background-color: #1a3b11;
                        color: #fff;
                        padding: 35px 15px;
                    }

                    .collapsed-content {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 30px 10px;
                        gap: 20px;
                    }

                    .collapsed-title-wrap {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                    }

                    .vertical-title {
                        writing-mode: vertical-rl;
                        transform: rotate(180deg);
                        font-size: 1.8rem;
                        font-weight: 800;
                        white-space: nowrap;
                        color: #fff;
                        margin: 0;
                        letter-spacing: 0.02em;
                    }

                    .number-badge-small {
                        background: #fff;
                        color: #1a3b11;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 700;
                        font-size: 0.85rem;
                    }

                    /* Hover k baad picture wala background effect */
                    .service-card.collapsed {
                        background-image: url('/assets/img/Home/Blur-Background.png');
                        background-size: cover;
                        background-position: center;
                        background-blend-mode: multiply;
                    }

                `}} />
            </div>
        </section>
    );
};

export default CaseStudy1;