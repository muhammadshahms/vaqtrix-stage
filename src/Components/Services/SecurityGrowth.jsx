'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import servicesData from "@/data/featurescard.json";

const CardList = ({ category }) => {
  const categoryData = servicesData.categories.find(cat => cat.name === category);
  const cards = categoryData?.services || [];

  const [modalIndex, setModalIndex] = useState(null);
  const startX = useRef(0);
  const endX = useRef(0);

  const handleOpenModal = (index) => setModalIndex(index);
  const handleCloseModal = () => setModalIndex(null);
  const handleNext = () => setModalIndex((prev) => (prev + 1) % cards.length);
  const handlePrev = () => setModalIndex((prev) => (prev - 1 + cards.length) % cards.length);

  useEffect(() => {
    if (modalIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleCloseModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalIndex, cards.length]);

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    if (startX.current - endX.current > 50) handleNext();
    if (endX.current - startX.current > 50) handlePrev();
  };

  return (
    <section className="fix section-padding">
      <div className="section-header">
        <div className="sub-title mx-auto" style={{ marginBottom: '16px' }}>
          <span>{categoryData?.subtitle || 'OUR SOLUTIONS'}</span>
        </div>
        <h2>{category ? `${category}` : 'Services'}</h2>
        <p>Explore our {category ? category.toLowerCase() : ''} solutions designed to grow your business.</p>
      </div>

      <div className="grid-wrapper container">
        {cards.map((card, index) => (
          <CardItem key={index} card={card} onClick={() => handleOpenModal(index)} />
        ))}
      </div>
    </section>
  );
};

// ── Card Item ─────────────────────────────────────────────────────────────────
const CardItem = ({ card, onClick }) => {
  const isExternal = card?.image?.startsWith('http');

  return (
    <div className="card-wrapper" onClick={onClick}>

      {/* ✅ Next.js Image — local aur external dono handle */}
      {card?.image && (
        <Image
          src={card.image}
          alt={card.title || 'service'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
          // ✅ external URLs ke liye unoptimized — next.config mein domain add karna hoga
          unoptimized={isExternal}
        />
      )}

      {/* Content overlay */}
      <div className="card-content-overlay">
        <h2 className="card-heading">{card?.title}</h2>
        <div className="glass-overlay">
          <p className="card-description">{card?.desc}</p>
        </div>
      </div>

      <div className="back-overlay"></div>
    </div>
  );
};

export default CardList;
