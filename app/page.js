import FunFactCounter from "@/components/FunFactCounter";
import Pricing, { Pricing2 } from "@/components/Pricing";
import { TestimonialSlider3 } from "@/components/TestimonialSlider";
import OurProcess from "@/components/OurProcess";
import WhyChooseUS from "@/components/WhyChooseUs";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Image from "next/image";
import About01 from "@assets/img/about/illustration.png";
import Bell from "@assets/img/bale.png";
import Illustrtation from "@assets/img/illustration.webp";
import Testimonial1 from "@assets/img/testimonial/01.jpg";
import Testimonial2 from "@assets/img/testimonial/testimonial-card1.png";
import Testimonial3 from "@assets/img/testimonial/testimonial-card2.png";
import { Appointments } from "@/components/Appointments";

const page = () => {
  return (
    <NextLayout header={1} footer={4}>
      <section className="hero-section hero-1 bg-cover fix">
        <div className="container">
          <div
            className="row g-4 justify-content-between"
            style={{ marginTop: 30 }}
          >
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Look who is here! <br />
                  We have been keeping your spot warm. <br />
                </h1>
                <p className="banner-detail">
                  You are struggling to stand out online, with website that
                  blend into the background, social media content that gets lost
                  in the feed, and marketing strategies that miss the mark.
                  Struggles you treat like a fact of life. <br />
                  <br />
                  <span style={{ fontSize: 26 }}> Well, They ain’t. AdSparrow got you covered. </span>
                </p>
                <div className="hero-button">
                  {/* <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    View Services <i className="far fa-arrow-right" />
                  </Link> */}
                </div>
                {/* <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <Image src={CLientImg} alt="img"  />
                  <p className="text-white">
                    Trusted by 1M+ people <br />
                    around the globe
                  </p>
                </div> */}
              </div>
            </div>
            <Appointments />
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      {/* <section className="service-section fix pt-80 pb-80 section-bg">
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
      </section> */}
      {/* About Section Start */}

      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 col-sm-12 col-md-12">
                <Image
                  src={About01}
                  alt="about-img"
                  style={{ minWidth: 350, maxWidth: 600, width: "100%" }}
                  height={500}
                />
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Leads Are Just the Beginning
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{ lineHeight: "1.9rem", fontSize: "1.3rem" }}
                  >
                    Most agencies stop at a lead and pat themselves on the back.
                    Not us. We’re in it for the long haul, tracking every step
                    from initial click to final conversion—and beyond. While
                    others are busy celebrating a click, we’re already mapping
                    out the next steps to turn that lead into loyal customers,
                    higher revenue, and world domination (or close to it).
                  </p>

                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="/about" className="theme-btn">
                        Learn More Us
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    {/* <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="author-img" />
                      <div className="content">
                        <h5>
                          Lucas J. Swe / <span>CO Founder</span>
                        </h5>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <OurProcess />

          {/** Pain Point Detective */}
          <section
        className="about-section fix section-padding"
        style={{ paddingBottom: 0 }}
      >
        <div className="container">
          <p className=" intro-quotation wow fadeInUp" data-wow-delay=".5s">
            “We're not your average digital agency—we're{" "}
            <span style={{ fontWeight: 600 }}>Pain Point Detectives!</span>{" "}
            While others use cookie-cutter tactics, we dive deep into your
            brand’s quirks, turning obstacles into triumphs. Forget
            one-size-fits-all solutions; we craft bespoke strategies that make
            you shine and succeed. Ready for a marketing makeover that stands
            out? Let’s tackle your unique challenges together!”
          </p>
        </div>
      </section>

      <WhyChooseUS />

      {/* Service Section Start */}
      <section
        className="service-section-6 fix section-padding pt-0"
        id="services"
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              The Fun Stuff We Do! <br />
            </h2>
          </div>
          <div className="row">
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
                    <Link href="service-details">
                      Web Design &amp; Development
                    </Link>
                  </h3>
                  
                  <p className="service-card-description">
                    Websites that don’t just look good—they work good.
                    Functionality meets style, minus the fluff.
                  </p>
                  <Link href="service-details" className="link-btn read-more">
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
                  <i className="flaticon-keywords" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">SEO</Link>
                  </h3>
                  <p className="service-card-description">
                    Get found without the fuss. We’ll elevate your site to the
                    top, where it belongs—front and center.
                  </p>
                  <Link href="service-details" className="link-btn read-more">
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
                  <i className="flaticon-vector-design" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">
                      Video Editing & Animation
                    </Link>
                  </h3>
                  <p className="service-card-description">
                    Turning raw clips into watch-worthy content. We keep it
                    sharp, professional, and oh-so-smooth.
                  </p>
                  <Link href="service-details" className="link-btn read-more">
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
                  <i className="flaticon-social-media" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Social Media Marketing</Link>
                  </h3>
                  <p className="service-card-description">
                    Engage, don’t enrage. We craft campaigns that make your
                    brand irresistible—for all the right reasons.
                  </p>
                  <Link href="service-details" className="link-btn read-more">
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
                    <Link href="service-details">Pay Per Click (PPC)</Link>
                  </h3>
                  <p className="service-card-description">
                    Clicks that count. We maximize your ROI with precise
                    targeting, turning every click into a valuable conversion.
                  </p>
                  <Link href="service-details" className="link-btn read-more">
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
                  
                <i className="flaticon-price-tag" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Ecommerce Store</Link>
                  </h3>
                  <p className="service-card-description">
                    Build stores that sell. We fix your e-commerce woes with
                    seamless, tailored online store solutions.
                  </p>
                  <Link href="service-details" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Start */}
      <Pricing2 />

            {/* Cta Video Section Start */}
            <section className="business-boost-section section-padding pt-0">
        <div className="container">
          <div className="business-boost-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="business-boost-content">
                  {/* <Image
                    src={VIdeoImage}
                    alt="img"
                    className="wow fadeInUp"
                    data-wow-delay=".2s"
                  /> */}
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Free Audit: Our Treat!
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Get a behind-the-scenes look at your digital health—no
                    strings attached, no hidden fees, just pure value. Go ahead,
                    challenge us. Request your free audit today and watch us
                    work our magic.
                  </p>
                  <Link
                    href="contact"
                    className="theme-btn bg-2 wow fadeInUp"
                    style={{ textTransform: "capitalize" }}
                    data-wow-delay=".7x"
                  >
                    Book an intro call <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-4 wow fadeInUp" data-wow-delay=".4s">
                <div className="video-image">
                  <Image
                    src={Illustrtation}
                    alt="img"
                    className="offer-illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-3 fix section-padding pt-0"
        id="testimonial"
      >
        <div className="container">
          <div className="testimonial-wrapper-2">
            <div className="row justify-content-between align-items-center g-4">
              <div className="col-lg-6">
                <TestimonialSlider3 />
              </div>
              <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="testimonial-image">
                  <Image src={Testimonial1} alt="img" />
                  <div className="card-shape-1 float-bob-x">
                    <Image src={Testimonial2} alt="shape-img" />
                  </div>
                  <div className="card-shape-2 float-bob-y">
                    <Image src={Testimonial3} alt="shape-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="testimonial-section fix section-padding pt-0">
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
      </section> */}
      {/* News Section Start */}
      <section className="news-section section-padding pt-50">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <Image src={Bell} alt="img" />
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
