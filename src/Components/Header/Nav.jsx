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
  FaBookOpen 
} from "react-icons/fa";
import Button from "../Common/Button";

export default function Nav({ setMobileToggle }) {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname() || "/";

  const normalizePath = (path) => {
    if (!path || path === "/") return "/";
    return path.replace(/\/+$/, "");
  };

  const currentPath = normalizePath(pathname);

  const isActivePath = (href) => normalizePath(href) === currentPath;

  const service = [
    { title: "AI Automation", icon: <FaRobot />, href: "/ai-development" },
    { title: "App Development", icon: <FaMobileAlt />, href: "/app-development" },
    { title: "Web Development", icon: <FaLaptopCode />, href: "/website" },
    { title: "Digital Marketing & Branding", icon: <FaBullhorn />, href: "/digital-marketing" },
    { title: "Ecommerce Solutions", icon: <FaShoppingCart />, href: "/e-commerce" },
    { title: "E-Book Creation", icon: <FaBookOpen />, href: "/e-book-creation" },
  ];

  const isServiceRouteActive = service.some(({ href }) => isActivePath(href));

  // ✅ SSR safe mobile check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 991);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ Outside click pe dropdown band (sirf mobile ke liye)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".menu-item-has-children")) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleNavClick = () => {
    setMobileToggle(false);
  };

  const handleServiceClick = () => {
    setServiceOpen(false);
    setMobileToggle(false);
  };

  return (
    <ul className="cs_nav_list fw-medium" role="menubar">

      <li>
        <Link
          href="/"
          onClick={handleNavClick}
          style={{
            cursor: "pointer",
            color: isActivePath("/") ? "var(--tp-theme-primary, #c2f306)" : undefined,
          }}
          aria-current={isActivePath("/") ? "page" : undefined}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/about"
          onClick={handleNavClick}
          style={{
            cursor: "pointer",
            color: isActivePath("/about") ? "var(--tp-theme-primary, #c2f306)" : undefined,
          }}
          aria-current={isActivePath("/about") ? "page" : undefined}
        >
          About
        </Link>
      </li>

      {/* SERVICES */}
      <li
        className={`menu-item-has-children ${serviceOpen || isServiceRouteActive ? "active" : ""}`}
        // ✅ Desktop — hover pe open/close
        onMouseEnter={() => !isMobile && setServiceOpen(true)}
        onMouseLeave={() => !isMobile && setServiceOpen(false)}
      >
        <a
          style={{
            cursor: "pointer",
            color: isServiceRouteActive ? "var(--tp-theme-primary, #c2f306)" : undefined,
          }}
          aria-current={isServiceRouteActive ? "page" : undefined}
          onClick={(e) => {
            e.stopPropagation();
            // ✅ Mobile — click pe toggle, Desktop pe kuch nahi
            if (isMobile) setServiceOpen((prev) => !prev);
          }}
        >
          Services
        </a>

        <div
          className="dropdown-panel"
          style={{ display: serviceOpen ? "grid" : "none" }}
        >
          {service.map(({ title, icon, href }) => (
            <Link
              key={title}
              className="dropdown-item"
              href={href}
              onClick={handleServiceClick}
              style={{ cursor: "pointer" }}
            >
              {icon}
              <span>{title}</span>
            </Link>
          ))}
        </div>
      </li>

      <li>
        <Link
          href="/project"
          onClick={handleNavClick}
          style={{
            cursor: "pointer",
            color: isActivePath("/project") ? "var(--tp-theme-primary, #c2f306)" : undefined,
          }}
          aria-current={isActivePath("/project") ? "page" : undefined}
        >
          Project
        </Link>
      </li>

      <li>
        <Link
          href="/pricing"
          onClick={handleNavClick}
          style={{
            cursor: "pointer",
            color: isActivePath("/pricing") ? "var(--tp-theme-primary, #c2f306)" : undefined,
          }}
          aria-current={isActivePath("/pricing") ? "page" : undefined}
        >
          Pricing
        </Link>
      </li>

      {/* Mobile only action buttons */}
      <li className="d-lg-none mt-4 d-flex flex-column gap-3 px-3 pb-3">
        <Button href="/blog" variant="primary" className="rounded-pill w-100 text-center" onClick={handleNavClick}>
          Blog
        </Button>
        <Button href="/contact" variant="outline" className="rounded-pill w-100 text-center" onClick={handleNavClick}>
          Contact
        </Button>
      </li>

    </ul>
  );
}
