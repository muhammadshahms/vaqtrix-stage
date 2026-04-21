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

const GlobeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1C4401" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const getReadTime = (text = "") => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

export default function BlogCardItem({ post, href, cardWidthCalc = "100%" }) {
  return (
    <div style={{ flex: `0 0 ${cardWidthCalc}`, minWidth: 0, display: "flex", flexDirection: "column" }}>
      <Link
        href={href}
        className="news-box-items mt-0 shadow-lg rounded overflow-hidden"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          alignSelf: "flex-start",
          textDecoration: "none",
          color: "inherit",
          width: "100%",
          paddingBottom: "8px"
        }}
      >
        {/* Thumbnail */}
        <div
          style={{
            height: "220px",
            background: "#f0fdf4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            borderRadius: "10px 10px 0 0",
          }}
        >
          {post.image ? (
            <img
              src={post.image}
              alt={post.title || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <GlobeIcon />
          )}

          {post.category && (
            <span
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                background: "rgba(255,255,255,0.92)",
                color: "#1C4401",
                fontSize: "10px",
                fontWeight: "800",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "4px 11px",
                borderRadius: "999px",
                border: "1px solid rgba(28,68,1,0.27)",
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

        {/* Color bar */}
        <div style={{ height: "3px", width: "100%", flexShrink: 0, background: categoryColors[post.category] || "#1C4401" }} />

        {/* Card body */}
        <div style={{ display: "flex", flexDirection: "column", padding: "12px 14px 10px" }}>
          <h5
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "2.6em",
              lineHeight: "1.4em",
              margin: "0 0 8px",
              fontSize: "15px",
              fontWeight: "700",
              color: "#1C4401",
            }}
          >
            {post.title}
          </h5>

          {post.paragraph && (
            <p
              style={{
                fontSize: "13px",
                color: "#6b8c5a",
                lineHeight: "1.5",
                margin: "0",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.paragraph}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}