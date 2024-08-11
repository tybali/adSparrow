import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Social Media Marketing" />
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Problem Solutions
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
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      Learn More Us
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="experience-items">
                    <h6>
                      Trusted by 1M+ people <br />
                      around the globe
                    </h6>
                    <img src="assets/img/about/face-mans.png" alt="img" />
                    <h2>
                      <span className="count">
                        <Counter end={25} />
                      </span>
                      +
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/07.jpg" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/08.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/about/09.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Video Section Start */}
      <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <img src="assets/img/service/service-video.jpg" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-buttton ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                    style={{ visibility: "visible", animationDelay: "0.6s" }}
                  >
                    <li>25+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Awards Winning Company</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Better Solutions Create your life more easier
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    Sed perspiciatis unde omnis natus voluptatem accusantium
                    doloremque laudantium, totam rem aperiam eaque
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Easy write and test more copy varistions
                    </h5>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      One Click Management &amp; Custom Greeting
                    </h5>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Working Process Section Start */}
      <WorkingProcess />
      {/* Grow Business Section Start */}
      <GrowBusiness2 bg={"footer-bg"} />
      {/* Pricing Section Start */}
      <Pricing />
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};
export default page;
