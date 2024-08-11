import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Pricing, { Pricing2 } from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Pricing Plan" />
      <Pricing />
      <Pricing2 priceingClass="pricing-section-2" paddingTop="9" />
      <section className="testimonial-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-0">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We’ve 1250+ Global Clients Say Us
            </h2>
          </div>
          <div className="testimonial-wrapper pt-5">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta sectionPadding />
    </NextLayout>
  );
};
export default page;
