"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import MotionText from "../AnimateOnScroll/MotionText";
import blogData from "@/data/blog.json";

const AUTO_INTERVAL = 3000;
const TRANSITION_DURATION = 600;

const getVisibleCards = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 992) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
};

const buildBlogHref = (post, serviceCategory) => {
  if (!post?.id) return post?.link || "/blog";
  const params = new URLSearchParams();
  const source = serviceCategory || post.category;
  if (source) params.set("service", source);
  const query = params.toString();
  return `/blog/${post.id}${query ? `?${query}` : ""}`;
};

const categoryColors = {
  "Website Development": "#0057FF",
  "Mobile App Development": "#7C3AED",
  "AI Development": "#0891B2",
  "E-commerce Solutions": "#D97706",
  "Digital Marketing & Branding": "#DC2626",
  "E-book Creations": "#059669",
  "General": "#1C4401",
  "About Vaqtrix": "#81EA06",
};

const categoryThumbs = {
  "Website Development":          { bg: "#dbeafe", iconColor: "#1d4ed8" },
  "Mobile App Development":       { bg: "#ede9fe", iconColor: "#7c3aed" },
  "AI Development":               { bg: "#e0f2fe", iconColor: "#0891b2" },
  "E-commerce Solutions":         { bg: "#fef3c7", iconColor: "#d97706" },
  "Digital Marketing & Branding": { bg: "#fee2e2", iconColor: "#dc2626" },
  "E-book Creations":             { bg: "#d1fae5", iconColor: "#059669" },
  "General":                      { bg: "#f0fdf4", iconColor: "#1C4401" },
  "About Vaqtrix":                { bg: "#ecfdf5", iconColor: "#1C4401" },
};

const thumbFallbacks = [
  { bg: "#dbeafe", iconColor: "#1d4ed8" },
  { bg: "#ede9fe", iconColor: "#7c3aed" },
  { bg: "#fef3c7", iconColor: "#d97706" },
  { bg: "#d1fae5", iconColor: "#059669" },
  { bg: "#fee2e2", iconColor: "#dc2626" },
  { bg: "#e0f2fe", iconColor: "#0891b2" },
];

