import Image from "next/image";
import marqueeJson from "@/data/servise-slider.json";

const MarqueeRow = ({ items = [] }) => {
  return (
    <div className="marquee3-row-wrap">
      <div className="marquee3-track">
        {[...items, ...items].map((text, index) => (
          <div
            key={index}
            className={`marquee3-item ${index % 2 === 0 ? "marquee3-item--filled" : "marquee3-item--stroke"}`}
          >
            <Image
              src="/assets/img/Home Icons/Small Logo.svg"
              alt="icon"
              width={36}
              height={38}
              className="marquee3-icon"
            />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

const Marquee3 = ({ category = "home" }) => {
  const items = marqueeJson.pages[category] || marqueeJson.pages["home"];

  return (
    <div className="marquee-section section-padding pt-0 marquee3-section">
      <div className="mycustom-marque theme-blue-bg marquee3-container">
        <MarqueeRow items={items} />
      </div>
    </div>
  );
};

export default Marquee3;