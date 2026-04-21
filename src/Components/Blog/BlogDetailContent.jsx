"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogData from "@/data/blog.json";

export default function BlogDetailContent({ post, relatedPosts = [] }) {
  const recentPosts = blogData.posts.filter((p) => p.id !== post.id).slice(0, 3);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const postTitle = post?.title || "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {}
    }
  }, []);

  const handleShare = (platform) => {
    if (typeof window === "undefined") return;
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(postTitle);
    let shareUrl = "";
    if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    if (platform === "linkedin") shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    if (platform === "pinterest") shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}`;
    if (platform === "whatsapp") shareUrl = `https://wa.me/?text=${encodeURIComponent(`${postTitle} ${pageUrl}`)}`;
    if (platform === "email") shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
    if (shareUrl) window.open(shareUrl, "_blank", "noopener,noreferrer");
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

  return (
    <section className="section-padding">
      <div className="container">

        <div className="blog-layout-wrapper">

          <div className="blog-left-col">
            <article className="blog-post-details mb-5">

              <div className="post-media post-featured-media overflow-hidden" style={{ aspectRatio: "16/9", position: "relative", width: "100%", borderRadius: "8px", marginBottom: "16px" }}>
                <Image src={post.img} alt={post.title || "Blog Image"} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 68vw" priority />
              </div>

              <div className="mb-3">
                <span className="bg-light px-3 py-1 rounded-pill border" style={{ color: "var(--tp-theme-primary, #1C4401)", fontSize: "0.75rem", fontWeight: "600", display: "inline-block", borderColor: "var(--tp-theme-primary, #1C4401) !important" }}>
                  {post.category}
                </span>
              </div>

              <h1 className="blog-post-title" style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", color: "var(--header, #000)", marginBottom: "12px" }}>{post.title}</h1>

              <div style={{ fontSize: "0.9rem", color: "#6c757d", fontWeight: "500", marginBottom: "20px" }}>
                <span>{post.author || "Vaqtrix Team"}</span>
                {post.date && (<><span className="mx-2" style={{ opacity: 0.5 }}>•</span><span>{post.date}</span></>)}
              </div>

              <hr style={{ borderTop: "1px solid #eaeaea", opacity: 1, marginBottom: "24px" }} />

              <div className="post-body blog-post-body" style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#333" }}>
                <p className="mb-4">{post.paragraph}</p>
                <div className="mt-5 pt-4 border-top">
                  <Link href="/blog" className="theme-btn"><i className="fas fa-arrow-left me-2"></i> Back to Blogs</Link>
                </div>

                <div style={{ marginTop: "1.5rem" }}>

                  {/* Share Row */}
                  <div className="blog-share-row" style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                    <strong style={{ fontSize: "1rem", color: "var(--header, #000)" }}>Share:</strong>
                    {[
                      { platform: "facebook", bg: "#1877F2", Icon: FaFacebookF },
                      { platform: "twitter", bg: "#000000", Icon: FaXTwitter },
                      { platform: "linkedin", bg: "#0A66C2", Icon: FaLinkedinIn },
                      { platform: "pinterest", bg: "#E60023", Icon: FaPinterestP },
                      { platform: "whatsapp", bg: "#25D366", Icon: FaWhatsapp },
                      { platform: "email", bg: "#EA4335", Icon: FaEnvelope },
                    ].map(({ platform, bg, Icon }) => (
                      <button key={platform} type="button" aria-label={`Share on ${platform}`} onClick={() => handleShare(platform)} className="share-icon-btn" style={{ background: bg }}>
                        <Icon size={16} />
                      </button>
                    ))}
                  </div>

                  {/* ✅ Theme-matched Comment Form */}
                  <div style={{
                    background: "linear-gradient(135deg, #1C4401 0%, #2a6302 100%)",
                    borderRadius: "16px",
                    padding: "3rem",
                    boxShadow: "0 8px 32px rgba(28,68,1,0.18)",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "1120px",
                    margin: "0 auto",
                  }}>

                    {/* Decorative circle */}
                    <div style={{
                      position: "absolute", top: "-40px", right: "-40px",
                      width: "160px", height: "160px", borderRadius: "50%",
                      background: "rgba(129,234,6,0.08)", pointerEvents: "none",
                    }} />
                    <div style={{
                      position: "absolute", bottom: "-30px", left: "-30px",
                      width: "100px", height: "100px", borderRadius: "50%",
                      background: "rgba(129,234,6,0.06)", pointerEvents: "none",
                    }} />

                    {/* Heading */}
                    <div style={{ marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(129,234,6,0.15)", border: "1px solid rgba(129,234,6,0.3)", borderRadius: "999px", padding: "4px 14px", marginBottom: "12px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#81EA06", display: "inline-block" }} />
                        <span style={{ color: "#81EA06", fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }}>Leave a Comment</span>
                      </div>
                      <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", margin: "0 0 6px" }}>
                        We would love to hear your thoughts
                      </h3>
                      <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                        Ask anything, share feedback, or drop your suggestion for the next post.
                      </p>
                    </div>

                    <form onSubmit={handleCommentSubmit} style={{ position: "relative", zIndex: 1 }}>
                      <div className="comment-input-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "1.25rem" }}>
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
                          height: "130px",
                          resize: "vertical",
                          marginBottom: "1.5rem",
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
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "#fff";
                            e.currentTarget.style.color = "#1C4401";
                            e.currentTarget.style.borderColor = "#fff";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "#81EA06";
                            e.currentTarget.style.color = "#1C4401";
                            e.currentTarget.style.borderColor = "#81EA06";
                          }}
                        >
                          Post Comment
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        </button>

                        {commentSubmitted && (
                          <p style={{ margin: 0, color: "#81EA06", fontSize: "0.92rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#81EA06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            </article>
          </div>

          {/* Sidebar */}
          <aside className="blog-right-sidebar">
            <div className="sidebar-widget">
              <h3 style={{ fontSize: "1rem", fontWeight: "600", borderBottom: "2px solid var(--tp-theme-primary, #1C4401)", paddingBottom: "8px", marginBottom: "16px", color: "var(--header, #000)" }}>
                Recent Posts
              </h3>
              <div className="recent-posts-list" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {recentPosts.map((rp, index) => {
                  const params = new URLSearchParams();
                  if (rp.category) params.set("service", rp.category);
                  const query = params.toString();
                  const href = `/blog/${rp.id}${query ? `?${query}` : ""}`;
                  return (
                    <Link 
                      href={href} 
                      key={rp.id} 
                      className="recent-post-link" 
                      style={{ 
                        textDecoration: 'none', 
                        display: 'flex', 
                        gap: '16px', 
                        alignItems: 'flex-start', 
                        borderBottom: '1px solid #eaeaea', 
                        paddingBottom: '18px' 
                      }}
                    >
                      {/* Image and Date Column */}
                      <div style={{ width: '120px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '100%', height: '80px', position: 'relative', borderRadius: '6px', overflow: 'hidden' }}>
                           <Image 
                             src={rp.img || "/assets/img/blog/blog-1.jpg"} 
                             alt={rp.title || "Recent Post"} 
                             fill 
                             style={{ objectFit: 'cover' }} 
                           />
                        </div>
                        {rp.date && (
                          <div style={{ 
                            fontSize: '11px', 
                            color: '#6c757d', 
                            marginTop: '8px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '5px',
                            fontWeight: '600'
                          }}>
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#81EA06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                               <rect x="3" y="4" width="18" height="18" rx="2" />
                               <line x1="16" y1="2" x2="16" y2="6" />
                               <line x1="8" y1="2" x2="8" y2="6" />
                               <line x1="3" y1="10" x2="21" y2="10" />
                             </svg>
                             {rp.date}
                          </div>
                        )}
                      </div>

                      {/* Title Column */}
                      <div style={{ flex: 1, marginTop: '-2px' }}>
                        <h4 className="recent-title" style={{ 
                          fontSize: '15px', 
                          margin: 0, 
                          fontWeight: '700', 
                          lineHeight: '1.45', 
                          display: '-webkit-box', 
                          WebkitLineClamp: 3, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden' 
                        }}>
                           {rp.title}
                        </h4>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="blog-adsense-wrap" style={{ marginTop: "2rem" }}>
                <p style={{ fontSize: "11px", color: "#8a8a8a", textAlign: "center", marginBottom: "8px", letterSpacing: "0.02em" }}>Advertisement</p>
                <ins className="adsbygoogle blog-adsense-block" style={{ display: "block" }} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true" />
              </div>
            </div>
          </aside>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-layout-wrapper { display: flex; flex-direction: column; gap: 2rem; }
        .blog-left-col { width: 100%; }
        .blog-right-sidebar { width: 100%; }
        @media (min-width: 768px) {
          .blog-layout-wrapper { flex-direction: row; justify-content: space-between; }
          .blog-left-col { width: 68%; }
          .blog-right-sidebar { width: 30%; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .blog-left-col { width: 62%; }
          .blog-right-sidebar { width: 35%; }
        }
        .recent-title { transition: color 0.3s ease; color: var(--header, #000); }
        .recent-post-link:hover .recent-title { color: var(--tp-theme-primary, #1C4401) !important; }
        .share-icon-btn {
          width: 38px; height: 38px; border-radius: 50%; border: none;
          display: inline-flex; align-items: center; justify-content: center;
          color: #ffffff; cursor: pointer; transition: transform 0.2s ease;
        }
        .share-icon-btn:hover { transform: translateY(-2px); }
        @media (max-width: 767px) {
          .post-featured-media { border-radius: 6px !important; }
          .blog-post-title { font-size: 1.4rem !important; }
          .blog-post-body { font-size: 1rem !important; line-height: 1.7 !important; }
          .share-icon-btn { width: 34px; height: 34px; }
          .comment-input-grid { grid-template-columns: 1fr !important; }
          .blog-adsense-wrap, .blog-adsense-block { width: 100%; max-width: 100%; }
        }
      `}} />
    </section>
  );
}