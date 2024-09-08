import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Illustrtation from "@assets/img/illustration.webp";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";
import AboutusImg from "@assets/img/about/about.webp";

const page = () => {
  return (
    <NextLayout header={1} footer={4}>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb />
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-start">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <h2 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                      About Us: Meet the AdSparrow Crew
                    </h2>
                  </div>
                  <p
                    className="mt-3aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                    style={{ fontSize: "1.4rem", marginBottom: 18 }}
                  >
                    At AdSparrow, we turn digital dreams into bold, standout
                    realities. We’re not just another agency—we’re the misfit
                    geniuses who thrive on making the impossible, well,
                    possible. Think of us as your secret weapon against digital
                    dullness.
                  </p>
                  <p
                    className="mt-3 mt-md-0aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                    style={{ fontSize: "1.4rem", marginBottom: 18 }}
                  >
                    Born from a wild mix of creativity and analytics, we’re here
                    to ignite your brand’s spark, pump up the volume on your
                    presence, and keep the momentum rolling. While others are
                    busy patting themselves on the back for a single lead, we’re
                    already plotting your path to world domination (or, at the
                    very least, market domination).{" "}
                  </p>
                  <p
                    className="mt-3 mt-md-0aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                    style={{ fontSize: "1.4rem", marginBottom: 18 }}
                  >
                    Our team? We’re a quirky bunch of data nerds, design gurus,
                    and content wizards who love a good challenge. We don’t do
                    cookie-cutter solutions—every strategy we craft is as unique
                    as your brand. And yes, we have fun while doing it.
                  </p>
                  <p
                    className="mt-3 mt-md-0aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                    style={{ fontSize: "1.4rem", marginBottom: 18 }}
                  >
                    So, why choose us? Because we’re the agency that turns your
                    marketing woes into wow moments. Ready to ditch the ordinary
                    and join the marketing rebellion? Let’s make some noise
                    together!{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
              <div className="about-image-3">
                <Image src={AboutusImg} alt="" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      {/* <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow  fadeInUp" >
                <div className="about-image-3">
                  <img src="assets/img/about/06.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    Flexible Scaling &amp; Support
                  </h4>
                  <p className="mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    In the early years, our dedicated team worked tirelessly to
                    key Next milestones or achievements, such as product
                    launches, partnerships or expansions these efforts laid the
                    foundation
                  </p>
                  <div className="icon-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    <div className="dot" />
                    <div className="content">
                      <h4>Flexible Scaling &amp; Support</h4>
                      <p>
                        Our attention to detail and quality is unmatched in the
                        industry. <br /> We’re not just a resource provider but
                        also a key
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/about"
                    className="theme-btn mt-50aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                  >
                    Learn More Us
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Team Section Start */}
      {/* <Team /> */}
      {/* Funfact Section Start */}
      {/* <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section> */}
      {/* Working Process Section Start */}
      {/* <WorkingProcess2 /> */}
      {/* Brand Section Start */}

      {/* Testimonial Section Start */}
      {/* <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2>We’ve 1250+ Global Clients Say Us</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section> */}
           {/* Cta Video Section Start */}
           <Cta title={"Free Audit: Our Treat!"} offer={`Get a behind-the-scenes look at your digital health—no
            strings attached, no hidden fees, just pure value. Go ahead,
            challenge us. Request your free audit today and watch us
            work our magic.`} imageSrc={Illustrtation}/>
      {/* Footer Section Start */}
    </NextLayout>
  );
};
export default page;
