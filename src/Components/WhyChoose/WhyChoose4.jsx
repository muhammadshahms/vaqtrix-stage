"use client";

import { useEffect, useState } from "react";
// import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/feature.json";
import MotionImage from "../AnimateOnScroll/MotionImage";

const WhyChoose4 = ({ categoryId }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // loadBackgroudImages();

    // Access category directly from JSON object
    const selectedCategory = data?.categories?.[categoryId] || null;
    setCategory(selectedCategory);
  }, [categoryId]);

  if (!category) return null;

  const { section, stats, content } = category;
  const media = content?.media;

  return (
    <section className={section.className}>


      <div className="container">
        <div className="team-wrapper style-4">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6">
              <MotionImage>
                {media?.type === "video" && media?.src ? (
                  <video width="100%" controls>
                    <source src={media.src} type="video/mp4" />
                  </video>
                ) : media?.type === "image" && media?.src ? (
                  <Image
                    src={media.src}
                    width={media.width || 600}
                    height={media.height || 400}
                    alt="media"
                  />
                ) : null}
              </MotionImage>
              {/* {stats.map((stat, idx) => (
                <div key={idx} className="results-left-items">
                  <div className="content">
                    <h2><span className="count">{stat.count}</span></h2>
                    <h3>{stat.title}</h3>
                    <p>{stat.desc}</p>
                  </div>
                  <div className="thumb">
                    <Image
                      src={stat.image.src}
                      width={stat.image.width}
                      height={stat.image.height}
                      alt="thumb"
                    />
                  </div>
                </div>
              ))} */}
            </div>

            <div className="col-xl-6">
              <div className="team-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>{content?.subtitle}</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {content?.title}
                  </h2>
                </div>

                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {content?.desc}
                </p>

                <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                  {content?.lists?.map((list, idx) => (
                    <ul key={idx}>
                      {list?.map((item, i) => (
                        <li key={i}>
                          <CheckIcon />
                          {item.path ? (
                            <Link href={item.path}>{item.text}</Link>
                          ) : (
                            <span>{item.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
                {/* <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                  {content?.button && (
                    <Link href={content.button.href || "#"}>
                      <span className="theme-btn">{content.button.text || "Learn More"}</span>
                    </Link>
                  )}
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#183E01" />
  </svg>
);

export default WhyChoose4;
