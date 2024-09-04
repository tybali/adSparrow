const { default: Link } = require("next/link")

const ServiceCrads = () => {
    return (
        <section
        className="service-section-6 fix section-padding pt-0"
        id="services"
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
              The Fun Stuff We Do! <br />
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="popular-service-box-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                <div className="icon">
                  <i className="flaticon-software-development" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/website-design-and-development">
                      Web Design &amp; Development
                    </Link>
                  </h3>

                  <p className="service-card-description">
                    Websites that don’t just look good—they work good.
                    Functionality meets style, minus the fluff.
                  </p>
                  <Link href="/services/website-design-and-development" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="popular-service-box-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                <div className="icon">
                  <i className="flaticon-keywords" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/search-engine-optimization">SEO</Link>
                  </h3>
                  <p className="service-card-description">
                    Get found without the fuss. We’ll elevate your site to the
                    top, where it belongs—front and center.
                  </p>
                  <Link href="/services/search-engine-optimization" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="popular-service-box-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/video-editing-and-animation">
                      Video Editing & Animation
                    </Link>
                  </h3>
                  <p className="service-card-description">
                    Turning raw clips into watch-worthy content. We keep it
                    sharp, professional, and oh-so-smooth.
                  </p>
                  <Link href="/services/video-editing-and-animation" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="popular-service-box-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                <div className="icon">
                  <i className="flaticon-social-media" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/social-media-marketing">Social Media Marketing</Link>
                  </h3>
                  <p className="service-card-description">
                    Engage, don’t enrage. We craft campaigns that make your
                    brand irresistible—for all the right reasons.
                  </p>
                  <Link href="/services/social-media-marketing" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="popular-service-box-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                <div className="icon">
                  <i className="flaticon-earning" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/pay-per-click">Pay Per Click (PPC)</Link>
                  </h3>
                  <p className="service-card-description">
                    Clicks that count. We maximize your ROI with precise
                    targeting, turning every click into a valuable conversion.
                  </p>
                  <Link href="/services/pay-per-click" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="popular-service-box-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                <div className="icon">
                  <i className="flaticon-price-tag" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/ecommerce-store">Ecommerce Store</Link>
                  </h3>
                  <p className="service-card-description">
                    Build stores that sell. We fix your e-commerce woes with
                    seamless, tailored online store solutions.
                  </p>
                  <Link href="/services/ecommerce-store" className="link-btn read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ServiceCrads;