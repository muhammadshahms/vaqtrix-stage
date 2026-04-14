"use client"
import React from "react";
import ContactForm from "./Contactform";
import Image from "next/image";

/**
 * ContactInfo2 — Address cards + Map + Heading + Form
 *
 * Form ki saari functionality ContactForm component handle karta hai.
 * Yahan sirf layout aur contact info hai.
 */
const ContactInfo2 = () => {
  return (
    <div>
      {/* ===== Address / Email / Phone Cards ===== */}
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">

            {/* Address */}
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-info-items text-center active">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>2464 Royal Ln. Mesa, New Jersey <br /> 45463.</p>
                </div>
              </div>
            </div> */}

            {/* Email */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <Image src="/assets/img/contect icon/E-Mail.svg" alt="emial" width={70} height={70}/>
                </div>
                <div className="content">
                  <h3><a href="mailto:info@example.com">info@vaqtrix.com</a></h3>
                  <p>Email us anytime for any kind <br /> of query.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <Image src="/assets/img/contect icon/Phone.svg" alt="phone icon" width={70} height={70}/>
                </div>
                <div className="content">
                  <h3>Hot: <a href="tel:+2086660112">+1 (818) 278 0897</a></h3>
                  <p>Call us for any kind of support, <br /> we will wait for it.</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <Image src="/assets/img/contect icon/Phone.svg" alt="phone icon" width={70} height={70}/>
                </div>
                <div className="content">
                  <h3>Hot: <a href="tel:+2086660112">+44 7476617576</a></h3>
                  <p>Call us for any kind of support, <br /> we will wait for it.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Map + Contact Form ===== */}
      <section className="contact-section-33 fix section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">

              {/* Map */}
              <div className="col-lg-6">
                <div className="map-items">
                  <div className="googpemap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                      loading="lazy"
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="col-lg-6">
                <div className="contact-content">
                  <h2>Ready To Start Your Project With Vaqtrix?</h2>
                  <p>
                    Tell us about your goals and our experts will help you plan the right AI-powered digital solution for your business growth and long-term success.

                  </p>

                  {/* ✅ Reusable ContactForm — saara data backend ko jaata hai */}
                  <ContactForm apiEndpoint="/api/contact" />

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo2;
