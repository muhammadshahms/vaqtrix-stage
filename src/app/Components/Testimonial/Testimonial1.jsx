"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import testimonialData from "../../data/testimonial";

// ─── Framer Motion Variants ───────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Testimonial1 = ({ category }) => {

  const sliderRef = useRef(null);
  const next      = () => sliderRef.current.slickNext();
  const previous  = () => sliderRef.current.slickPrev();

  // ── Data resolve: category lowercase karo, match karo, fallback home ──────
  const key      = category ? category.toLowerCase() : "home";
  const pageData = testimonialData[key] || testimonialData["home"];
  const heading  = pageData.heading;
  const items    = pageData.items;

  // ── Slider Settings ───────────────────────────────────────────────────────
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 2 } },
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-section fix section-padding pt-0">
      <div className="container">
        <motion.div
          className="testimonial-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* ── Heading Area ── */}
          <motion.div className="section-title-area" variants={fadeUp}>
            <motion.div className="section-title" variants={fadeUp}>
              <motion.div className="sub-title bg-color-2" custom={0} variants={fadeUp}>
                <span>{heading.subtitle}</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeUp}
                dangerouslySetInnerHTML={{ __html: heading.title }}
              />
            </motion.div>
            <motion.p custom={2} variants={fadeUp} style={{ whiteSpace: "pre-line" }}>
              {heading.description}
            </motion.p>
          </motion.div>

          {/* ── Slider Row ── */}
          <div className="row">

            {/* Left — rating + arrows */}
            <div className="col-xl-2 col-lg-4">
              <motion.div className="testimonial-left" custom={3} variants={fadeUp}>
                <div className="client-img">
                  <div className="content">
                    <div className="star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p>1000+ Rated Excellence</p>
                  </div>
                </div>
                <div className="array-button">
                  <button onClick={previous} className="array-prev">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button onClick={next} className="array-next">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right — Slider */}
            <div className="col-xl-10 col-lg-8">
              <Slider ref={sliderRef} {...settings}>
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="swiper-slide"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="testimonial-box-items text-white">
                      <div className="icon">
                        <Image src="/imag/Quotation-Mark.png" alt="img" width={44} height={33} />
                      </div>
                      <div className="testimonial-img">
                        <Image src={item.img} alt={item.title} width={102} height={102} />
                        <div className="shape-img">
                          <Image src="/imag/Arrow-Corner.png" alt="img" width={62} height={221} />
                        </div>
                      </div>
                      <div className="content">
                        <div className="client-info">
                          <div className="star">
                            {[...Array(5)].map((_, j) => (
                              <i key={j} className="bi bi-star-fill"></i>
                            ))}
                          </div>
                          <h5 className="text-white">{item.title}</h5>
                          <span>{item.subtitle}</span>
                        </div>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial1;
