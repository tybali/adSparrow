import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Team Details" />
      {/* Team Details Start */}
      <section className="team-details section-padding fix">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="team-details-image-area">
              <div className="row g-4">
                <div className="col-lg-2">
                  <h2 className="text">Next</h2>
                </div>
                <div className="col-lg-4">
                  <div
                    className="details-iamge bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/team/details.jpg")',
                    }}
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-4">
                  <div className="right-content">
                    <h2>Robert Broom</h2>
                    <p>Backend Developer</p>
                    <div className="list">
                      <h5 className="mb-3">
                        Department: <span>Web Design</span>
                      </h5>
                      <h5 className="mb-3">
                        Experience: <span>15 Years</span>
                      </h5>
                      <h5 className="mb-3">
                        Email:{" "}
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h5>
                      <h5>
                        Phone:{" "}
                        <a href="tel:+19009384957435">+1-900-938-4957-43</a>
                      </h5>
                    </div>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#" className="color-1">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#" className="color-2">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="color-3">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#" className="color-4">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-details-content section-padding pb-0">
              <h2>Alen Walker’s biography</h2>
              <p className="mb-4">
                A vast majority of the app marketers mainly concentrate on the
                post-launch app marketing techniques and measures while
                completely missing on the pre-launch campaign. This prevents the
                app to create buzz and hype just around the time when the app is
                launched. As and when you launch the app, already a considerable
                number of people should expectantly look forward to your app and
                this requires long-drawn marketing
              </p>
              <p>
                To create pre-launch buzz and hype about the app a mobile app
                development company has an array of marketing options like
                social media campaign, search engine ads, video ads, email
                campaigns, etc. Apart from online options, you can also reach
                out to the wider audience with traditional marketing
              </p>
              <div className="details-information-area">
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-5">
                    <div className="progress-wrap">
                      <div className="pro-items">
                        <div className="pro-head">
                          <h6 className="title">Web Development</h6>
                          <span className="point">90%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value" />
                        </div>
                      </div>
                      <div className="pro-items">
                        <div className="pro-head">
                          <h6 className="title">Business Solution</h6>
                          <span className="point">50%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-two" />
                        </div>
                      </div>
                      <div className="pro-items">
                        <div className="pro-head">
                          <h6 className="title">Digital Marketing</h6>
                          <span className="point">80%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-three" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="information-content-items">
                      <div className="content-box-area">
                        <div className="content mb-4">
                          <h3>Next Company</h3>
                          <p>Web Designer, Figma</p>
                        </div>
                        <div className="content">
                          <h3>Moove Ux</h3>
                          <p>Web Designer, Figma</p>
                        </div>
                      </div>
                      <div className="content-box-area">
                        <div className="content mb-4">
                          <h3>Amazon Company</h3>
                          <p>Web Designer, Figma</p>
                        </div>
                        <div className="content">
                          <h3>Modinatheme Company</h3>
                          <p>Web Designer, Figma</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2>Best Skills</h2>
              <p>
                A vast majority of the app marketers mainly concentrate on the
                post-launch app marketing techniques and measures while
                completely missing on the pre-launch campaign. This prevents the
                app to create buzz and hype just around the time when the app is
                launched. As and when you launch the app, already a considerable
                number of people should expectantly look forward to your app and
                this requires long-drawn marketing
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="contact-section-2 fix section-padding pt-0">
        <div className="container">
          <div className="contact-form-items">
            <div className="title">
              <h2>Let’s Get in Touch</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <form action="contact.php" id="contact-form" method="POST">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      placeholder="Website*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write Message*"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <button type="submit" className="theme-btn">
                    Send Your Meassge
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
