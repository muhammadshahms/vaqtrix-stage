"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MotionText from "../AnimateOnScroll/MotionText";
import blogData from "../../data/blog.json";

const AUTO_INTERVAL = 3000;
const TRANSITION_DURATION = 600; // ms

const getVisibleCards = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 992) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
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

  // We render visibleCards + 1 extra card (the incoming one from right)
  // translateX shifts left by one card width each tick
  const [offset, setOffset] = useState(0); // 0 = normal, -1 = sliding left by 1 card

  const intervalRef = useRef(null);
  const maxIndex = Math.max(0, allPosts.length - visibleCards);
  const cardGap = visibleCards === 1 ? 0 : 24;

  // Resize
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

  // Category change reset
  useEffect(() => {
    setCurrentIndex(0);
    setOffset(0);
    setIsTransitioning(false);
  }, [category]);

  // Slide function — ek card right se aata hai
  const slideNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset(-1); // animate left by 1 card width

    setTimeout(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      setOffset(0);         // instantly reset (no transition)
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  // Auto slide
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

  // Render visibleCards + 1 (next card peeking from right)
  const renderPosts = [];
  for (let i = 0; i < visibleCards + 1; i++) {
    const postIndex = (currentIndex + i) % allPosts.length;
    renderPosts.push(allPosts[postIndex]);
  }

  // Card width as percentage of container minus gaps
  // Container = 100%, total gap = (visibleCards - 1) * cardGap
  // Each card = (100% - totalGap) / visibleCards
  const totalGap = (visibleCards - 1) * cardGap;
  const cardWidthCalc = `calc((100% - ${totalGap}px) / ${visibleCards})`;

  // Track moves left by 1 card + 1 gap
  const translateX =
    offset === -1
      ? `calc(-1 * ((100% - ${totalGap}px) / ${visibleCards} + ${cardGap}px))`
      : "0px";

  return (
    <section className="news-section section-padding section-bg">
      <div className="container">

        {/* HEADING */}
        <div className="section-title text-center">
          <MotionText>
            <div className="sub-title bg-color-2">
              <span>{subTitle}</span>
            </div>
            <h2>{heading}</h2>
          </MotionText>
        </div>

        {allPosts.length === 0 ? (
          <p className="text-center">No posts found.</p>
        ) : (
          <>
            {/* SLIDER VIEWPORT — clips extra card */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                overflow: "hidden",
                width: "100%",
                position: "relative",
              }}
            >
              {/* TRACK — slides left smoothly */}
              <div
                style={{
                  display: "flex",
                  gap: `${cardGap}px`,
                  alignItems: "stretch",
                  // ✅ smooth transition only when sliding, instant reset after
                  transform: `translateX(${translateX})`,
                  transition: offset === -1
                    ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                    : "none",
                  willChange: "transform",
                }}
              >
                {renderPosts.map((item, i) => (
                  <div
                    key={`${item.id}-${i}`}
                    style={{
                      flex: `0 0 ${cardWidthCalc}`,
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="news-box-items"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      {/* Image */}
                      <div className="news-image" style={{ flexShrink: 0 }}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={342}
                          height={243}
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>

                      {/* Content */}
                      <div
                        className="news-content"
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <h5
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "3em",
                            lineHeight: "1.5em",
                            margin: 0,
                          }}
                        >
                          <Link href={item.link || "/blog/blog-details"} title={item.title}>
                            {item.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            {maxIndex > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "20px",
                }}
              >
                {Array.from({ length: maxIndex + 1 }, (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: currentIndex === idx ? "28px" : "8px",
                      height: "8px",
                      borderRadius: "999px",
                      border: "none",
                      background: currentIndex === idx
                        ? "var(--tp-theme-primary, #1C4401)"
                        : "#ccc",
                      transition: "all 0.35s ease",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog1;
