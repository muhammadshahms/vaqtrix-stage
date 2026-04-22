"use client";

import Link from "next/link";

const categoryColors = {
  "Website Development": "#1C4401",
  "Mobile App Development": "#1C4401",
  "AI Development": "#1C4401",
  "E-commerce Solutions": "#1C4401",
  "Digital Marketing & Branding": "#1C4401",
  "E-book Creations": "#1C4401",
  "General": "#1C4401",
  "About Vaqtrix": "#1C4401",
};

const categoryThumbs = {
  "Website Development": { bg: "#dbeafe", iconColor: "#1C4401" },
  "Mobile App Development": { bg: "#ede9fe", iconColor: "#1C4401" },
  "AI Development": { bg: "#e0f2fe", iconColor: "#1C4401" },
  "E-commerce Solutions": { bg: "#fef3c7", iconColor: "#1C4401" },
  "Digital Marketing & Branding": { bg: "#fee2e2", iconColor: "#1C4401" },
  "E-book Creations": { bg: "#d1fae5", iconColor: "#1C4401" },
  "General": { bg: "#f0fdf4", iconColor: "#1C4401" },
  "About Vaqtrix": { bg: "#ecfdf5", iconColor: "#1C4401" },
};

const thumbFallbacks = [
  { bg: "#dbeafe", iconColor: "#1C4401" },
  { bg: "#ede9fe", iconColor: "#1C4401" },
  { bg: "#fef3c7", iconColor: "#1C4401" },
  { bg: "#d1fae5", iconColor: "#1C4401" },
  { bg: "#fee2e2", iconColor: "#1C4401" },
  { bg: "#e0f2fe", iconColor: "#1C4401" },
];

const GlobeIcon = (color) => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const getReadTime = (text = "") => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

export default function BlogCardItem({ post, href, index = 0, currentIndex = 0, totalItems = 1, cardGap = 24, cardWidthCalc = "100%" }) {
  const globalIndex = (currentIndex + index) % totalItems;
  const thumb = categoryThumbs[post.category] || thumbFallbacks[globalIndex % thumbFallbacks.length];

  return (
    <div style={{ flex: `0 0 ${cardWidthCalc}`, minWidth: 0, display: "flex", flexDirection: "column" }}>
      <Link
        href={href}
        className="news-box-items mt-0 rounded overflow-hidden"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
          color: "inherit",
        }}
      >
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
          {GlobeIcon(thumb.iconColor)}

          {post.category && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "rgba(255,255,255,0.92)",
                color: thumb.iconColor,
                fontSize: "10px",
                fontWeight: "800",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "4px 11px",
                borderRadius: "999px",
                border: `1px solid ${thumb.iconColor}44`,
              }}
            >
              {post.category}
            </span>
          )}

          {post.paragraph && (
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
              {getReadTime(post.paragraph)}
            </span>
          )}
        </div>

        <div style={{ height: "3px", width: "100%", flexShrink: 0, background: categoryColors[post.category] || thumbFallbacks[globalIndex % thumbFallbacks.length].iconColor }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "18px 20px 22px" }}>
          {post.date && (
            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#888", fontWeight: "500" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#81EA06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {post.date}
              </span>
            </div>
          )}

          <h5 style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "2.8em", lineHeight: "1.4em", margin: "0 0 10px", fontSize: "15px", fontWeight: "700", color: "#1C4401" }}>
            {post.title}
          </h5>

          {post.paragraph && (
            <p style={{ fontSize: "13px", color: "#6b8c5a", lineHeight: "1.6", margin: "0 0 14px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {post.paragraph}
            </p>
          )}

          <div style={{ height: "1px", background: "#e2eeda", margin: "0 0 14px" }} />

          <div style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "6px", color: "#1C4401", fontWeight: "700", fontSize: "13px" }}>
            Read More
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#81EA06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
