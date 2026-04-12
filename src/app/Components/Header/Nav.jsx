"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  FaRobot, 
  FaMobileAlt, 
  FaLaptopCode, 
  FaBullhorn, 
  FaShoppingCart, 
  FaBookOpen 
} from "react-icons/fa";

export default function Nav({ setMobileToggle }) {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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

  // ✅ Pehle state update, phir navigate
  const handleServiceClick = (href) => {
    setServiceOpen(false);
    setMobileToggle(false);
    router.push(href);
  };

  const service = [
    { title: "AI Automation", icon: <FaRobot />, href: "/ai-development" },
    { title: "App Development", icon: <FaMobileAlt />, href: "/app-developmente" },
    { title: "Web Development", icon: <FaLaptopCode />, href: "/website" },
    { title: "Digital Marketing & Branding", icon: <FaBullhorn />, href: "/digital-marketing" },
    { title: "Ecommerce Solutions", icon: <FaShoppingCart />, href: "/e-commerce" },
    { title: "E-Book Creation", icon: <FaBookOpen />, href: "/e-book-creation" },
  ];

  return (
    <ul className="cs_nav_list fw-medium" role="menubar">

      <li>
        <a style={{ cursor: "pointer" }} onClick={() => { setMobileToggle(false); router.push("/"); }}>
          Home
        </a>
      </li>

      <li>
        <a style={{ cursor: "pointer" }} onClick={() => { setMobileToggle(false); router.push("/about"); }}>
          About
        </a>
      </li>

      {/* SERVICES */}
      <li
        className={`menu-item-has-children ${serviceOpen ? "active" : ""}`}
        // ✅ Desktop — hover pe open/close
        onMouseEnter={() => !isMobile && setServiceOpen(true)}
        onMouseLeave={() => !isMobile && setServiceOpen(false)}
      >
        <a
          style={{ cursor: "pointer" }}
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
            <a
              key={title}
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={() => handleServiceClick(href)}
            >
              {icon}
              <span>{title}</span>
            </a>
          ))}
        </div>
      </li>

      <li>
        <a style={{ cursor: "pointer" }} onClick={() => { setMobileToggle(false); router.push("/project"); }}>
          Project
        </a>
      </li>

      <li>
        <a style={{ cursor: "pointer" }} onClick={() => { setMobileToggle(false); router.push("/pricing"); }}>
          Pricing
        </a>
      </li>

    </ul>
  );
}
