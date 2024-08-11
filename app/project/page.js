import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Popular Projects" pageTitle="Popular Projects" />
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Work Gallery
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Featured Projects
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/05.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Business Task Management <br />
                          Dashboard Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/06.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Website Design</p>
                      <h3>
                        <Link href="project-details">
                          Business Consulting Web <br />
                          Explorations Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/07.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Mobile Applications Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/08.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Website Design</p>
                      <h3>
                        <Link href="project-details">
                          Furniture Website Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/09.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Business Card Design and <br /> Branding Identity
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/10.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Website Design</p>
                      <h3>
                        <Link href="project-details">
                          Modern T-Shirt Design and <br /> Branding Identity
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/11.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Mobile Applications Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/project/12.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Product Design</p>
                      <h3>
                        <Link href="project-details">
                          Furniture Website Design
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
