import Link from "next/link";
import Image from "next/image";
import Illustrtation from "@assets/img/illustration.webp";

const Cta = ({ offer = "", title="" }) => {
  return (
    <section className="business-boost-section section-padding pt-0">
    <div className="container">
      <div className="business-boost-wrapper">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="business-boost-content">
              {/* <Image
                src={VIdeoImage}
                alt="img"
                className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                
              /> */}
              <h2 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
              {title || "Free Audit: Our Treat!"}
              </h2>
              <p className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
               {offer}
              </p>
              <Link
                href="contact"
                className="theme-btn bg-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                style={{ textTransform: "capitalize" }}
              >
                Book Your Free Audit Now <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
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
  );
};
export default Cta;
