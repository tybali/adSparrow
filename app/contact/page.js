import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
const page = () => {
  return (
    <NextLayout header={1} footer={4}>
      <Breadcrumb pageName="Contact Us" />
      {/* Contact Section Section Start */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                      <img src="assets/img/bale.png" alt="img" />
                      Contact Us
                    </span>
                    <h2 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    Let’s Chat &amp; Make It Happen!
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                  Got a big idea or just want to say hi? We're all ears! Whether you're ready to kick off a project or need a creative nudge, drop us a line. <br />We’re here to turn your ideas into something epic—let’s make it happen!
                  </p>
                  <ul
                    className="contact-listaos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                  >
                    <li>
                      <a href="mailto:adsparrowllc@gmail.com">info@adsparrow.net</a>
                    </li>
                    {/* <li>55 Main Street, 2nd block, Malborne, Australia</li> */}
                    <li>
                      <a href="tel:+00012345688">+92 313 599 1176</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contact-right aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                  
                >
                  <h3>Send Us Message</h3>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
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
      {/* Map Section Start */}
      {/* <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div> */}
    </NextLayout>
  );
};
export default page;
