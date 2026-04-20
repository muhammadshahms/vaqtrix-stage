"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import blogData from "@/data/blog.json";

const truncate = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "..." : text;
};

// ✅ Category colors for colored bar
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

// ✅ Category thumbnails with background colors
const categoryThumbs = {
  "Website Development": { bg: "#dbeafe", iconColor: "#1d4ed8" },
  "Mobile App Development": { bg: "#ede9fe", iconColor: "#7c3aed" },
  "AI Development": { bg: "#e0f2fe", iconColor: "#0891b2" },
  "E-commerce Solutions": { bg: "#fef3c7", iconColor: "#d97706" },
  "Digital Marketing & Branding": { bg: "#fee2e2", iconColor: "#dc2626" },
  "E-book Creations": { bg: "#d1fae5", iconColor: "#059669" },
  "General": { bg: "#f0fdf4", iconColor: "#1C4401" },
  "About Vaqtrix": { bg: "#ecfdf5", iconColor: "#1C4401" },
};

// ✅ Read time calculator
const getReadTime = (text = "") => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

// This tab map keeps the visible labels aligned with the requested UI,
// while still filtering against the existing blog categories in data.
const BLOG_TABS = [
  { label: "All", value: "All" },
  { label: "General", value: "General" },
  { label: "About Vaqtrix", value: "About Vaqtrix" },
  { label: "Website Development", value: "Website Development" },
  { label: "Mobile App Development", value: "Mobile App Development" },
  { label: "AI Development", value: "AI Development" },
  { label: "E-commerce Solutions", value: "E-commerce Solutions" },
  { label: "Digital Marketing & Branding", value: "Digital Marketing & Branding" },
  { label: "E-book Creations", value: "E-book Creations" },
];

const buildBlogHref = (post) => {
  if (!post?.id) return post?.link || "/blog";

  const params = new URLSearchParams();
  if (post.category) params.set("service", post.category);

  const query = params.toString();
  return `/blog/${post.id}${query ? `?${query}` : ""}`;
};

