"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import techStackData from "@/data/techstack.json";

const TechStack = ({ category = "home" }) => {
  const data = techStackData[category] || techStackData["home"];

  // ✅ Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); // initial check
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const imgSrc = isMobile ? data.mobileImage : data.desktopImage;

  return (
    <section className="bg-white section-padding">
      <div className="container text-center">

        <h2 className="fw-bold mb-4">
          {data.heading}
          {data.subheading && (
            <>
              <br />
              <span>{data.subheading}</span>
            </>
          )}
        </h2>

        {/* ✅ Desktop ya Mobile image — screen size ke hisab se */}
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={data.heading}
          width={1200}
          height={600}
          style={{ width: "100%", height: "auto" }}
          priority
        />

      </div>
    </section>
  );
};

export default TechStack;
