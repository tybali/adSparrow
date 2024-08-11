import BrandSlider from "@/components/BrandSlider";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={5} footer={3} bgBlack={true} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-5">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale-2.png" alt="img" />
                  <span className="sub-text">
                    Hello, I’m Mitchell E. Burke{" "}
                  </span>
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  <span>Experience Digital</span>
                  Product Designer
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium <br />
                  doloremque laudantium, totam rem aperiam
                </p>
                <div className="button-items">
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Link href="about" className="theme-btn">
                      Hire Me
                      <i className="fas fa-long-arrow-right" />
                    </Link>
                  </div>
                  <span
                    className="button-text wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <span className="ms-3 d-line" />
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="play-text video-popup"
                    >
                      Watch IT Video
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="hero-image">
                <img src="assets/img/home-5/hero/01.png" alt="img" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <BrandSlider />
      {/* About Section Start */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-wrapper-3">
            <div className="about-image-1 wow fadeInUp" data-wow-delay=".3s">
              <img src="assets/img/home-5/about/01.png" alt="img" />
            </div>
            <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/img/home-5/about/02.png" alt="img" />
              <div className="icon-box">
                <img
                  src="assets/img/home-5/about/trophy.png"
                  alt="img"
                  className="icon-img"
                />
                <div className="circle-text">
                  <img
                    src="assets/img/home-5/about/circle-text.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="about-content-2 text-center">
              <div className="section-title text-center">
                <span className="sec-sub-text wow fadeInUp">About Me</span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  We Solve Your Business <br />
                  problem by Design
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo emo enim ipsam
              </p>
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
      </section>
      {/* Education Experience Section Start */}
      <section className="education-experience section-border section-padding">
        <div className="container">
          <div className="section-title">
            <span className="sec-sub-text wow fadeInUp">Resume</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Education &amp; Experience
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>2020 - Present</span>
                  <h3>Framer Designer &amp; Developer</h3>
                  <p>Google Agency</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>2018 - 2020</span>
                  <h3>Front-End WordPress Developer</h3>
                  <p>Amazon Agency</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>2014 - 2017</span>
                  <h3>Webflow Developer &amp; Co-Founder</h3>
                  <p>XZS Agency</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>2010 - 2013</span>
                  <h3>Leader Team of Marketing</h3>
                  <p>Pixel Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Video Section Start */}
      <div
        className="cta-video-section cta-video-2 fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/home-5/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper style-2">
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
      {/* Service Section Start */}
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text wow fadeInUp">Popular Service</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Explore Our Popular Services
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="service-popular-image-2">
                <img
                  id="myImage2"
                  src="assets/img/home-5/service/01.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-curve" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="assets/img/home-5/service/01.png"
                      >
                        Website Design
                      </Link>
                    </h3>
                    <p>Sed ut perspiciatis unde omnis iste</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-megaphone" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="assets/img/home-5/service/01.png"
                      >
                        Digital Marketing
                      </Link>
                    </h3>
                    <p>Sed ut perspiciatis unde omnis iste</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-coding" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="assets/img/home-5/service/01.png"
                      >
                        Web Development
                      </Link>
                    </h3>
                    <p>Sed ut perspiciatis unde omnis iste</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-price-tag" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="assets/img/home-5/service/01.png"
                      >
                        Design &amp; Branding
                      </Link>
                    </h3>
                    <p>Sed ut perspiciatis unde omnis iste</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Section Start */}
      <section className="skill-section fix section-padding pt-0">
        <div className="section-title text-center">
          <span className="sec-sub-text wow fadeInUp">My Skills</span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            Skills What I’m Experiences
          </h2>
        </div>
        <div className="skill-wrapper">
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".2s">
            <img src="assets/img/home-5/skills/figma.png" alt="img" />
            <div className="post-cat">95%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".4s">
            <img src="assets/img/home-5/skills/framerpng.png" alt="img" />
            <div className="post-cat">35%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".5s">
            <img src="assets/img/home-5/skills/webflow.png" alt="img" />
            <div className="post-cat">83%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".6s">
            <img src="assets/img/home-5/skills/sketch.png" alt="img" />
            <div className="post-cat">98%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".7s">
            <img src="assets/img/home-5/skills/python.png" alt="img" />
            <div className="post-cat">48%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".8s">
            <img src="assets/img/home-5/skills/angular.png" alt="img" />
            <div className="post-cat">47%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".9s">
            <img src="assets/img/home-5/skills/photoshop.png" alt="img" />
            <div className="post-cat">95%</div>
          </div>
        </div>
      </section>
      {/* Project Section Start */}
      <section className="project-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <sub className="sec-sub-text">Work Gallery</sub>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Explore Featured Projects
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="assets/img/project/05.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Business Task Management <br />
                          Dashboard Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="assets/img/project/06.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Website Design</p>
                      <h3>
                        <Link href="project-details">
                          Business Consulting Web <br />
                          Explorations Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="assets/img/project/07.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Mobile Applications Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="assets/img/project/08.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Website Design</p>
                      <h3>
                        <Link href="project-details">
                          Furniture Website Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="project-button text-center mt-5 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Link href="project" className="theme-btn">
              View More Projects <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <BrandSlider />
      {/* Pricing Section Start */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text wow fadeInUp">Pricing Package</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Popular Pricing For IT Consulting
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="pricing-card-items style-2">
                <div className="pricing-shape">
                  <img src="assets/img/pricing-shape.png" alt="shape-img" />
                </div>
                <div className="pricing-header">
                  <h3>Regular Plan</h3>
                  <p>For Small Businesses</p>
                </div>
                <ul className="pricing-list">
                  <li>IT Consulting</li>
                  <li>Digital Product Design</li>
                  <li>Machine Learning</li>
                  <li className="style-2">Automation templates</li>
                  <li className="style-2">Great Customer Support</li>
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    $19 <span>/month</span>
                  </h2>
                  <p>For Small Businesses</p>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    Choose Package
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="pricing-card-items style-2 active">
                <div className="pricing-shape">
                  <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
                </div>
                <div className="pricing-header">
                  <h3>Business Plan</h3>
                  <p>For Small Businesses</p>
                </div>
                <ul className="pricing-list">
                  <li>IT Consulting</li>
                  <li>Digital Product Design</li>
                  <li>Machine Learning</li>
                  <li>Automation templates</li>
                  <li>Great Customer Support</li>
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    $53 <span>/month</span>
                  </h2>
                  <p>For Small Businesses</p>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    Choose Package
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="pricing-card-items style-2">
                <div className="pricing-shape">
                  <img src="assets/img/pricing-shape.png" alt="shape-img" />
                </div>
                <div className="pricing-header">
                  <h3>Professional Plan</h3>
                  <p>For Small Businesses</p>
                </div>
                <ul className="pricing-list">
                  <li>IT Consulting</li>
                  <li>Digital Product Design</li>
                  <li>Machine Learning</li>
                  <li className="style-2">Automation templates</li>
                  <li className="style-2">Great Customer Support</li>
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    $99 <span>/month</span>
                  </h2>
                  <p>For Small Businesses</p>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    Choose Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <section className="testimonial-section-5 fix section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text">Clients Feedback</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
              We’ve 1250+ Global Clients Say Us
            </h2>
          </div>
        </div>
        <TestimonialSlider2 style="style-2" />
      </section>
      {/* Contact Section Section Start */}
      <section className="contact-section section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="contact-image">
                  <img src="assets/img/home-5/contact.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-right">
                  <div className="section-title">
                    <span className="sec-sub-text wow fadeInUp">
                      Contact Me
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      Have Any Project On Minds! <br />
                      Let’s Work Together
                    </h2>
                  </div>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items mt-4 mt-md-0"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <button type="submit" className="theme-btn">
                          Send a Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Global Partner Section Start */}
      <div className="global-partner fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text wow fadeInUp">Global Partners</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              We’ve 1253+ Global Partners, <br />
              Meet Our Clients
            </h2>
          </div>
          <div className="global-partner-wrapper">
            <div className="global-thumb wow fadeInUp" data-wow-delay=".2s">
              <img src="assets/img/home-5/global/01.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".4s">
              <img src="assets/img/home-5/global/02.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".6s">
              <img src="assets/img/home-5/global/03.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".7s">
              <img src="assets/img/home-5/global/04.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".8s">
              <img src="assets/img/home-5/global/05.png" alt="img" />
            </div>
          </div>
          <div className="global-partner-wrapper">
            <div className="global-thumb wow fadeInUp" data-wow-delay=".2s">
              <img src="assets/img/home-5/global/06.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".4s">
              <img src="assets/img/home-5/global/07.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".6s">
              <img src="assets/img/home-5/global/08.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".7s">
              <img src="assets/img/home-5/global/09.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".8s">
              <img src="assets/img/home-5/global/10.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
