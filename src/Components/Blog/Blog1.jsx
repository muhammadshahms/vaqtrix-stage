"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import MotionText from "../AnimateOnScroll/MotionText";
import BlogCardItem from "./BlogCardItem";
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
                  return (
                    <BlogCardItem
                      key={`${item.id}-${i}`}
                      post={item}
                      href={buildBlogHref(item, category)}
                      index={i}
                      currentIndex={currentIndex}
                      totalItems={allPosts.length}
                      cardWidthCalc={cardWidthCalc}
                    />
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