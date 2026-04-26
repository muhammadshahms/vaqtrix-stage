"use client";
import Image from "next/image";
import Bgover from "../../../public/assets/img/Home/Light-BG.png";
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
      <div className="position-relative z-1 py-5">
        <div className="container">
          
          {/* ===== Our Mission ===== */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-xl-9">
              <div className="mb-4 ms-2 ms-md-4 d-flex align-items-center gap-3">
                <h2 className="fw-bold mb-0" style={{ color: "var(--header)", fontSize: "2.6rem" }}>
                  Our <span style={{ color: "#183E01" }}>Mission</span>
                </h2>
              </div>
              
              <div 
                className="p-4 p-md-5 rounded-4 bg-white"
                style={{
                  border: "2px solid #6FD801",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
                }}
              >
                <div style={{ maxWidth: "850px" }}>
                  <h3 className="fw-bold mb-3 fs-2" style={{ color: "var(--header)" }}>
                    Mission Statement
                  </h3>
                  
                  <p className="fs-5 mb-5" style={{ lineHeight: "1.8", color: "var(--text)" }}>
                    To empower businesses of all sizes with AI-driven, future-ready digital solutions that
                    accelerate growth, improve efficiency, and create long term measurable value.
                  </p>

                  <div className="border-top pt-4" style={{ borderColor: 'rgba(0,0,0,0.05) !important' }}>
                    <div className="mb-4">
                      <h5 className="fw-bold mb-2 fs-5" style={{ color: "var(--header)" }}>
                        Innovation:
                      </h5>
                      <p className="mb-0" style={{ color: "var(--text)", fontSize: "1.05rem", lineHeight: "1.6", opacity: 0.9 }}>
                        Leveraging AI, automation, and emerging technologies to solve real-world business challenges.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h5 className="fw-bold mb-2 fs-5" style={{ color: "var(--header)" }}>
                        Creativity:
                      </h5>
                      <p className="mb-0" style={{ color: "var(--text)", fontSize: "1.05rem", lineHeight: "1.6", opacity: 0.9 }}>
                        Designing intelligent digital experiences and brands that connect meaningfully and perform strategically.
                      </p>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-2 fs-5" style={{ color: "var(--header)" }}>
                        Results:
                      </h5>
                      <p className="mb-0" style={{ color: "var(--text)", fontSize: "1.05rem", lineHeight: "1.6", opacity: 0.9 }}>
                        Delivering scalable, ROI focused solutions aligned with clear business objectives and outcomes.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== Our Vision ===== */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="mb-4 ms-2 ms-md-4 d-flex align-items-center gap-3 mt-4">
                <h2 className="fw-bold mb-0" style={{ color: "var(--header)", fontSize: "2.6rem" }}>
                  Our <span style={{ color: "#183E01" }}>Vision</span>
                </h2>
              </div>

              <div 
                className="p-4 p-md-5 rounded-4 bg-white"
                style={{
                  border: "2px solid #6FD801",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
                }}
              >
                <div style={{ maxWidth: "850px" }}>
                  <h3 className="fw-bold mb-3 fs-2" style={{ color: "var(--header)" }}>
                    Vision Statement
                  </h3>
                  <p className="fs-5 mb-0" style={{ lineHeight: "1.8", color: "var(--text)" }}>
                    To become a global AI-centric technology company that enables businesses
                    worldwide to innovate faster, scale smarter, and lead their industries through
                    intelligent, secure, and future ready digital solutions.
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
