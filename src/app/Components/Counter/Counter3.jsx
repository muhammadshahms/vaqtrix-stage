"use client";
import { useEffect, useRef, useState } from "react";
// import loadBackgroudImages from "../Common/loadBackgroudImages";
// import VideoModal from "../VideoModal/VideoModal";
// import Image from "next/image";

const Counter3 = () => {

  const counterRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    // loadBackgroudImages();

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const counters = document.querySelectorAll(".count");

    counters.forEach((counter) => {
      const target = parseInt(counter.innerText.replace(/,/g, ""));
      let current = 0;
      const speed = 80;

      const updateCounter = () => {
        const increment = target / speed;

        if (current < target) {
          current += increment;
          counter.innerText = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCounter();
    });

  }, [startCount]);

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

  return (
    <section
      ref={counterRef}
      className=" fix section-bg section-padding bg-cover "
      data-background="/assets/img/Home/Sample-Hero-1.png"
    >
      <div className="container">
        <div className="cta-counter-wrapper-2">

          <div className="section-title-area">
            <div className="section-title">

              <div className="sub-title bg-color-3">
                <span>OUR IMPACT</span>
              </div>

              <h2 className="text-white">
                Making Business Growth<br/> Smarter 
                With AI-Driven Solutions
              </h2>

            </div>

            <div className="counter-box-area">

              <div className="counter-text">
                <h2><span className="count">300</span>K</h2>
                <p>Projects Delivered</p>
              </div>

              <div className="counter-text">
                <h2><span className="count">1000</span>K</h2>
                <p>Businesses Supported</p>
              </div>

              <div className="counter-text">
                <h2><span className="count">1000</span>K</h2>
                <p>Happy Clients</p>
              </div>

            </div>
          </div>

          {/* <div className="cta-video-image">
            <Image
              src="/assets/img/cta-video.jpg"
              alt="img"
              width={1386}
              height={533}
            />

            <button onClick={handelClick} className="video-icon video-popup">
              <i className="bi bi-play-fill"></i>
            </button>

          </div> */}

        </div>
      </div>

      {/* <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      /> */}

    </section>
  );
};

export default Counter3;