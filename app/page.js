import { Pricing2 } from "@/components/Pricing";
import { TestimonialSlider3 } from "@/components/TestimonialSlider";
import OurProcess from "@/components/OurProcess";
import ServiceCards from "@/components/ServiceCards";
import WhyChooseUS from "@/components/WhyChooseUs";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Image from "next/image";
import About01 from "@assets/img/about/illustration.webp";
import Cta from "@/components/Cta";
import Illustrtation from "@assets/img/illustration.webp";
import Testimonial1 from "@assets/img/testimonial/testimonial.webp";
import Testimonial2 from "@assets/img/testimonial/testimonial-card1.png";
import Testimonial3 from "@assets/img/testimonial/testimonial-card2.png";
import { Appointments } from "@/components/Appointments";
import Cover from "@assets/img/hero/cover.webp";
import FeaturedBlogs from "@/components/FeaturedBlogs";

export const metadata = {
  title:
    "AdSparrow Digital Marketing Agency | Expert Digital Marketing Services",
  description:
    "AdSparrow is a leading digital marketing agency. We offer digital marketing services including web design, SEO, PPC, and social media marketing and more",
};

const page = () => {
  return (
    <NextLayout header={1} footer={4}>
      <section className="hero-section hero-1 bg-cover fix">
        <div className="radialContainer" />
        <Image
          alt="Digital Marketing services | Digital Marketing Agency | Digital marketing company near me"
          src={Cover}
          placeholder="blur"
          quality={100}
          fill
          priority
          className="banner-img"
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div className="container hero-canvas">
          <div
            className="row g-4 justify-content-between"
            style={{ marginTop: 30 }}
          >
            <div className="col-lg-6">
              <div className="hero-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="banner-detail aos-init aos-animate"
                  style={{ fontSize: 30, fontWeight: 800 }}
                >
                  Marketing Agency <br /> Built on <br />{" "}
                  <span>PARTNERSHIPS</span> & <br /> Powered by{" "}
                  <span>RESULTS</span>
                </h1>
                <p className="banner-one-liner">
                  At AdSparrow, we don’t just market; we create meaningful
                  impact and transform businesses for the better.
                </p>
                <div className="hero-button">
                  {/* <Link
                    href="service"
                    className="btn-linkaos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                  >
                    View Services <i className="far fa-arrow-right" />
                  </Link> */}
                </div>
                {/* <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                  
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

      {/** Pain Point Detective */}
      <section
        className="about-section fix section-padding"
        style={{ paddingBottom: 0 }}
      >
        <div className="container">
          <h2 className=" intro-quotation">
            “We're not your typical digital agency—we're{" "}
            <span style={{ fontWeight: 600 }}>Pain Point Detectives!</span>{" "}
            While others rely on cookie-cutter tactics, we delve into the unique
            aspects of your brand, transforming obstacles into achievements.
            Forget about one-size-fits-all solutions; our tailored digital
            marketing services are designed to make you shine and achieve
            success. Ready for a marketing makeover that truly stands out? Let’s
            tackle your distinctive challenges together!”
          </h2>
        </div>
      </section>

      {/* Service Section Start */}

      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 col-sm-12 col-md-12">
                <Image
                  src={About01}
                  alt="about-img"
                  priority
                  style={{ minWidth: 350, maxWidth: 600, width: "100%" }}
                  height={500}
                />
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div
                    className="section-title aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <h2>Leads Are Just the Beginning</h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    style={{
                      lineHeight: "1.9rem",
                      fontSize: "1.3rem",
                      color: "#000",
                    }}
                  >
                    Generating leads is just the beginning of our digital
                    marketing services. While many agencies celebrate a secured
                    lead, we take a long-term approach. We track every step from
                    click to conversion, strategizing to transform leads into
                    loyal customers and drive sustained growth.
                  </p>

                  <div
                    className="about-author aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="about-button">
                      <Link href="/about" className="theme-btn">
                        Learn More
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

      <WhyChooseUS />

      {/* Service Section Start */}
      <ServiceCards />

      {/* Pricing Section Start */}
      <Pricing2 />

      {/* Cta Video Section Start */}
      <Cta
        title={"Free Audit: Our Treat!"}
        offer={`Get a free digital marketing audit—no fees, no strings attached. Whether it's boosting your strategy or improving your digital marketing services, we’re ready to help. Request your free audit today and see the difference.`}
        imageSrc={Illustrtation}
      />

      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-3 fix section-padding pt-0"
        style={{ marginBottom: 100 }}
        id="testimonial"
      >
        <div className="container">
          <div className="testimonial-wrapper-2">
            <div className="row  align-items-center g-4 testimonial-flexbox">
              <div className="col-lg-6 col-md-10">
                <TestimonialSlider3 />
              </div>
              <div
                className="col-lg-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="600"
              >
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
      {/* News Section Start */}
      <FeaturedBlogs />
    </NextLayout>
  );
};
export default page;
