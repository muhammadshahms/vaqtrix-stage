"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

const Footer1 = () => {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [status, setStatus] = useState(""); // "loading" | "success" | "error"

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        if (!agreed) {
            setStatus("agree");
            return;
        }

        setStatus("loading");

        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
                setAgreed(false);
                setTimeout(() => setStatus(""), 3000); // ✅ 3 second baad clear
            } else {
                setStatus("error");
                setTimeout(() => setStatus(""), 3000); // ✅ 3 second baad clear
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus(""), 3000); // ✅ 3 second baad clear
        }
    };

    return (
        <div>
            <section className="cta-section section-bg section-padding pb-0">
                <div className="container">
                    <div className="cta-wrapper bg-cover" data-background="/assets/img/Home/Small-Container.png">
                        <div className="cta-img wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <Image src="/assets/img/review/Stay Connected With AI-Powered, Future Ready Technology.svg" alt="Logo" width={321} height={291} />
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Stay Connected With AI-Powered
                            <br /> Future Ready Technology
                        </h2>
                        <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                            <Link href="/contact"><span className="theme-btn">Talk to an AI Specialist</span></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer-section footer-bg fix">
                <div className="container">
                    <div className="footer-widgets-wrapper">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <a href="#">
                                            <Image src="/assets/img/logo/white-logo.png" alt="Logo" width={171} height={44} />
                                        </a>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            We build AI-powered software, automation, and digital solutions designed for scalable growth, performance, and long term business success.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <a href="https://www.facebook.com/people/Vaqtrix/61587338347118/" target="_blank"><i className="bi bi-facebook"></i></a>
                                            <a href="https://x.com/vaqtrix" target="_blank"><i className="bi bi-twitter"></i></a>
                                            <a href="https://www.instagram.com/vaqtrix" target="_blank"><i className="bi bi-instagram"></i></a>
                                            <a href="https://www.youtube.com/@Vaqtrix" target="_blank"><i className="bi bi-youtube"></i></a>
                                            <a href="https://www.linkedin.com/company/vaqtrix/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about"><i className="bi bi-arrow-right"></i>Vaqtrix About</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog"><i className="bi bi-arrow-right"></i>Our Blogs</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq"><i className="bi bi-arrow-right"></i>FAQ'S</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact"><i className="bi bi-arrow-right"></i>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Recent Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-post-items">
                                            <div className="thumb">
                                                <Image src="/assets/img/news/pp1.jpg" alt="Logo" width={80} height={80} />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li><i className="fa-solid fa-calendar-days me-2"></i>20 Feb, 2024</li>
                                                </ul>
                                                <h6>
                                                    <Link href="/undercunstraction">Top 5 Most Famous <br />Technology Trend In 2024</Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-post-items mb-0">
                                            <div className="thumb">
                                                <Image src="/assets/img/news/pp2.jpg" alt="Logo" width={80} height={80} />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li><i className="fa-solid fa-calendar-days me-2"></i>15 Dec, 2024</li>
                                                </ul>
                                                <h6>
                                                    <Link href="/undercunstraction">The Surfing Man Will Blow <br />Your Mind</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <Image
                                                    src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                                                    alt="gmail"
                                                    width={24}
                                                    height={24}
                                                />
                                                <a href="mailto:info@vaqtrix.com">info@vaqtrix.com</a>
                                            </li>
                                            <li>
                                                <ReactCountryFlag countryCode="US" svg style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                                                +1 (818) 278 0897
                                            </li>
                                            <li>
                                                <ReactCountryFlag countryCode="GB" svg style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                                                +44 7476617576
                                            </li>
                                        </ul>

                                        {/* ✅ Newsletter Form */}
                                        <form onSubmit={handleNewsletterSubmit}>
                                            <div className="footer-input">
                                                <input
                                                    type="email"
                                                    id="email2"
                                                    placeholder="Your email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    disabled={status === "loading"}
                                                />
                                                <button
                                                    className="newsletter-btn"
                                                    type="submit"
                                                    disabled={status === "loading"}
                                                >
                                                    <i className={`bi ${status === "loading" ? "bi-hourglass-split" : "bi-arrow-right"}`}></i>
                                                </button>
                                            </div>

                                            {/* Status Messages */}
                                            {status === "success" && (
                                                <p style={{ color: "#81EA06", fontSize: "12px", marginTop: "6px" }}>
                                                    ✓ Subscribed successfully!
                                                </p>
                                            )}
                                            {status === "error" && (
                                                <p style={{ color: "#ff4d4d", fontSize: "12px", marginTop: "6px" }}>
                                                    ✗ Something went wrong. Try again.
                                                </p>
                                            )}
                                            {status === "agree" && (
                                                <p style={{ color: "#ffcc00", fontSize: "12px", marginTop: "6px" }}>
                                                    ⚠ Please agree to the Privacy Policy.
                                                </p>
                                            )}

                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckChecked"
                                                    checked={agreed}
                                                    onChange={(e) => {
                                                        setAgreed(e.target.checked);
                                                        if (status === "agree") setStatus("");
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    I agree to the <a href="#">Privacy Policy.</a>
                                                </label>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright 2026 by Vaqtrix
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/refund-policy">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" id="scrollUp" className="scroll-icon">
                        <i className="bi bi-arrow-up"></i>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Footer1;
