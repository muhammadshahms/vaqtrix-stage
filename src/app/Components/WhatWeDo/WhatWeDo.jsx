"use client";

import Image from "next/image";
import Link from "next/link";
// import MotionText from "";
import MotionImage from "../AnimateOnScroll/MotionImage";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../AnimateOnScroll/motion";

const WhatWeDo = () => {

  const whyContent = [
    {
      img: "/assets/img/Home Icons/AI-First Software & Automation Company.svg",
      title: "AI-First Software & Automation Company",
      content: "We create intelligent systems that streamline operations and drive business growth.",
    },
    {
      img: "/assets/img/Home Icons/Smart Digital Solutions Built to Scale.svg",
      title: "Smart Digital Solutions Built to Scale",
      content: "From web to marketing, every solution is data-driven, scalable, and ROI-focused.",
    },
    {
      img: "/assets/img/Home Icons/Future-Ready Technology for Global Brands.svg",
      title: "Future-Ready Technology for Global Brands",
      content: "Secure, innovative platforms designed for long-term growth across global markets.",
    },
  ];

  return (
    <section className="service-section fix section-padding">

      {/* SHAPES (static) */}
      {/* <div className="left-shape float-bob-y z-3">
        <Image src="/assets/img/service/left-shape.png" alt="" width={180} height={294} />180 294
      </div>

      <div className="right-shape">
        <Image src="/assets/img/service/right-shape.png" alt="" width={94} height={94} />
      </div>

      <div className="bg-shape">
        <Image src="/assets/img/service/bg-shape.png" alt="" width={560} height={931} />
      </div> */}

      <div className="container">

        {/* OPTIONAL HEADING (future use) */}
        {/* 
        <MotionText>
          {[
            <span key="sub" className="sub-title">WHY SERVICES US</span>,
            <h2 key="title">Use SEO to Drive Growth at Your Business</h2>,
            <p key="content">Pellentesque ut vehicula sapien dictumst.</p>,
          ]}
        </MotionText>
        */}

        {/* SERVICES GRID */}
        <motion.div
          className="row text-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {whyContent.map((item, i) => (
            <motion.div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6"
              variants={fadeUp}
            >
              <div className="service-box-items ">

                {/* ICON */}
                <MotionImage>
                  <div className="icon">
                    <Image src={item.img} alt="" width={100} height={100} />
                  </div>
                </MotionImage>

                {/* TEXT */}
                <div className="content">
                  <h4>
                    <Link href="/service/service-details">
                      {item.title}
                    </Link>
                  </h4>
                  <p>{item.content}</p>
                  {/* <Link
                    href="/service/service-details"
                    className="link-btn"
                  >
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link> */}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;
