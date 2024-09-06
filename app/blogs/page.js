import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import moment from "moment";
import readingTime from "reading-time";
import { getClient } from "@/lib/client";
import { GET_ALL_POSTS } from "@/lib/queries";

const page = async () => {
  const { data } = await getClient().query({ query: GET_ALL_POSTS });

  const BLOGS = data?.posts?.nodes;

  return (
    <NextLayout header={1} footer={4}>
      <Breadcrumb pageName="Articles" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  {BLOGS?.map((blog) => (
                    <div className="single-blog-post">
                      <div
                        className="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: `url(${blog?.featuredImage?.node?.sourceUrl})`,
                        }}
                      ></div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span>
                            <i className="fal fa-clock" />
                            {readingTime(blog?.content)?.text}
                          </span>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            {moment(blog?.date).format("Do MMM YYYY ")}
                          </span>
                        </div>
                        <h2>
                          <Link href={`/blogs/${blog?.slug}`}>
                            {blog?.title}
                          </Link>
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{ __html: blog?.excerpt }}
                        />

                        <Link
                          href={`/blogs/${blog?.slug}`}
                          className="theme-btn mt-4 line-height"
                        >
                          <span>
                            READ MORE <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
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
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  {/* <div className="single-sidebar-widget">
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
                  </div> */}
                  {/* <div className="single-sidebar-widget">
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
                  </div> */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link href="">
                            Digital Marketing <span>01</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            Social Media Marketing <span>01</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            AI <span>01</span>
                          </Link>
                        </li>
                        {/* <li>
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
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                      <a href="https://www.facebook.com/people/AdSparrow/61564962947506/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="https://www.instagram.com/adsparrowllc/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/adsparrowllc/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  {/* <div className="single-sidebar-widget">
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
                  </div> */}
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
