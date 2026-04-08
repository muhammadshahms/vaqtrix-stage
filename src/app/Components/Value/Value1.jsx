import Image from "next/image";

const Value1 = () => {

    const chooseContent = [
        {iconclass:'/assets/img/About Graphics/Integrity.svg', title:'Integrity', content:'We operate with transparency, honesty, and accountability, building long-term trust through ethical practices and responsible technology solutions.'},
        {iconclass:'/assets/img/About Graphics/Simplicity.svg', title:'Simplicity', content:'We simplify complex AI, automation, and digital systems into clear, user-friendly solutions that deliver real business value.'},
        {iconclass:'/assets/img/About Graphics/Performance.svg', title:'Performance', content:'We focus on measurable outcomes, optimised systems, and scalable solutions designed to maximise efficiency, growth, and ROI.'},
        {iconclass:'/assets/img/About Graphics/Innovation.svg', title:'Innovation', content:'We continuously explore AI, automation, and emerging technologies to create future-ready solutions that keep businesses ahead.'},
      ]; 

    return (
        <section className="value-section fix section-padding section-bg ">
        {/* <div className="value-shape">
        <Image src="/assets/img/value-shape.png" alt="img" width={213} height={602}   />
        </div>
        <div className="value-shape-2">
        <Image src="/assets/img/value-shape-2.png" alt="img" width={210} height={392}   />
        </div> */}
        <div className="container">
            <div className="section-title text-center wow fadeInUp" data-wow-delay=".3s">
                <h2>Our Values</h2>
            </div>
            <div className="row">
            {chooseContent.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="value-box-items">
                        <div className="d-flex align items-center">
                           <Image src={item.iconclass} alt="iconclass" width={80} height={80}/>
                        </div>
                        <div className="content">
                            <h3>{item.title}</h3>
                            <p>
                            {item.content}
                            </p>
                        </div>
                    </div>
                </div>
))}


            </div>
        </div>
    </section>
    );
};

export default Value1;