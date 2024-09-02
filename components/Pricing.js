import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".1s">
            Popular Pricing For IT Consulting
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Regular Plan</h3>
                <p>For Small Businesses</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li className="style-2">Automation templates</li>
                <li className="style-2">Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $19 <span>/month</span>
                </h2>
                <p>For Small Businesses</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Business Plan</h3>
                <p>For Small Businesses</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li>Automation templates</li>
                <li>Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $53 <span>/month</span>
                </h2>
                <p>For Small Businesses</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Professional Plan</h3>
                <p>For Small Businesses</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li className="style-2">Automation templates</li>
                <li className="style-2">Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $99 <span>/month</span>
                </h2>
                <p>For Small Businesses</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

export const Pricing2 = ({
  priceingClass = "pricing-section-3",
  paddingTop = "0",
}) => {
  return (
    <section
      className={`fix section-padding pt-${paddingTop} ${priceingClass}`}
      id="pricing"
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".1s">
          Invest in Your Next Big Win
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3 style={{ fontWeight: "400"}}>Starter</h3>
                <h2>
                 $400 
                </h2>
                <span>per month</span>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
               
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  SEO: Keyword research, on-page optimization, local SEO basics
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media: Management of 2-3 major platforms
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Marketing: Blog post creation
                </li>
                <li>
                  <i className="far fa-check" />
                  Analytics: Google Analytics tracking, monthly performance reports
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
           <div className="pricing-card-items-2 active">
            <div className="popular"> Most Popular</div>
              <div className="pricing-header">
                <h3 style={{ fontWeight: "400"}}>Growth</h3>
                <h2>
                 $800
                </h2>
                <span>per month</span>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
               
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  SEO: Comprehensive keyword research, on-page optimization, backlink building, technical SEO audit
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media: Management of 3-5 platforms, paid advertising, influencer partnerships
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Marketing: Monthly blog posts, video ads creation
                </li>
                <li>
                  <i className="far fa-check" />
                  E-commerce: Product listing optimization, online store management (if applicable)
                </li>
                <li>
                  <i className="far fa-check" />
                  Lead Generation: Landing page creation, lead nurturing campaigns
                </li>
                <li>
                  <i className="far fa-check" />
                  Analytics: In-depth performance analysis, A/B testing
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3 style={{ fontWeight: "400"}}>Enterprice</h3>
                <h2>
                 $1600 
                </h2>
                <span>per month</span>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
               
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  SEO: International &amp; local SEO, technical SEO audits, competitor analysis
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media: Management of multiple platforms, paid advertising, influencer marketing campaigns
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Marketing: Content strategy development, video marketing
                </li>
                <li>
                  <i className="far fa-check" />
                  E-commerce: Advanced e-commerce optimization, product advertisement
                </li>
                <li>
                  <i className="far fa-check" />
                  Lead Generation: Lead scoring, CRM integration, sales enablement
                </li>
                <li>
                  <i className="far fa-check" />
                  Analytics: Advanced analytics tools, custom reporting, data-driven decision making
                </li>
                <li>
                  <i className="far fa-check" />
                  Analytics: Advanced analytics tools, custom reporting, data-driven decision making
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
