import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/img/logo/adsparrow-logo.png";
import Shape1 from "@assets//img/footer-color-shape.png";
import Shape2 from "@assets//img/footer-color-shape-2.png";

const Footer = ({ footer }) => {
  return <Footer4 />;
};
export default Footer;

const Footer4 = () => {
  return (
    <footer className="footer-section footer-bg fix">
      <div className="color-shape">
        <Image src={Shape1} alt="website footer" />
      </div>
      <div className="color-shape-2">
        <Image src={Shape2} alt="website footer" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="Digital marketing agency"
                      height={60}
                      width={184}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    We’re here to turn your ideas into something epic—let’s make
                    it happen!
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com/people/AdSparrow/61564962947506/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/adsparrowllc/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/adsparrowllc/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5">
              {/* <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Popular Services</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="/contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  {/* <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div> */}
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:adsparrowllc@gmail.com" className="link">
                        adsparrowllc@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:+923135991176">+92 313 599 1176</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-2">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Newsletter</h4>
                </div>
                <div className="footer-content">
                  <p>Get more update to join Us</p>
                  <div className="footer-input">
                    <input type="email" id="email" placeholder="Your Email" />
                    <button className="newsletter-btn" type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            {/* <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="/about">Company</Link>
              </li>
              <li>
                <Link href="/contact">Privacy</Link>
              </li>
            </ul> */}
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2024</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