const categoryIcons = {
  "Website Development": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  "Mobile App Development": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
    </svg>
  ),
  "AI Development": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  "E-commerce Solutions": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  "Digital Marketing & Branding": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "E-book Creations": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  "General": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "About Vaqtrix": (color) => (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

const DefaultIcon = (color) => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const getReadTime = (text = "") => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

const Blog1 = ({
  subTitle = "BLOG & INSIGHTS",
  heading = (
    <>
      AI, SEO & Digital Growth Insights
      <br /> to Scale Your Business
    </>
  ),
  category = null,
}) => {
  const allPosts = category
    ? blogData.posts.filter((p) => p.category === category)
    : blogData.posts;

  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [offset, setOffset] = useState(0);

  const intervalRef = useRef(null);
  const maxIndex = Math.max(0, allPosts.length - visibleCards);
  const cardGap = visibleCards === 1 ? 0 : 24;

  useEffect(() => {
    const update = () => {
      setVisibleCards(getVisibleCards());
      setCurrentIndex(0);
      setOffset(0);
      setIsTransitioning(false);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setOffset(0);
    setIsTransitioning(false);
  }, [category]);

  const slideNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset(-1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      setOffset(0);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isPaused || maxIndex === 0) return;
    intervalRef.current = setInterval(slideNext, AUTO_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, maxIndex, isTransitioning]);

  const goToSlide = (idx) => {
    if (isTransitioning || idx === currentIndex) return;
    setCurrentIndex(idx);
  };

  const renderPosts = [];
  for (let i = 0; i < visibleCards + 1; i++) {
    const postIndex = (currentIndex + i) % allPosts.length;
    renderPosts.push(allPosts[postIndex]);
  }

  const totalGap = (visibleCards - 1) * cardGap;
  const cardWidthCalc = `calc((100% - ${totalGap}px) / ${visibleCards})`;
  const translateX =
    offset === -1
      ? `calc(-1 * ((100% - ${totalGap}px) / ${visibleCards} + ${cardGap}px))`
      : "0px";

  return (
    <section className="news-section section-padding section-bg">
      <div className="container">

        {/* HEADING */}
        <div className="section-title text-center mb-5">
          <MotionText>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#1C4401", border: "1.5px solid #81EA06",
              borderRadius: "999px", padding: "7px 22px", marginBottom: "20px",
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#81EA06", display: "inline-block", flexShrink: 0 }} />
              <span style={{ color: "#81EA06", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {subTitle}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: "800", lineHeight: "1.2", color: "#1C4401", marginBottom: "10px" }}>
              {heading}
            </h2>
            <p style={{ fontSize: "15px", color: "#5a7a50", marginBottom: 0 }}>
              Stay ahead with expert guides, strategies &amp; industry tips
            </p>
          </MotionText>
        </div>

        {allPosts.length === 0 ? (
          <p className="text-center">No posts found.</p>
        ) : (
          <>
            {/* ✅ FIX: padding top diya taake hover pe card clip na ho, marginTop se gap compensate kiya */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                overflow: "hidden",
                width: "100%",
                position: "relative",
                padding: "12px 4px 4px 4px",   // ✅ top/sides padding for clip fix
                marginTop: "-12px",              // ✅ layout shift compensate
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: `${cardGap}px`,
                  alignItems: "stretch",
                  transform: `translateX(${translateX})`,
                  transition: offset === -1
                    ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94)`
                    : "none",
                  willChange: "transform",
                }}
              >
                {renderPosts.map((item, i) => {
                  const globalIndex = (currentIndex + i) % allPosts.length;
                  const thumb =
                    categoryThumbs[item.category] ||
                    thumbFallbacks[globalIndex % thumbFallbacks.length];
                  const renderIcon = categoryIcons[item.category] || DefaultIcon;

                  return (
                    <div
                      key={`${item.id}-${i}`}
                      style={{ flex: `0 0 ${cardWidthCalc}`, minWidth: 0, display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          display: "flex", flexDirection: "column", height: "100%",
                          background: "#fff", borderRadius: "16px",
                          border: "1.5px solid #e2eeda",
                          overflow: "hidden",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease, outline-color 0.3s ease",
                          cursor: "pointer",
                          outline: "1.5px solid transparent", // ✅ outline ready (won't clip)
                          outlineOffset: "0px",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = "translateY(-8px)";
                          e.currentTarget.style.boxShadow = "0 20px 50px rgba(28,68,1,0.13)";
                          e.currentTarget.style.outline = "1.5px solid #81EA06"; // ✅ outline use kiya border ki jagah
                          e.currentTarget.style.borderColor = "transparent";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.outline = "1.5px solid transparent";
                          e.currentTarget.style.borderColor = "#e2eeda";
                        }}
                      >
                        {/* THUMBNAIL */}
                        <div style={{
                          height: "170px",
                          background: thumb.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                          flexShrink: 0,
                        }}>
                          {renderIcon(thumb.iconColor)}

                          {/* Category pill — top left */}
                          {item.category && (
                            <span style={{
                              position: "absolute", top: "12px", left: "12px",
                              background: "rgba(255,255,255,0.92)",
                              color: thumb.iconColor,
                              fontSize: "10px", fontWeight: "800",
                              letterSpacing: "0.07em", textTransform: "uppercase",
                              padding: "4px 11px", borderRadius: "999px",
                              border: `1px solid ${thumb.iconColor}44`,
                            }}>
                              {item.category}
                            </span>
                          )}

                          {/* Read time pill — top right */}
                          {item.paragraph && (
                            <span style={{
                              position: "absolute", top: "12px", right: "12px",
                              background: "#1C4401",
                              color: "#81EA06",
                              fontSize: "10px", fontWeight: "700",
                              padding: "4px 10px", borderRadius: "999px",
                            }}>
                              {getReadTime(item.paragraph)}
                            </span>
                          )}
                        </div>

                        {/* Colored category bar */}
                        <div style={{
                          height: "3px", width: "100%", flexShrink: 0,
                          background: categoryColors[item.category] || thumbFallbacks[globalIndex % thumbFallbacks.length].iconColor,
                        }} />

                        {/* Card Body */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "18px 20px 22px" }}>

                          {/* Date */}
                          {item.date && (
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#888", fontWeight: "500" }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#81EA06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                {item.date}
                              </span>
                            </div>
                          )}

                          {/* Title */}
                          <h5 style={{
                            display: "-webkit-box", WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical", overflow: "hidden",
                            minHeight: "2.8em", lineHeight: "1.4em",
                            margin: "0 0 10px", fontSize: "15px",
                            fontWeight: "700", color: "#1C4401",
                          }}>
                            <Link
                              href={buildBlogHref(item, category)}
                              title={item.title}
                              style={{ color: "inherit", textDecoration: "none" }}
                            >
                              {item.title}
                            </Link>
                          </h5>

                          {/* Excerpt */}
                          {item.paragraph && (
                            <p style={{
                              fontSize: "13px", color: "#6b8c5a", lineHeight: "1.6",
                              margin: "0 0 14px",
                              display: "-webkit-box", WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical", overflow: "hidden",
                            }}>
                              {item.paragraph}
                            </p>
                          )}

                          {/* Divider */}
                          <div style={{ height: "1px", background: "#e2eeda", margin: "0 0 14px" }} />

                          {/* Read More */}
                          <Link
                            href={buildBlogHref(item, category)}
                            style={{
                              marginTop: "auto",
                              display: "inline-flex", alignItems: "center", gap: "6px",
                              color: "#1C4401", fontWeight: "700", fontSize: "13px",
                              textDecoration: "none",
                              transition: "gap 0.2s ease",
                            }}
                            onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                            onMouseLeave={e => e.currentTarget.style.gap = "6px"}
                          >
                            Read More
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#81EA06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DOTS */}
            {maxIndex > 0 && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "32px" }}>
                {Array.from({ length: maxIndex + 1 }, (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: currentIndex === idx ? "32px" : "8px",
                      height: "8px", borderRadius: "999px", border: "none",
                      background: currentIndex === idx ? "#81EA06" : "#b8d4a0",
                      transition: "all 0.35s ease", padding: 0, cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            )}

            {/* VIEW ALL BUTTON */}
            <div style={{ textAlign: "center", marginTop: "44px" }}>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#1C4401", color: "#81EA06",
                  fontWeight: "700", fontSize: "15px",
                  padding: "15px 40px", borderRadius: "999px",
                  textDecoration: "none", border: "2px solid #81EA06",
                  letterSpacing: "0.05em",
                  transition: "background 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#81EA06";
                  e.currentTarget.style.color = "#1C4401";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#1C4401";
                  e.currentTarget.style.color = "#81EA06";
                }}
              >
                View All Blog Posts
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog1;