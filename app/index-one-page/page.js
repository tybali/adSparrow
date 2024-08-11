import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={1} single>
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.jpg")' }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  We Take Care <br />
                  Your IT Solutions <br /> &amp; Provide Best <br /> Services
                </h1>
                <div className="hero-button">
                  <Link
                    href="/"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Get Started Now <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    View Services <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Trusted by 1M+ people <br />
                    around the globe
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Get Consultations</h4>
                <p>Ready to Register Our Landsio Services</p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <p>
                          I’ve Read and agreed to{" "}
                          <Link href="/">Terms &amp; Conditions</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        Get Started Now <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Preparing For Your Business Success With IT Solution
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="service-details">
                      Data Manage &amp; <br />
                      Solutions Center
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/01.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="service-details">
                      Preparing For <br />
                      Cloud Services
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/02.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="service-details">
                      Machine Learning <br />
                      &amp; Development
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/03.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>25+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Awards Winning Company</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="assets/img/about/01.jpg" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="assets/img/about/02.jpg" alt="about-img" />
                      </div>
                    </div>
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
                      Preparing Your Success Trusted IT Services
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                    temes accusantium doloremque laudantium, totam rem
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
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
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="about" className="theme-btn">
                        Learn More Us
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="author-img" />
                      <div className="content">
                        <h5>
                          Lucas J. Swe / <span>CO Founder</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section section-padding pt-0" id="services">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Best Quality Service <br />
              For Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-technical" />
                </div>
                <h3>
                  <Link href="service-details">
                    Data Center and Cloud Services
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/04.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="service-details">
                    Web Development Software Renew
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/05.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="service-details">
                    IT Management Machine Learning
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/06.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-design-thinking" />
                </div>
                <h3>
                  <Link href="service-details">
                    Digital Product UI/UX Design
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/07.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Video Section Start */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
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
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Team Section Start */}
      <section className="team-section fix section-padding" id="team">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Team Member
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Meet Our Professional <br />
                  Team Members
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Sed ut perspiciatis unde omnis iste natus error sit volupta
                temes <br /> accusantium doloremque laudantium, totam rem
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Robert E. Whitmore</Link>
                  </h4>
                  <p>Product Designer</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Johnny M. Smith</Link>
                  </h4>
                  <p>IT Consultant</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Angelo H. Tomlin</Link>
                  </h4>
                  <p>Senior Manager</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Robert E. Whitmore</Link>
                  </h4>
                  <p>Web Designer</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Manuel G. Wilmer</Link>
                  </h4>
                  <p>CEO &amp; Founder</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xxl-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <Link href="team" className="theme-btn">
                View More Members
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Company Fun Fact
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Learn Our Company Statistics
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>
      {/* Popular Case Study Section Start */}
      <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="assets/img/case-study/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/case-study/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                Popular Case Study
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Discover Our Popular Case Study <br /> That We Globally
                Completes
              </h2>
            </div>
            <Link href="project" className="theme-btn white-border">
              View More Cases
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/01.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>IT Consulting</p>
                  <h3>
                    <Link href="case-study-details">
                      How to achieve more with your nine to five
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/02.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>Machine Learning</p>
                  <h3>
                    <Link href="case-study-details">
                      Strategies for outstanding future results
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/03.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>Software Design</p>
                  <h3>
                    <Link href="case-study-details">
                      Discover a better way of system defining company goals.
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <Pricing />
      {/* Testimonial Section Start */}
      <section className="testimonial-section fix section-padding pt-0">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section section-padding pt-0" id="blog">
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
              <div className="news-box-items">
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
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      List of 5 ways Generating Real Time Audio Sentiment
                      Analysis
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
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
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
