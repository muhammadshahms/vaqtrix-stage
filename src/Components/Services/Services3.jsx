"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ServicesCategory = ({ category }) => {
  const [hovered, setHovered] = useState(null);

  if (!category || !category.items || category.items.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <section
      className="service-section fix section-padding"
    >
      <div className="container text-start">

        {/* ✅ Add main heading and paragraph */}
        <div className="section-title text-center mb-5">
           <div className="sub-title mx-auto">
             <span>INDUSTRIES</span>
           </div>
           <h2>{category.heading}</h2>
           <p dangerouslySetInnerHTML={{ __html: category.paragraph }}></p>
        </div>

        <div className="row g-4">
          {category.items.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + i * 0.1}s`}
            >
              <div
                className="service-box-items mt-0 h-100"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundColor: "#ffffff",
                  transform: hovered === i ? "translateY(-10px) scale(1.02)" : "translateY(0)",
                  transition: "all 0.35s ease",
                  boxShadow:
                    hovered === i ? "0 15px 35px rgba(0,0,0,0.08)" : "none",
                }}
              >
                <div className="icon" style={{ minWidth: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={item.img} alt={item.title} width={80} height={80} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </div>

                <div className="content">
                  <h4>
                    <Link href={item.link || "/service/service-details"}>
                      {item.title}
                    </Link>
                  </h4>

                  <p>{item.content}</p>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategory;
