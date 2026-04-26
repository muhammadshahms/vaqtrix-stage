"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import blogData from "@/data/blog.json";
import BlogCardItem from "./BlogCardItem";

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
    background: focusedField === field ? "#F1F6E4" : "#F1F6E4",
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
                <BlogCardItem 
                  post={item} 
                  href={buildBlogHref(item)} 
                  index={i} 
                  totalItems={filteredContent.length} 
                  cardWidthCalc="100%" 
                />
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



      </div>
    </section>
  );
};

export default Blog4;
