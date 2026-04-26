"use client";

import MotionText from "../AnimateOnScroll/MotionText";
import Image from "next/image";
import ContactForm from "./Contactform";
import ReactCountryFlag from "react-country-flag";

const ContactInfo1 = () => {
  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-area text-center">
          <MotionText delay={0.2}>
            <div className="section-title d-flex flex-column align-items-start justify-content-center" >
              <div className="sub-title bg-color-3">
                <span>Contact us</span>
              </div>
              <h2 className="text-white">How can we help you today?</h2>
            </div>
          </MotionText>

          <MotionText delay={0.4}>
            <p className="white-text">
              The a long established fact that a reader will be <br />
              distracted the readable content of page when <br />
              looking at layout the point.
            </p>
          </MotionText>
        </div>

        {/* Contact Form and Map */}
        <div className="contact-wrapper">
          <div className="row g-4">

            {/* Contact Form */}
            <div className="col-xl-6">
              <MotionText delay={0.5}>
                <div className="contact-form-area">
                  <h3>Get in Touch</h3>
                  <ContactForm apiEndpoint="/api/contact" />
                </div>
              </MotionText>
            </div>

            {/* Map & Contact Info */}
            <div className="col-xl-6">
              <MotionText delay={0.6}>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                  {/* Google Map */}
                  <div style={{ borderRadius: "16px", overflow: "hidden", lineHeight: 0 }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                      loading="lazy"
                      width="100%"
                      height="280"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    />
                  </div>

                  {/* Contact Info Cards */}
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(28, 68, 1, 0.1)",
                      borderRadius: "16px",
                      padding: "32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      boxShadow: "0 10px 30px rgba(28, 68, 1, 0.05)",
                    }}
                  >
                    <div>
                      <h2 style={{ margin: 0, fontSize: "24px", color: "#1C4401", fontWeight: "800" }}>
                        Direct Contact
                      </h2>
                    </div>

                    <div style={{ height: "1px", background: "rgba(28, 68, 1, 0.1)" }} />

                    <MotionText delay={0.8}>
                      <div className="d-flex align-items-center" style={{ gap: "16px" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ width: "52px", height: "52px", background: "#F1F6E4", borderRadius: "50%", flexShrink: 0 }}>
                          <ReactCountryFlag
                            countryCode="US"
                            svg
                            style={{ width: "24px", height: "24px", borderRadius: "2px" }}
                          />
                        </div>
                        <div>
                          <span style={{ display: "block", fontSize: "12px", color: "#5a7a50", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>USA Office</span>
                          <h3 style={{ fontSize: "18px", color: "#1C4401", margin: 0, fontWeight: "700" }}>+1 (818) 278 0897</h3>
                        </div>
                      </div>
                    </MotionText>

                    <MotionText delay={0.85}>
                      <div className="d-flex align-items-center" style={{ gap: "16px" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ width: "52px", height: "52px", background: "#F1F6E4", borderRadius: "50%", flexShrink: 0 }}>
                          <ReactCountryFlag
                            countryCode="GB"
                            svg
                            style={{ width: "24px", height: "24px", borderRadius: "2px" }}
                          />
                        </div>
                        <div>
                          <span style={{ display: "block", fontSize: "12px", color: "#5a7a50", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>UK Office</span>
                          <h3 style={{ fontSize: "18px", color: "#1C4401", margin: 0, fontWeight: "700" }}>+44 7476617576</h3>
                        </div>
                      </div>
                    </MotionText>

                    <MotionText delay={0.9}>
                      <div className="d-flex align-items-center" style={{ gap: "16px" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ width: "52px", height: "52px", background: "#F1F6E4", borderRadius: "50%", flexShrink: 0 }}>
                          <i className="bi bi-envelope-fill" style={{ fontSize: "20px", color: "#1C4401" }}></i>
                        </div>
                        <div>
                          <span style={{ display: "block", fontSize: "12px", color: "#5a7a50", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Email Us</span>
                          <h3 style={{ fontSize: "18px", color: "#1C4401", margin: 0, fontWeight: "700" }}>info@vaqtrix.com</h3>
                        </div>
                      </div>
                    </MotionText>
                  </div>

                </div>
              </MotionText>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo1;

