import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import Team from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb />
      {/* About Section Start */}
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      We Increase Your Website Lead and Grow Sales
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Superior Quality Of Work</h4>
                      <p>
                        Our attention to detail and quality is unmatched in the
                        industry. <br /> We’re not just a resource provider but
                        also a key
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/05.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow  fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/06.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Flexible Scaling &amp; Support
                  </h4>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    In the early years, our dedicated team worked tirelessly to
                    key Next milestones or achievements, such as product
                    launches, partnerships or expansions these efforts laid the
                    foundation
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
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
                    href="about"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Learn More Us
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <Team />
      {/* Funfact Section Start */}
      <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section>
      {/* Working Process Section Start */}
      <WorkingProcess2 />
      {/* Brand Section Start */}
      <section className="brand-section-2 mt-0 mb-0 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              We Have <span>1563+</span> Global Partners. Explore Our Global
              Clients
            </h5>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/linkedIn.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/dropbox.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/trello.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/framer.png" alt="img" />
              </div>
            </div>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/grammarly.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/amazon.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/outbrain.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/shopify.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <section className="testimonial-section-2 fix section-padding fix">
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
      </section>
      {/* Footer Section Start */}
    </NextLayout>
  );
};
export default page;
