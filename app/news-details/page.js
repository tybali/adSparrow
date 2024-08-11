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
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="mt-0">
                        Your Guide To Becoming A Preferred Shipper
                      </h2>
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user" />
                          Shikhon .Ha
                        </span>
                        <span>
                          <i className="fal fa-comments" />
                          15 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          4th February 2024
                        </span>
                      </div>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing, from how it works to how it
                        compares to digital marketing. Plus, get insight into
                        the benefits and risks of performance marketing and how
                        it can affect your company’s long-term success and
                        profitability.
                      </p>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing, from how it works to how it
                        compares to digital marketing. Plus, get insight into
                        the benefits and risks of performance marketing and how
                        it can affect your company’s long-term success and
                        profitability.
                      </p>
                      <img
                        src="assets/img/news/post-4.jpg"
                        alt="blog__img"
                        className="single-post-image"
                      />
                      <h2>Elegant Design Runway to Real Life</h2>
                      <p>
                        Performance marketing is an approach to digital
                        marketing or advertising where businesses only pay when
                        a specific result occurs. This result could be a new
                        lead, sale, or other outcome agreed upon by the
                        advertiser and business. Performance marketing involves
                        channels such as affiliate marketing, online
                        advertising.
                      </p>
                      <blockquote>
                        Diam luctus nostra dapibus varius et semper semper
                        rutrum ad risus felis eros. Cursus libero viverra tempus
                        netus diam vestibulum
                      </blockquote>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                      <ul className="checked-list mb-4">
                        <li>Cooking is love made visible</li>
                        <li>We’re an open book</li>
                        <li>100% goes to the field</li>
                        <li>Received the highest grades</li>
                      </ul>
                      <h4>Easy &amp; Most Powerful Server Platform.</h4>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing, from how it works to how it
                        compares to digital marketing. Plus, get insight into
                        the benefits and risks of performance marketing and how
                        it can affect your company’s long-term success and
                        profitability.
                      </p>
                      <img
                        className="alignleft"
                        src="assets/img/news/post-10.jpg"
                        alt="blog__img"
                      />
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                    </div>
                  </div>
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Releted Tags</h4>
                      <div className="tagcloud">
                        <Link href="news-details">Course</Link>
                        <Link href="news-details">Education</Link>
                        <Link href="news-details">Training</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Social Share</h4>
                      <div className="social-share">
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
                      </div>
                    </div>
                  </div>
                  {/* comments section wrap start */}
                  <div className="comments-section-wrap">
                    <div className="comments-heading pt-5">
                      <h3>03 Comments</h3>
                    </div>
                    <ul className="comments-item-list">
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img src="assets/img/news/author-1.jpg" alt="img" />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Rosalina Kelian</a>
                            </h5>
                            <span>19th May 2024</span>
                            <a href="#" className="theme-btn minimal-btn">
                              <i className="fal fa-reply" />
                              Reply
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna. Ut enim ad minim
                              veniam, quis nostrud laboris nisi ut aliquip ex ea
                              commodo consequat.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img src="assets/img/news/author-2.jpg" alt="img" />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Arista Williamson</a>
                            </h5>
                            <span>21th Feb 2024</span>
                            <a href="#" className="theme-btn minimal-btn">
                              <i className="fal fa-reply" />
                              Reply
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                        <ul className="replay-comment">
                          <li className="single-comment-item">
                            <div className="author-img">
                              <img
                                src="assets/img/news/author-3.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="author-info-comment">
                              <div className="info">
                                <h5>
                                  <a href="#">Salman Ahmed</a>
                                </h5>
                                <span>29th Jan 2021</span>
                                <a href="#" className="theme-btn minimal-btn">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam..
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form-wrap mt-40">
                    <h3>Post Comment</h3>
                    <form action="#" className="comment-form">
                      <div className="single-form-input">
                        <textarea
                          placeholder="Type your comments...."
                          defaultValue={""}
                        />
                      </div>
                      <div className="single-form-input">
                        <input type="text" placeholder="Type your name...." />
                      </div>
                      <div className="single-form-input">
                        <input type="email" placeholder="Type your email...." />
                      </div>
                      <div className="single-form-input">
                        <input
                          type="text"
                          placeholder="Type your website...."
                        />
                      </div>
                      <button className="theme-btn center" type="submit">
                        <span>
                          <i className="fal fa-comments" />
                          Post Comment
                        </span>
                      </button>
                    </form>
                  </div>
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
