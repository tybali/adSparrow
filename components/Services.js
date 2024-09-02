import Link from "next/link";
import WDD01 from "@assets/img/service/wdd-01.jpg";
import SEO01 from "@assets/img/service/seo-01.jpg";
import VDA01 from "@assets/img/service/vda-01.jpg";
import VDA02 from "@assets/img/service/vda-02.webp";
import SMM02 from "@assets/img/service/smm-02.webp";
import SMM01 from "@assets/img/service/smm-01.webp";
import PPC01 from "@assets/img/service/ppc-01.webp";
import ECOM01 from "@assets/img/service/ecom-01.webp";

import Image from "next/image";
import Cta from "./Cta";
import { WorkingProcess2 } from "./WorkingProcess";

const Services = ({ slug }) => {
  switch (slug) {
    case "website-design-and-development":
      return <WebsiteDesignAndDevelopment />;

    case "search-engine-optimization":
      return <SEO />;

    case "video-editing-and-animation":
      return <VideoEditing />;

    case "social-media-marketing":
      return <SMM />;

    case "pay-per-click":
      return <PPC />;

    case "ecommerce-store":
      return <EcommerceStore />;

    default:
      return <WebsiteDesignAndDevelopment />;
  }
};
export default Services;

const WebsiteDesignAndDevelopment = () => {
  return (
    <>
      <section
        className="about-section fix section-padding pt-0"
        style={{ color: "#101828" }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Where Creativity Meets Code
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Welcome to AdSparrow, where websites aren’t just
                    made—they’re brewed to perfection. Our team of digital
                    artisans blends creativity, tech know-how, and a dash of
                    marketing expertise to craft websites that not only look
                    amazing but also work like a charm. Whether you’re starting
                    from a blank canvas, dealing with a glitchy gremlin, or
                    dreaming of a site that does it all, we’ve got the tricks up
                    our sleeves to make it happen.
                  </p>
                  <h4
                    className="wow fadeInUp"
                    style={{ marginTop: 30 }}
                    data-wow-delay=".1s"
                  >
                    Numbers That’ll Make You Smile
                  </h4>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".1s">
                    <li>
                      <i className="fas fa-check" />
                      <span style={{ fontWeight: 600 }}>
                        10,000+ Forms Tracked:
                      </span>{" "}
                      Because every click counts, and we count them all.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <span style={{ fontWeight: 600 }}>
                        In-House Gurus:
                      </span>{" "}
                      We don’t outsource genius—we grow it right here.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    GA4 Implementation: Get Your Data Groove On
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Don't let your data gather dust in the corner. Our GA4
                    experts will help you turn raw numbers into actionable
                    insights with tailored reports, precise event tracking, and
                    conversions that actually add up. Say goodbye to data chaos
                    and hello to clarity that drives results.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-12">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="service-thumbs">
                    <Image src={WDD01} alt="img" height={400} />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    WordPress Development: Because Your Website Deserves It
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    If your website feels like it’s stuck in the 90s, it’s time
                    for a makeover. Our [insert paltform: Wordpress/shoppfy et.]
                    whisperers will transform your tired old site into a sleek,
                    modern masterpiece. Whether you need a quick touch-up or a
                    complete overhaul, we’ve got the skills to make your site
                    not just pretty, but powerful.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Security & Monitoring: Sleep Tight, We’ve Got This
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    In a world where hackers lurk in every shadow, your website
                    needs a bodyguard. We’ll lock down your site with the latest
                    security protocols and keep an eye on it 24/7. So go ahead,
                    get some rest—we’ve got your back.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Systems Integration: Making Your Tech Talk
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Got a CRM that won’t play nice with your website? Or maybe a
                    marketing tool that’s giving you attitude? No worries—we’re
                    experts in making your tech stack sing in harmony. If it can
                    be connected, we’ll connect it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        offer={
          "The kicker—we offer free audits. That’s right! Let’s sit down for 30 minutes, discuss your website’s design and development needs, and we’ll guide you towards a site that’s both stunning and functional. Plus, for a limited time, we'll assess your current website and reveal how to enhance its performance and user experience."
        }
      />
    </>
  );
};

const SEO = () => {
  return (
    <>
      <section
        className="about-section fix section-padding pt-0"
        style={{ color: "#101828" }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Get 5X More Clicks with AdSparrow’s SEO Turbo Boost!
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Tired of being invisible on search engines? Ranking on
                    Google is no easy feat these days. That’s why at{" "}
                    <span style={{ fontWeight: 600 }}>AdSparrow</span>, we don’t
                    just sprinkle a few keywords and hope for the best. We craft
                    tailored SEO strategies that snowball into real
                    results—boosting your visibility, driving traffic, and most
                    importantly, turning clicks into customers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-12">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="service-thumbs">
                    <Image src={SEO01} alt="img" height={400} />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    AdSparrow is a Little Bit Wild (in a Good Way)
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    We’re not your run-of-the-mill SEO agency. Here’s why we’re
                    the partner you need to skyrocket your rankings:
                  </p>
                  <h3
                    className="wow fadeInUp"
                    style={{ marginTop: 30, marginBottom: 30 }}
                    data-wow-delay=".1s"
                  >
                    Holistic SEO Services
                  </h3>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    SEO isn’t just a game of keywords. It’s a complex mix of
                    technical know-how, creative content, and strategic
                    promotion. Our team of SEO wizards dives deep into every
                    aspect, ensuring nothing stands between your website and top
                    search rankings.
                  </p>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: 50 }}>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div
                  className="popular-service-box-items"
                  style={{ minHeight: "280px" }}
                >
                  <div className="content">
                    <h3>SEO Audits &amp; Strategy</h3>

                    <p className="service-detail-card-description">
                      Our comprehensive audits pinpoint exactly what’s holding
                      you back.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div
                  className="popular-service-box-items"
                  style={{ minHeight: "280px" }}
                >
                  <div className="content">
                    <h3>Keyword & Competitor Research</h3>
                    <p className="service-detail-card-description">
                      Discover the golden keywords your competitors are
                      overlooking.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div
                  className="popular-service-box-items"
                  style={{ minHeight: "280px" }}
                >
                  <div className="content">
                    <h3>Content Creation & Optimization</h3>
                    <p className="service-detail-card-description">
                      Fresh content that resonates and old content that
                      converts.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div
                  className="popular-service-box-items"
                  style={{ minHeight: "280px" }}
                >
                  <div className="content">
                    <h3>Technical SEO</h3>
                    <p className="service-detail-card-description">
                      We fix the unseen technical issues dragging your site
                      down.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div
                  className="popular-service-box-items"
                  style={{ minHeight: "280px" }}
                >
                  <div className="content">
                    <h3>Link Building</h3>
                    <p className="service-detail-card-description">
                      Quality backlinks that build authority and drive traffic.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div
                  className="popular-service-box-items"
                  style={{ minHeight: "280px" }}
                >
                  <div className="content">
                    <h3>International SEO</h3>
                    <p className="service-detail-card-description">
                      Expand your reach beyond borders with global SEO
                      strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".1s">
                      Results that Matter
                    </h3>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Traffic is nice, but revenue is better. We focus on the
                    keywords and strategies that generate business, not just
                    clicks. With detailed reporting and analytics, you’ll see
                    exactly how our efforts are moving the needle for your
                    bottom line.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".1s">
                      We’re In It for the Long Haul
                    </h3>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    SEO isn’t a sprint; it’s a marathon. Our approach ensures
                    your gains aren’t just a flash in the pan—they grow stronger
                    over time. At{" "}
                    <span style={{ fontWeight: 600 }}>AdSparrow</span>, we
                    believe in forging strong, lasting partnerships with our
                    clients. When you work with us, you’re not just getting an
                    agency—you’re gaining a dedicated extension of your team
                    that’s as invested in your success as you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        offer={
          "The kicker—we offer free audits. That’s right! Let’s sit down for 30 minutes, dive into your SEO strategy, and we’ll show you how to boost your search engine rankings. Plus, for a limited time, we'll review your current SEO efforts and highlight the key areas to improve your online visibility."
        }
      />
    </>
  );
};

