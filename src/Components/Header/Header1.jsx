"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import Button from "../Common/Button";

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
            <div className="cs_main_header_in d-flex align-items-center justify-content-between w-100">

              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image src="/assets/img/logo/white-logo.png" alt="img" width={171} height={44} />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="d-lg-none">
                  <button
                    type="button"
                    className="simple-mobile-menu-btn"
                    aria-label={mobileToggle ? "Close menu" : "Open menu"}
                    aria-expanded={mobileToggle}
                    onClick={() => setMobileToggle(!mobileToggle)}
                    style={{ background: 'none', border: 'none', color: '#fff', fontSize: '28px', padding: '10px' }}
                  >
                    {mobileToggle ? "✕" : "☰"}
                  </button>
                </div>
                <div className={`cs_nav cs_primary_font fw-medium ${mobileToggle ? "active_mobile_nav" : ""}`}>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right d-none d-lg-block pt-4">
                <div className="d-flex align-items-center gap-3">
                  <Button href="/blog" variant="outline" className="rounded-pill" aria-label="Go to blog page">
                    Blog
                  </Button>
                  <Button href="/contact" variant="primary" className="rounded-pill" aria-label="Go to contact page">
                    Contact
                  </Button>
                </div>
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