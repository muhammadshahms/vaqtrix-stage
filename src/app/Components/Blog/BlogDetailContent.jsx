import Image from "next/image";
import Link from "next/link";

export default function BlogDetailContent({ post, relatedPosts = [] }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Main Article Section */}
            <article className="blog-post-details mb-5">
              <div className="post-header mb-4">
                <div className="d-flex align-items-center gap-3 mb-3" style={{ fontSize: "14px", color: "var(--theme)", fontWeight: "600" }}>
                  <span className="bg-light px-3 py-1 rounded-pill border">{post.category}</span>
                  {post.date && <span><i className="far fa-calendar-alt me-2"></i>{post.date}</span>}
                </div>
                <h1 className="display-5 fw-bold mb-4" style={{ color: "var(--header)" }}>{post.title}</h1>
              </div>

              <div className="post-media mb-5 overflow-hidden rounded shadow-sm" style={{ aspectRatio: '16/9', position: 'relative' }}>
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
                  priority
                />
              </div>

              <div className="post-body" style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text)" }}>
                <p className="mb-4">{post.paragraph}</p>
                {/* Additional content could go here in the future */}
                
                <div className="mt-5 pt-4 border-top">
                  <Link href="/blog" className="theme-btn">
                    <i className="fas fa-arrow-left me-2"></i> Back to Blogs
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
              <div className="related-posts-section mt-5 pt-5 border-top">
                <h3 className="mb-4 text-center">Related in {post.category}</h3>
                <div className="row g-4">
                  {relatedPosts.map((item) => (
                    <div key={`${item.id}-${item.title}`} className="col-lg-6 col-md-6 d-flex">
                      <div className="news-box-items mt-0 h-100 d-flex flex-column w-100 shadow-sm rounded-4 overflow-hidden">
                        <div className="news-image">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={600}
                            height={400}
                            sizes="(max-width: 767px) 100vw, 50vw"
                            className="w-100"
                            style={{ height: '240px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="news-content p-4 d-flex flex-column flex-grow-1 bg-white">
                          <h5 className="mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
                            <Link href={`/blog/${item.id}?service=${encodeURIComponent(item.category)}`} title={item.title} className="text-decoration-none">
                              {item.title}
                            </Link>
                          </h5>
                          {item.paragraph && <p className="mb-0 text-muted" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.paragraph}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
