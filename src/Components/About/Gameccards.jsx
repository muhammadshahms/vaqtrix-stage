"use client";
// RecentProjects.js
import React from "react";
import { FaEthereum, FaBitcoin, FaReact, FaWordpress, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlutter } from "react-icons/si";
import Image from "next/image";
import MotionText from "../AnimateOnScroll/MotionText";

const projects = [
  {
    title: "Yapari Burger - Food Website",
    description: "A modern, responsive food ordering website built with React and Tailwind CSS.",
    image: "/assets/img/Project Images/Food Website - Yapari Burger.png",
    icons: [<FaReact key="1" />, <SiTailwindcss key="2" />, <SiNextdotjs key="3" /> ],
  },
  {
    title: "Car Rental Landing Page",
    description: "An elegant landing page for a car rental service, optimized for conversion and speed.",
    image: "/assets/img/Project Images/Car Rental Landing Page.png",
    icons: [<FaWordpress key="1" />, <SiTailwindcss key="2" />, <FaReact key="3" />],
  },
  {
    title: "LiveHeal - Medical Landing Page",
    description: "A comprehensive medical landing page focused on patient care and easy booking.",
    image: "/assets/img/Project Images/LiveHeal - General Medical Landing Page.png",
    icons: [<FaLaravel key="1" />, <FaReact key="2" />, <SiFlutter key="3" />],
  },
];

export default function Gamecards() {
  return (
    <section className="about-section fix section-padding" style={{ backgroundColor: "#F2F6E9" }}>
      <div className="container">
        <div className="section-title text-center mb-5">
          <MotionText>
            <div className="sub-title mx-auto">
              <span>RECENT WORK</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: "800", lineHeight: "1.2", color: "#1C4401", marginBottom: "10px" }}>
              A Small Selection of <span style={{ color: "var(--theme)" }}>Recent Projects</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#5a7a50", marginBottom: 0 }}>
              Discover our latest projects that combine innovation, design, and performance.
            </p>
          </MotionText>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 d-flex">
              <div className="project-card" style={{ border: 'none' }}>
                <div className="position-relative w-100 mb-3" style={{ height: "200px" }}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="rounded-3"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="h5 fw-bold mb-2" style={{ color: "var(--header)" }}>{project.title}</h3>
                <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>{project.description}</p>
                <div className="d-flex gap-3 mb-3 text-dark fs-5">
                  {project.icons}
                </div>
                <a href="#" className="fw-bold" style={{ color: "var(--theme)", textDecoration: "none" }}>View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

