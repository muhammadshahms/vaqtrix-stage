"use client";

import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blog.json";

export default function BlogDetailContent({ post, relatedPosts = [] }) {
  const recentPosts = blogData.posts.filter((p) => p.id !== post.id).slice(0, 5);

  return (
    <section className="section-padding">
      <div className="container">
        
        <div className="blog-layout-wrapper">
          
          <div className="blog-left-col">
            <article className="blog-post-details mb-5">
              
              <div className="post-media overflow-hidden" style={{ aspectRatio: '16/9', position: 'relative', width: '100%', borderRadius: '8px', marginBottom: '16px' }}>
                <Image src={post.img} alt={post.title || "Blog Image"} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 68vw" priority />
              </div>

              <div className="mb-3">
                <span className="bg-light px-3 py-1 rounded-pill border" style={{ color: 'var(--tp-theme-primary, #1C4401)', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', borderColor: 'var(--tp-theme-primary, #1C4401) !important' }}>
                  {post.category}
                </span>
              </div>

              <h1 style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1.3', color: 'var(--header, #000)', marginBottom: '12px' }}>{post.title}</h1>

              <div style={{ fontSize: '0.9rem', color: '#6c757d', fontWeight: '500', marginBottom: '20px' }}>
                <span>{post.author || "Vaqtrix Team"}</span>
                {post.date && (<><span className="mx-2" style={{ opacity: 0.5 }}>•</span><span>{post.date}</span></>)}
              </div>

              <hr style={{ borderTop: '1px solid #eaeaea', opacity: 1, marginBottom: '24px' }} />

              <div className="post-body" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                <p className="mb-4">{post.paragraph}</p>
                <div className="mt-5 pt-4 border-top">
                  <Link href="/blog" className="theme-btn"><i className="fas fa-arrow-left me-2"></i> Back to Blogs</Link>
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
        .recent-title { transition: color 0.3s ease; color: var(--header, #000); }
        .recent-post-link:hover .recent-title { color: var(--tp-theme-primary, #1C4401) !important; }
      `}} />
    </section>
  );
}