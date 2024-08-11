import Counter from "@/components/Counter";
import GrowBusiness from "@/components/GrowBusiness";
import Team from "@/components/Team";
import { TestimonialSlider3 } from "@/components/TestimonialSlider";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={3} footer={3}>
      {/* Hero Section Start */}
      <section className="hero-section hero-3">
        <div className="bottom-shape">
          <img src="assets/img/hero/bottom-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale.png" alt="img" />
                  25+ Years Of Experience
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  The Effective <br /> Solutions To Grow <br />
                  your <span>Business</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium <br />
                  doloremque laudantium, totam rem aperiam
                </p>
                <div className="hero-button">
                  <Link
                    href="about"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Discover More <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    View Services <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/img/hero/hero-1.png" alt="img" />
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-3.png" alt="shape-img" />
                </div>
                <div className="bcleft-shape float-bob-x">
                  <img src="assets/img/hero/bcleft.png" alt="shape-img" />
                </div>
                <div className="bcright-shape float-bob-y">
                  <img src="assets/img/hero/bcright.png" alt="shape-img" />
                </div>
                <div className="message-shape">
                  <img src="assets/img/hero/message.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Offer Section Start */}
      <section className="service-offer-section" id="services">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              What We Offer
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Business integrates with all <br />
              your favorite tools
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-offer-items">
                <div className="icon">
                  <img
                    src="assets/img/service/icon/brainstorming.svg"
                    alt="img"
                  />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="service-details">Business Consulting</Link>
                    </h3>
                    <p>We Fixed about your business Solutions</p>
                  </div>
                  <Link href="service-details" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/earning.svg" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="service-details">Financial Planning</Link>
                    </h3>
                    <p>We Fixed about your business Solutions</p>
                  </div>
                  <Link href="service-details" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/targeted.svg" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="service-details">
                        Grow Marketing &amp; Sales
                      </Link>
                    </h3>
                    <p>We Fixed about your business Solutions</p>
                  </div>
                  <Link href="service-details" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/technology.svg" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="service-details">
                        Modernize &amp; Technology
                      </Link>
                    </h3>
                    <p>We Fixed about your business Solutions</p>
                  </div>
                  <Link href="service-details" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section-3 section-padding pt-0" id="about">
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div
                    className="about-image-1 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <img src="assets/img/about/03.jpg" alt="img" />
                    <div className="about-image-2">
                      <img src="assets/img/about/04.jpg" alt="img" />
                    </div>
                  </div>
                  <div
                    className="experience-items float-bob-x wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <h6>
                      Trusted by 1M+ people <br />
                      around the globe
                    </h6>
                    <img src="assets/img/about/face-mans.png" alt="img" />
                    <h2>
                      <span className="count">25</span>+
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Grow Your Business With <br />
                      Our Next Agency
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae
                  </p>
                  <div className="about-counter-area">
                    <div className="row g-4">
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              {" "}
                              <Counter end={98} />
                            </span>
                            %
                          </h2>
                          <p>Average Conversion Rate</p>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              <Counter end={35} />
                            </span>
                            M+
                          </h2>
                          <p>Traffic Generated</p>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              {" "}
                              <Counter end={98} />
                            </span>
                            %
                          </h2>
                          <p>Positive Customer Review</p>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              {" "}
                              <Counter end={92} />
                            </span>
                            %
                          </h2>
                          <p>Professional Team Members</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="about"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Learn More Us <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <Team />
      {/* Business Boost Section Start */}
      <section className="business-boost-section section-padding pt-0">
        <div className="container">
          <div className="business-boost-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="business-boost-content">
                  <img
                    src="assets/img/start-business-men.png"
                    alt="img"
                    className="wow fadeInUp"
                    data-wow-delay=".2s"
                  />
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Ready to Boost Business <br />
                    &amp; product Sales ?
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Sed ut perspiciatis unde omnis iste natus voluptatem <br />
                    accusantium doloremque laudantium totam
                  </p>
                  <Link
                    href="contact"
                    className="theme-btn bg-2 wow fadeInUp"
                    data-wow-delay=".7x"
                  >
                    Get Started Now <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-4 wow fadeInUp" data-wow-delay=".4s">
                <div className="video-image">
                  <img src="assets/img/video-bg-popup.jpg" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-buttton ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Grow Business Section Start */}
      <GrowBusiness />
      {/* Working Process Section Start */}
      <WorkingProcess2 />
      {/* Testimonial Section Start */}
      <section className="testimonial-section-3 fix section-padding">
        <div className="container">
          <div className="testimonial-wrapper-2">
            <div className="row justify-content-between align-items-center g-4">
              <div className="col-lg-6">
                <TestimonialSlider3 />
              </div>
              <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/01.jpg" alt="img" />
                  <div className="card-shape-1 float-bob-x">
                    <img
                      src="assets/img/testimonial/testimonial-card1.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="card-shape-2 float-bob-y">
                    <img
                      src="assets/img/testimonial/testimonial-card2.png"
                      alt="shape-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section section-padding" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              News &amp; Blog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Our Latest News &amp; Blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/04.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/05.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      List of 5 ways Generating Real-Time Audio Sentiment
                      Analysis With
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/06.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      September Of Never Ending Adventures (2024 Wallpapers
                      Edition)
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
