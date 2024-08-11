import Faq from "@/components/Faq";
import Services from "@/components/Services";
import {
  TestimonialSlider4,
  TestimonialSlider5,
} from "@/components/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={2} footer={4} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-4">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale.png" alt="img" />
                  25+ Years Of Experience
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  The Perfect Digital marketing For grow your Business
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium <br />
                  doloremque laudantium, totam rem aperiam
                </p>
                <div className="about-author">
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Link href="about" className="theme-btn">
                      Learn More
                      <i className="fas fa-long-arrow-right" />
                    </Link>
                  </div>
                  <div
                    className="author-image wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets/img/about/face-mans-2.png"
                      alt="author-img"
                    />
                    <div className="content">
                      <h6>
                        Trusted by 1M+ people <br />
                        around the globe
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-image">
                <img
                  src="assets/img/hero/digital-marketing-hero-img-min.png"
                  alt="img"
                />
                <div className="circle-musk-shape float-bob-x">
                  <img src="assets/img/hero/circle-musk.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <section className="brand-section-2 fix">
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
      {/* About Section Start */}
      <section className="about-section fix section-padding" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="digital-about-image">
                  <img
                    src="assets/img/about/digittal-about-img.png"
                    alt="img"
                  />
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
                      We Have Experience Team to Lead your Business
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                    temes accusantium doloremque laudantium, totam rem
                  </p>
                  <ul
                    className="about-list style-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <i className="fas fa-check-circle" />
                      Marketing Strategy &amp; SEO Camping
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Best Customers Experience
                    </li>
                  </ul>
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn bg-2">
                      Learn More Us
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <Services />
      {/* Working Process Section Start */}
      <WorkingProcess />
      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-4 fix section-padding"
        id="testimonial"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Testimonials
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              We’ve 1250+ Global Clients Say Us
            </h2>
          </div>
        </div>

        <TestimonialSlider4 />
        <TestimonialSlider5 />
      </section>
      {/* Faq Section Start */}
      <Faq />
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
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/07.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Achieving Fashion Elegan Runway to Real Life
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
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/08.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Remote work made easy way better tools.
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
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/09.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Achieving Fashion Elegan Runway to Real Life
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
      {/* Contact Section Start */}
      <section className="contact-section fix section-padding pt-0 fix">
        <div className="pattern-shape">
          <img src="assets/img/box-pattern.png" alt="radius-shape" />
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-image">
                <img src="assets/img/contact.jpg" alt="img" />
                <div className="circle-musk-shape float-bob-x">
                  <img src="assets/img/hero/circle-musk.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Contact Us
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Ready to Boost your Digital <br />
                  product marketing ?
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium <br /> doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
              <Link
                href="contact"
                className="theme-btn mt-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Get A Quote
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
