"use client";
// RecentProjects.js
import React from "react";
import { FaEthereum, FaBitcoin, FaReact } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Spotic Coin Blockchain",
    description: "Discover the future of digital currency with Spotic Coin | a blockchain-based platform.",
    image: "/assets/img/about/image (4).jpg",
    icons: [<FaEthereum key="1" />, <FaBitcoin key="2" />, <FaReact key="3" /> ],
  },
  {
    title: "Hide N Snipe – Roblox Game",
    description: "Dive into an immersive Roblox gaming experience blending action and strategy.",
    image: "/assets/img/about/image (4).jpg",
    icons: [<FaBitcoin key="1" />, <FaEthereum key="2" />, <FaReact key="3" />],
  },
  {
    title: "InnoVest – Investment Website",
    description: "Experience the future of finance with InnoVest | an innovative investment platform.",
    image: "/assets/img/about/image (4).jpg",
    icons: [<FaEthereum key="1" />, <FaReact key="2" />, <FaBitcoin key="3" />],
  },
];

export default function Gamecards() {
  return (
    <section className="about-section fix section-padding pb-0">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="fw-bold">
            A Small Selection of <span style={{ color: "var(--theme)" }}>Recent Projects</span>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 d-flex">
              <div className="project-card">
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
                <a href="#" className="fw-bold" style={{ color: "var(--theme)", textDecoration: "none" }}>Visit Our Socials →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
