"use client";
import { useState } from "react";
import Link from "next/link";

function FeatureItem({ item }) {
  const [hovered, setHovered] = useState(false);

  const text = typeof item === "string" ? item : item.text;
  const tooltip = typeof item === "string" ? null : item.tooltip;

  return (
    <li>
      <div className="price-1 d-flex">
        <i className="bi bi-check-lg"></i>
        <span className="text-wrap">{text}</span>
      </div>

      <span
        className="icon tooltip-anchor"
        onMouseEnter={() => tooltip && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: "relative", cursor: tooltip ? "pointer" : "default" }}
      >
        <i className="bi bi-question-circle"></i>

        {hovered && tooltip && (
          <div className="feature-tooltip">
            {tooltip}
            <span className="tooltip-arrow" />
          </div>
        )}
      </span>

      <style jsx>{`
        .feature-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          right: 0;
          min-width: 200px;
          max-width: 260px;
          background: #0d1f10;
          color: #f0f0f0;
          border: 1px solid #81EA06;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
          z-index: 999;
          pointer-events: none;
          white-space: normal;
          box-shadow: 0 6px 20px rgba(129, 234, 6, 0.2);
          animation: tooltipFadeIn 0.18s ease;
        }
        .tooltip-arrow {
          position: absolute;
          top: 100%;
          right: 6px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #81EA06;
        }
        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pricing-header .tittle-sb {
          line-height: 10px;
        }
      `}</style>
    </li>
  );
}

const PricingCard = ({ addclass, title, price, description, includ, FeatureList = [], btnurl, btnname }) => {
  return (
    // ✅ 1 — w-100 + inline flex column
    <div
      className={addclass}
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <div className="pricing-header">
        <div className="content">
          <h4>{title}</h4>
          <p className="text-white fs-6 lh-base mt-3">{description}</p>
        </div>
        <div className="icon"></div>
      </div>

      {/* ✅ 2 — flexGrow:1 taake feature list space le le */}
      <ul className="price-list" style={{ flexGrow: 1 }}>
        <h6 className="text-black fs-6 lh-base mb-3 ms-3">{includ}</h6>
        {(FeatureList || []).map((item, idx) => (
          <FeatureItem key={idx} item={item} />
        ))}
      </ul>

      {/* ✅ 3 — marginTop:auto button ko hamesha neeche rakhe */}
      {btnname && btnurl && (
        <div className="price-button" >
          <Link href={btnurl} className="theme-btn">
            {btnname} 
          </Link>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
