"use client";

// ─────────────────────────────────────────────────────────────────────────────
// 📦 Marquee3
//
// ── Kisi bhi page pe use karo, sirf category prop do:
//    <Marquee3 category="home" />
//    <Marquee3 category="about" />
//    <Marquee3 category="website" />
//    <Marquee3 category="app" />
//    <Marquee3 category="digital" />
//    <Marquee3 category="ecom" />
//    <Marquee3 category="ai" />
//    <Marquee3 category="ebook" />
//
// ── Koi buttons nahi, design/animation bilkul same rahega
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { motion } from "framer-motion";
import marqueeJson from "@/data/servise-slider.json";

const MarqueeRow = ({ items = [], reverse = false }) => {
  return (
    <motion.div
      className="comm"
      style={{ display: "flex" }}
      animate={{
        x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...items, ...items].map((text, index) => (
        <div
          key={index}
          className={`cmn-textslide ${index % 2 === 0 ? "stroke-text" : ""}`}
        >
          <Image
            src="/assets/img/Home Icons/Small Logo.svg"
            alt="icon"
            width={50}
            height={54}
          />
          {text}
        </div>
      ))}
    </motion.div>
  );
};

const Marquee3 = ({ category = "home" }) => {
  // JSON se us page ke items uthao, fallback home pe
  const items = marqueeJson.pages[category] || marqueeJson.pages["home"];

  return (
    <div className="marquee-section section-padding pt-0">
      <div className="mycustom-marque theme-blue-bg">
        <div className="scrolling-wrap">
          <MarqueeRow items={items} />
          <MarqueeRow items={items} reverse />
          <MarqueeRow items={items} />
          <MarqueeRow items={items} reverse />
        </div>
      </div>
    </div>
  );
};

export default Marquee3;
