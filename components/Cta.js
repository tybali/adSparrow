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
                className="wow fadeInUp"
                data-wow-delay=".1s"
              /> */}
              <h2 className="wow fadeInUp" data-wow-delay=".1s">
              {title || "Free Audit: Our Treat!"}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".1s">
               {offer}
              </p>
              <Link
                href="contact"
                className="theme-btn bg-2 wow fadeInUp"
                style={{ textTransform: "capitalize" }}
                data-wow-delay=".3x"
              >
                Book Your Free Audit Now <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 mt-4 wow fadeInUp" data-wow-delay=".1s">
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
