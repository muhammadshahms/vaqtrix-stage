"use client";

import { useRef, useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

import portfolioData from "@/data/portfolio.json";
import scrollcardData from "@/data/scrollcard.json";

const categoryMap = {
  "Website": "Website Development",
  "App": "App Development",
  "Ecom": "E-commerce Stores",
  "Digital": "Social Media Post Design",
};

const CaseStudyInner = ({
  category = [],
  defaultCategory = "All",
  topHeading,
  topText,
}) => {
  const { categories: originalCategories, projects: originalProjects } = portfolioData;

  const scrollcardProjects = scrollcardData.flatMap((cat) => {
    const mappedCategory = categoryMap[cat.id] || cat.id;
    return cat.cards.map((c, i) => ({
      id: `sc-${cat.id}-${i}`,
      category: mappedCategory,
      title: c.title,
      img: c.image,
    }));
  });

  const scrollcardCategories = Array.from(new Set(scrollcardData.map((cat) => categoryMap[cat.id] || cat.id)));
  
  const allProjects = [...originalProjects, ...scrollcardProjects];
  const allCategories = Array.from(new Set([...originalCategories, ...scrollcardCategories]));

  const allowedCategories =
    category.length > 0
      ? allCategories.filter((cat) => category.includes(cat))
      : allCategories;

  const sectionRef = useRef(null);
  const scrollRefs = useRef({});
  const searchParams = useSearchParams();
  const categoryParam = searchParams ? searchParams.get("category") : null;

  const [selectedCategory, setSelectedCategory] = useState(
    (categoryParam && allowedCategories.includes(categoryParam))
      ? categoryParam
      : (category.length > 0 ? category[0] : (allowedCategories.includes(defaultCategory) ? defaultCategory : "All"))
  );
  
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    category.length > 0
      ? allProjects.filter((p) => category.includes(p.category))
      : allProjects;

  const filteredContent =
    selectedCategory === "All"
      ? filteredProjects
      : filteredProjects.filter((item) => item.category === selectedCategory);

  const cardsPerPage = 6;
  const totalPages = Math.ceil(filteredContent.length / cardsPerPage);
  const currentCards = filteredContent.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const openLightbox = (globalIndex) => {
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const startScroll = (id) => {
    const el = scrollRefs.current[id];
    if (!el) return;
    el.style.scrollBehavior = "auto";
    const speed = 2; // pixel per frame
    const maxScroll = el.scrollHeight - el.clientHeight;
    
    if (maxScroll <= 0) return;

    const scrollStep = () => {
      if (el.scrollTop < maxScroll) {
        el.scrollTop += speed;
        el._scrollAnimation = requestAnimationFrame(scrollStep);
      }
    };
    cancelAnimationFrame(el._scrollAnimation);
    el._scrollAnimation = requestAnimationFrame(scrollStep);
  };

  const stopScroll = (id) => {
    const el = scrollRefs.current[id];
    if (!el) return;
    cancelAnimationFrame(el._scrollAnimation);
    el.style.scrollBehavior = "smooth";
    el.scrollTop = 0;
  };

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev <= 0 ? filteredContent.length - 1 : prev - 1));
  }, [filteredContent.length]);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev >= filteredContent.length - 1 ? 0 : prev + 1));
  }, [filteredContent.length]);

  // Keyboard support
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, lightboxPrev, lightboxNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  // Handle URL Param changes
  useEffect(() => {
    if (categoryParam && allowedCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
      setCurrentPage(1);
    }
  }, [categoryParam, allowedCategories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const currentLightboxItem = filteredContent[lightboxIndex];

  return (
    <>
      <section ref={sectionRef} className="case-studies-section-4 fix section-padding">
        <div className="container">
          {topHeading && (
            <div className="text-center mb-4" style={{ lineHeight: "60px" }}>
              <h2>{topHeading}</h2>
              {topText && <p>{topText}</p>}
            </div>
          )}
          {/* Category Tabs */}
          <ul className="nav categories-tabs mb-3" role="tablist">
            {allowedCategories.map((cat, index) => (
              <li key={`${cat}-${index}`} className="nav-item" onClick={() => handleCategoryClick(cat)}>
                <a
                  className={`nav-link ${selectedCategory === cat ? "active" : ""}`}
                  role="tab"
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>

          {/* Heading */}
          {!topHeading && (
            <h2 className="mb-4 case-studies-heading">
              {selectedCategory === "All" ? "All Projects" : selectedCategory}
            </h2>
          )}
          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              className="row g-4 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentCards.length === 0 && <p>No results found.</p>}

              {currentCards.map((item, i) => {
                const globalIndex = (currentPage - 1) * cardsPerPage + i;
                const isHovered = hoveredIndex === i;
                const anyHovered = hoveredIndex !== null;

                return (
                  <motion.div
                    key={item.id}
                    className="col-lg-4 col-md-6 card-item"
                    layout
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => {
                      setHoveredIndex(i);
                      startScroll(item.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      stopScroll(item.id);
                    }}
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <div
                      className="case-studies-card-items mt-0"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        transition: "filter 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
                        filter: anyHovered && !isHovered ? "blur(3px)" : "none",
                        opacity: anyHovered && !isHovered ? 0.5 : 1,
                        transform: isHovered ? "scale(1.02)" : "scale(1)",
                      }}
                    >
                      <div 
                        className="thumb img-scroll"
                        ref={(el) => (scrollRefs.current[item.id] = el)}
                        style={{
                          width: "100%",
                          aspectRatio: "3/2",
                          height: "100%",
                          minHeight: "240px",
                          overflowY: "hidden",
                          borderRadius: "30px",
                          position: "relative",
                          display: "block"
                        }}
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={681}
                          height={454}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            objectFit: "cover"
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <ul className="nav categories-tabs justify-content-center mt-5 gap-2">
              <li className="nav-item">
                <button
                  className={`nav-link ${isFirstPage ? "disabled opacity-50" : ""}`}
                  onClick={() => !isFirstPage && handlePageChange(currentPage - 1)}
                  style={{ pointerEvents: isFirstPage ? "none" : "auto" }}
                >Prev</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page} className="nav-item">
                  <button
                    className={`nav-link ${currentPage === page ? "active" : ""}`}
                    onClick={() => handlePageChange(page)}
                  >{page}</button>
                </li>
              ))}
              <li className="nav-item">
                <button
                  className={`nav-link ${isLastPage ? "disabled opacity-50" : ""}`}
                  onClick={() => !isLastPage && handlePageChange(currentPage + 1)}
                  style={{ pointerEvents: isLastPage ? "none" : "auto" }}
                >Next</button>
              </li>
            </ul>
          )}

        </div>
      </section>

      {/* ✅ LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && currentLightboxItem && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.93)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Counter */}
            <div style={counterStyle}>
              {lightboxIndex + 1} / {filteredContent.length}
            </div>

            {/* Close */}
            <button onClick={closeLightbox} style={closeBtnStyle} aria-label="Close">✕</button>

            {/* Left Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              style={arrowBtnStyle("left")}
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left" style={{ fontSize: "22px" }}></i>
            </button>

            {/* ✅ Media content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "820px",
                  width: "90%",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 24px 70px rgba(0,0,0,0.7)",
                  background: "#111",
                }}
              >
                <Image
                  src={currentLightboxItem.img}
                  alt={currentLightboxItem.title}
                  width={1200}
                  height={900}
                  style={{
                    width: "100%",
                    maxHeight: "82vh",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                    background: "#111"
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Right Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              style={arrowBtnStyle("right")}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right" style={{ fontSize: "22px" }}></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ── Wrapper Component ──────────────────────────────────
const CaseStudy4 = (props) => {
  return (
    <Suspense fallback={<div className="text-center p-5">Loading Portfolio...</div>}>
      <CaseStudyInner {...props} />
    </Suspense>
  );
};

// ── Styles ──────────────────────────────────────────────

const counterStyle = {
  position: "absolute",
  top: "20px",
  left: "24px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 500,
  userSelect: "none",
};

const closeBtnStyle = {
  position: "absolute",
  top: "16px",
  right: "20px",
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "28px",
  cursor: "pointer",
  lineHeight: 1,
  padding: "4px 8px",
  zIndex: 10,
};

const arrowBtnStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "20px",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  zIndex: 10,
  flexShrink: 0,
});

export default CaseStudy4;
