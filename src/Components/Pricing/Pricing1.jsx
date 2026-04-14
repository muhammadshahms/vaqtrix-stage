"use client";

import { useState } from "react";
import Image from "next/image";
import PricingCard from "../Card/PricingCard";

import MotionText from "../AnimateOnScroll/MotionText";
import MotionImage from "../AnimateOnScroll/MotionImage";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../AnimateOnScroll/motion";

const Pricing1 = ({ CoulmnClass }) => {
  const [isActive, setIsActive] = useState("monthly");

  const MonthlyPremiumPlans = [
    "100 GB SSD Storage",
    "Weekly Backups",
    "Unlimited Free SSL",
    "24/7 system Monitoring",
    "Free Domain ($9.99 value)",
    "Dedicated IP Address",
    "20+ Payment Methods",
  ];

  const MonthlyExtendedPlan = [
    "100 GB SSD Storage",
    "Weekly Backups",
    "Unlimited Free SSL",
    "24/7 system Monitoring",
    "Free Domain ($9.99 value)",
    "Dedicated IP Address",
    "20+ Payment Methods",
  ];

  const yearlyPremiumPlans = [...MonthlyPremiumPlans];
  const yearlyExtendedPlan = [...MonthlyExtendedPlan];

  return (
    <section className={CoulmnClass}>

      {/* SHAPES */}
      <MotionImage>
        <div className="left-shape float-bob-y">
          <Image src="/assets/img/pricing-left.png" alt="" width={288} height={603} />
        </div>
      </MotionImage>

      <MotionImage delay={0.2}>
        <div className="right-shape float-bob-y">
          <Image src="/assets/img/pricing-right.png" alt="" width={179} height={229} />
        </div>
      </MotionImage>

      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-xl-4">
            <div className="pricing-content">

              <MotionText>
                {[
                  <div key="title" className="section-title">
                    <div className="sub-title bg-color-2">
                      <span>OUR PRICING PLAN</span>
                    </div>
                    <h2>
                      Our awesome <br /> Pricing Plan
                    </h2>
                  </div>,
                ]}
              </MotionText>

              {/* TABS */}
              <MotionText delay={0.2}>
                {[
                  <div key="tabs" className="pricing-tab-header mt-4 mt-md-0">
                    <div className="arrow-shape">
                      <img src="/assets/img/arrow.png" alt="img" />
                    </div>

                    <ul className="nav" role="tablist">
                      <li
                        className={`nav-item ${isActive === "monthly" ? "active" : ""}`}
                        onClick={() => setIsActive("monthly")}
                      >
                        <a className={`nav-link ${isActive === "monthly" ? "active" : ""}`}>
                          Monthly
                        </a>
                      </li>

                      <li
                        className={`nav-item ${isActive === "yearly" ? "active" : ""}`}
                        onClick={() => setIsActive("yearly")}
                      >
                        <a className={`nav-link ${isActive === "yearly" ? "active" : ""}`}>
                          Yearly
                        </a>
                      </li>
                    </ul>

                    <div className="save-text">Save 25%</div>
                  </div>,
                ]}
              </MotionText>

            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-xl-8">
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >

              <motion.div className="col-xl-6 col-lg-6 col-md-6" variants={fadeUp}>
                <PricingCard
                  addclass="pricing-box-items"
                  title="Premium Plans"
                  price={isActive === "monthly" ? "$99" : "$299"}
                  month="Month"
                  FeatureList={
                    isActive === "monthly"
                      ? MonthlyPremiumPlans
                      : yearlyPremiumPlans
                  }
                  btnurl="/pricing"
                  btnname="Get Started Now"
                  isActivePlan={isActive}
                />
              </motion.div>

              <motion.div className="col-xl-6 col-lg-6 col-md-6" variants={fadeUp}>
                <PricingCard
                  addclass="pricing-box-items style-2"
                  title="Extended Plan"
                  price={isActive === "monthly" ? "$149" : "$349"}
                  month="Month"
                  FeatureList={
                    isActive === "monthly"
                      ? MonthlyExtendedPlan
                      : yearlyExtendedPlan
                  }
                  btnurl="/pricing"
                  btnname="Get Started Now"
                  isActivePlan={isActive}
                />
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing1;
