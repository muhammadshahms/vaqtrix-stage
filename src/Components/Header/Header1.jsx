"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import Button from "../Common/Button";

export default function Header1({ variant }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sticky / hide-on-scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky");
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky");
      } else {
        setIsSticky("");
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── HEADER BAR ─── */}
      <header
        className={`cs_site_header header_style_2 cs-gescout_sticky-home1 cs_style_1 header_sticky_style1 ${
          variant || ""
        } cs_sticky_header cs_site_header_full_width position-relative ${isSticky}`}
        style={{ zIndex: 1000 }}
      >
        <div className="cs_main_header w-100">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between w-100 py-3">

              {/* Left: Logo */}
              <div className="d-flex align-items-center" style={{ zIndex: 1001 }}>
                <Link className="cs_site_branding" href="/">
                  <Image
                    src="/assets/img/logo/white-logo.png"
                    alt="Vaqtrix"
                    width={140}
                    height={36}
                    priority
                  />
                </Link>
              </div>

              {/* Center: Desktop Navigation */}
              <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <Nav setMobileToggle={() => {}} />
                </div>
              </div>

              {/* Right: Desktop Buttons + Mobile Hamburger */}
              <div className="d-flex align-items-center gap-3" style={{ zIndex: 1001 }}>
                {/* Desktop Buttons */}
                <div className="d-none d-lg-flex align-items-center gap-3">
                  <Button href="/blog" variant="outline" className="rounded-pill" aria-label="Blog">
                    Blog
                  </Button>
                  <Button href="/contact" variant="primary" className="rounded-pill" aria-label="Contact">
                    Contact
                  </Button>
                </div>

                {/* Mobile Hamburger */}
                <button
                  className="d-lg-none vq-hamburger"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "24px",
                      height: "2px",
                      background: "#F1F6E4",
                      borderRadius: "2px",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "24px",
                      height: "2px",
                      background: "#F1F6E4",
                      borderRadius: "2px",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: mobileOpen ? 0 : 1,
                      transform: mobileOpen ? "scaleX(0)" : "scaleX(1)",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "24px",
                      height: "2px",
                      background: "#F1F6E4",
                      borderRadius: "2px",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                    }}
                  />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ─── BACKDROP ─── */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 1099,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transition: "opacity 0.35s ease",
        }}
        aria-hidden="true"
      />

      {/* ─── MOBILE DRAWER ─── */}
      <nav
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100dvh",
          width: "min(320px, 85vw)",
          background: "linear-gradient(160deg, #183E01 0%, #0d2300 55%, #0a1900 100%)",
          zIndex: 1100,
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          boxShadow: mobileOpen ? "-8px 0 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(241, 246, 228, 0.15)",
          }}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/assets/img/logo/white-logo.png"
              alt="Vaqtrix"
              width={120}
              height={31}
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            style={{
              background: "rgba(241,246,228,0.08)",
              border: "1px solid rgba(241,246,228,0.2)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#F1F6E4",
              fontSize: "18px",
              transition: "background 0.2s ease",
            }}
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div style={{ padding: "12px 0", flex: 1 }}>
          <Nav setMobileToggle={setMobileOpen} isMobileDrawer />
        </div>

        {/* Drawer Footer Buttons */}
        <div
          style={{
            padding: "20px 24px 32px",
            borderTop: "1px solid rgba(241, 246, 228, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Button
            href="/blog"
            variant="outline"
            className="rounded-pill w-100 text-center"
            style={{ justifyContent: "center", padding: "12px" }}
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Button>
          <Button
            href="/contact"
            variant="primary"
            className="rounded-pill w-100 text-center"
            style={{ justifyContent: "center", padding: "12px" }}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Button>
        </div>
      </nav>

      {/* Search Overlay (unchanged) */}
      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-inner">
          <i
            onClick={() => setSearchToggle(!searchToggle)}
            className="bi bi-x-lg search-close"
            id="search-close"
          />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}