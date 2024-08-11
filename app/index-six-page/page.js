import ClientSlider from "@/components/ClientSlider";
import { Pricing2 } from "@/components/Pricing";
import {
  TestiContentSlider,
  TestiThumbSlider,
} from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={6} footer={6} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-6 pb-0">
        <div className="robot-shape-1 float-bob-y">
          <img src="assets/img/home-6/robot-1.png" alt="img" />
        </div>
        <div className="robot-shape-2 float-bob-y">
          <img src="assets/img/home-6/robot-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content center">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale.png" alt="img" />
                  Welcome to Next Agency
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Building the 10x Faster Future <br />
                  with Artificial Intelligence
                </h1>
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    <i className="fas fa-check-circle" /> 10x Faster Power
                    Buster
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <i className="fas fa-check-circle" /> Natural Language
                    Processing
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".7s">
                    <i className="fas fa-check-circle" /> Machine Learning
                    System
                  </li>
                </ul>
                <form
                  action="#"
                  className="sign-input-form wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="doming-input">
                    <input type="text" placeholder="Email Address" />
                    <div className="icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <button className="theme-btn" type="submit">
                      Sign Up Free <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="dashboard-image wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img src="assets/img/home-6/dashboard.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Section Start */}
      <section className="work-process-section-6 fix section-padding">
        <div className="ai-shape-1 float-bob-y">
          <img src="assets/img/home-6/ai-shape-1.png" alt="shape-img" />
        </div>
        <div className="ai-shape-2 float-bob-y">
          <img src="assets/img/home-6/ai-shape-2.png" alt="shape-img" />
        </div>
        <div className="box-shape-left" />
        <div className="box-shape-right" />
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text-2 text-white wow fadeInUp">
              Working Process
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Get Faster Solutions in <br />
              Very Easy Ways
            </h2>
          </div>
          <div className="row align-items-center">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="work-process-card-items">
                <div className="number">01</div>
                <div className="content">
                  <h5>Create an Account</h5>
                  <p>
                    Sed perspiciatis unde natus error volupta temes accu totam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="arrow-shape mt-5">
                <img
                  src="assets/img/home-6/arrow-line-shape.png"
                  alt="shape-img"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6" />
            <div className="col-xl-4 col-lg-6" />
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="work-process-card-items">
                <div className="number">02</div>
                <div className="content">
                  <h5>Generate your content</h5>
                  <p>
                    Sed perspiciatis unde natus error volupta temes accu totam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6" />
            <div className="col-xl-4 col-lg-6" />
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="arrow-shape text-center">
                <img
                  src="assets/img/home-6/arrow-line-shape-2.png"
                  alt="shape-img"
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="work-process-card-items">
                <div className="number">03</div>
                <div className="content">
                  <h5>Get Final Results</h5>
                  <p>
                    Sed perspiciatis unde natus error volupta temes accu totam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section-6 fix section-padding" id="services">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text-2 wow fadeInUp">Popular Service</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Experience the full power AI <br />
              Generator your data
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-copy-writing" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Blog Post &amp; Stories</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusan doloremque totam
                  </p>
                  <Link href="service-details" className="link-btn">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="popular-service-box-items active">
                <div className="icon">
                  <i className="flaticon-social-media" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Social Media Content</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusan doloremque totam
                  </p>
                  <Link href="service-details" className="link-btn">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-earning" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">eCommerce Copy</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusan doloremque totam
                  </p>
                  <Link href="service-details" className="link-btn">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-software-development" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Ad Targeting tips</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusan doloremque totam
                  </p>
                  <Link href="service-details" className="link-btn">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-copy-writing" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Content Rewriter</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusan doloremque totam
                  </p>
                  <Link href="service-details" className="link-btn">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">
                      Optimized for conversions
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusan doloremque totam
                  </p>
                  <Link href="service-details" className="link-btn">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Video Section Start */}
      <section className="feature-video-section fix section-padding">
        <div className="container">
          <div className="feature-video-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="feature-video-thumb">
                  <img src="assets/img/home-6/video-feature.png" alt="img" />
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
              <div className="col-lg-6">
                <div className="feature-video-content">
                  <div className="section-title">
                    <span className="sec-sub-text-2 wow fadeInUp">
                      What We Doing
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Better Solutions to Create <br /> your life more easier
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium <br /> doloremque laudantium, totam rem aperiam
                    eaque ipsa
                  </p>
                  <div className="feature-box-area">
                    <div
                      className="feature-items wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h5>
                        <i className="fas fa-check-circle" />
                        Easy write and test more copy varistions
                      </h5>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur
                      </p>
                    </div>
                    <div
                      className="feature-items wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h5>
                        <i className="fas fa-check-circle" />
                        Easy write and test more copy varistions
                      </h5>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section Start */}
      <section className="feature-section-5 fix section-padding" id="feature">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="feature-content">
                  <div className="section-title">
                    <span className="sec-sub-text-2 wow fadeInUp">
                      Core Features
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Unlock the power of AI &amp; Create Content Faster
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium <br /> doloremque laudantium, totam rem aperiam
                    eaque ipsa
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connect with leads with zero hassle.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Take quick payments direct from meetings
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Start finding leads that get coverts quickly
                    </li>
                  </ul>
                  <Link
                    href="contact"
                    className="theme-btn bg-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Sign Up Free <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="feature-dashboard-image">
                  <img src="assets/img/home-6/dashboard-2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <Pricing2 />
      {/* Testimonial Section Start */}
      <section className="testimonial-section-6 fix section-padding">
        <div className="container">
          <div className="testimonial-wrapper-3">
            <div className="testimonial-top-items">
              <div className="section-title mb-0">
                <span className="sec-sub-text-2 wow fadeInUp">
                  Clients Feedback
                </span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  What Our Clients Say Us
                </h2>
              </div>
              <div className="testimonial-right">
                <Link
                  href="index-6"
                  className="theme-btn hover-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  View More <i className="far fa-arrow-right" />
                </Link>
                <div className="author-items wow fadeInUp" data-wow-delay=".5s">
                  <img src="assets/img/home-6/client.png" alt="img" />
                  <h6 className="text-white">
                    Trusted by 1M+ people <br />
                    around the globe
                  </h6>
                </div>
              </div>
            </div>
            <div className="testimonial-items">
              <div className="testimonial-thumb-item">
                <TestiThumbSlider />
              </div>
              <div className="testi-content">
                <TestiContentSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section Start */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
              Frequently Asked Questions
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Digital marketing &amp; advertising approach focuses on capturing
              the essential
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="false"
                          aria-controls="faq1"
                        >
                          Why Need Digital Marketing For Build Business ?
                        </button>
                      </h4>
                      <div
                        id="faq1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                          aria-expanded="true"
                          aria-controls="faq2"
                        >
                          How to Increase Web Traffic ?
                        </button>
                      </h4>
                      <div
                        id="faq2"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          How to Development SEO Optimization ?
                        </button>
                      </h4>
                      <div
                        id="faq3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          Have Any Professional Team Member ?
                        </button>
                      </h4>
                      <div
                        id="faq4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq5"
                          aria-expanded="false"
                          aria-controls="faq5"
                        >
                          Have you any Global Customer ?
                        </button>
                      </h4>
                      <div
                        id="faq5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion2">
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq6"
                          aria-expanded="false"
                          aria-controls="faq6"
                        >
                          How can bias be addressed in AI algorithms?
                        </button>
                      </h4>
                      <div
                        id="faq6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq7"
                          aria-expanded="false"
                          aria-controls="faq7"
                        >
                          Are AI and machine learning the same thing?
                        </button>
                      </h4>
                      <div
                        id="faq7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq8"
                          aria-expanded="false"
                          aria-controls="faq8"
                        >
                          How to Development SEO Optimization ?
                        </button>
                      </h4>
                      <div
                        id="faq8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq9"
                          aria-expanded="false"
                          aria-controls="faq9"
                        >
                          Can AI replace human jobs?
                        </button>
                      </h4>
                      <div
                        id="faq9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq10"
                          aria-expanded="false"
                          aria-controls="faq10"
                        >
                          How can I learn more about AI and get in the field?
                        </button>
                      </h4>
                      <div
                        id="faq10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudan tiueaque quae
                          abillo inventore veritatis et quasi architecto beatae
                          vitae dicta explicabo voluptatem voluptas aspernatur
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Section Start */}
      <section className="cta-section-6 fix section-padding pt-0">
        <div className="container">
          <div
            className="cta-newsletter-wrapper-2 bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/cta-shape.png")',
            }}
          >
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="section-title mb-0">
                  <span className="text-white sec-sub-text-2 wow fadeInUp">
                    Newsletter
                  </span>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Start a free 7-days trial now &amp; Get more updates
                  </h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <h5 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  Subscribe Our Newsletter
                </h5>
                <div className="form-clt wow fadeInUp" data-wow-delay=".5s">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  <button className="theme-btn bg-2">
                    <span>
                      Sign Up <i className="far fa-arrow-right" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <div className="brand-section-6 fix section-padding pt-0">
        <div className="container">
          <h5 className="brand-text-6 wow fadeInUp" data-wow-delay=".3s">
            We Have <span>1563+</span> Global Partners. Explore Our Global
            Clients
          </h5>
          <ClientSlider />
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
