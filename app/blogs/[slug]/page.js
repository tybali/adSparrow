import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import { getClient } from "@/lib/client";
import { GET_POST_BY_SLUG } from "@/lib/queries";
import moment from "moment";
import Link from "next/link";

const page = async ({ params }) => {
  const { data } = await getClient().query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  });

  return (
    <NextLayout header={1} footer={4}>
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content">
                      <h1 className="mt-0" style={{ marginBottom: 20 }}>
                        {data?.postBy?.title}
                      </h1>
                      <div
                        className="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: `url(${data?.postBy?.featuredImage?.node?.sourceUrl})`,
                        }}
                      ></div>

                      <div
                        className="post-meta mt-3 "
                        style={{ marginBottom: 30 }}
                      >
                        <span>
                          <i className="fal fa-user" />
                          Iqra Khalid
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          {moment(data?.postBy?.date).format("Do MMM YYYY ")}
                        </span>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.postBy?.content,
                        }}
                      />
                    </div>
                  </div>

                  {/* comments section wrap start */}
                  {/* <div className="comments-section-wrap">
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
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div className="comment-form-wrap mt-40">
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
