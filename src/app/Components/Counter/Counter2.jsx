"use client";

import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const Counter2 = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(true);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  // Counter states
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [team, setTeam] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => (prev < 19.4 ? +(prev + 0.2).toFixed(1) : 19.4));
      setClients((prev) => (prev < 95.2 ? +(prev + 1).toFixed(1) : 95.2));
      setTeam((prev) => (prev < 142.6 ? +(prev + 1).toFixed(1) : 142.6));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="cta-counter-section-2 section-padding bg-cover"
      data-background="/assets/img/cta-counter-bg.jpg"
    >
      <div className="container">
        <div className="cta-counter-wrapper-2">

          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title bg-color-3">
                <span>Counter</span>
              </div>

              <h2 className="text-white">
                Make your marketing <br /> more effective
              </h2>
            </div>

            <div className="counter-box-area">

              <div className="counter-text">
                <h2>
                  {projects}K
                </h2>
                <p>Projects Done</p>
              </div>

              <div className="counter-text">
                <h2>
                  {clients}K
                </h2>
                <p>Happy Clients</p>
              </div>

              <div className="counter-text">
                <h2>
                  {team}K
                </h2>
                <p>Team Members</p>
              </div>

            </div>
          </div>

          <div className="cta-video-image">
            <Image
              src="/assets/img/cta-video.jpg"
              alt="img"
              width={1386}
              height={533}
            />

            <a onClick={handelClick} className="video-icon video-popup">
              <i className="bi bi-play-fill"></i>
            </a>
          </div>

        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </section>
  );
};

export default Counter2;