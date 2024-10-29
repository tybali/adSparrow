import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import slugify from "slugify";
import Services from "@/components/Services";

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;
  // optionally access and extend (rather than replace) parent metadata
  switch (slug) {
    case "website-design-and-development":
      return {
        title: "Custom Website Design & Development Services - AdSparrow",
        desscription:
          "Elevate your online presence with AdSparrow's expert website design and development. From WordPress to security, we craft stunning, secure, and high-performing sites.",
      };
    case "search-engine-optimization":
      return {
        title: "Turbocharge Your Rankings with SEO Services - AdSparrow",
        desscription:
          "Boost your visibility and conversions with AdSparrow’s tailored SEO strategies. From audits to content and link building, we drive results that matter.",
      };

    case "video-editing-and-animation":
      return {
        title: "Professional Video Editing & Animation Services - AdSparrow",
        desscription:
          "Transform raw footage into captivating stories with AdSparrow's expert video editing & animation. Engage your audience with high-quality, impactful visual content.",
      };

    case "social-media-marketing":
      return {
        title: "Boost Your ROI with Expert Social Media Marketing - AdSparrow",
        desscription:
          "Unlock social media success with AdSparrow's ROI-focused strategies. Captivating content, expert algorithms, and optimized campaigns drive real results.",
      };

    case "pay-per-click":
      return {
        title:
          "Boost Revenue with PPC Services - AdSparrow",
        desscription:
          "Drive conversions with AdSparrow's budget-smart PPC campaigns. Target the right audience, maximize ROI, and watch your business soar. Contact us today!",
      };

    case "ecommerce-store":
      return {
        title: "Build a Captivating Ecommerce Store - AdSparrow",
        desscription:
          "Create an engaging eCommerce store that attracts and converts. From seamless checkout to mobile-friendly design, AdSparrow builds digital marketplaces that thrive.",
      };

    default:
      return {
        title: "",
        desscription: "",
      };
  }
}

const page = ({ params }) => {
  const servicesSlugs = [
    {
      slug: slugify("website design & development"),
      title: "Website Design & Development",
    },
    {
      slug: slugify("search engine optimization"),
      title: "Search Engine Optimization (SEO)",
    },
    {
      slug: slugify("video editing & animation"),
      title: "Video Editing & Animation",
    },
    {
      slug: slugify("social media marketing"),
      title: "Social Media Marketing",
    },
    { slug: slugify("pay per click"), title: "Pay Per Click (PPC)" },
    { slug: slugify("ecommerce store"), title: "Ecommerce Store" },
  ];
  const service = servicesSlugs.find((elem) => elem.slug === params.slug);

  return (
    <NextLayout header={1} footer={4}>
      <Breadcrumb pageName={service?.title} />
      {/* About Section Start */}

      <Services slug={params.slug} />

      {/* Service Video Section Start 
       <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                <div className="service-video-image">
                  <img src="assets/img/service/service-video.jpg" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-buttton ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <ul
                    className="experience-textaos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                    style={{ visibility: "visible", animationDelay: "0.6s" }}
                  >
                    <li>25+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Awards Winning Company</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                      Better Solutions Create your life more easier
                    </h2>
                  </div>
                  <p className="mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    Sed perspiciatis unde omnis natus voluptatem accusantium
                    doloremque laudantium, totam rem aperiam eaque
                  </p>
                  <div className="icon-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    <h5>
                      <i className="fas fa-check-circle" />
                      Easy write and test more copy varistions
                    </h5>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                  <div className="icon-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                    <h5>
                      <i className="fas fa-check-circle" />
                      One Click Management &amp; Custom Greeting
                    </h5>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Working Process Section Start 
      <WorkingProcess />
      {/* Grow Business Section Start
      <GrowBusiness2 bg={"footer-bg"} /> 
      {/* Pricing Section Start 
      <Pricing />
      <Cta sectionPadding={true} /> */}
    </NextLayout>
  );
};
export default page;
