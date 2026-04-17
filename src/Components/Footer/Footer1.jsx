"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

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
            {/* Top CTA Banner overlapping the footer */}
            <div className="container" style={{ position: "relative", zIndex: 2, marginBottom: "-50px" }}>
                <div 
                    className="cta-wrapper bg-cover d-flex flex-column flex-lg-row align-items-center p-4 p-md-5" 
                    data-background="/assets/img/Home/Small-Container.png" 
                    style={{ borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.15)", position: "relative" }}
                >
                    {/* The absolute Cutout Image (Floats over the container on Desktop) */}
                    <div className="cta-img-absolute d-none d-lg-block" style={{ position: "absolute", left: "40px", bottom: "0", zIndex: 10 }}>
                        <img 
                            src="/assets/img/Images/Stay Connected With AI-Powered, Future Ready Technology.svg" 
                            alt="Person using phone" 
                            style={{ height: "300px", width: "auto", objectFit: "contain", display: "block", marginBottom: "-10px" }} 
                        />
                    </div>

                    {/* Mobile relative Image (For smaller screens) */}
                    <div className="cta-img-mobile d-block d-lg-none wow img-custom-anim-left mb-4" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <img 
                            src="/assets/img/Images/Stay Connected With AI-Powered, Future Ready Technology.svg" 
                            alt="Person using phone" 
                            style={{ height: "200px", width: "auto", objectFit: "contain", display: "block", margin: "0 auto" }} 
                        />
                    </div>

                    {/* Spacer for desktop to push text to the right of the absolute image */}
                    <div className="d-none d-lg-block" style={{ width: "260px", flexShrink: 0 }}></div>

                    <h2 className="wow fadeInUp text-center text-lg-start mb-4 mb-lg-0" data-wow-delay=".3s" style={{ fontSize: "28px", flex: "1", lineHeight: "1.3", position: "relative", zIndex: 11 }}>
                        Stay Connected With AI-Powered
                        <br /> Future Ready Technology
                    </h2>
                    <div className="main-button wow fadeInUp text-center" data-wow-delay=".5s" style={{ flex: "0 0 auto", position: "relative", zIndex: 11 }}>
                        <Link href="/contact"><span className="theme-btn">Talk to an AI Specialist</span></Link>
                    </div>
                </div>
            </div>

            <section className="footer-section footer-bg fix" style={{ paddingTop: "130px" }}>
                <div className="container">
                    <div className="footer-widgets-wrapper pb-5">
                        <div className="row g-4">
                            {/* Brand Section */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget h-100 d-flex flex-column">
                                    <div className="widget-head mb-4">
                                        <Link href="/">
                                            <Image src="/assets/img/logo/white-logo.png" alt="Logo" width={171} height={44} />
                                        </Link>
                                    </div>
                                    <div className="footer-content flex-grow-1">
                                        <p className="mb-4" style={{ color: "#aaa", fontSize: "15px", lineHeight: "1.6" }}>
                                            We build AI-powered software, automation, and digital solutions designed for scalable growth, performance, and long term business success.
                                        </p>
                                        <div className="social-icon d-flex align-items-center gap-2 mt-auto">
                                            <a href="https://www.facebook.com/people/Vaqtrix/61587338347118/" target="_blank" style={{ width:"36px", height:"36px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,0.05)", borderRadius:"50%", transition:"all 0.3s" }}><FaFacebookF /></a>
                                            <a href="https://x.com/vaqtrix" target="_blank" style={{ width:"36px", height:"36px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,0.05)", borderRadius:"50%", transition:"all 0.3s" }}><FaTwitter /></a>
                                            <a href="https://www.instagram.com/vaqtrix" target="_blank" style={{ width:"36px", height:"36px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,0.05)", borderRadius:"50%", transition:"all 0.3s" }}><FaInstagram /></a>
                                            <a href="https://www.youtube.com/@Vaqtrix" target="_blank" style={{ width:"36px", height:"36px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,0.05)", borderRadius:"50%", transition:"all 0.3s" }}><FaYoutube /></a>
                                            <a href="https://www.linkedin.com/company/vaqtrix/" target="_blank" style={{ width:"36px", height:"36px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,0.05)", borderRadius:"50%", transition:"all 0.3s" }}><FaLinkedinIn /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget ps-xl-4 h-100">
                                    <div className="widget-head mb-4">
                                        <h3 style={{ fontSize: "20px", fontWeight: "600" }}>Quick Links</h3>
                                    </div>
                                    <ul className="list-area" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li className="mb-3">
                                            <Link href="/about" style={{ color: "#aaa", transition: "color 0.3s", display: "flex", alignItems: "center" }}><i className="bi bi-chevron-right me-2" style={{ fontSize: "12px", color: "#81EA06" }}></i>About Us</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="/blog" style={{ color: "#aaa", transition: "color 0.3s", display: "flex", alignItems: "center" }}><i className="bi bi-chevron-right me-2" style={{ fontSize: "12px", color: "#81EA06" }}></i>Our Blogs</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="/faq" style={{ color: "#aaa", transition: "color 0.3s", display: "flex", alignItems: "center" }}><i className="bi bi-chevron-right me-2" style={{ fontSize: "12px", color: "#81EA06" }}></i>FAQ's</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" style={{ color: "#aaa", transition: "color 0.3s", display: "flex", alignItems: "center" }}><i className="bi bi-chevron-right me-2" style={{ fontSize: "12px", color: "#81EA06" }}></i>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget h-100">
                                    <div className="widget-head mb-4">
                                        <h3 style={{ fontSize: "20px", fontWeight: "600" }}>Recent Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-post-items d-flex align-items-center gap-3 mb-4">
                                            <div className="thumb flex-shrink-0">
                                                <img src="/assets/img/news/pp1.jpg" alt="Post" style={{ width: "65px", height: "65px", objectFit: "cover", borderRadius: "8px" }} />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date mb-1 d-flex" style={{ fontSize: "12px", color: "#81EA06", listStyle: "none", padding: 0, margin: 0 }}>
                                                    <li><i className="fa-solid fa-calendar-days me-1"></i>20 Feb, 2024</li>
                                                </ul>
                                                <h6 style={{ fontSize: "15px", lineHeight: "1.4", margin: 0 }}>
                                                    <Link href="/undercunstraction" style={{ color: "#fff", transition: "color 0.3s" }}>Top 5 Famous Technology Trend</Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-post-items d-flex align-items-center gap-3">
                                            <div className="thumb flex-shrink-0">
                                                <img src="/assets/img/news/pp2.jpg" alt="Post" style={{ width: "65px", height: "65px", objectFit: "cover", borderRadius: "8px" }} />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date mb-1 d-flex" style={{ fontSize: "12px", color: "#81EA06", listStyle: "none", padding: 0, margin: 0 }}>
                                                    <li><i className="fa-solid fa-calendar-days me-1"></i>15 Dec, 2024</li>
                                                </ul>
                                                <h6 style={{ fontSize: "15px", lineHeight: "1.4", margin: 0 }}>
                                                    <Link href="/undercunstraction" style={{ color: "#fff", transition: "color 0.3s" }}>The Surfing Man Will Blow Your Mind</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact / Newsletter */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget h-100">
                                    <div className="widget-head mb-4 text-start">
                                        <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                                            <li className="d-flex align-items-center gap-3">
                                                <Image src="/assets/img/icon/12.svg" alt="Gmail" width={22} height={18} style={{ flexShrink: 0, objectFit: "contain" }} />
                                                <a href="mailto:info@vaqtrix.com" style={{ color: "#fff", fontSize: "15px", textDecoration: "none", fontWeight: "500" }}>info@vaqtrix.com</a>
                                            </li>
                                            <li className="d-flex align-items-center gap-3">
                                                <ReactCountryFlag countryCode="US" svg style={{ width: "22px", height: "22px", borderRadius: "1px", flexShrink: 0 }} />
                                                <a href="tel:+18182780897" style={{ color: "#fff", fontSize: "15px", textDecoration: "none", fontWeight: "500" }}>+1 (818) 278 0897</a>
                                            </li>
                                            <li className="d-flex align-items-center gap-3">
                                                <ReactCountryFlag countryCode="GB" svg style={{ width: "22px", height: "22px", borderRadius: "1px", flexShrink: 0 }} />
                                                <a href="tel:+447476617576" style={{ color: "#fff", fontSize: "15px", textDecoration: "none", fontWeight: "500" }}>+44 7476617576</a>
                                            </li>

                                            <li className="d-flex gap-2 align-items-center mt-3">
                                                <input
                                                    type="checkbox"
                                                    id="privacyChecked"
                                                    checked={agreed}
                                                    onChange={(e) => {
                                                        setAgreed(e.target.checked);
                                                        if (status === "agree") setStatus("");
                                                    }}
                                                    style={{ cursor: "pointer", width: "20px", height: "20px", accentColor: "#00a12b", flexShrink: 0, borderRadius: "2px" }}
                                                />
                                                <label htmlFor="privacyChecked" style={{ fontSize: "15px", cursor: "pointer", color: "#e8ede7", margin: 0, fontWeight: "400" }}>
                                                    I agree to the <Link href="/privacy-policy" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "4px" }}>Privacy Policy.</Link>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom position-relative" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="container">
                        <div className="scroll-to-top-wrapper text-center w-100 d-flex justify-content-center" style={{ position: "absolute", top: "-25px", left: "0", zIndex: 3 }}>
                            <div 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                                className="scroll-icon d-inline-flex align-items-center justify-content-center" 
                                style={{ width: "50px", height: "50px", borderRadius: "50%", background: "transparent", border: "5px solid #fff", color: "#fff", fontSize: "18px", cursor: "pointer", transition: "all 0.3s ease" }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(-50%) translateY(-5px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(-50%) translateY(0)"}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="19" x2="12" y2="5"></line>
                                    <polyline points="5 12 12 5 19 12"></polyline>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="footer-wrapper d-flex align-items-center justify-content-between flex-column flex-md-row py-4">
                            <p className="wow fadeInLeft color-2 mb-3 mb-md-0 m-0" data-wow-delay=".3s" style={{ fontSize: "14px", color: "#aaa" }}>
                                © {new Date().getFullYear()} Vaqtrix. All Rights Reserved.
                            </p>
                            <ul className="footer-menu wow fadeInRight d-flex gap-4 m-0 p-0" data-wow-delay=".5s" style={{ listStyle: "none" }}>
                                <li><a href="/terms-conditions" style={{ color: "#aaa", fontSize: "14px", textDecoration: "none", transition: "color 0.3s" }}>Terms & Conditions</a></li>
                                <li><a href="/privacy-policy" style={{ color: "#aaa", fontSize: "14px", textDecoration: "none", transition: "color 0.3s" }}>Privacy Policy</a></li>
                                <li><a href="/refund-policy" style={{ color: "#aaa", fontSize: "14px", textDecoration: "none", transition: "color 0.3s" }}>Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer1;

