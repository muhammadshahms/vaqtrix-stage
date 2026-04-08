"use client";
import Image from "next/image";
import Bgover from "../../../../public/assets/img/Home/Light-BG.png";
import React from "react";

const Section02 = () => {
  return (
    <section
      className="about-section fix section-padding "
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background Image */}
      <Image
        src={Bgover}
        alt="background"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ===== Our Mission ===== */}
        <div className="container d-flex justify-content-center flex-column flex-lg-row align-items-start">
          <div className="col-12 col-lg-10">
            <h1
              className="fw-bold mb-4"
              style={{ fontSize: "60px", color: "#193F00" }}
            >
              Our Mission
            </h1>

            <div className="d-flex flex-column align-items-end">
              <div
                className="p-4 p-md-5 mb-5"
                style={{
                  backgroundColor: "#1a4002",
                  border: "2px solid #6FD801",
                  borderRadius: "14px",
                  boxShadow: "0 8px 20px rgba(90,103,255,0.15)",
                  width: "100%",
                  maxWidth: "900px",
                }}
              >
                {/* Mission Statement */}
                <div className="d-flex gap-3 mb-4 flex-wrap">
                  <div
                    style={{
                      fontSize: "50px",
                      color: "#ffffff",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    Mission Statement
                  </div>
                  <p className="mb-0 fs-5" style={{ lineHeight: "1.7", color: "#ffffff" }}>
                    To empower businesses of all sizes with AI-driven,
                    future-ready digital solutions that accelerate growth, improve efficiency,
                    and create long term measurable value.
                  </p>
                </div>

                <p className="mb-3 fs-6" style={{ color: "#ffffff" }}>
                  <strong style={{ color: "#6FD801" }}>Innovation:</strong>
                  <br />
                  Leveraging AI, automation, and emerging technologies to solve
                  real-world business challenges.
                </p>

                <p className="mb-3 fs-6" style={{ color: "#ffffff" }}>
                  <strong style={{ color: "#6FD801" }}>Creativity:</strong>
                  <br />
                  Designing intelligent digital experiences and brands
                  that connect meaningfully and perform strategically.
                </p>

                <p className="fs-6" style={{ color: "#ffffff" }}>
                  <strong style={{ color: "#6FD801" }}>Results:</strong>
                  <br />
                  Delivering scalable, ROI focused solutions aligned
                  with clear business objectives and outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Our Vision ===== */}
        <div className="container d-flex justify-content-center flex-column flex-lg-row align-items-start">
          <div className="col-12 col-lg-9">
            <h2 className="fw-bold mt-5 mb-4" style={{ color: "#193F00" }}>
              Our Vision
            </h2>

            <div className="d-flex flex-column align-items-end">
              <div
                className="p-4 p-md-5"
                style={{
                  backgroundColor: "#1a4002",
                  border: "2px solid #6FD801",
                  borderRadius: "14px",
                  boxShadow: "0 8px 20px rgba(90,103,255,0.15)",
                  width: "100%",
                  maxWidth: "820px",
                }}
              >
                <div className="d-flex gap-3 flex-wrap">
                  <div
                    style={{
                      fontSize: "50px",
                      color: "#ffffff",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    Vision Statement
                  </div>

                  <p className="mb-0 fs-5" style={{ lineHeight: "1.7", color: "#ffffff" }}>
                    To become a global AI-centric technology company that
                    enables businesses worldwide to innovate faster, scale smarter,
                    and lead their industries through intelligent, secure,
                    and future ready digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section02;
