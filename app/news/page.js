import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Blog Standard" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-1.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Achieving Fashion Elegant Design Runway Life
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-2.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Achieving Fashion Elegant Design Runway Life
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-6.jpg")',
                      }}
                    >
                      <div className="video-play-btn">
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-button ripple video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Achieving Fashion Elegant Design Runway Life
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-3.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Achieving Fashion Elegant Design Runway Life
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post quote-post format-quote">
                    <div className="post-content text-white bg-cover">
                      <div className="quote-content">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="quote-text">
                          <h2>
                            Excepteur sint occaecat cupida tat non proident,
                            sunt in.
                          </h2>
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-comments" />
                              35 Comments
                            </span>
                            <span>
                              <i className="fal fa-calendar-alt" />
                              24th March 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div className="postbox-audio">
                      <iframe
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          How to Remedy Tailbone Back Problems
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div className="swiper blog-post-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/news/post-7.jpg")',
                            }}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/news/post-8.jpg")',
                            }}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/news/post-9.jpg")',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="array-button">
                        <button className="array-prev">
                          <i className="far fa-chevron-left" />
                        </button>
                        <button className="array-next">
                          <i className="far fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Achieving Fashion Elegant Design Runway Life
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        01
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        02
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        ..
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        10
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        11
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Feeds</h3>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/news/pp1.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                              Achieving Fashion Runway to Real Life
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            24th March 2024
                          </div>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/news/pp2.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                              {" "}
                              Achieving Fashion Runway to Real Life
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            25th March 2024
                          </div>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/news/pp3.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                              {" "}
                              Achieving Fashion Runway to Real Life
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            26th March 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link href="news">
                            Digital Marketing <span>02</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            SEO optimization <span>05</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Content Marketing <span>10</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Marketing <span>03</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Keywords Research <span>10</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Technical Adult <span>03</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link href="news-details">Marketing</Link>
                      <Link href="news-details">Product</Link>
                      <Link href="news-details">Social Media</Link>
                      <Link href="news-details">SEO Optimize</Link>
                      <Link href="news-details">Content</Link>
                      <Link href="news-details">Design</Link>
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
