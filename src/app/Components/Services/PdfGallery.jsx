"use client";

import { useRef, useState } from "react";
import projectData from "../../data/scrollcard.json";

export default function ImageCards({ categoryId }) {
  const scrollRefs = useRef({});
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const startScroll = (id) => {
    const el = scrollRefs.current[id];
    if (!el) return;
    el.style.scrollBehavior = "auto";
    const speed = 3;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const scrollStep = () => {
      if (el.scrollTop < maxScroll) {
        el.scrollTop += speed;
        el._scrollAnimation = requestAnimationFrame(scrollStep);
      }
    };
    cancelAnimationFrame(el._scrollAnimation);
    el._scrollAnimation = requestAnimationFrame(scrollStep);
  };

  const stopScroll = (id) => {
    const el = scrollRefs.current[id];
    if (!el) return;
    cancelAnimationFrame(el._scrollAnimation);
    el.style.scrollBehavior = "smooth";
    el.scrollTop = 0;
  };

  const category = projectData.find((cat) => cat.id === categoryId);
  console.log("category:", category);
  console.log("total cards:", category?.cards?.length);
  console.log("totalPages:", Math.ceil(category?.cards?.length / 6));
  if (!category) return <p>Category not found</p>;

  const totalPages = Math.ceil(category.cards.length / cardsPerPage);
  const currentCards = category.cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section ref={sectionRef} className="service-section fix section-padding">
      <div className="container">
        <h1>{category.heading}</h1>
        <p>{category.paragraph}</p>

        {/* Cards Grid */}
        <div className="cards">
          {currentCards.map((card, i) => {
            const id = `${category.id}-img-${(currentPage - 1) * cardsPerPage + i}`;
            return (
              <div
                key={id}
                className="card"
                onMouseEnter={() => startScroll(id)}
                onMouseLeave={() => stopScroll(id)}
              >
                <div className="img-box">
                  <div
                    className="img-scroll"
                    ref={(el) => (scrollRefs.current[id] = el)}
                    style={{ overflowY: "auto" }}
                  >
                    <img src={card.image} alt={card.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination — CaseStudy4 style */}
        {totalPages > 1 && (
          <ul className="nav categories-tabs justify-content-center mt-5 gap-2">

            {/* Prev */}
            <li className="nav-item">
              <button
                className={`nav-link ${isFirstPage ? "disabled opacity-50" : ""}`}
                onClick={() => !isFirstPage && handlePageChange(currentPage - 1)}
                style={{ pointerEvents: isFirstPage ? "none" : "auto" }}
              >
                Prev
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className="nav-item">
                <button
                  className={`nav-link ${currentPage === page ? "active" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}

            {/* Next */}
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
        )}

      </div>
    </section>
  );
}