// ✅ Calendar SVG Icon
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "1px" }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Blog4 = ({ initialCategory }) => {
  const { posts } = blogData;

  const sectionRef = useRef(null);
  
  // Use initialCategory if valid, else default to "All"
  const defaultCategory = BLOG_TABS.some(t => t.value === initialCategory) 
    ? initialCategory 
    : BLOG_TABS[0].value;

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [shareUrl, setShareUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const filteredContent =
    selectedCategory === "All"
      ? posts
      : posts.filter((item) => item.category === selectedCategory);

  const cardsPerPage = 6;
  const totalPages = Math.ceil(filteredContent.length / cardsPerPage);
  const currentCards = filteredContent.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

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

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setCommentSubmitted(true);
    setName("");
    setEmail("");
    setComment("");
  };

  const inputStyle = (field) => ({
    border: `1.5px solid ${focusedField === field ? "#81EA06" : "#d4e6c3"}`,
    borderRadius: "10px",
    padding: "13px 16px",
    fontSize: "0.95rem",
    width: "100%",
    background: focusedField === field ? "#f6fff0" : "#fff",
    color: "#1C4401",
    outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease",
    boxShadow: focusedField === field ? "0 0 0 3px rgba(129,234,6,0.15)" : "none",
  });

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const safeShareUrl = shareUrl || "https://vaqtrix.com/blog";
  const encodedUrl = encodeURIComponent(safeShareUrl);
  const encodedText = encodeURIComponent("Check out this blog on Vaqtrix");
  const emailSubject = encodeURIComponent("Interesting blog from Vaqtrix");
  const emailBody = encodeURIComponent(`I found this blog useful: ${safeShareUrl}`);

  const shareItems = [
    {
      label: "Share on Facebook",
      icon: "bi bi-facebook",
      className: "is-facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Share on Twitter",
      icon: "bi bi-twitter",
      className: "is-twitter",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      label: "Share on LinkedIn",
      icon: "bi bi-linkedin",
      className: "is-linkedin",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on X",
      icon: "bi bi-twitter-x",
      className: "is-x",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      label: "Share on Pinterest",
      icon: "bi bi-pinterest",
      className: "is-pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`,
    },
    {
      label: "Share on WhatsApp",
      icon: "bi bi-whatsapp",
      className: "is-whatsapp",
      href: `https://wa.me/?text=${encodeURIComponent(`Check this out: ${safeShareUrl}`)}`,
    },
    {
      label: "Share via Email",
      icon: "bi bi-envelope-fill",
      className: "is-email",
      href: `mailto:?subject=${emailSubject}&body=${emailBody}`,
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding fix">
      <div className="container">

        {/* Category Tabs */}
        <div className="text-center mb-4 blog-tabs-wrap">
          <ul className="nav justify-content-center gap-2 border-0">
            {BLOG_TABS.map((cat) => (
              <li key={cat.label} className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${selectedCategory === cat.value ? "active" : ""}`}
                  onClick={() => handleCategoryClick(cat.value)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="row g-4"
            // ✅ align-items-stretch — saari cards row me equal height
            style={{ alignItems: "stretch" }}
          >
            {currentCards.length === 0 && (
              <div className="text-center w-100">No results found.</div>
            )}

            {currentCards.map((item, i) => (
              <motion.div
                key={`${item.id}-${i}`}
                className="col-12 col-md-6 col-xl-4"
                layout
                // ✅ flex column taaki card andar bhi stretch ho
                style={{ display: "flex", flexDirection: "column" }}
              >
                {/* ✅ Card — height: 100% taaki equal height mile */}
                <Link
                  href={buildBlogHref(item)}
                  className="news-box-items mt-0 shadow-lg rounded overflow-hidden"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  {/* ✅ Thumbnail with category badge + read time + colored bar */}
                  <div
                    style={{
                      height: "170px",
                      background: "#f0fdf4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1C4401" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
                      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>

                    {/* Category badge — top left */}
                    {item.category && (
                      <span
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(255,255,255,0.92)",
                          color: "#1C4401",
                          fontSize: "10px",
                          fontWeight: "800",
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          padding: "4px 11px",
                          borderRadius: "999px",
                          border: "1px solid #1C440144",
                        }}
                      >
                        {item.category}
                      </span>
                    )}

                    {/* Read time — top right */}
                    {item.paragraph && (
                      <span
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          background: "#1C4401",
                          color: "#81EA06",
                          fontSize: "10px",
                          fontWeight: "700",
                          padding: "4px 10px",
                          borderRadius: "999px",
                        }}
                      >
                        {getReadTime(item.paragraph)}
                      </span>
                    )}
                  </div>

                  {/* ✅ Colored category bar */}
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      flexShrink: 0,
                      background: "#1C4401",
                    }}
                  />

                  {/* Content */}
                  <div
                    className="news-content p-3"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {/* ✅ Date */}
                    {item.date && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#888",
                          fontSize: "11px",
                          fontWeight: 500,
                        }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#81EA06"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{item.date}</span>
                      </div>
                    )}

                    {/* ✅ Title: 2 line clamp */}
                    <h5
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: "1.4em",
                        minHeight: "2.8em",
                        margin: "0 0 10px",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#1C4401",
                        wordBreak: "break-word",
                      }}
                      title={item.title}
                    >
                      {item.title}
                    </h5>

                    {/* ✅ Paragraph: 2 line clamp */}
                    {item.paragraph && (
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.6",
                          margin: "0 0 14px",
                          fontSize: "13px",
                          color: "#6b8c5a",
                          wordBreak: "break-word",
                        }}
                        title={item.paragraph}
                      >
                        {item.paragraph}
                      </p>
                    )}

                    {/* ✅ Divider */}
                    <div style={{ height: "1px", background: "#e2eeda", margin: "0 0 14px" }} />

                    {/* ✅ Read More link */}
                    <div
                      style={{
                        marginTop: "auto",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#1C4401",
                        fontWeight: "700",
                        fontSize: "13px",
                        cursor: "pointer",
                        transition: "gap 0.2s ease",
                      }}
                    >
                      Read More
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#81EA06"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="text-center mt-5">
            <ul className="nav justify-content-center gap-2 border-0">

              <li className="nav-item">
                <button
                  className={`nav-link ${isFirstPage ? "disabled opacity-50" : ""}`}
                  onClick={() => !isFirstPage && handlePageChange(currentPage - 1)}
                  style={{ pointerEvents: isFirstPage ? "none" : "auto" }}
                >
                  Prev
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className="nav-item">
                  <button
                    className={`nav-link ${currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li className="nav-item">
                <button
                  className={`nav-link ${isLastPage ? "disabled opacity-50" : ""}`}
                  onClick={() => !isLastPage && handlePageChange(currentPage + 1)}
                  style={{ pointerEvents: isLastPage ? "none" : "auto" }}
                >
                  Next
                </button>
              </li>

            </ul>
          </div>
        )}

        <div className="blog-comment-wrap mt-5 pt-5 border-top">
          <div className="blog-share-wrap" style={{ marginBottom: "1.5rem" }}>
            <span className="blog-share-label">Share:</span>
            <div className="blog-share-links">
              {shareItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`blog-share-btn ${item.className}`}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #1C4401 0%, #2a6302 100%)",
              borderRadius: "16px",
              padding: "3rem",
              boxShadow: "0 8px 32px rgba(28,68,1,0.18)",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              maxWidth: "1120px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(129,234,6,0.08)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "rgba(129,234,6,0.06)",
                pointerEvents: "none",
              }}
            />

            <div style={{ marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(129,234,6,0.15)",
                  border: "1px solid rgba(129,234,6,0.3)",
                  borderRadius: "999px",
                  padding: "4px 14px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#81EA06",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: "#81EA06",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Leave a Comment
                </span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", margin: "0 0 6px" }}>
                We would love to hear your thoughts
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                Ask anything, share feedback, or drop your suggestion for the next post.
              </p>
            </div>

            <form onSubmit={handleCommentSubmit} style={{ position: "relative", zIndex: 1 }}>
              <div
                className="comment-input-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle("name")}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle("email")}
                />
              </div>

              <textarea
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onFocus={() => setFocusedField("comment")}
                onBlur={() => setFocusedField(null)}
                required
                style={{
                  ...inputStyle("comment"),
                  height: "120px",
                  resize: "vertical",
                  marginBottom: "1.25rem",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  style={{
                    background: "#81EA06",
                    color: "#1C4401",
                    border: "2px solid #81EA06",
                    padding: "11px 28px",
                    borderRadius: "999px",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                    transition: "background 0.3s ease, color 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#1C4401";
                    e.currentTarget.style.borderColor = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#81EA06";
                    e.currentTarget.style.color = "#1C4401";
                    e.currentTarget.style.borderColor = "#81EA06";
                  }}
                >
                  Post Comment
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                {commentSubmitted && (
                  <p
                    style={{
                      margin: 0,
                      color: "#81EA06",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#81EA06"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Thank you for your comment!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog4;
