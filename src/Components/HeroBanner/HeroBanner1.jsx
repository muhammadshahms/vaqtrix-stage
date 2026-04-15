"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SampleHero from "../../../public/assets/img/hero/Sample-Hero-1.png";
import HeroMain from "../../../public/imag/Gif.gif";

export default function HeroBanner() {

    const [btn1Hover, setBtn1Hover] = useState(false);
    const [btn2Hover, setBtn2Hover] = useState(false);

    const badges = [
    {
      src: "/assets/img/1 (1).svg",
      alt: "Clutch Review",
      width: 130,
      height: 50,
      href: "https://clutch.co/",
    },
    {
      src: "/assets/img/1 (2).svg",
      alt: "Google Rating",
      width: 130,
      height: 50,
      href: "https://www.google.com/maps/search/?api=1&query=Vaqtrix",
    },
    {
      src: "/assets/img/1 (3).svg",
      alt: "Trustpilot Review",
      width: 130,
      height: 50,
      href: "https://www.trustpilot.com/review/vaqtrix.com",
    },
    {
      src: "/assets/img/1 (4).svg",
      alt: "Yell Review",
      width: 130,
      height: 50,
      href: "https://www.yell.com/",
    },
    ];

    return (
        <>
            <section
                className="hero-section position-relative d-flex align-items-center min-vh-100 overflow-hidden"
                style={{
                    backgroundImage: `url(${SampleHero.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "auto",
                }}
            >
                <div className="hero-overlay" />

                {/* Floating Shapes */}
                {/* <div className="mike-shape">
                    <Image src="/assets/img/hero/mike-shape.png" alt="shape" width={84} height={84}
                        style={{ width: "100%", height: "100%" }} />
                </div> */}
                <div className="arrow-shape">
                    <Image src="/assets/img/hero/arrow-shape.png" alt="shape" width={55} height={28}
                        style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="arrow-shape-2">
                    <Image src="/assets/img/hero/arrow-shape.png" alt="shape" width={55} height={28}
                        style={{ width: "100%", height: "100%" }} />
                </div>
                {/* <div className="energy-shape">
                    <Image src="/assets/img/hero/energy-shape.png" alt="shape" width={94} height={94}
                        style={{ width: "100%", height: "100%" }} />
                </div> */}
                {/* <div className="rocket-shape">
                    <Image src="/assets/img/hero/rocket.png" alt="rocket" width={142} height={142}
                        style={{ width: "100%", height: "100%" }} />
                </div> */}

                <div className="container position-relative z-3">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0" style={{ position: "relative", zIndex: 4 }}>
                            <div className="subtitle-wrapper">
                                <span className="line"></span>
                                <span className="hero-subtitle text-uppercase text-white fw-semibold">
                                    VAQTRIX
                                </span>
                                <span className="line"></span>
                            </div>

                            <h1 className="hero-title text-white mb-4">
                                Transform Your Business With{" "}
                                <span style={{ color: "#81EA06" }}>AI-Powered</span> Digital Solutions
                            </h1>

                            <p className="hero-text text-light mb-4">
                                Empowering businesses with AI-enhanced websites, apps,
                                automation, and digital solutions designed to increase
                                efficiency, revenue, and real-world impact.
                            </p>

                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">

                                {/* Button 1 — #81EA06 background, hover pe white bg same border */}
                                <Link
                                    href="/contact"
                                    className="btn hero-btn"
                                    onMouseEnter={() => setBtn1Hover(true)}
                                    onMouseLeave={() => setBtn1Hover(false)}
                                    style={{
                                        backgroundColor: btn1Hover ? "transparent" : "#81EA06",
                                        border: "2px solid #81EA06",
                                        color: btn1Hover ? "#FFF" : "#0a1f0f",
                                        fontWeight: "600",
                                        transform: btn1Hover ? "translateY(-2px)" : "translateY(0)",
                                        // boxShadow: btn1Hover ? "0 8px 24px rgba(129,234,6,0.3)" : "none",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    Get a Free Consultation
                                </Link>

                                {/* Button 2 — white border transparent bg, hover pe #81EA06 fill */}
                                <Link
                                    href="/contact"
                                    className="btn hero-btn"
                                    onMouseEnter={() => setBtn2Hover(true)}
                                    onMouseLeave={() => setBtn2Hover(false)}
                                    style={{
                                        backgroundColor: btn2Hover ? "#81EA06" : "transparent",
                                        border: "2px solid #81EA06",
                                        color: btn2Hover ? "#0a1f0f" : "#ffffff",
                                        fontWeight: "600",
                                        transform: btn2Hover ? "translateY(-2px)" : "translateY(0)",
                                        // boxShadow: btn2Hover ? "0 8px 24px rgba(129,234,6,0.3)" : "none",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    View Company Profile
                                </Link>
                            </div>

                             {/* Review badges section: each logo opens its own external review/profile link. */}
                             <div className="d-flex flex-wrap flex-lg-nowrap gap-3 justify-content-center justify-content-lg-start hero-badges">
                                {badges.map((badge, index) => (
                                    <a
                                        key={index}
                                  href={badge.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                  className="hero-badge-item"
                                        style={{
                                            display: "inline-block",
                                            cursor: "pointer",
                                            transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <Image
                                            src={badge.src}
                                            alt={badge.alt}
                                            width={badge.width}
                                            height={badge.height}
                                            className="img-fluid"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-6 text-center position-relative" style={{ zIndex: 4 }}>
                            <div className="hero-image-wrapper">
                                <Image
                                    src={HeroMain}
                                    alt="Hero Visual"
                                    width={998}
                                    height={1131}
                                    className="img-fluid hero-main-image"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero-section {
          background: radial-gradient(circle at right, #1aff00 0%, #0a1f0f 60%);
          padding: 120px 0 80px 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.2;
        }

        .hero-text {
          font-size: clamp(14px, 2vw, 18px);
          opacity: 0.9;
        }

        .hero-subtitle {
          font-size: clamp(14px, 1.5vw, 18px);
          letter-spacing: 4px;
          white-space: nowrap;
        }

        .hero-btn {
          font-size: clamp(14px, 1.5vw, 16px);
          padding: 12px 22px;
          border-radius: 8px;
        }

        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: clamp(30px, 2vw, 60px);
          position: relative;
        }

        .line {
          flex: 1;
          height: 2px;
          background: linear-gradient(to right, transparent, #1aff00, transparent);
          max-width: 150px;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-main-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 60px rgba(26, 255, 0, 0.25));
        }

        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes floatRotate {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes moveLeftRight {
          0% { transform: translateX(0px); }
          50% { transform: translateX(-15px); }
          100% { transform: translateX(0px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .mike-shape {
          position: absolute; top: 15%; left: 5%;
          width: 84px; height: 84px; z-index: 2;
          animation: floatRotate 4s ease-in-out infinite;
        }
        .arrow-shape {
          position: absolute; top: 20%; right: 10%;
          width: 55px; height: 28px; z-index: 2;
          animation: moveLeftRight 3s ease-in-out infinite;
        }
        .arrow-shape-2 {
          position: absolute; bottom: 20%; left: 8%;
          width: 55px; height: 28px; z-index: 2;
          animation: floatRotate 5s ease-in-out infinite;
        }
        .energy-shape {
          position: absolute; bottom: 15%; right: 15%;
          width: 94px; height: 94px; z-index: 2;
          animation: pulse 4s ease-in-out infinite;
        }
        .rocket-shape {
          position: absolute; top: 10%; right: 5%;
          width: 142px; height: 142px; z-index: 2;
          animation: floatY 3s ease-in-out infinite;
        }

        @media (max-width: 1200px) {
          .mike-shape { left: 2%; }
          .arrow-shape { right: 5%; }
        }

        @media (max-width: 768px) {
          .hero-section { text-align: center; padding: 60px 0; }

          .mike-shape { top: 10%; left: 2%; width: 24px; height: 24px; }
          .arrow-shape { top: 15%; right: 2%; width: 22px; height: 12px; }
          .arrow-shape-2 { bottom: 15%; left: 2%; width: 22px; height: 12px; }
          .energy-shape { bottom: 10%; right: 3%; width: 26px; height: 26px; }
          .rocket-shape { top: 8%; right: 3%; width: 30px; height: 30px; }

          .subtitle-wrapper { margin-top: 40px; margin-bottom: 15px; }
          .line { max-width: 60px; }
          .hero-text { line-height: 1.3; font-size: clamp(12px, 3vw, 16px); }

          .d-flex.flex-column.flex-sm-row {
            flex-direction: row !important;
            flex-wrap: wrap;
            justify-content: center !important;
          }

          .hero-btn { font-size: 14px; padding: 10px 18px; }

          .d-flex.flex-wrap.gap-3 {
            flex-wrap: nowrap !important;
            justify-content: center !important;
            gap: 8px !important;
            transform: scale(0.55);
            transform-origin: center;
            width: 182%;
            margin-left: -41%;
            overflow: visible;
          }

          .d-flex.flex-wrap.gap-3 img {
            height: 30px !important;
            width: auto !important;
            max-width: 80px !important;
            object-fit: contain;
            flex-shrink: 1;
            min-width: 0;
          }

          .hero-image-wrapper { width: 90%; margin: 0 auto; }
        }
      `}</style>
        </>
    );
}
