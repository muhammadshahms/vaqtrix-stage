"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isSticky, setIsSticky] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 767;
      setIsMobileViewport(isMobile);
      if (!isMobile) setMobileToggle(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 cs-gescout_sticky-home1 cs_style_1 header_sticky_style1 ${
          variant || ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">

              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image src="/assets/img/logo/white-logo.png" alt="img" width={171} height={44} />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  {isMobileViewport ? (
                    <button
                      type="button"
                      className="simple-mobile-menu-btn"
                      aria-label={mobileToggle ? "Close menu" : "Open menu"}
                      aria-expanded={mobileToggle}
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      {mobileToggle ? "✕" : "☰"}
                    </button>
                  ) : (
                    <span
                      className={mobileToggle ? "cs-munu_toggle cs_teggle_active" : "cs-munu_toggle"}
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  )}
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="d-flex align-items-center gap-3">
<Link href="/blog" className="header-cta-btn header-cta-lg" aria-label="Go to blog page">
  Blog
</Link>

                  <Link href="/contact" className="header-cta-btn header-cta-lg" aria-label="Go to contact page">
                    Contact
                  </Link>
                </div>

                <style>{`
                  .header-cta-btn {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 8px 20px;
                    border-radius: 8px;
                    border: 1.5px solid #81ea06;
                    background: #81ea06;
                    color: #0e2800 !important;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    letter-spacing: 0.02em;
                    transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease;
                    outline: none;
                    box-shadow: none;
                  }
                  .header-cta-btn:hover,
                  .header-cta-btn:focus,
                  .header-cta-btn:focus-visible,
                  .header-cta-btn:active {
                    background: #ffffff;
                    color: #0e2800 !important;
                    border-color: #81ea06;
                    outline: none;
                    box-shadow: none;
                  }
                  .header-cta-outline {
                    background: transparent;
                    border-color: #81ea06;
                    color: #81ea06 !important;
                  }
                  .header-cta-outline:hover,
                  .header-cta-outline:focus,
                  .header-cta-outline:focus-visible,
                  .header-cta-outline:active {
                    background: #ffffff;
                    color: #81ea06 !important;
                  
                    outline: none;
                    box-shadow: none;
                  }
                `}</style>
              </div>

            </div>
          </div>
        </div>
      </header>

      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-inner">
          <i onClick={() => setSearchToggle(!searchToggle)} className="bi bi-x-lg search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}