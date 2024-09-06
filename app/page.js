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
    "Top Digital Marketing Agency - Boost Your Online Presence | AdSparrow",
  description:
    "AdSparrow is your go-to digital marketing agency. We specialize in web design, SEO, PPC, and social media marketing to ensure your business thrives online. Get your free consultation now!",
};

const page = () => {
  return (
    <NextLayout header={1} footer={4}>
      <section className="hero-section hero-1 bg-cover fix">
        <div className="radialContainer" />
        <Image
          alt="Digital Marketing cover | Digital Marketing Strategy | Digital marketing company near me"
          src={Cover}
          placeholder="blur"
          quality={100}
          fill
          priority
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
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Look who is here! <br />
                  We have been keeping your spot warm. <br />
                </h1>
                <p className="banner-detail">
                  You are struggling to stand out online, with website that
                  blend into the background, social media content that gets lost
                  in the feed, and marketing strategies that miss the mark.
                  Struggles you treat like a fact of life. <br />
                  <br />
                </p>
                <p
                  className="banner-detail"
                  style={{ fontSize: 30, fontWeight: 800 }}
                >
                  {" "}
                  Well, They ain’t. AdSparrow got you covered.{" "}
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
                    Most agencies stop at a lead and pat themselves on the back.
                    Not us. We’re in it for the long haul, tracking every step
                    from initial click to final conversion—and beyond. While
                    others are busy celebrating a click, we’re already mapping
                    out the next steps to turn that lead into loyal customers,
                    higher revenue, and world domination (or close to it).
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

      {/** Pain Point Detective */}
      <section
        className="about-section fix section-padding"
        style={{ paddingBottom: 0 }}
      >
        <div className="container">
          <p className=" intro-quotation">
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
      <ServiceCards />

      {/* Pricing Section Start */}
      <Pricing2 />

      {/* Cta Video Section Start */}
      <Cta
        title={"Free Audit: Our Treat!"}
        offer={`Get a behind-the-scenes look at your digital health—no
            strings attached, no hidden fees, just pure value. Go ahead,
            challenge us. Request your free audit today and watch us
            work our magic.`}
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
            <div className="row justify-content-between align-items-center g-4">
              <div className="col-lg-6">
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
