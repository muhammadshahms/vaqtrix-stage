"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import pricingData from "./pricingData";
import MotionText from "../AnimateOnScroll/MotionText";
import { motion, AnimatePresence } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  exit: { opacity: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * PricingSection — 3 use cases:
 *
 * 1. pricingDataKey not passed (default null)
 *    → showPlanSelector={true}  → sari categories ke buttons show honge
 *
 * 2. pricingDataKey={["digital", "seo", "uiux"]}  (Array)
 *    → showPlanSelector={true}  → sirf in categories ke buttons show honge
 *
 * 3. pricingDataKey="home"  (String)
 *    → showPlanSelector={false} → sirf ek category, koi button nahi
 */
const PricingSection = ({
  pricingDataKey = null,
  monthlyAndYearly = true,
  showButton = true,
  showPlanSelector = true,
  showSubtitle = true,
  buttonLabels = {},
}) => {
  // ── Determine which keys to show ──────────────────────────────────────────
  let allowedKeys;

  if (!pricingDataKey) {
    // Case 1: No key passed → show all categories
    allowedKeys = Object.keys(pricingData);
  } else if (Array.isArray(pricingDataKey)) {
    // Case 2: Array passed → show only those categories
    allowedKeys = pricingDataKey.filter((k) => pricingData[k]); // filter invalid keys
  } else {
    // Case 3: String passed → single category, no selector needed
    allowedKeys = [pricingDataKey];
  }

  // ── State ──────────────────────────────────────────────────────────────────
  const [activePlan, setActivePlan] = useState(
    allowedKeys[0]?.toLowerCase() || ""
  );
  const [isActive, setIsActive] = useState("monthly");

  const currentData = pricingData[activePlan];

  if (!currentData) {
    console.warn(`PricingSection: No data found for key "${activePlan}"`);
    return null;
  }

  const currentPeriodData = currentData[isActive] || [];
  const heading = currentData.heading || {};

  // Only show plan selector if: showPlanSelector=true AND more than 1 key
  const shouldShowSelector = showPlanSelector && allowedKeys.length > 1;

  return (
    <section className="pricing-section fix section-padding">
      <div className="container">

        {/* ── Top Plan Selector Buttons ── */}
        {shouldShowSelector && (
          <div className="pricing-tab-header text-center mb-5">
            <ul className="nav justify-content-center gap-2 border-0">
              {allowedKeys.map((key) => (
                <li key={key} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link ${activePlan === key ? "active" : ""}`}
                    onClick={() => setActivePlan(key)}
                  >
                    {/* ✅ buttonLabels mein hai toh woh, warna default capitalize */}
                    {buttonLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Heading + Description ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activePlan}-${isActive}-heading`}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MotionText>
              <div className="section-title section-title-center">

                {/* ✅ Sirf subtitle hide/show hoga */}
                {heading.subtitle && showSubtitle && (
                  <div className="sub-title bg-color-2">
                    <span>{heading.subtitle}</span>
                  </div>
                )}

                {/* ✅ Heading hamesha dikhegi */}
                {heading.title && (
                  <motion.h2
                    className="mb-5"
                    variants={headingVariants}
                    dangerouslySetInnerHTML={{
                      __html: heading.title.replace("\n", "<br/>"),
                    }}
                  />
                )}

              </div>
            </MotionText>

            {heading.description && (
              <motion.p
                className="mb-4"
                variants={headingVariants}
                style={{
                  fontSize: "clamp(14px, 1.8vw, 17px)",
                  opacity: 0.8,
                  maxWidth: "600px",
                  lineHeight: "1.7",
                }}
              >
                {heading.description}
              </motion.p>
            )}

            {/* Monthly / Yearly Toggle */}
            {monthlyAndYearly && (
              <div className="pricing-content mb-4">
                <div className="pricing-tab-header">
                  <ul className="nav justify-content-center gap-1 border-0">
                    {["monthly", "yearly"].map((type) => (
                      <li key={type} className="nav-item">
                        <button
                          type="button"
                          className={`nav-link ${isActive === type ? "active" : ""}`}
                          onClick={() => setIsActive(type)}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Pricing Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activePlan}-${isActive}-cards`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="row g-4"
          >
            {currentPeriodData?.map((item) => (
              <motion.div
                key={item.id || item.title}
                variants={cardVariants}
                className="col-xl-4 col-lg-6 col-md-6 d-flex"
              >
                <PricingCard
                  addclass={item.style}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  includ={item.includ}
                  FeatureList={item.features || []}
                  btnurl={showButton ? (item.btnurl || "/pricing") : ""}
                  btnname={showButton ? (item.btnname || "Get Started Now") : ""}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PricingSection;
