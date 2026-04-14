"use client";

import { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

import MotionText from "../AnimateOnScroll/MotionText";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../AnimateOnScroll/motion";

/* -----------------------------
   Success Stories
-------------------------------- */
const SuccessStories = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const logos = [
    { src: "/assets/img/patner/1.png", alt: "JOIA Hospice Care" },
    { src: "/assets/img/patner/2.png", alt: "SEDNA Technology & Knowledge" },
    { src: "/assets/img/patner/3.png", alt: "Raptors Edge" },
    { src: "/assets/img/patner/4.png", alt: "HaaseK" },
    { src: "/assets/img/patner/5.png", alt: "CUI" },
    { src: "/assets/img/patner/6.png", alt: "JOIA Hospice Care" },
    { src: "/assets/img/patner/7.png", alt: "SEDNA Technology & Knowledge" },
    { src: "/assets/img/patner/8.png", alt: "Raptors Edge" },

  ];
   
   
   
     

  return (
    <section
      className="audience-section fix section-padding bg-cover"
      data-background="/assets/img/Home/Dark-Theme.png"
    >
      <div className="container">
        <div className="audience-wrapper">

          {/* HEADING - Center */}
          <MotionText>
            {[
              <div key="title" className="section-title text-center mb-5">
                <div className="sub-title bg-color-3 mx-auto">
                  <span className="aicolor">TRUSTED PARTNERS</span>
                </div>
                <h2 className="text-white">
                  Trusted by Businesses, Startups & Growing Brands Worldwide
                </h2>
                <p className="text-white fs-6 lh-base my-3">
                  We collaborate with innovative companies across industries to build AI-powered,
                  scalable, and growth focused digital solutions.
                </p>
              </div>,
            ]}
          </MotionText>

          {/* LOGO SLIDER */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...logos, ...logos].map((logo, index) => (
                <div className="logo-item" key={index}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 80px;
          animation: marquee 20s linear infinite;
          width: max-content;
        }

        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .logo-item:hover {
          opacity: 1;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
          .aicolor{
          color : #81EA06
          }
      `}</style>
    </section>
  );
};

export default SuccessStories;
