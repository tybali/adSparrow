import Link from "next/link";

const Cta = ({ sectionPadding = false }) => {
  return (
    <section
      className={`cta-marketing-section fix ${
        sectionPadding ? "section-padding" : ""
      }`}
    >
      <div className="container">
        <div className="cta-marketing-wrapper">
          <div className="content">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Ready to Boost your Digital <br />
              product marketing ?
            </h2>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
              <br /> accusantium doloremque laudantium, totam rem
            </p>
          </div>
          <div className="thumb wow fadeInUp" data-wow-delay=".6s">
            <img src="assets/img/cta/cta-marketing.png" alt="img" />
            <div className="circle-shape">
              <img src="assets/img/cta/circle-shape.png" alt="shape-img" />
            </div>
          </div>
          <Link
            href="about"
            className="theme-btn bg-2 wow fadeInUp"
            data-wow-delay=".7s"
          >
            Discover More <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