const VideoEditing = () => {
  return (
    <>
      <section
        className="about-section fix section-padding pt-0"
        style={{ color: "#101828" }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Bring Your Vision to Life
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    At <span style={{ fontWeight: 600 }}>AdSparrow</span>, we
                    don’t just edit videos—we transform them into captivating
                    stories that stick. Our mission? To turn your raw footage
                    into engaging visual content that speaks directly to your
                    audience and leaves a memorable impact.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Tell Your Story, Not Just Show It
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Why settle for ordinary when you can tell a story that
                    resonates? We believe every video should have a purpose.
                    Whether it’s a powerful narrative or a light-hearted
                    message, our team ensures your content is not only seen but
                    felt. We craft each frame to align with your brand’s essence
                    and connect meaningfully with your audience.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-12">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="service-thumbs">
                    <Image src={VDA01} alt="img" height={400} />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-wow-delay=".1s">
                      Hook, Engage, and Convert
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Our secret sauce? The{" "}
                    <span style={{ color: "#f06057" }}>Hook + Pitch + CTA</span>{" "}
                    formula. It’s designed to grab attention, communicate your
                    key messages, and drive action. From clever scripts to
                    engaging visuals, we create content that holds your
                    audience’s attention and encourages them to take the next
                    step.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Simplify Complex Ideas with Style
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Got a complex concept? No problem! Our explainer videos
                    break down intricate ideas into clear, visually appealing
                    content. Whether through sleek motion graphics or dynamic
                    animations, we make sure your message is delivered in an
                    easy-to-understand and engaging way.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Capture Attention, Spark Action
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    With <span style={{ fontWeight: 600 }}>AdSparrow</span>,
                    video isn’t just about making noise—it’s about making an
                    impact. We leverage diverse video techniques, from
                    user-generated content to animated ads, to ensure your
                    content doesn’t just grab attention but also motivates your
                    audience to act.
                  </p>
                </div>
              </div>
            </div>

            <WorkingProcess2
              title="The Blueprint Behind Our Success"
              firstStepTitle="Concept + Storyboarding"
              firstStepDesc=" It all starts with a plan. We sketch your vision, from UGC scripts to animation storyboards, to make sure we're aligned before rolling the cameras."
              secondStepTitle="Talent & Production"
              secondStepDesc="We bring in top talent and cutting-edge production to make your video shine. Our global creators make it happen."
              thirdStepTitle="Motion Design + Final Touches"
              thirdStepDescr="High-quality motion design and sharp editing bring it all together for a video that grabs attention."
              imgSrc={VDA02}
            />
          </div>
        </div>
      </section>

      <Cta
        title="The kicker—we offer free audits"
        offer={
          "That’s right! Let’s sit down for 30 minutes, explore your video editing and animation needs, and we’ll help you create compelling content. Plus, for a limited time, we'll review your existing videos and animations and suggest ways to enhance their impact."
        }
      />
    </>
  );
};

const SMM = () => {
  return (
    <>
      <section
        className="about-section fix section-padding pt-0"
        style={{ color: "#101828" }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Unleash Social Media Stardom with Adsparrow!
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Social media advertising can be a goldmine... but only if
                    you know how to charm the algorithms! At{" "}
                    <span style={{ fontWeight: 600 }}>AdSparrow</span>, we’ve
                    cracked the code with our ROI-first approach, making it
                    possible for our clients to turn social media budgets into a
                    multi-million-dollar success story. Ready to see your ad
                    spend become a treasure trove? Let’s get to work!
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="service-thumbs">
                    <Image src={SMM01} alt="img" height={400} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Your Social Media Sidekick
                  </h2>
                </div>
                <div className="section-title">
                  <h3
                    className="wow fadeInUp"
                    style={{ marginBottom: 30 }}
                    data-wow-delay=".1s"
                  >
                    Results that Rock
                  </h3>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    We don’t settle for “just okay.” Our campaigns are designed
                    to dazzle and deliver. Whether your budget is a humble $10K
                    or a whopping $1M, we’ll make sure every penny sings. Watch
                    your investment scale new heights as we fine-tune and
                    optimize for maximum impact.
                  </p>
                </div>

                <div className="about-content ms-0">
                  <h3
                    className="wow fadeInUp"
                    style={{ marginTop: 30, marginBottom: 30 }}
                    data-wow-delay=".1s"
                  >
                    Creative That Captivates
                  </h3>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Ever feel like your ads are just blending in? Not on our
                    watch. We craft eye-catching, thumb-stopping content that
                    demands attention. From compelling visuals to irresistible
                    calls-to-action, we turn casual browsers into loyal fans,
                    whether you’re targeting businesses or consumers.
                  </p>
                </div>

                <div className="about-content ms-0">
                  <h3
                    className="wow fadeInUp"
                    style={{ marginTop: 30, marginBottom: 30 }}
                    data-wow-delay=".1s"
                  >
                    Algorithm Alchemy
                  </h3>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    Meta, TikTok, LinkedIn, Youtube—think of them as our
                    playgrounds. We don’t just use these platforms; we master
                    them. Our expertise in algorithmic ensures your campaigns
                    reach the right people and drive real results, beyond just
                    clicks and likes.
                  </p>
                </div>
              </div>
            </div>

            <WorkingProcess2
              title="How We Do It"
              firstStepTitle="Find & Fix the Leaks"
              firstStepDesc="We dive deep into every campaign to identify what’s working and what’s not. If something’s underperforming, we cut it loose and focus on what drives results."
              secondStepTitle="Strategize Like a Pro"
              secondStepDesc="Our game plan is all about precision and performance. We tailor a strategy that aligns with your brand’s goals and ensures every campaign is a step towards success."
              thirdStepTitle="Launch & Optimize"
              thirdStepDescr="We don’t just hit “go” and forget about it. Our team continuously monitors and tweaks your campaigns, ensuring they evolve and improve to keep up with the ever-changing social media landscape."
              imgSrc={SMM02}
            />
          </div>
        </div>
      </section>

      <Cta
        title="The kicker—we offer free audits."
        offer={
          " That’s right! Let’s sit down for 30 minutes, discuss your social media strategy, and we’ll guide you on how to engage and grow your audience. Plus, for a limited time, we'll analyze your social media presence and highlight opportunities to elevate your brand."
        }
      />
    </>
  );
};

const PPC = () => {
  return (
    <>
      <section
        className="about-section fix section-padding "
        style={{ color: "#101828", paddingBottom: 50 }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div className="row gx-5 align-items-start justify-content-between">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Revamp Your Click Game with Adsparrow’s PPC Service
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: "2rem",
                      marginBottom: 30,
                    }}
                    data-wow-delay=".1s"
                  >
                    Stuck in the lead-chasing loop? That’s so last season. Your
                    competitors might be fishing for leads, but at{" "}
                    <span style={{ fontWeight: 600 }}>AdSparrow</span>, we’re
                    all about reeling in the big fish—revenue, not just clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5 align-items-start justify-content-between">
              <div className="col-lg-6">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="service-thumbs">
                    <Image src={PPC01} alt="img" height={400} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Pixel-Perfect Targeting:
                      </span>{" "}
                      We don’t just throw darts at a board; we use laser
                      precision to hit your ideal audience right where they hang
                      out online.
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Budget-Smart Strategies:
                      </span>{" "}
                      You don’t need a treasure chest to see results. Our
                      budget-friendly strategies make sure you get the best bang
                      for your buck.{" "}
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Click-Tastic Results:
                      </span>{" "}
                      From sky-high click-through rates to conversions that make
                      you do a happy dance, our PPC campaigns are designed to
                      get you noticed and drive those sales.{" "}
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Analytics Addicts:
                      </span>{" "}
                      Numbers aren’t just digits to us—they’re the key to
                      unlocking your campaign’s full potential. We live and
                      breathe data to fine-tune your strategy and deliver
                      outstanding results.{" "}
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Campaigns That Never Sleep:
                      </span>{" "}
                      While you dream, we’re busy optimizing, tweaking, and
                      turning those clicks into customers. 24/7 hustle means
                      your ads are always performing at their peak.
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Your Goals, Our Mission:
                      </span>{" "}
                      We’re not just a service; we’re your partner in crime.
                      Your success is our win.
                    </div>
                  </li>

                  {/* <li className="why-choose-us-text">
                <i className="far fa-check" />
                <div>
                Winning is Our Game: We’re all about results. Check our case studies; we let our work do the talking. 
                </div>
              </li> */}
                </ul>
                <div className="about-content ms-0" style={{ marginTop: 30 }}>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: "2rem",
                      marginBottom: 30,
                    }}
                    data-wow-delay=".1s"
                  >
                    So, ready to let your business soar with Adsparrow’s PPC
                    services? Let’s turn your ad budget into a revenue rocket
                    ship. Contact us today and let’s make your clicks count!
                  </p>
                  <div className="section-title">
                    <h3
                      className="wow fadeInUp"
                      data-wow-delay=".1s"
                      style={{ fontWeight: 700, fontSize: 28 }}
                    >
                      Get in touch and watch your ROI take flight!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="The kicker—we offer free audits."
        offer={
          "That’s right! Let’s sit down for 30 minutes, review your PPC campaigns, and we’ll point you towards strategies that maximize your ROI. Plus, for a limited time, we'll evaluate your current PPC performance and show you how to improve your ad spend effectiveness."
        }
      />
    </>
  );
};

