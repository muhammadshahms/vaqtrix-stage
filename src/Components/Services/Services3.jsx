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
      style={{ backgroundColor: "#EBF4EB", marginTop: "-1px", backgroundImage: "none" }}
    >
      <div className="container text-start">

        {/* ✅ Add main heading and paragraph */}
        <div className="section-header text-center mb-5">
           <h1>{category.heading}</h1>
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
                  transform: hovered === i ? "translateY(-10px) scale(1.02)" : "translateY(0)",
                  transition: "all 0.35s ease",
                  boxShadow:
                    hovered === i ? "0 15px 35px rgba(0,0,0,0.08)" : "none",
                }}
              >
                <div className="icon">
                  <Image src={item.img} alt={item.title} width={60} height={50} />
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
