"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaShoppingCart,
  FaBookOpen,
} from "react-icons/fa";

const ACCENT = "#F1F6E4";
const DIM    = "rgba(241,246,228,0.08)";

export default function Nav({ setMobileToggle, isMobileDrawer = false }) {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname() || "/";

  const normalizePath = (p) => (!p || p === "/" ? "/" : p.replace(/\/+$/, ""));
  const currentPath = normalizePath(pathname);
  const isActive = (href) => normalizePath(href) === currentPath;

  const services = [
    { title: "AI Automation",             icon: <FaRobot />,        href: "/ai-development" },
    { title: "App Development",           icon: <FaMobileAlt />,    href: "/app-development" },
    { title: "Web Development",           icon: <FaLaptopCode />,   href: "/website" },
    { title: "Digital Marketing & Branding", icon: <FaBullhorn />, href: "/digital-marketing" },
    { title: "Ecommerce Solutions",       icon: <FaShoppingCart />, href: "/e-commerce" },
    { title: "E-Book Creation",           icon: <FaBookOpen />,     href: "/e-book-creation" },
  ];

  const isServiceActive = services.some(({ href }) => isActive(href));

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    if (isMobileDrawer) return;
    const handler = (e) => {
      if (!e.target.closest(".menu-item-has-children")) setServiceOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [isMobileDrawer]);

  const close = () => setMobileToggle(false);
  const closeService = () => { setServiceOpen(false); setMobileToggle(false); };

  /* ─────────────────────────────────────────
     DESKTOP layout (inside header center bar)
  ───────────────────────────────────────── */
  if (!isMobileDrawer) {
    return (
      <ul className="cs_nav_list fw-medium d-flex flex-row gap-0" role="menubar">
        {/* Home */}
        <li>
          <Link
            href="/"
            onClick={close}
            style={{
              color: isActive("/") ? ACCENT : "var(--nav-text-color, inherit)",
              transition: "color 0.3s ease",
            }}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            onClick={close}
            style={{
              color: isActive("/about") ? ACCENT : "var(--nav-text-color, inherit)",
              transition: "color 0.3s ease",
            }}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About
          </Link>
        </li>

        {/* Services (hover dropdown) */}
        <li
          className={`menu-item-has-children ${serviceOpen || isServiceActive ? "active" : ""}`}
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <a
            style={{
              cursor: "pointer",
              color: isServiceActive ? ACCENT : "var(--nav-text-color, inherit)",
              transition: "color 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            aria-haspopup="true"
            aria-expanded={serviceOpen}
          >
            Services
            <span style={{ fontSize: "0.7em", transition: "transform 0.3s", transform: serviceOpen ? "rotate(180deg)" : "rotate(0)" }}></span>
          </a>

          <div
            className="dropdown-panel"
            style={{ display: serviceOpen ? "grid" : "none" }}
          >
            {services.map(({ title, icon, href }) => (
              <Link
                key={title}
                className="dropdown-item d-flex align-items-center gap-3"
                href={href}
                onClick={closeService}
                style={{ cursor: "pointer", color: "var(--nav-text-color, inherit)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text-color, inherit)")}
              >
                <span style={{ fontSize: "1.2em", color: ACCENT }}>{icon}</span>
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </li>

        {/* Project */}
        <li className="px-3">
          <Link
            href="/project"
            onClick={close}
            style={{
              color: isActive("/project") ? ACCENT : "var(--nav-text-color, inherit)",
              transition: "color 0.3s ease",
            }}
            aria-current={isActive("/project") ? "page" : undefined}
          >
            Project
          </Link>
        </li>

        {/* Pricing */}
        <li className="">
          <Link
            href="/pricing"
            onClick={close}
            style={{
              color: isActive("/pricing") ? ACCENT : "var(--nav-text-color, inherit)",
              transition: "color 0.3s ease",
            }}
            aria-current={isActive("/pricing") ? "page" : undefined}
          >
            Pricing
          </Link>
        </li>
      </ul>
    );
  }

  /* ─────────────────────────────────────────
     MOBILE DRAWER layout
  ───────────────────────────────────────── */
  const linkStyle = (href) => ({
    display: "flex",
    alignItems: "center",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: isActive(href) ? ACCENT : "rgba(241,246,228,0.9)",
    background: isActive(href) ? DIM : "transparent",
    borderLeft: isActive(href) ? `3px solid ${ACCENT}` : "3px solid transparent",
    textDecoration: "none",
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
  });

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }} role="menubar">

      {/* Home */}
      <li>
        <Link href="/" style={linkStyle("/")} onClick={close}
          onMouseEnter={(e) => { if (!isActive("/")) e.currentTarget.style.color = ACCENT; }}
          onMouseLeave={(e) => { if (!isActive("/")) e.currentTarget.style.color = "rgba(241,246,228,0.9)"; }}
        >
          Home
        </Link>
      </li>

      {/* About */}
      <li>
        <Link href="/about" style={linkStyle("/about")} onClick={close}
          onMouseEnter={(e) => { if (!isActive("/about")) e.currentTarget.style.color = ACCENT; }}
          onMouseLeave={(e) => { if (!isActive("/about")) e.currentTarget.style.color = "rgba(241,246,228,0.9)"; }}
        >
          About
        </Link>
      </li>

      {/* Services accordion */}
      <li>
        <button
          onClick={() => setServiceOpen((p) => !p)}
          aria-expanded={serviceOpen}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: isServiceActive || serviceOpen ? ACCENT : "rgba(241,246,228,0.9)",
            background: isServiceActive || serviceOpen ? DIM : "transparent",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
            borderLeft: isServiceActive || serviceOpen ? `3px solid ${ACCENT}` : "3px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <span>Services</span>
          <span
            style={{
              fontSize: "12px",
              color: ACCENT,
              transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              transform: serviceOpen ? "rotate(180deg)" : "rotate(0deg)",
              marginRight: "4px",
            }}
          >
            ▼
          </span>
        </button>

        {/* Accordion panel */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: serviceOpen ? `${services.length * 60}px` : "0",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: "6px 0 6px 16px",
              margin: 0,
              background: "rgba(0,0,0,0.2)",
              borderLeft: `2px solid rgba(198,248,6,0.15)`,
              marginLeft: "24px",
              marginRight: "16px",
              borderRadius: "0 8px 8px 0",
            }}
          >
            {services.map(({ title, icon, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  onClick={closeService}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: isActive(href) ? ACCENT : "rgba(241,246,228,0.75)",
                    textDecoration: "none",
                    borderRadius: "6px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; e.currentTarget.style.background = DIM; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive(href) ? ACCENT : "rgba(241,246,228,0.75)"; e.currentTarget.style.background = "transparent"; }}
                >
                  <span style={{ color: ACCENT, fontSize: "1em", flexShrink: 0 }}>{icon}</span>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Project */}
      <li>
        <Link href="/project" style={linkStyle("/project")} onClick={close}
          onMouseEnter={(e) => { if (!isActive("/project")) e.currentTarget.style.color = ACCENT; }}
          onMouseLeave={(e) => { if (!isActive("/project")) e.currentTarget.style.color = "rgba(241,246,228,0.9)"; }}
        >
          Project
        </Link>
      </li>

      {/* Pricing */}
      <li>
        <Link href="/pricing" style={linkStyle("/pricing")} onClick={close}
          onMouseEnter={(e) => { if (!isActive("/pricing")) e.currentTarget.style.color = ACCENT; }}
          onMouseLeave={(e) => { if (!isActive("/pricing")) e.currentTarget.style.color = "rgba(241,246,228,0.9)"; }}
        >
          Pricing
        </Link>
      </li>
    </ul>
  );
}
