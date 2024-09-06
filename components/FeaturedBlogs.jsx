import { getClient } from "@/lib/client";
import { GET_FEATURED_BLOGS } from "@/lib/queries";
import moment from "moment";
import Link from "next/link";

const FeaturedBlogs = async () => {
  const { data } = await getClient().query({
    query: GET_FEATURED_BLOGS,
  });
  const BLOGS = data?.posts?.nodes;
  console.log("BLOGS", BLOGS)
  return (
    <section className="news-section section-padding pt-50">
      <div className="container">
        <div className="section-title text-center">
          <h2
            className="aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Explore Our Latest Articles
          </h2>
        </div>
        <div className="row">
          {BLOGS?.map((blog) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6" 
            >
              <div className="news-box-items" style={{ height: 450, position: "relative" }}>
                <div className="news-content">
                  <p>{moment(blog?.date).format("Do MMM YYYY ")}</p>
                  <h4>
                    <Link href={`/blogs/${blog?.slug}`}>{blog?.title}</Link>
                  </h4>
                  <Link className="link-btn" href={`/blogs/${blog?.slug}`} style={{
                     position: "absolute",
                     top: 170,
                     zIndex: 1,
                     width: "86%",
                     margin: "auto"
                  }}>
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{
                    backgroundImage: `url(${blog?.featuredImage?.node?.sourceUrl})`,
                    position: "absolute",
                    bottom: 35,
                    zIndex: 1,
                    width: "86%",
                    margin: "auto"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
