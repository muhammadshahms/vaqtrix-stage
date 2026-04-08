// RecentProjects.js
import React from "react";
import { FaEthereum, FaBitcoin, FaReact } from "react-icons/fa";


const projects = [
  {
    title: "Spotic Coin Blockchain",
    description: "Discover the future of digital currency with Spotic Coin | a blockchain-based platform.",
    image: "/assets/img/about/image (4).jpg",
    icons: [<FaEthereum />, <FaBitcoin />, <FaReact /> ],
  },
  {
    title: "Hide N Snipe – Roblox Game",
    description: "Dive into an immersive Roblox gaming experience blending action and strategy.",
    image: "/assets/img/about/image (4).jpg",
    icons: [<FaBitcoin />, <FaEthereum />, <FaReact />],
  },
  {
    title: "InnoVest – Investment Website",
    description: "Experience the future of finance with InnoVest | an innovative investment platform.",
    image: "/assets/img/about/image (4).jpg",
    icons: [<FaEthereum />, <FaReact />, <FaBitcoin />],
  },
];

export default function RecentProjects() {
  return (
    <section className="about-section fix section-padding pb-0">
    <div style={styles.container}>
      {/* Responsive CSS for card widths */}
      <style>
        {`
          .project-card {
            width: 350px; /* Default desktop width */
          }
          @media (max-width: 1024px) {
            .project-card {
              width: 300px; /* Tablet width */
            }
          }
          @media (max-width: 768px) {
            .project-card {
              width: 90%; /* Mobile width */
            }
          }
        `}
      </style>

      <h2 style={styles.heading}>
        A Small Selection of <span style={styles.highlight}>Recent Projects</span>
      </h2>
      <div style={styles.cardWrapper}>
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <div style={styles.icons}>
              {project.icons.map((icon, i) => (
                <span key={i} style={styles.icon}>{icon}</span>
              ))}
            </div>
            <a href="#" style={styles.link}>Visit Our Socials →</a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "40px 20px",
    background: "#fff",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "40px",
  },
  highlight: {
    color: "#6A47ED",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "left",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "10px",
  },
  description: {
    fontSize: "0.95rem",
    color: "#6A47ED",
    marginBottom: "15px",
  },
  icons: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "1.2rem",
    color: "#000",
  },
  link: {
    textDecoration: "none",
    fontWeight: "500",
    color: "#6A47ED",
    fontSize: "0.9rem",
  },
};
