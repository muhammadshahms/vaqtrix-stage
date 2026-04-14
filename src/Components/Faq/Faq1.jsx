"use client";

// ─────────────────────────────────────────────────────────────────────────────
// 📦 FaqSection
//
// ── SERVICE PAGE (us page ke FAQs only, nav buttons nahi):
//    <FaqSection addclass="faq-section section-padding" category="home" />
//    <FaqSection addclass="faq-section section-padding" category="about" />
//    <FaqSection addclass="faq-section section-padding" category="website" />
//    <FaqSection addclass="faq-section section-padding" category="app" />
//    <FaqSection addclass="faq-section section-padding" category="digital" />
//    <FaqSection addclass="faq-section section-padding" category="ecom" />
//    <FaqSection addclass="faq-section section-padding" category="ai" />
//    <FaqSection addclass="faq-section section-padding" category="ebook" />
//
// ── FAQ PAGE (top nav buttons + heading bhi change hoti hai):
//    <FaqSection />
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MotionText from "../AnimateOnScroll/MotionText";
import { fadeUp, staggerContainer } from "../AnimateOnScroll/motion";
import faqJson from "@/data/faq.json";

const FaqSection = ({
  addclass = "faq-section section-padding",
  category,
}) => {

  const isServicePage = typeof category === "string" && category.trim() !== "";

  // FAQ page default: "Home" active
  const defaultCategory = "Home";
  const [activeCat, setActiveCat]   = useState(defaultCategory);
  const [openIndex, setOpenIndex]   = useState(-1);
  const contentRefs                 = useRef([]);

  // ── Decide which page data to show ────────────────────────────────────────
  // Service page → fixed category prop se
  // FAQ page     → activeCat se categoryToPage map ke zariye
  const pageKey = isServicePage
    ? category
    : faqJson.categoryToPage[activeCat];

  const pageData = faqJson.pages[pageKey] || null;

  const badge       = pageData?.badge       || "FAQs";
  const title       = pageData?.title       || "";
  const description = pageData?.description || "";
  const listItems   = pageData?.listItems   || [];
  const faqsList    = pageData?.faqs        || [];

  const categories  = faqJson.categories;

  // ──────────────────────────────────────────────────────────────────────────

  const handleCategoryClick = (cat) => {
    setActiveCat(cat);
    setOpenIndex(-1);
  };

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      ref.style.height = openIndex === i ? ref.scrollHeight + "px" : "0px";
    });
  }, [openIndex, faqsList, activeCat]);

  if (!pageData || faqsList.length === 0) return null;

  return (
    <section className={addclass}>
      <div className="container">

        {/* ── TOP CATEGORY NAV — sirf FAQ page pe ── */}
        {!isServicePage && (
          <div className="text-center mb-5">
            <ul className="nav justify-content-center gap-2 border-0 flex-wrap">
              {categories.map((cat) => (
                <li key={cat} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link ${activeCat === cat ? "active" : ""}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="faq-wrapper">
          <div className="row g-4 justify-content-between align-items-center">

            {/* ── LEFT: Heading + Text (category click pe change hoga) ── */}
            <div className="col-xl-5 col-lg-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageKey}
                  className="faq-content text-left"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Badge + Title */}
                  <div className="section-title">
                    <div className="sub-title bg-color-2">
                      <span>{badge}</span>
                    </div>
                    <h2>{title}</h2>
                  </div>

                  {/* Description */}
                  <p className="mt-3">{description}</p>

                  {/* Check List */}
                  {listItems.length > 0 && (
                    <ul className="faq-list mt-3">
                      {listItems.map((item, i) => (
                        <li key={i}>
                          <i className="bi bi-check-circle"></i> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── RIGHT: Accordion (category click pe change hoga) ── */}
            <div className="col-xl-6 col-lg-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageKey}
                  className="faq-accordion-items"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -8 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="faq-accordion">
                    <div className="accordion">

                      {faqsList.map((item, index) => (
                        <motion.div
                          key={item.id}
                          variants={fadeUp}
                          className={`accordion-item mb-3 ${openIndex === index ? "active" : ""}`}
                        >
                          <h5
                            onClick={() => handleItemClick(index)}
                            className="accordion-header"
                          >
                            <button
                              className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                              type="button"
                            >
                              {item.title}
                            </button>
                          </h5>

                          <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="accordion-collapse"
                            style={{
                              overflow: "hidden",
                              height: "0px",
                              transition: "height 0.35s ease",
                            }}
                          >
                            <div className="accordion-body">{item.content}</div>
                          </div>
                        </motion.div>
                      ))}

                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
