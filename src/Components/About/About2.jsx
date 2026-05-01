import Image from "next/image";
import Link from "next/link";
import Button from "../Common/Button";

const About2 = ({ addclass }) => {

    const aboutContent = {
 img: '/assets/img/About Graphics/Let’s-Build-Smarter-Together.png',    
     subtitle: "About Company",
        title: "Let's Build Smarter Together",
        content: 'Vaqtrix is not just another digital agency. We are an AI-centric software company building intelligent systems, automation driven platforms, and growth strategies that help businesses scale with clarity and measurable results.',
        image1: '/assets/img/About Graphics/Analytics & Performance Intelligence.svg',
        title2: 'Analytics & Performance Intelligence',
        content2: 'AI-powered analytics that turn data into clear insights.',
        image2: '/assets/img/About Graphics/Secure, Scalable AI Infrastructure.svg',
        title3: 'Secure, Scalable AI Infrastructure',
        content3: 'AI-driven systems that secure data and scale operations.',
    }

    return (
        <section className={addclass} style={{ overflow: 'hidden' }}>

            {/* BG Shape */}
            {/* <div className="bg-shape d-none d-xl-block">
                <Image src="/assets/img/about/bg-shape-2.png" alt="img" width={493} height={951} />
            </div> */}

            <div className="container py-5">
                <div className="row g-4 align-items-center">

                    {/* LEFT — Main Image */}
                    <div className="col-12 col-lg-6 text-center">
                        <Image
                            src={aboutContent.img}
                            alt="About"
                            className="wow img-custom-anim-left img-fluid"
                            width={537}
                            height={608}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>

                    {/* RIGHT — Content */}
                    <div className="col-12 col-lg-6">
                        <div className="about-content">

                            <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>{aboutContent.subtitle}</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        {aboutContent.title}
                                    </h2>
                                </div>
                            {/* Paragraph */}
                            <p className="wow fadeInUp mb-4" data-wow-delay=".5s">
                                {aboutContent.content}
                            </p>

                            {/* Icon Items — 2 columns just like screenshot */}
                            <div className="row g-4 mb-4">

                                {/* Item 1 */}
                                <div className="col-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="d-flex flex-column gap-2">
                                        <Image
                                            src={aboutContent.image1}
                                            alt="Analytics"
                                            width={60}
                                            height={60}
                                            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        />
                                        <h5 className="mb-1 mt-2">{aboutContent.title2}</h5>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
                                            {aboutContent.content2}
                                        </p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="col-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="d-flex flex-column gap-2">
                                        <Image
                                            src={aboutContent.image2}
                                            alt="Infrastructure"
                                            width={60}
                                            height={60}
                                            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        />
                                        <h5 className="mb-1 mt-2">{aboutContent.title3}</h5>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
                                            {aboutContent.content3}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Button */}
                           <div className="about-button">
                                    <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                        <Button href="/contact" variant="outline" size="lg">Start Your Project Now</Button>
                                    </div>
                                    {/* <Link href="/about" className="link-btn wow fadeInUp" data-wow-delay=".5s">EXPLORE MORE</Link> */}
                                </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About2;