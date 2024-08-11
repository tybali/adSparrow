import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Website Design & Development" />
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-8">
                <div className="project-details-image">
                  <img src="assets/img/project/details-1.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-details-image">
                  <img src="assets/img/project/details-2.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>Design, Branding</h5>
                  <h2>
                    Introduction Of Projects <br /> Overview
                  </h2>
                  <p className="mt-4">
                    Designing a digital product and branding project involves
                    several key steps and <br /> considerations to create a
                    successful and cohesive user experience. Below is an <br />{" "}
                    overview of the project details and the typical steps
                    involved
                  </p>
                  <h4 className="mt-50">Project Initiation</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      Define the project scope, goals, and objectives
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Identify the target audience and market research.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Determine the budget, timeline, and available resources.
                    </li>
                  </ul>
                  <h4 className="mt-4">Project Initiation</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      Conduct user research to understand the needs and
                      preferences of the target audience
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Analyze competitors and industry trends.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Create user personas and user journeys to guide design
                      decisions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>Project Information's</h4>
                  <ul>
                    <li>
                      Clients <span>Myron S.</span>
                    </li>
                    <li>
                      Category <span>Design &amp; Dev</span>
                    </li>
                    <li>
                      Date <span> October, 2024</span>
                    </li>
                    <li>
                      Location <span> New York</span>
                    </li>
                    <li>
                      Duration <span> 1 month</span>
                    </li>
                  </ul>
                  <div className="social-icon d-flex align-items-center">
                    <h5>Project Share</h5>
                    <div className="icon">
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
            </div>
            <div className="project-details-img mt-50">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="thumb">
                    <img src="assets/img/project/details-3.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="thumb">
                    <img src="assets/img/project/details-4.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">Branding</h4>
            <ul className="p-list">
              <li>
                <i className="far fa-check" />
                Develop or refine the brand identity, including logo, colors,
                typography, and brand guidelines.
              </li>
              <li>
                <i className="far fa-check" />
                Ensure the brand reflects the values and messaging of the
                product
              </li>
            </ul>
            <h4 className="mt-50">User Experience (UX) Design:</h4>
            <p className="mt-3">
              Throughout the project, effective communication and collaboration
              among the project team members, including designers, developers,
              marketers, and stakeholders, are crucial for its success. Regular
              reviews and feedback loops should be established to ensure that
              the digital product and branding align with the project's goals
              and objectives.
            </p>
            <ul className="p-list mt-4">
              <li>
                <i className="far fa-check" />
                Create wireframes and prototypes to visualize the product's
                layout and functionality
              </li>
              <li>
                <i className="far fa-check" />
                Design the user interface (UI) based on the wireframes,
                incorporating the brand identity.
              </li>
              <li>
                <i className="far fa-check" />
                Conduct usability testing to refine the design and user flow
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Work Gallery
            </span>
            <h2>Explore Featured Projects</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
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
                <div className="col-lg-6 col-md-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
