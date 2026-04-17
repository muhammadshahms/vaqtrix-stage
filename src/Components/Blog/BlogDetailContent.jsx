"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogData from "@/data/blog.json";

export default function BlogDetailContent({ post, relatedPosts = [] }) {
  const recentPosts = blogData.posts.filter((p) => p.id !== post.id).slice(0, 5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const postTitle = post?.title || "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        // Ignore AdSense initialization errors in local/dev environments.
      }
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

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setCommentSubmitted(true);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <section className="section-padding">
      <div className="container">
        
        <div className="blog-layout-wrapper">
          
          <div className="blog-left-col">
            <article className="blog-post-details mb-5">
              
              <div className="post-media post-featured-media overflow-hidden" style={{ aspectRatio: '16/9', position: 'relative', width: '100%', borderRadius: '8px', marginBottom: '16px' }}>
                <Image src={post.img} alt={post.title || "Blog Image"} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 68vw" priority />
              </div>

              <div className="mb-3">
                <span className="bg-light px-3 py-1 rounded-pill border" style={{ color: 'var(--tp-theme-primary, #1C4401)', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', borderColor: 'var(--tp-theme-primary, #1C4401) !important' }}>
                  {post.category}
                </span>
              </div>

              <h1 className="blog-post-title" style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1.3', color: 'var(--header, #000)', marginBottom: '12px' }}>{post.title}</h1>

              <div style={{ fontSize: '0.9rem', color: '#6c757d', fontWeight: '500', marginBottom: '20px' }}>
                <span>{post.author || "Vaqtrix Team"}</span>
                {post.date && (<><span className="mx-2" style={{ opacity: 0.5 }}>•</span><span>{post.date}</span></>)}
              </div>

              <hr style={{ borderTop: '1px solid #eaeaea', opacity: 1, marginBottom: '24px' }} />

              <div className="post-body blog-post-body" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                <p className="mb-4">{post.paragraph}</p>
                <div className="mt-5 pt-4 border-top">
                  <Link href="/blog" className="theme-btn"><i className="fas fa-arrow-left me-2"></i> Back to Blogs</Link>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <div className="blog-share-row" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <strong style={{ fontSize: '1rem', color: 'var(--header, #000)' }}>Share:</strong>
                    <button type="button" aria-label="Share on Facebook" onClick={() => handleShare("facebook")} className="share-icon-btn" style={{ background: '#1877F2' }}>
                      <FaFacebookF size={16} />
                    </button>
                    <button type="button" aria-label="Share on X" onClick={() => handleShare("twitter")} className="share-icon-btn" style={{ background: '#000000' }}>
                      <FaXTwitter size={16} />
                    </button>
                    <button type="button" aria-label="Share on LinkedIn" onClick={() => handleShare("linkedin")} className="share-icon-btn" style={{ background: '#0A66C2' }}>
                      <FaLinkedinIn size={16} />
                    </button>
                    <button type="button" aria-label="Share on Pinterest" onClick={() => handleShare("pinterest")} className="share-icon-btn" style={{ background: '#E60023' }}>
                      <FaPinterestP size={16} />
                    </button>
                    <button type="button" aria-label="Share on WhatsApp" onClick={() => handleShare("whatsapp")} className="share-icon-btn" style={{ background: '#25D366' }}>
                      <FaWhatsapp size={16} />
                    </button>
                    <button type="button" aria-label="Share via Email" onClick={() => handleShare("email")} className="share-icon-btn" style={{ background: '#EA4335' }}>
                      <FaEnvelope size={16} />
                    </button>
                  </div>

                  <div className="comment-card-wrap" style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--header, #000)' }}>We would love to hear your thoughts</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>Ask anything, share feedback, or drop your suggestion for the next post.</p>

                    <form onSubmit={handleCommentSubmit}>
                      <div className="comment-input-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                          style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '12px 16px', fontSize: '0.95rem', width: '100%' }}
                        />
                        <input
                          type="email"
                          placeholder="Email address"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                          style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '12px 16px', fontSize: '0.95rem', width: '100%' }}
                        />
                      </div>

                      <textarea
                        placeholder="Write your comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        required
                        style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '12px 16px', fontSize: '0.95rem', width: '100%', height: '120px', marginTop: '1rem', resize: 'vertical' }}
                      />

                      <button type="submit" style={{ background: '#1a73e8', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontSize: '0.95rem', cursor: 'pointer', marginTop: '1rem' }}>
                        Post Comment
                      </button>

                      {commentSubmitted && (
                        <p style={{ marginTop: '0.85rem', marginBottom: 0, color: '#2e7d32', fontSize: '0.92rem', fontWeight: 500 }}>
                          Thank you for your comment!
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <aside className="blog-right-sidebar">
            <div className="sidebar-widget">
              <h3 style={{ fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid var(--tp-theme-primary, #1C4401)', paddingBottom: '8px', marginBottom: '16px', color: 'var(--header, #000)' }}>
Recent Posts</h3>
              <div className="recent-posts-list">
                {recentPosts.map((rp) => {
                  const params = new URLSearchParams();
                  if (rp.category) params.set("service", rp.category);
                  const query = params.toString();
                  const href = `/blog/${rp.id}${query ? `?${query}` : ""}`;
                  return (
                    <Link href={href} key={rp.id} className="recent-post-link" style={{ display: 'flex', gap: '16px', paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid #eaeaea', textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ width: '80px', height: '60px', flexShrink: 0, position: 'relative', borderRadius: '4px', overflow: 'hidden' }}>
                        <Image src={rp.img} alt={rp.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h4 className="recent-title" style={{ fontSize: '0.85rem', fontWeight: '600', margin: '0 0 6px 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.4' }}>{rp.title}</h4>
                        {rp.date && <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>{rp.date}</span>}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="blog-adsense-wrap" style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '11px', color: '#8a8a8a', textAlign: 'center', marginBottom: '8px', letterSpacing: '0.02em' }}>Advertisement</p>
                {/* TODO: Replace with actual AdSense pub-id and slot */}
                <ins
                  className="adsbygoogle blog-adsense-block"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                  data-ad-slot="XXXXXXXXXX"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
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
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .share-icon-btn:hover {
          transform: translateY(-1px);
        }
        @media (max-width: 767px) {
          .post-featured-media {
            border-radius: 6px !important;
          }
          .blog-post-title {
            font-size: 1.4rem !important;
          }
          .blog-post-body {
            font-size: 1rem !important;
            line-height: 1.7 !important;
          }
          .share-icon-btn {
            width: 34px;
            height: 34px;
          }
          .comment-card-wrap {
            padding: 1.25rem !important;
          }
          .blog-adsense-wrap,
          .blog-adsense-block {
            width: 100%;
            max-width: 100%;
          }
        }
        @media (max-width: 767px) {
          .comment-input-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}