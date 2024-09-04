import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/img/logo/adsparrow-logo.png";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    case 2:
      return <Footer2 />;

    case 3:
      return <Footer3 />;

    case 4:
      return <Footer4 />;

    case 6:
      return <Footer6 />;

    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="discussed-items">
          <div className="footer-logo aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
            <Link href="/">
              <Image src={Logo} alt="Digital marketing agency" />
            </Link>
          </div>
          <div className="discussed-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
            <h2>
              Let’s Discussed About <span>Your Projects</span>
            </h2>
            <Link href="contact" className="theme-btn hover-white">
              Get Started <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About Us</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
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
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Recent News</h4>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/pp1.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 25, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          How achieve more <br /> your nine to five
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/pp2.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 29, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Discover a better way of company.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                <li>
                  <Link href="faq">FAQs</Link>
                </li>
                <li>
                  <Link href="about">Company</Link>
                </li>
                <li>
                  <Link href="contact">Privacy</Link>
                </li>
              </ul>
              <a
                href="#"
                id="scrollUp"
                className="scroll-icon aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                
              >
                <i className="far fa-angle-double-up" />
              </a>
              <p className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                © <Link href="/">2024</Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 ps-xxl-5 ml-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
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
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 ml-minus-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Support</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Product</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Web Template Design</Link>
                  </li>
                  <li>
                    <Link href="service-details">Mobile Application</Link>
                  </li>
                  <li>
                    <Link href="service-details">3D Illustration</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
            </ul>
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

const Footer3 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
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
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
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
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
            </ul>
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

const Footer4 = () => {
  return (
    <footer className="footer-section footer-bg fix">
      <div className="color-shape">
        <img src="assets/img/footer-color-shape.png" alt="shape-img" />
      </div>
      <div className="color-shape-2">
        <img src="assets/img/footer-color-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                  <Image src={Logo} alt="Digital marketing agency" height= {60} width={184} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                  We’re here to turn your ideas into something epic—let’s make it happen!

                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/adsparrowllc/" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/adsparrowllc/" target="_blank">
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5"
              
            >
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
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              
            >
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
                        info@adsparrow.net
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2"
              
            >
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
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
            </ul>
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

const Footer6 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="robot-shape float-bob-y">
        <img src="assets/img/home-6/robot-3.png" alt="shape-img" />
      </div>
      <div className="robot-shape-2 float-bob-y">
        <img src="assets/img/home-6/robot-4.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="discussed-items  aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
          <div className="footer-logo" >
            <Link href="/">
              <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
            </Link>
          </div>
          <div className="discussed-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
            <h2>
              Let’s Discussed About <span>Your Projects</span>
            </h2>
            <Link href="contact" className="theme-btn hover-white">
              Get Started <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About Us</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
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
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
              
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Recent News</h4>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/pp1.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 25, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          How achieve more <br /> your nine to five
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/pp2.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 29, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Discover a better way of company.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                <li>
                  <Link href="faq">FAQs</Link>
                </li>
                <li>
                  <Link href="about">Company</Link>
                </li>
                <li>
                  <Link href="contact">Privacy</Link>
                </li>
              </ul>
              <a
                href="#"
                id="scrollUp"
                className="scroll-icon aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                
              >
                <i className="far fa-angle-double-up" />
              </a>
              <p className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                © <Link href="/">2024</Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
