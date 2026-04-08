"use client";

import MotionText from "../AnimateOnScroll/MotionText";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import ContactForm from "./Contactform";

const ContactInfo1 = () => {
  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-area text-center">
          <MotionText delay={0.2}>
            <div className="section-title">
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
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                    loading="lazy"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>

                  <div className="contact-info-wrapper">
                    <h2>Contact Info</h2>

                    <MotionText delay={0.8}>
                      <div className="contact-info style2">
                        <div className="icon">
                          <ReactCountryFlag countryCode="US" svg style={{ width: "22px", height: "22px" }} />
                        </div>
                        <div className="content">
                          <h3>+1 (818) 278 0897</h3>
                        </div>
                      </div>
                    </MotionText>

                    <MotionText delay={0.8}>
                      <div className="contact-info style2">
                        <div className="icon">
                          <ReactCountryFlag countryCode="GB" svg style={{ width: "22px", height: "22px" }} />
                        </div>
                        <div className="content">
                          <h3>+44 7476617576</h3>
                        </div>
                      </div>
                    </MotionText>

                    <MotionText delay={0.9}>
                      <div className="contact-info style2 border-none">
                        <div className="icon">
                          <Image
                            src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                            alt="gmail"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="content">
                          <h3>info@vaqtrix.com</h3>
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