const EcommerceStore = () => {
  return (
    <>
      <section
        className="about-section fix section-padding pt-0"
        style={{ color: "#101828" }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Dreaming of an online store that’s as irresistible as your
                    favorite new gadget?
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    style={{ fontSize: "1.4rem", lineHeight: "2rem" }}
                    data-wow-delay=".1s"
                  >
                    At <span style={{ fontWeight: 600 }}>AdSparrow</span>, we
                    don’t just build eCommerce stores; we create vibrant digital
                    marketplaces that captivate and convert. Whether you’re
                    selling stylish sneakers or gourmet snacks, our eCommerce
                    expertise ensures your store isn’t just another website—it’s
                    a destination!
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div
                  className="about-image-items-4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="service-thumbs">
                    <Image src={ECOM01} alt="img" height={400} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".1s">
                    Your Ecommerce Store Deserves a Standing Ovation!
                  </h2>
                </div>
                <ul>
                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Effortless Shopping:
                      </span>{" "}
                      We fine-tune every detail to ensure a smooth, enjoyable
                      shopping experience. From product discovery to checkout,
                      we eliminate the bumps and make every step feel intuitive.
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Seamless Checkout:
                      </span>{" "}
                      Our checkout process is streamlined to make purchasing as
                      quick and painless as possible. No more abandoned
                      carts—just happy customers who can’t wait to receive their
                      new goodies.
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Mobile-Friendly Excellence:
                      </span>{" "}
                      Whether on a smartphone, tablet, or any other device, your
                      store will look great and function flawlessly. We ensure
                      that your shopping experience is top-notch, wherever your
                      customers are.
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>
                        Smart SEO Strategies:
                      </span>{" "}
                      Our SEO techniques help your store stand out in the
                      crowded online marketplace. Watch as your site climbs the
                      ranks and attracts more traffic, turning browsers into
                      buyers.
                    </div>
                  </li>

                  <li className="why-choose-us-text wow fadeInUp">
                    <i className="far fa-check" />
                    <div>
                      <span style={{ fontWeight: 600 }}>Custom Features:</span>{" "}
                      Need something special? We’ll integrate the unique
                      features you need, from advanced payment options to
                      inventory management tools, to make your store stand out.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="row gx-5 align-items-start justify-content-between"
              style={{ marginTop: 60 }}
            >
              <div className="col-lg-6">
                <div className="section-title">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    Let’s Create eCommerce Success Together!
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <p
                  className="mt-3 mt-md-0 wow fadeInUp"
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "2rem",
                    marginBottom: 30,
                  }}
                  data-wow-delay=".1s"
                >
                  Why just dream about a standout online store when you can
                  build it with Adsparrow? We’re ready to bring your vision to
                  life and help you make a mark in the digital shopping world.
                </p>
                <p
                  className="mt-3 mt-md-0 wow fadeInUp"
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "2rem",
                    marginBottom: 30,
                  }}
                  data-wow-delay=".1s"
                >
                  Ready to take the leap? Reach out to us, and let’s make your
                  eCommerce store the place everyone wants to shop!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="The kicker—we offer free audits."
        offer={
          " That’s right! Let’s sit down for 30 minutes, discuss your social media strategy, and we’ll guide you on how to engage and grow your audience. Plus, for a limited time, we'll analyze your social media presence and highlight opportunities to elevate your brand."
        }
      />
    </>
  );
};
